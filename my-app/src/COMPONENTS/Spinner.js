import React from 'react'
import loading from './spinner.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
       <img src={loading} width={"50px"} alt="loading" /> 
      </div>
  )
}
