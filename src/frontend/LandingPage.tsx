import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='flex flex-col'>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default LandingPage