import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { SiGithub } from 'react-icons/si'

const Github = () => {
  return (
    <>
    <input type="radio" name="my_tabs_5" className="tab min-h-8" aria-label="GitHub" />
    <div className="tab-content text-center">
      <div className="card bg-transparent text-neutral-content w-full">
        <div className="card-body items-center text-center">
          <div className="card-title avatar">
            <div className="ring-accent ring-offset-base-100 w-1/2 rounded-full ring-2 ring-offset-4 mx-auto">
              <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
            </div>
          </div>
            
          <div className="divider divider-accent w-1/2 mx-auto"></div>
            
          <h1 className='font-semibold text-md lg:text-3xl text-accent'>
            <span className='font-light text-base-content'>Muhammad Gito Qabus </span>
            Kanz
          </h1>
          <div className="card-actions justify-end ">
            <label className="input input-accent bg-accent-content hover:bg-accent hover:text-neutral gap-0.5 cursor-pointer overflow-hidden w-full hidden md:flex">
              <span className="label"><SiGithub size={25}/></span>
              <a href="https://github.com/mgitoqabuskanz" className='font-light tracking-widest'>https://github.com/mgitoqabuskanz</a>
            </label>
          </div>
          <div className="card-actions justify-end ">
            <label className="input input-accent bg-accent-content hover:bg-accent hover:text-neutral gap-0.5 cursor-pointer overflow-hidden w-60 flex md:hidden">
              <span className="label"><SiGithub size={25}/></span>
              <a href="https://github.com/mgitoqabuskanz" className='font-light tracking-widest'>/mgitoqabuskanz</a>
            </label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Github