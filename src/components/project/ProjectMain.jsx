import React from 'react'
import { assets } from '../../assets/assets'
import ProjectSlider from './ProjectSlider'

const ProjectMain = () => {
  return (
    <div className="container mx-auto text-center w-full p-15" id="project">
      <div className="block lg:w-3/4 w-full mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10"> 
          <span className="font-extralight text-accent/50">My </span>
          Project
        </h1>
        <p className="mb-10">Passionate About Technologies. Dedicated To Your Needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti natus beatae quas?</p>
      </div>
      
      <div className="block w-full lg:px-15 px-2 mb-10">
        <ProjectSlider/>
      </div>
      <button className="btn btn-wide btn-soft btn-accent border-accent">See More</button>
    </div>
  )
}

export default ProjectMain