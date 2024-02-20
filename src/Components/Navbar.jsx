import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import navlogo from "../assets/Images/sky2.png"
import "../Style/Navbar.css"
export const Navbar = () => {
    const[menuOpen, setOpen]=useState(false)
  return (
    <div>
         <nav>
    <Link to="/" className='title'><img src={navlogo}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={menuOpen ? "open":""}>
    <li>
        <NavLink to="/login"><i class="bi bi-box-arrow-in-left"></i> Login </NavLink>
        </li>
        <li>  <NavLink to="/signin"><i class="bi bi-box-arrow-in-right me-2"></i>Signin</NavLink></li>
        <li>
          
            <NavLink to="/"><i class="bi bi-house-door-fill"></i>Home
           </NavLink>
            </li>
        <li>
        <NavLink to="/jobs"><i class="bi bi-pc-display-horizontal"></i>Jobs</NavLink></li>
        <li>
        <NavLink to="/contact"><i class="bi bi-person-lines-fill"></i>Contact</NavLink></li>
        <li>
        <NavLink to="/notification"> <i class="bi bi-bell"></i>Notification</NavLink></li>
        <li>
        <NavLink to="/" className="btn btn-outline-primary" style={{borderRadius:'20px'}}> Post Job</NavLink></li>
    </ul>
   
   
   </nav>
    </div>
  )
}
