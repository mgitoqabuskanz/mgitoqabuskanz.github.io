import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {assets} from '../assets/assets'

const Navbar = () => {
    // const[showMobileMenu, setShowMobileMenu] = useState(false)

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Portfolio' },
    { id: 5, text: 'Contact' },
  ];
  return (
    <div className='fixed top-0 left-0 w-full z-10'>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-17 bg-transparent">
            {/* Logo */}
            <a href="#" className='block text-3xl font-bold hover:text-white hover:transition-all hover:duration-500 bg-gradient-to-br from-cyan-400 to-lime-300 bg-clip-text text-transparent transition-all duration-500'>KANZ</a>

            {/* Desktop Navigation */}
            <ul className='hidden lg:flex gap-7 text-white/90'>
                {navItems.map(item => (
                <li
                    key={item.id}
                    className='cursor-pointer hover:text-transparent bg-gradient-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text inline-block transition-all duration-500'
                >
                    {item.text}
                </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <a onClick={handleNav} className='inline-flex lg:hidden cursor-pointer border-2 p-2 border-transparent hover:rounded-full hover:border-2 hover:border-white hover:p-2 transition-all duration-500 hover:transition-all hover:duration-500'>
                {nav ? <AiOutlineClose fill='white' size={20} /> : <AiOutlineMenu fill='white' size={20} />}
            </a>


            {/* Mobile Navigation Menu */}
            <ul
                className={
                nav

                    ? 'fixed w-full h-full left-0 right-0 top-0 bottom-0 lg:hidden bg-black/95 text-white overflow-hidden ease-in-out duration-500'
                    : 'fixed w-full h-full left-0 right-0 top-[-100%] bottom-[-100%] ease-in-out duration-500'
                }
            >
                {/* Mobile Logo */}
                    <div className="flex p-4 mx-2">
                        <div className="flex-1 ml-2 ">
                            <a href="#" className='flex-1 text-4xl font-bold hover:bg-gradient-to-br from-cyan-400 to-lime-300 hover:text-transparent bg-clip-text text-white transition-all duration-300'>KANZ</a>

                        </div>
                        <a href='#'>
                            <div onClick={handleNav} className='flex-none px-2 py-2 rounded-full border-2 text-white hover:border-red-500/50 hover:text-red-500/50 transition-all duration-300'>
                                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                            </div>
                        </a>
                    </div>    

                {/* Mobile Navigation Items */}
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    
                    {navItems.map(item => (
                    <li
                    key={item.id}
                    className='inline-block p-4 cursor-pointer hover:text-transparent bg-gradient-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text transition-all duration-500'
                    >
                        {item.text}
                    </li>
                    )) }
                </ul>
            </ul>
        </div>
    </div>
  );
};

export default Navbar