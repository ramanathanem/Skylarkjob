import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Style/Navbar.css"
import "../Style/Resume.css"
import step1 from "../assets/Images/step1.png"
import step2 from "../assets/Images/step2.png"
import step3 from "../assets/Images/step3.png"
export const Resume = () => {
  return (
    <div className='images '>
    <div className='image-overlays'>
    <div class="container">
  <div class="row " >
    <div class="col-sm " >
     <img src={step1} className='mt-5'/>
     <h1 style={{color:"blue"}}>01 step</h1>
     <h3 style={{color:"white"}}>REGISTER AN ACCOUNT</h3>
     <li >
     <NavLink to="/login" ><i class="bi bi-box-arrow-in-left"></i> Login </NavLink></li>
    </div>
    <div class="col-sm">
      <img src={step2}  className='mt-5'/>
      <h1 style={{color:"blue"}}>02 step</h1>
      <h3 style={{color:"white"}}>SEARCH YOUR DESIRED JOB</h3>
    </div>
    <div class="col-sm">
    <img src={step3}  className='mt-5'/>
    <h1 style={{color:"blue"}}>03 step</h1>
    <h3 style={{color:"white"}}>  SEND YOUR RESUME TO EMPLOYERS</h3>
    <Link to="/form"> <button className='btn btn-danger'>Upload Your CV</button></Link>
    </div>
  </div>
</div>
    </div>
   
</div>
  )
}
