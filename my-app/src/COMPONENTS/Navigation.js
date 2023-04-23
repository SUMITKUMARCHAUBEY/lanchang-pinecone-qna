import React from 'react'
import '../App.css';
import{Link} from "react-router-dom"

export default function Navigation() {
  return (
    <div className=''> 
      <ul className='navigation '>
  <li><Link className="border-bottom border rounded" to="/">Home</Link></li>
  <li><Link className="border-bottom border rounded" to="/qna">Question & Answers</Link></li>
  <li><Link className=" border-bottom border rounded" to="/contect">Contact</Link></li>
  <li><Link className=" border-bottom border rounded" to="/about">About</Link></li>
</ul>
    </div>
  )
}
