import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AiFillCaretDown } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

const Email = () => {
    const [eMail, setEmailInput] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        updateScreenSize()
        window.addEventListener('resize', updateScreenSize)

        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }
    }, [])

    const onChangeEmail = (e) => {
        setEmailInput(e.target.value)
        if (e.target.value.trim().length > 1) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    const onSubmitEmail = (e) => {
        e.preventDefault()
    }

    return (
      <>
      <input type="radio" name="my_tabs_5" className="tab min-h-8" aria-label= 'E-Mail' defaultChecked />
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
                  <span className="label"><SiGmail size={20} /></span>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm" className='font-light '>mgitoqabuskanz@gmail.com</a>
                </label>
              </div>
            </div>
          </div>
          <div className="divider divider-accent lg:divider-horizontal pl-3"></div>
          <div className="card rounded-box grid place-items-center w-full">
            <fieldset className="fieldset rounded-box w-full" onSubmit={onSubmitEmail}>
              <div className="flex flex-col">
                <div className="divider divider-start">
                  <legend className="fieldset-legend">Send your message here <AiFillCaretDown /></legend>
                </div>
              </div>

              <label className="fieldset-label">Name</label>
              <input type="eName" className="input validator w-full" required placeholder="Full Name" 
              pattern="[A-Za-z][A-Za-z]*" minlength="3" maxlength="999" title="Please fill out this field." />
              <p className="validator-hint">Enter Your Name</p>

              <label className="fieldset-label">E-Mail</label>
              <input className="input validator w-full" type="eMail" required placeholder="mail@site.com" value={eMail} onChange={onChangeEmail} title="Please fill out this field."  />
              <div className="validator-hint">Enter valid email address</div>

              <label className="fieldset-label">Message</label>
              <textarea className="textarea validator w-full" required placeholder="Message" title="Please fill out this field."></textarea>

              <button id='button' type='submit' disabled={!isDisabled} className="btn lg:btn-block btn-soft hover:btn-accent border-accent hover:text-black mt-4">Send</button>
            </fieldset>
          </div>
        </div>
      </div>
      </>
    )
}

export default Email