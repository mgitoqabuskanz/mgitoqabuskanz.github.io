import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar/>
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
            <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h1>
            <div className="space-x-6 mt-16">
                <a href="" className='bg-linear-65 from-purple-500 to-pink-500 px-8 py-3 rounded'>Hire Me</a>
                <a href="" className='border border-white px-8 py-3 rounded'>Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Header