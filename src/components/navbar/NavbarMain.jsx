import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImMenu } from "react-icons/im";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const NavbarMain = () => {

const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const navLinks = [
  { link: "Home", section:"home"},
  { link: "About", section:"about"},
  { link: "Experience", section:"experience"},
  { link: "Project", section:"project"},
  { link: "Contact", section:"contact"},
  ];
const scrollToTop = () => {
  scroll.scrollToTop();
  };

  return (
    <div className='fixed w-full bg-black/50 z-80'>
      <div className="flex w-full mx-auto justify-between backdrop-blur-md text-white py-3 lg:px-25 px-5">
        <div className="navbar-start">
          <div className="px-2">
            <a 
            onClick={scrollToTop} 
            className='cursor-pointer text-2xl font-bold text-accent hover:text-white transition-all duration-500'
            >
              KANZ
            </a>
          </div>
        </div>

        <div className="navbar-center">
          <div className={`${menuOpen ? "block" : "hidden"} lg:block`} >
            <ul className='flex gap-6 text-base-content hover:text-neutral text-center lg:py-2 lg:h-fit h-screen lg:flex-row lg:bg-transparent flex-col lg:relative absolute top-[100%] left-[50%] -translate-x-[50%] lg:text-lg md:text-md text-sm w-full backdrop-blur-md bg-neutral/75 pt-15 sm:py-10 transition-all duration-500 z-70'>
              {navLinks.map((link, index) => {
                return ( 
                  <li key={index} className='cursor-pointer group'>
                    <Link 
                    to={link.section}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-70}
                    className='cursor-pointer text-base-content hover:text-accent transition-all duration-500'
                    >
                      {link.link}
                    </Link>
                    <div className="cursor-pointer mx-auto bg-accent w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-500"></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <div className="sm:flex hidden gap-6 mx-auto items-center">
            <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            >
              <a className='cursor-pointer border border-accent hover:text-neutral text-base-content hover:bg-accent transition-all duration-500 py-2 px-5 rounded-lg' >Hire Me</a>
            </Link>
            <Link 
            to="resume" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            >
              <a className='cursor-pointer border border-accent hover:text-neutral text-base-content hover:bg-accent transition-all duration-500 py-2 px-5 rounded-lg' >Resume</a>
            </Link>
          </div>

          <div className=" flex lg:hidden md:block items-center ">
            <button 
            onClick={toggleMenu}
            className='cursor-pointer inline-block border border-accent text-base-content hover:text-neutral hover:bg-accent text-2xl  transition-all duration-500 p-1 pb-1.5 px-1.5 rounded-lg'
            >
              <ImMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain