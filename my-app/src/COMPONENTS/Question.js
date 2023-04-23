import React, { useState,useEffect } from 'react'
import Spinner from './Spinner';

export default function Question() {
    const [ans,setans]=useState("");
    const [body,setbody]=useState({question:""})
    const [loading,setloading]=useState(false);
    const onchange=(e)=>{
        setbody({...body,[e.target.name]:e.target.value});   
    }
    const handleSub=async(e)=>{
        setloading(true);
        e.preventDefault();
      console.log(body.question);
        await fetch("http://localhost:5000/qna",{
            method:"POST",
            headers:{
              "content-Type":"application/json",
            },
              
              body:JSON.stringify({
                
                "question":body.question,
                
              })
        
          })
          .then((response)=>{
            return response.json()
          })
         .then((response)=>{
             setans(response.text)
             setloading(false);
         })    
    }

    useEffect(() => {
        console.log(ans, '- Has changed')
    },[ans]) 
  
    return (
    <div className='container mt-5 p-2'>
       <form className='bg-dark text-info rounded p-3' style={{marginTop:"30px"}}>
     
     <div className='bg-dark rounded text-info p-4'>
        <h2>We have successfully setup your context.</h2>
        <hr />
        <p>We are ready to take your questions, write down the questions below.</p>
      <hr />
        </div> 
  
    <div className='p-3'>
    
    <input type="text" className="form-control" id="question" name='question' onChange={onchange} value={body.question} aria-describedby="emailHelp"/>
  </div>
  <button type="" onClick={handleSub} className="btn btn-info mt-0">Submit</button>
  <hr />
 </form>
    <div className='container rounded text-success mt-4 p-5 bg-dark'>
     <h2>Answer</h2>
     <hr />
     {loading===true?<Spinner/>:
     <p>{ans}</p>}
     <hr />
    </div>
    
    </div>
  )
}
