import React from 'react'
import {icons} from '../../utils/constants'

function Navbar() {
  return (
    <div className='p-8 flex items-center gap-65'>
      <div className=' flex cursor-pointer gap-2 text-2xl text-orange-400 font-bold items-center'><img className='h-10 w-12' src={icons.logo} alt="logo" />Voynex</div>

      <div className='list-none flex gap-15 text-lg text-orange-500 cursor-pointer '>

      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">Home</li>
      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">Services</li>
      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">Markets</li>
      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">Trade</li>
      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">Contact</li>
      <li className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">About Us</li>
      </div>

      <div className='flex gap-5'>
        <div className=' hover:bg-orange-500 bg-orange-600 p-2 px-2 rounded-md cursor-pointer text-white font-semibold'>Log In</div>
        <div className=' hover:bg-orange-500 bg-orange-600 p-2 rounded-md cursor-pointer text-white font-semibold'>Sign Up</div>
      </div>
    </div>
  )
}

export default Navbar