import React from 'react'
import { assets } from '../../assets/assets'

import { EmbedPDF } from '@simplepdf/react-embed-pdf';

const ResumeMain = () => {
  return (
    <div className="container mx-auto w-full p-4 md:p-15 md:px-50" id="resume">    
      <div className="flex flex-col md:flex-row w-full gap-6">
        <div className="inline-block my-auto w-fit text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10"> 
            <span className="font-extralight text-accent/50">My </span>
            Resume
          </h1>
          <p className="mb-10">
            Discover My Journey
            <br />
            Explore My Resume and Experience the Story Behind My Career!
          </p>
          <div className="flex gap-4 justify-end">
            <a role='btn' href='https://drive.usercontent.google.com/u/0/uc?id=1CBeBMIaqMzGZLsD2XgjKqUVG4fUnwK16&export=download' className='btn btn-soft btn-accent border-accent'>Download Resume</a>
            <EmbedPDF
              companyIdentifier="react-viewer">
              <a role='button' className='btn btn-accent btn-soft border-accent' href={assets.sample_pdf}>
                Preview Resume
              </a>
            </EmbedPDF>
          </div>
        </div>
        
        <div className="max-h-fit w-2xl">
            <object data={assets.sample_pdf  + '#toolbar=0&navpanes=0&scrollbar=0' } width="100%" height="500" style={{pointerEvents: 'none'}} ></object>
          {/* <div className="mockup-browser border border-base-300 w-full">
            <div className="mockup-browser-toolbar ">
              <div className="input input-accent opacity-100">https://daisyui.com</div>
            </div>
            <div className="grid place-content-center h-fit">
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ResumeMain