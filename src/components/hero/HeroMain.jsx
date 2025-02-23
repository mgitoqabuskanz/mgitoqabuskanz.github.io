import React from 'react'
import { assets } from '../../assets/assets'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'

const HeroMain = () => {
  return (
    <div
    class="hero min-h-screen"
    style={{
        backgroundImage: "url('/header_img.jpg')",
      }}
    id='home'
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex-col md:flex-row-reverse">
        <img src={assets.profile_img} className="max-w-xs rounded-lg shadow-2xl" />
        <div className="text-center md:text-left">
          <h1 className="block mb-10 text-3xl font-light text-accent/75">
            Hi, i'm
            <br />  
            <span className="text-5xl font-semibold text-white">
              Muhammad Gito Qabus 
              <br />
              <span className='font-extrabold text-accent'>Kanz</span>
            </span>
            <span className='block text-sm font-extralight max-h-fit'>(He/Him)</span>
          </h1>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit odit repellat reiciendis iure laboriosam, maiores temporibus voluptatum obcaecati labore dignissimos sed rem aliquam autem in qui voluptate fugit cupiditate. Et accusamus obcaecati voluptates suscipit tempora repellendus, distinctio sint! Perferendis accusantium at laudantium quis velit, quaerat aliquid eius, sint ab molestiae nulla.
          </p>
          <div className="flex gap-3 justify-center md:justify-start mb-5">
            <button className="btn btn-circle btn-soft btn-accent border-accent"><SiGmail/></button>
            <button className="btn btn-circle btn-soft btn-accent border-accent"><SiGithub/></button>
            <button className="btn btn-circle btn-soft btn-accent border-accent"><SiLinkedin/></button>
            <button className="btn btn-circle btn-soft btn-accent border-accent"><SiWhatsapp/></button>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            <button className="btn w-30 lg:btn-wide btn-soft btn-accent border-accent">Hire Me</button>
            <button className="btn w-30 lg:btn-wide btn-soft btn-accent border-accent">Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMain