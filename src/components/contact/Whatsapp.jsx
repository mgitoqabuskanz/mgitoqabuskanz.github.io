import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { AiFillCaretDown, AiOutlineWhatsApp } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const Whatsapp = () => {

    // Send WhatsApp Form Validation
    const [waNumber, setWaNumberInput] = useState('')
    const [isdisabled, setIsDisabled] = useState(false)
    const onChangeWaNumber = (e) => {
        setWaNumberInput((prevState) => (e.target.value))
        if(e.target.value.trim().length > 1) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }
    const onSubmitWanumber = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <input type="radio" name="my_tabs_5" className="tab min-h-8" aria-label="WhatsApp" />
    <div className="tab-content">
      <div className="flex w-full flex-col lg:flex-row items-center p-10">
        <div className="card rounded-box grid place-items-center">
          <div className="flex flex-col text-center place-items-center w-60 gap-2">
            <div className="avatar">
              <div className="ring-accent ring-offset-base-100 w-1/2 rounded-full ring-2 ring-offset-4 mx-auto">
                <img src="https://avatars.githubusercontent.com/u/29136789?s=400&u=7f4aeb27bf71c5cba45b5a52f9566280cbd7b074&v=4" />
              </div>
            </div>
            <div className="divider divider-accent w-3/4 mx-auto"></div>
            <h1 className='font-semibold text-md md:text-xl'><span className=' font-light'>Muhammad Gito Qabus</span> Kanz</h1>
            <div className="card-actions">
              <label className="input input-accent bg-accent-content hover:bg-accent hover:text-neutral cursor-pointer overflow-hidden w-auto p-1 md:px-4">
                <span className="label"><AiOutlineWhatsApp size={20}/></span>
                <a href="https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0" className='font-light '>(+62)8-222-333-2860)</a>
              </label>
            </div>
          </div>
        </div>
        <div className="divider divider-accent lg:divider-horizontal  pl-3"></div>
        <div className="card rounded-box grid place-items-center w-full">
          <fieldset className="fieldset rounded-box w-full" onSubmit={onSubmitWanumber}>
            <div className="flex flex-col">
              <div className="divider divider-start">
                <legend className="fieldset-legend">Send your message here <AiFillCaretDown/></legend>   
              </div>
            </div>

            <label className="fieldset-label">Name</label>
            <input type="waName" className="input validator w-full" required placeholder="Full Name" 
            pattern="[A-Za-z][A-Za-z]*" minlength="3" maxlength="999" title="Please fill out this field." />
            <p className="validator-hint">Enter Your Name</p>

            <label className="fieldset-label">WhatsApp Number</label>
            <input type="waNumber" className="input validator tabular-nums w-full" required placeholder="(xxx) xxx-xxxx-xxxxx"
            pattern="[0-9]*" minlength="5" maxlength="15" value={waNumber} onChange={onChangeWaNumber} title="Please fill out this field." />
            <p className="validator-hint">Must be at least 5 digits</p>

            <label className="fieldset-label">Message</label>
            <textarea className="textarea w-full" placeholder="Message"></textarea>
              
            <button id='button' type='submit' disabled={!isdisabled} className="btn lg:btn-block btn-soft hover:btn-accent border-accent hover:text-black mt-4">Send</button>
          </fieldset>
        </div>
      </div>
    </div>
    </>
  )
}

export default Whatsapp