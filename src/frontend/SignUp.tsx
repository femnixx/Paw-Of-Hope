import React from 'react'
import facebook from '../assets/Facebook.svg'
import google from '../assets/Google.svg'
import pawlogo from '../assets/logo paw.svg'

const SignUp = () => {
  return (
    <div className='w-screen h-auto text-xs'>
      <div className='w-full justify-center flex'>
        <img src={pawlogo} alt="paw logo" className='mt-3 border-[#FF9748] border-2 rounded-full size-10' />
      </div>
      <h1 className='text-sm font-semibold text-center mt-3'>Register With</h1>
      <div className='flex items-center justify-center mt-2'>
        <div className='flex bg-[#C6ED73] px-3 gap-x-3 rounded-full py-1'>
          <img src={facebook} alt="" className='size-4'/>
          <img src={google} alt="" className='size-4' />
        </div>
      </div>
      <p className='text-sm mt-5 text-center'>Or fill in the fields below</p>
      <div className='flex flex-col gap-y-2 p-2'>
        <div className='gap-y-3'>
          <p>Full Name</p>
          <input type="name" className='border-1'/>
        </div>
        <div>
          <p>Email</p>
          <input type="email" className='border-1'/>
        </div>
        <div>
          <p>Phone Number</p>
          <input type="text" className='border-1'/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" className='border-1'/>
        </div>
        <div>
          <p>Confirm Password</p>
          <input type="password" className='border-1'/>
        </div>
        <button>Sign Up</button>
        <p className='text-center -mt-2'>Already have an account?</p>
      </div>
    </div>
  )
}

export default SignUp