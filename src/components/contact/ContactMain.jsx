import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Linkedin from './Linkedin';
import Github from './Github';
import Whatsapp from './Whatsapp';
import Email from './Email';

const ContactMain = () => {
  return (
    <>
    <div className="container mx-auto w-full md:p-15 md:px-50 p-4" id="contact">
      <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10">Get In Touch 
        <span className="font-extralight text-accent/50"> With Me</span>
      </h1>
      <p className="mb-10">
        Feel free to contact me for tech discussions, business opportunities, or just to say hello—I’d love to hear from you!
      </p>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="tabs tabs-xs md:tabs-xl tabs-border text-accent bg-black/80 rounded-2xl w-full ">
          <span class="tab"></span>
            <Email/>
            <Whatsapp/>
            <Github/>
            <Linkedin/>
          <span class="tab"></span>
        </div>
      </div>
    </div>  
    </>
  )
}

export default ContactMain