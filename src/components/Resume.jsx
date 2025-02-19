import React from 'react'
import { assets } from '../assets/assets'


const Resume = () => {
  return (
    <div 
        id='resume'
        className='flex flex-col bg-secondary items-center justify-center mx-auto py-14 md:px-20 lg:px-32 w-full overflow-hidden'
    >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'> 
            <span className='font-light'>My </span>Resume</h1>
        <p className='text-white/50 max-w-80 text-center mb-8'>Passionate About Technologies. Dedicated To Your Needs.</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.profile_img} alt="" className='w-full sm:w-1/2 max-w-lg overflow-hidden lg:w-90 items-center my-auto'/>
            <div className="flex flex-col items-center md:items-start mt-10 text-white">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center md:text-left">
                    <div className="">
                        <p className='text-4xl font-medium text-white/60'>10+</p>
                        <p>Years of Exelence</p>
                    </div>
                    <div className="">
                        <p className='text-4xl font-medium text-white/60'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div className="">
                        <p className='text-4xl font-medium text-white/60'>20+</p>
                        <p>Mn. Sq. Ft. Delifered</p>
                    </div>
                    <div className="">
                        <p className='text-4xl font-medium text-white/60'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg text-white/50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, consequatur. Quidem 
                    consequatur labore eum possimus, sint dicta voluptas vel recusandae repellendus earum a ipsa cumque reiciendis 
                    tempora blanditiis consequuntur sit.</p>
                <button className='hover:border-white cursor-pointer bg-linear-to-r from-cyan-400/70 to-lime-300/70 hover:bg-clip-text hover:text-transparent  transition-all duration-500 px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Resume