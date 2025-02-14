import React from 'react'

const Skills = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/profile_pic.jpg" class="h-125 rounded-lg shadow"/>
            <div>
                <h1 className="text-5xl">Muhammad Gito Qabus <a className='font-bold text-accent'>Kanz <a className='text-sm text-gray-500'>(He/Him)</a></a></h1>
                <p className="py-6 text-white">
                Bachelor of Science (S.Kom) in Informatics Engineering of Institut Teknologi Sepuluh Nopember (ITS) surabaya with strong experience and interest in Development and Operations, as well as Network Operations. Committed to developing my skills in Project Management, I focus on applying my expertise to contribute optimally and efficiently in creating innovative technological solutions. I am passionate about actively supporting the advancement of the industry and technology and am ready to make a positive impact for sustainable development.
                </p>
                <button className="btn btn-primary">Resume</button>
            </div>
        </div>
    </div>
    
  )
}

export default Skills