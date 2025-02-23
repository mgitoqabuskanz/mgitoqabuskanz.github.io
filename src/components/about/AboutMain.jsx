import React from 'react'
import { assets } from '../../assets/assets'

const AboutMain = () => {
  return (
    <div className="container mx-auto text-center w-full p-4 md:p-15 md:px-50" id="about">
      <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10">About 
        <span className="font-extralight text-accent/50"> Me</span>
      </h1>
      <p className="mb-10">Passionate About Technologies. Dedicated To Your Needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti natus beatae quas?</p>
      <div className="flex flex-col md:flex-row w-full gap-6">
        <img src={assets.profile_img} className="max-w-xs rounded-lg shadow-2xl mx-auto" />
        <div className="flex-col md:flex-row my-auto space-y-6">
          <div className="grid grid-cols-2">
            <div className="">
                <p className="text-4xl font-medium text-white/50">10+</p>
                <p className="text-xl text-accent/50">Years of Exelence</p>
            </div>
            <div className="">
                <p className="text-4xl font-medium text-white/50">12+</p>
                <p className="text-xl text-accent/50">Projects Completed</p>
            </div>
            <div className="">
                <p className="text-4xl font-medium text-white/50">20+</p>
                <p className="text-xl text-accent/50">Mn. Sq. Ft. Delifered</p>
            </div>
            <div className="">
                <p className="text-4xl font-medium text-white/50">25+</p>
                <p className="text-xl text-accent/50">Ongoing Projects</p>
            </div>
          </div>
          <p className="text-center mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, consequatur. Quidem 
            consequatur labore eum possimus, sint dicta voluptas vel recusandae repellendus earum a ipsa cumque reiciendis 
            tempora blanditiis consequuntur sit.
          </p>
          <button className="btn btn-wide btn-soft hover:btn-accent border-accent">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMain