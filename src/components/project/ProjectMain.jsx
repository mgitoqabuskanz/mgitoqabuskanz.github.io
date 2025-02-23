import React from 'react'
import { assets } from '../../assets/assets'

const ProjectMain = () => {
  return (
    <div className="container mx-auto text-center w-full p-4 md:p-15 md:px-50" id="project">
      <h1 className="text-3xl md:text-5xl font-extrabold text-accent mb-10"> 
        <span className="font-extralight text-accent/50">My </span>
        Project
      </h1>
      <p className="mb-10">Passionate About Technologies. Dedicated To Your Needs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti natus beatae quas?</p>
      <div className="flex flex-col md:flex-row w-full gap-6 mb-10">
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-col gap-6">
          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project1_img}
              alt="Project 1" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 1</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project2_img}
              alt="Project 2" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 2</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project3_img}
              alt="Project 3" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 3</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project4_img}
              alt="Project 4" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 4</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project5_img}
              alt="Project 5" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 5</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-fit shadow-sm">
            <figure>
              <img
              src={assets.project6_img}
              alt="Project 6" />
            </figure>
            <div className="card-body absolute gap-6 bg-neutral/80 items-center opacity-0 hover:opacity-100 transition-all duration-500">
              <h2 className="card-title text-accent">Project 6</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn border-accent btn-soft hover:btn-accent">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          <button className="btn btn-wide btn-soft hover:btn-accent border-accent">See More</button>
    </div>
  )
}

export default ProjectMain