import React from 'react'
import Navbar from './Navbar'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('/header_img.jpg')"}} id='Header'>
        <Navbar/>
        <div className="grid max-w-screen-xl p-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 items-center overflow-hidden">
            <div className="mx-auto text-center items-center lg:text-left text-white lg:col-span-2 space-x-6 px-10">
                <img src={assets.profile_img} className='mx-auto flex lg:hidden w-50 py-10 mt-10' alt="" />
                <h1 className='lg:text-left py-4 mr-0 text-5xl font-semibold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white'>
                    Muhammad Gito Qabus <h1 className='bg-gradient-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text text-transparent inline-block'>Kanz</h1>
                    <p className='text-xl font-extralight text-gray-400'>( He / Him)</p>
                </h1>
                <p className='lg:text-left py-4 mr-0 font-light text-gray-300 md:text-lg lg:text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab omnis ut voluptas eum, reprehenderit eos explicabo delectus! Dicta quaerat consectetur, omnis unde sequi modi voluptatem deleniti provident illum reprehenderit non!
                </p>
                
                <a href='#' className="inline-flex mt-10 hover:border-white hover:border-2 bg-gradient-to-r from-cyan-400/70 to-lime-300/70 text-white font-semibold rounded py-0.5 px-0.5 hover:px-0 hover:py-0">
                    <span className="inline-flex bg-transparent text-white rounded px-8 py-2.5">
                        Hire Me
                    </span>
                </a>
                <a href='#' className="inline-flex mt-10 border-transparent bg-white/50 hover:bg-gradient-to-r from-cyan-400/70 to-lime-300/70 text-white font-semibold rounded py-0.5 px-0.5 ">
                    <span className="inline-flex bg-black/95 text-white rounded px-8 py-2.5 transition-all">
                        Resume
                    </span>
                </a>
            </div>
            <div className="hidden mx-auto items-center overflow-hidden lg:flex w-95 space-x-6 px-10 rounded">
                <img src={assets.profile_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header