import React from 'react'
import { assets } from '../assets/assets'
import { AiFillCaretDown, AiFillGithub, AiFillLinkedin, AiOutlineArrowDown, AiOutlineWhatsApp } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
        <div id='contact' className="hero bg-emerald-700 min-h-screen z-0">
            <div className="hero-content flex-col lg:flex-row-reverse p-25 gap-10">
                <div className="text-center ">
                    <h1 className='font-bold lg:text-4xl text-2xl mb-2'> 
                        Contact
                        <span className='font-light'> Me</span>
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    {/* name of each tab group should be unique */}
                    <div className="flex items-center">
                        <div className="tabs tabs-lift w-full">
                            <input type="radio" name="my_tabs_5" className="tab" aria-label="E-Mail" defaultChecked />
                            <div className="tab-content bg-base-100 border-base-300 p-10 w-300">
                                <div className="flex w-full flex-col lg:flex-row">
                                    <div className="card rounded-box grid place-items-center">
                                        <div className="flex flex-col text-center place-items-center gap-2">
                                            <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" 
                                            alt="" className='mask mask-circle max-w-50'/>
                                            <div className="divider w-75 mx-auto"></div>
                                            <h1 className='text-3xl font-semibold'><span className='font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                                            <label className="input w-fit">
                                                <span className="label"><span className='text-3xl'><SiGmail /></span></span>
                                                <a href="https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0" 
                                                className='text-lg font-semibold tracking-widest'>mgitoqabuskanz<span className='font-light tracking-normal'>@gmail.com</span></a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="divider lg:divider-horizontal"></div>
                                    <div className="card rounded-box grid place-items-center p-10">
                                        <fieldset className="fieldset w-xl rounded-box">
                                            <div className="flex w-full flex-col">
                                                <div className="divider divider-start">
                                                    <legend className="fieldset-legend text-lg">Send your message here <AiFillCaretDown/></legend>   
                                                </div>
                                            </div>

                                            <label className="fieldset-label">Name</label>
                                            <input type="email" className="input w-full" placeholder="Your Name" />

                                            <label className="fieldset-label">E-Mail</label>
                                            <input type="email" className="input w-full" placeholder="Your E-Mail" />
                                            
                                            <label className="fieldset-label">Password</label>
                                            <textarea className="textarea w-full" placeholder="Message"></textarea>
                                            
                                            <button className="btn hover:btn-success btn-base-content mt-4">Send</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>

                            <input type="radio" name="my_tabs_5" className="tab" aria-label="WhatsApp" />
                            <div className="tab-content bg-base-100 border-base-300 p-10 w-300">
                                <div className="flex w-full flex-col lg:flex-row">
                                    <div className="card rounded-box grid place-items-center">
                                        <div className="flex flex-col text-center place-items-center gap-2">
                                            <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" 
                                            alt="" className='mask mask-circle max-w-50'/>
                                            <div className="divider w-75 mx-auto"></div>
                                            <h1 className='text-3xl font-semibold'><span className='font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                                            <label className="input w-fit">
                                                <span className="label"><span className='text-3xl'><AiOutlineWhatsApp /></span></span>
                                                <a href="https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0" 
                                                className='text-xl tracking-widest'>(+62)8-222-333-2860</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="divider lg:divider-horizontal"></div>
                                    <div className="card rounded-box grid place-items-center p-10">
                                        <fieldset className="fieldset w-xl rounded-box">
                                            <div className="flex w-full flex-col">
                                                <div className="divider divider-start">
                                                    <legend className="fieldset-legend text-lg">Send your message here <AiFillCaretDown/></legend>   
                                                </div>
                                            </div>

                                            <label className="fieldset-label">Name</label>
                                            <input type="email" className="input w-full" placeholder="Your Name" />

                                            <label className="fieldset-label">Phone Number</label>
                                            <input type="email" className="input w-full" placeholder="Your Phone Number" />
                                            
                                            <label className="fieldset-label">Password</label>
                                            <textarea className="textarea w-full" placeholder="Message"></textarea>
                                            
                                            <button className="btn hover:btn-success btn-base-content mt-4">Send</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>

                            <input type="radio" name="my_tabs_5" className="tab" aria-label="GitHub" />
                            <div className="tab-content bg-base-100 border-base-300 p-10 w-300 text-center">
                                <div className="flex flex-col items-center gap-4 ">
                                    <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" alt="" className='mask mask-circle max-w-50 mb-6'/>
                                    <div className="flex w-full flex-col">
                                        <div className="divider">
                                            <legend className="fieldset-legend text-lg">
                                            <h1 className='text-5xl font-bold'><span className='font-light'>Muhammad Gito Qabus </span>Kanz</h1>
                                            </legend>   
                                        </div>
                                    </div>
                                    
                                    <label className="input w-fit">
                                        <span className="label"><span className='text-3xl'><AiFillGithub /></span></span>
                                        <a href="https://github.com/mgitoqabuskanz" className='text-xl'>https://github.com/mgitoqabuskanz</a>
                                    </label>
                                </div>
                            </div>

                            <input type="radio" name="my_tabs_5" className="tab" aria-label="LinkedIn" />
                            <div className="tab-content bg-base-100 border-base-300 p-10 w-300 text-center">
                                <div className="flex flex-col items-center gap-4 ">
                                    <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" alt="" className='mask mask-circle max-w-50 mb-6'/>
                                    <div className="divider">
                                            <legend className="fieldset-legend text-lg">
                                            <h1 className='text-5xl font-bold'><span className='font-light'>Muhammad Gito Qabus </span>Kanz</h1>
                                            </legend>   
                                        </div>
                                    <label className="input w-fit">
                                        <span className="label"><span className='text-3xl'><AiFillLinkedin /></span></span>
                                        <a href="http://linkedin.com/in/mgitoqabuskanz/" className='text-xl'>http://linkedin.com/in/mgitoqabuskanz/</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
  )
}

export default Contact