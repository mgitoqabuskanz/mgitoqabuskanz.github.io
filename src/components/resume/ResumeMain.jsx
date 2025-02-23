import React from 'react'
import { assets } from '../../assets/assets'

const ResumeMain = () => {
  return (
    <div className="container mx-auto w-full p-4 md:p-15 md:px-50" id="resume">    
      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="flex-col md:flex-row my-auto space-y-6 w-full text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10"> 
            <span className="font-extralight text-accent/50">My </span>
            Resume
          </h1>
          <p className="mb-10">
            Discover My Journey
            <br />
            Explore My Resume and Experience the Story Behind My Career!
          </p>
          <a role='btn' href='https://drive.usercontent.google.com/u/0/uc?id=1CBeBMIaqMzGZLsD2XgjKqUVG4fUnwK16&export=download' className='border-accent cursor-pointer btn hover:btn-accent btn-soft text-base-content hover:text-neutral btn-wide'>Download Resume</a>
        </div>
        <img src={assets.profile_img} alt="" className='w-full sm:w-1/2 max-w-lg overflow-hidden lg:w-90 items-center my-auto'/>
      </div>
    </div>
  )
}

export default ResumeMain