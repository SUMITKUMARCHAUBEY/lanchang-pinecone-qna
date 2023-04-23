import React from 'react'
import{Link,useLocation,useNavigate} from "react-router-dom"
export default function NavBar() {
    let locatation=useLocation()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid ">
    <Link className="navbar-brand text-info" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={locatation.pathname==='/'?`nav-link active text-info`:`nav-link text-light`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={locatation.pathname==='/about'?`nav-link active text-info`:`nav-link text-light`} to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className={locatation.pathname==='/contect'?`nav-link active text-info`:`nav-link text-light`}to="/contect">Contect Us</Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
