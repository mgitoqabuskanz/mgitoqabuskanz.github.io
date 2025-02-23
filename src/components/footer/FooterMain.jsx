import React from 'react'
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const FooterMain = () => {
  const scrollToTop = () => {
      scroll.scrollToTop();
    };
  return (
    <>
    <footer className="footer footer-horizontal footer-center bg-base-200 text-gray-600 rounded p-5">
      <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:link-accent">About us</a>
          <a className="link link-hover hover:link-accent">Contact</a>
          <a className="link link-hover hover:link-accent">Jobs</a>
          <a className="link link-hover hover:link-accent">Press kit</a>
      </nav>
      <nav>
          <div className="grid grid-flow-col gap-10 text-2xl text-gray-400 ">
          <a href='https://mail.google.com/mail/u/0/?fs=1&to=mgitoqabuskanz@gmail.com&tf=cm' title='mgitoqabuskanz@gmail.com' className='hover:text-accent'>
              <SiGmail/>
          </a>
          <a href='https://api.whatsapp.com/send/?phone=6282223332860&text&type=phone_number&app_absent=0' title='(+62)8-222-333-2860' className='hover:text-accent'>   
              <SiWhatsapp/>
          </a>
          <a href='https://github.com/mgitoqabuskanz' title='mgitoqabuskanz' className='hover:text-accent'>
              <SiGithub/>
          </a>                
          <a href='http://linkedin.com/in/mgitoqabuskanz/' title='mgitoqabuskanz' className='hover:text-accent'>
              <SiLinkedin/>
          </a>
          </div>
      </nav>
      <aside>
          <p className='text-gray-600'>Copyright © {new Date().getFullYear()} - All right reserved by <a onClick={scrollToTop} className='cursor-pointer font-bold text-gray-500 hover:text-accent' >Kanz Muhammad</a></p>
      </aside>
    </footer>
    </>
  )
}

export default FooterMain