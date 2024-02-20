import React from 'react'

import "../Style/Contact.css"
import { Footer } from './Footer'

export const Contact = () => {
  return (
  <div>
    <div className='imag'>
      <div className='imag-overlay'>
<h1 className='text-center ' style={{color:"white"}}>Contact/Home</h1>
      </div>
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm-8"><div class="card mt-5">
  <div class="card-header">
  Contact Info
  </div>
  <div class="card-body ">
    <h5 class="card-title">Contact</h5>
    <p class="card-text"><div class="mb-3">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     placeholder="Enter name" required/>
   
   
    
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
</div></p>
    <a href="#" class="btn btn-primary text-end">Sumbit</a>
  </div>
</div></div>
    <div class="col-sm-4"><div class="card mt-5" >
  <div class="card-body">
    <h5 class="card-title">Contact Infor</h5>
    
    <p class="card-text"><i class="bi bi-telephone-fill"></i>  +916369227006</p>
    <p class="card-text">    <i class="bi bi-envelope-check"></i> skylarkhr@gmail.com</p>
    <h5 class="card-title">Social Network</h5>
    <a href="#" class="card-link"><i class="bi bi-whatsapp"></i></a>
    <a href="#" class="card-link"><i class="bi bi-facebook"></i></a>
    <a href="#" class="card-link"><i class="bi bi-instagram"></i></a>
  </div>
</div></div>
  </div>
  </div>
  <Footer/>
</div>
  )
}
