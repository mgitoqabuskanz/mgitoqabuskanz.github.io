import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { AiFillCaretDown, AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineArrowDown, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

const Contact = () => {
    const [waNumber, setWaNumberInput] = useState('')
    const [eMail, setEmailInput] = useState('')
    const [isdisabled, setIsDisabled] = useState(false)
    const onChangeWaNumber = (e) => {
        setWaNumberInput((prevState) => (e.target.value))
        if(e.target.value.trim().length > 1) {
          setIsDisabled(true)
        } else {
          setIsDisabled(false)
        }
    }
    const onChangeEmail = (e) => {
        setEmailInput((prevState) => (e.target.value))
        if(e.target.value.trim().length > 1) {
          setIsDisabled(true)
        } else {
          setIsDisabled(false)
        }
    }
    const onSubmitWanumber = (e) => {
        e.preventDefault()
    }
    const onSubmitEmail = (e) => {
        e.preventDefault()
    }
  return (
    <div 
        id='contact'
        className='flex flex-col items-center justify-center bg-primary mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    >            
        <h1 className='font-bold lg:text-4xl text-2xl mb-2'> Contact
            <span className='font-light'> Me</span>
        </h1>
        <p className="py-6 text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        <div className="tabs tabs-lift w-full">
            <input type="radio" name="my_tabs_5" className="tab" aria-label="E-Mail" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300">
                <div className="flex w-full flex-col lg:flex-row items-center p-10">
                    <div className="card rounded-box grid place-items-center">
                        <div className="flex flex-col text-center place-items-center w-60 gap-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-1/2 rounded-full ring ring-offset-2 mx-auto">
                                    <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
                                </div>
                            </div>
                            <div className="divider w-3/4 mx-auto"></div>
                            <h1 className='font-semibold text-md md:text-xl'><span className=' font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                            <div className="card-actions">
                                <label className="input input-success bg-success-content hover:bg-success hover:text-black cursor-pointer overflow-hidden w-auto p-1 md:px-4">
                                    <span className="label"><SiGmail size={20}/></span>
                                    <a href="https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm" className='font-light '>mgitoqabuskanz@gmail.com</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card rounded-box grid place-items-center w-full">
                        <fieldset className="fieldset rounded-box w-full" onSubmit={onSubmitEmail}>
                            <div className="flex flex-col">
                                <div className="divider divider-start">
                                    <legend className="fieldset-legend">Send your message here <AiFillCaretDown/></legend>   
                                </div>
                            </div>

                            <label className="fieldset-label">Name</label>
                            <input type="eName" className="input w-full" placeholder="Your Name" />

                            <label className="fieldset-label">E-Mail</label>
                            <input type="eMail" className="input w-full" placeholder="Your E-Mail" value={eMail} onChange={onChangeEmail}/>
                            
                            <label className="fieldset-label">Message</label>
                            <textarea className="textarea w-full" placeholder="Message"></textarea>
                            
                            <button id='button' type='submit' disabled={!isdisabled} className="btn bg-success-content hover:bg-success border-success hover:text-black mt-4">Send</button>
                        </fieldset>
                    </div>
                </div>
            </div>

            <input type="radio" name="my_tabs_5" className="tab" aria-label="WhatsApp" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300">
                <div className="flex w-full flex-col lg:flex-row items-center p-10">
                    <div className="card rounded-box grid place-items-center">
                        <div className="flex flex-col text-center place-items-center w-60 gap-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-1/2 rounded-full ring ring-offset-2 mx-auto">
                                    <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
                                </div>
                            </div>
                            <div className="divider w-3/4 mx-auto"></div>
                            <h1 className='font-semibold text-md md:text-xl'><span className=' font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                            <div className="card-actions">
                                <label className="input input-success bg-success-content hover:bg-success hover:text-black cursor-pointer overflow-hidden w-auto p-1 md:px-4">
                                    <span className="label"><AiOutlineWhatsApp size={20}/></span>
                                    <a href="https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0" className='font-light '>(+62)8-222-333-2860)</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card rounded-box grid place-items-center w-full">
                        <fieldset className="fieldset rounded-box w-full" onSubmit={onSubmitWanumber}>
                            <div className="flex flex-col">
                                <div className="divider divider-start">
                                    <legend className="fieldset-legend">Send your message here <AiFillCaretDown/></legend>   
                                </div>
                            </div>

                            <label className="fieldset-label">Name</label>
                            <input type="waName" className="input w-full" placeholder="Your Name" />

                            <label className="fieldset-label">WhatsApp Number</label>
                            <input type="waNumber" className="input w-full" placeholder="Your WhatsApp Number" value={waNumber} onChange={onChangeWaNumber}/>
                            
                            <label className="fieldset-label">Message</label>
                            <textarea className="textarea w-full" placeholder="Message"></textarea>
                            
                            <button id='button' type='submit' disabled={!isdisabled} className="btn bg-success-content hover:bg-success border-success hover:text-black mt-4">Send</button>
                        </fieldset>
                    </div>
                </div>
            </div>

            <input type="radio" name="my_tabs_5" className="tab" aria-label="Github" />
            <div className="tab-content bg-base-100 border-base-300 text-center">
                <div className="card bg-transparent text-neutral-content w-full">
                    <div className="card-body items-center text-center">
                        <div className="card-title avatar">
                            <div className="ring-primary ring-offset-base-100 w-1/2 rounded-full ring ring-offset-2 mx-auto">
                                <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
                            </div>
                        </div>
                        
                        <div className="divider w-1/2 mx-auto"></div>
                        
                        <h1 className='font-semibold text-md lg:text-3xl'><span className=' font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                        <div className="card-actions justify-end ">
                            <label className="input input-success bg-success-content hover:bg-success hover:text-black gap-0.5 cursor-pointer overflow-hidden w-full hidden md:flex">
                                <span className="label"><AiFillGithub size={25}/></span>
                                <a href="https://github.com/mgitoqabuskanz" className='font-light tracking-widest'>https://github.com/mgitoqabuskanz</a>
                            </label>
                        </div>
                        <div className="card-actions justify-end ">
                            <label className="input input-success bg-success-content hover:bg-success hover:text-black gap-0.5 cursor-pointer overflow-hidden w-60 flex md:hidden ">
                                <span className="label"><AiFillGithub size={25}/></span>
                                <a href="https://github.com/mgitoqabuskanz" className='font-light tracking-widest'>/mgitoqabuskanz</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <input type="radio" name="my_tabs_5" className="tab" aria-label="LinkedIn" />
            <div className="tab-content bg-base-100 border-base-300 text-center">
                <div className="card bg-transparent text-neutral-content w-full">
                    <div className="card-body items-center text-center">
                        <div className="card-title avatar">
                            <div className="ring-primary ring-offset-base-100 w-1/2 rounded-full ring ring-offset-2 mx-auto">
                                <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
                            </div>
                        </div>
                        
                        <div className="divider w-1/2 mx-auto"></div>
                        
                        <h1 className='font-semibold text-md lg:text-3xl'><span className=' font-light'>Muhammad Gito Qabus</span> Kanz</h1>
                        <div className="card-actions justify-end ">
                            <label className="input input-success bg-success-content hover:bg-success hover:text-black gap-0.5 cursor-pointer overflow-hidden w-full hidden md:flex">
                                <span className="label"><AiFillLinkedin size={25}/></span>
                                <a href="http://linkedin.com/in/mgitoqabuskanz/" className='font-light tracking-widest'>http://linkedin.com/in/mgitoqabuskanz</a>
                            </label>
                        </div>
                        <div className="card-actions justify-end ">
                            <label className="input input-success bg-success-content hover:bg-success hover:text-black gap-0.5 cursor-pointer overflow-hidden w-60 flex md:hidden ">
                                <span className="label"><AiFillLinkedin size={25}/></span>
                                <a href="http://linkedin.com/in/mgitoqabuskanz/" className='font-light tracking-widest'>/in/mgitoqabuskanz</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  

  )
}

export default Contact