import React, { useState } from 'react'
import{useNavigate} from "react-router-dom"
import Spinner from './Spinner';

export default function Form() {
  const [loading,setloading]=useState(false);
     const [body,setbody]=useState({link:""})
    const navigate=useNavigate();
    const onchange=(e)=>{
        setbody({...body,[e.target.name]:e.target.value});
        
    }
    
    
    const handleSub=async(e)=>{
      setloading(true)
        e.preventDefault();
      // console.log(body.link);
        const response=await fetch("http://localhost:5000",{
            method:"POST",
            headers:{
              "content-Type":"application/json",
            },
              
              body:JSON.stringify({
                
                "link":body.link,
                
              })
          })
         if(response){
          setloading(false)
          navigate('/qna');
         }

    }
  return (
    <div className='container' style={{paddingTop:"50px"}}>
      <form className='bg-dark text-info rounded p-3' style={{marginTop:"30px"}}>
     
     <div className='bg-dark rounded text-info p-4'>
        <h2>Welcome to our website</h2>
        <hr />
        <p>On this wesite you can ask questions based on a provided context. You can provide the context in the form of a youtube link, and based on the audio information in the video you can generate query and we will try to answer your questions.</p>
      <hr />
        </div> 
  {loading===true? <div> <Spinner/><h5 className='p-5'>Please Wait for we are settin up the enviornment.</h5></div>:<div className="mb-4 ">
    <div className='p-3'>
    <label htmlFor="exampleInputEmail1" className="form-label"><h2>Enter the link here</h2></label>
    <input type="text" className="form-control" id="link" name='link' onChange={onchange} value={body.link} aria-describedby="emailHelp"/>
  </div>
  <button type="" onClick={handleSub} className="btn btn-info mt-0">Submit</button>
  </div>}
 </form>
    </div>
  )
}
