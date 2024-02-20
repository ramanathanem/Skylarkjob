import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import Login from './Components/Login'
import { Form } from './Components/Form'
import { Signin } from './Components/Signin'
import { Jobs } from './Components/Jobs'
import { Contact } from './Components/Contact'
import Notification from './Components/Notification'
import Findjob from './Components/Findjob'

function App() {
 
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/jobs' element={<Findjob/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/notification' element={<Notification/>}/>
    </Routes>
  </div>
  )
}

export default App
