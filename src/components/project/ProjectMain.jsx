import React from 'react'
import { assets, mywork_data } from '../../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectMain = () => {
  return (
    <div className="container mx-auto text-center w-full p-4 md:p-15 md:px-50" id="project">
      <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10"> 
        <span className="font-extralight text-accent/50">My </span>
        Project
      </h1>
      <p className="mb-10">Passionate About Technologies. Dedicated To Your Needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti natus beatae quas?</p>
      <div className="flex flex-col md:flex-row w-full gap-6 mb-10">
        <div className="grid lg:grid-cols-3 grid-row gap-6 w-full">
          {mywork_data.slice(-3).map((work, index) => (
          <div key={index} className="card bg-base-100 w-fit shadow-sm mx-auto items-center">
            <figure>
              <img
              src={work.w_img}
              alt={work.w_name} />
            </figure>
            <div className="card-body w-full h-full absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 border hover:border-accent hover:rounded-lg transition-all duration-">
              <a href={work.w_link}className="card-body w-full h-full absolute" role="button"></a>
              <h2 className="card-title text-accent">{work.w_name}</h2>
              <p>
                {work.w_desc.length > 100 ?
                  `${work.w_desc.substring(0, 100)} (...)` : work.w_desc
                }
              </p>
              <div className="card-actions justify-end z-10">
                <a href={work.w_link} className="btn border-accent btn-soft hover:btn-accent">Learn More</a> 
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
          <button className="btn btn-wide btn-soft hover:btn-accent border-accent">See More</button>
    </div>
  )
}

export default ProjectMain