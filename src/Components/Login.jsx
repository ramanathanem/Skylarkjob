import React, { useState } from 'react'
import "../Style/Login.css"

import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'
 export const Login = () => {

   

    const [email,setEmail]=useState('')
    const[password, setPassword]=useState('')
  
  


    const handlSumbit=(event)=>{
    event.preventDefault();
    console.log({email,password});

    }

   

  return (
<div >
    <div className='center' style={{background:'linear-gradient(120deg, #2980b9, #8e44ad)'}} >
      
<h1>Login</h1>
<form method='post' onSubmit={handlSumbit} >
 

    <div className='txt_field'>
        <input type='email' value={email}  onChange={(e)=> setEmail(e.target.value)}/>
        <span></span>
            <label style={{left:"25px"}} >Email</label>
    </div>
    <div className='txt_field'>
        <input type='password'  value={password} onChange={(e)=> setPassword(e.target.value)} />
        
        <span></span>
        <label>Password</label>
    </div>
   <div className='pass'>Forgot Password</div>

<Link >  <Button  type='submit' value="login"  variant="primary" onClick={handlSumbit}>login</Button></Link>

<div >
    Not a Member? <Link to="/signin">Signup</Link>
</div>
</form>
<div>

    </div>
    </div>
    </div>
  )
}
export default Login