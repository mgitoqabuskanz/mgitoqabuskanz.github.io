
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {

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
    <div className='fixed w-full bg-black/50'>
        <div className="flex w-full mx-auto justify-between backdrop-blur-md text-white py-3 lg:px-25 px-5">
            <div className="navbar-start">
                <div className="px-2">
                    <a 
                        onClick={scrollToTop} 
                        className='cursor-pointer text-2xl font-semibold 
                        bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text text-transparent 
                        hover:text-white transition-all duration-500'
                    >
                        KANZ
                    </a>
                </div>
            </div>

            <div className="navbar-center">
                <div className={`${menuOpen ? "block" : "hidden"} lg:block`} >
                    <ul className='flex gap-6 text-white text-center lg:py-2 lg:h-fit h-screen lg:flex-row lg:bg-transparent flex-col lg:relative absolute top-[100%] left-[50%] -translate-x-[50%] lg:text-lg pt-10 md:text-md text-sm w-full bg-black/80 sm:py-10 transition-all duration-500'>
                        {navLinks.map((link, index) => {
                            return ( 
                            <li key={index} className='group'>
                                <Link 
                                    to={link.section}
                                    smooth={true}
                                    spy={true}
                                    duration={500}
                                    offset={-100}
                                    className='cursor-pointer text-white bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text hover-active:text-transparent transition-all duration-500'
                                >
                                    {link.link}
                                </Link>
                                <div className="cursor-pointer mx-auto bg-linear-to-r from-cyan-400/70 to-lime-300/70 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="navbar-end gap-6">
                <div className="sm:flex hidden gap-6 mx-auto items-center">
                <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <a className='cursor-pointer border border-gray-500 text-white bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text hover:text-transparent hover:border-emerald-900 transition-all duration-500 py-2 px-5 rounded-xl' >Hire Me</a>
                </Link>
                <Link 
                    to="resume" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <a className='cursor-pointer border border-gray-500 text-white bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text hover:text-transparent hover:border-emerald-900 transition-all duration-500 py-2 px-5 rounded-xl' >Resume</a>
                </Link>
                </div>

                <div className=" flex lg:hidden md:block items-center ">
                    <button 
                    onClick={toggleMenu}
                    className='cursor-pointer inline-block border border-gray-500 text-white bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text hover:text-emerald-900 text-2xl hover:border-emerald-900 transition-all duration-500 p-2 rounded-xl '>
                        <AiOutlineMenu/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar