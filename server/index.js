const express=require('express');
const ytdl = require('ytdl-core');
const {exec}=require('child_process')
const fs=require('fs')
const app= express();
var cors=require('cors')
const mongoose=require('mongoose');
const {wisper, pineconeSetup,qna}=require("./middleweres/TransAndStore")
const Note=require('./modle/trans')
const connectTodb=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}





connectTodb();
app.use(cors())
app.use(express.json())
app.post('/',(req,res)=>{
    const url= req.body.link;
    console.log(url);
    const note=Note.findOne({id:url})
    .then((note)=>{
        if(note){
        console.log('transcript exists- exicuting pinecone');
        pineconeSetup(url,res)
        }
        else{
        console.log('transcript not exists- downloading...');
        // wisper(url,"one",res);
            const video = ytdl(`${url}`,{filter:'audioonly',quality: 'lowestaudio'});
            const stream = fs.createWriteStream(`one.mp3`);
              video.pipe(stream);
              stream.on('finish',()=>{
                console.log('downloaded');
                setTimeout(()=>{
                    wisper(url,"one",res);
                },10000)
               
                exec(`ffmpeg -i one.mp3 -map 0:a:0 -b:a 32k outputone.mp3`,(err)=>{
                    if(err){
                      console.log(err);
                    }
                    else{
                      console.log('compressed successfully');
                    }
                  })
                  
                // console.log('downloaded');
                // wisper(url,"one",res);
               
              })    
        }
        })
    .catch((err)=>{
        console.log(err);
    })
     
})

app.post('/qna',(req,res)=>{
    console.log(req.body.question)
    qna(req.body.question,res)
})

app.listen(5000,()=>{
    console.log("listening to prot no 5000");
})