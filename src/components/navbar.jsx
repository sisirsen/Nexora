import React from 'react'
import {icons} from '../../utils/constants'

function Navbar() {
  return (
    <div className='p-8 flex justify-center items-center gap-12'>
      <div className=' flex pl-5 cursor-pointer gap-3 text-2xl  text-orange-400 font-bold items-center'><img className='h-10 w-10' src={icons.logo} alt="logo" />NEXORA</div>

      <div className='list-none flex gap-10 text-lg text-orange-500 cursor-pointer '>

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
      <li className="relative inline-block cursor-pointer  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 
      hover:after:w-full">About Us</li>
      </div>
      <div className='flex'>
        <input className='border border-orange-500 w-[300px] outline-none p-2 text-white rounded-xl' type="text" placeholder='Search here...' />
        <button ><img className='h-5 w-5 relative right-8 ' src={icons.search} alt="searchIcon"  /></button>
      </div>

      <div className="flex items-center gap-3">
  

  <div className="w-14 h-7 bg-gray-700 rounded-md p-1 flex items-center cursor-pointer">
    <div className="w-6 h-6 bg-black rounded-md  flex items-center justify-center transition-all duration-300">
      🌙
    </div>
  </div>
</div>
      <div className='flex gap-10'>
        <div className=' hover:bg-orange-500 hover:text-white p-2 rounded-md cursor-pointer text-orange-500 font-semibold'>Log In</div>
        <div className=' hover:bg-orange-500 bg-orange-600 p-2 rounded-md cursor-pointer text-white font-semibold'>Sign Up</div>
      </div>
    </div>
  )
}

export default Navbar