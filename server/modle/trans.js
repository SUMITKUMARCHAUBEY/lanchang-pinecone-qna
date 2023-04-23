const mongoose=require('mongoose')
const note=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    trans:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model('Note',note);
