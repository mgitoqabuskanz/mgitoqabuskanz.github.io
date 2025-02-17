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
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            {/* Logo */}
            {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
            <img src={assets.logo} className='logo.desktop' alt="" />

            {/* Desktop Navigation */}
            {/* <ul className='hidden md:flex'> */}
            <ul className='hidden lg:flex gap-7 text-white'>
                {navItems.map(item => (
                <li
                    key={item.id}
                    className='cursor-pointer hover:text-gray-400'
                >
                    {item.text}
                </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block lg:hidden w-7 cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                nav

                    ? 'fixed w-full h-full left-0 right-0 top-0 bottom-0 lg:hidden bg-black/95 text-white overflow-hidden ease-in-out duration-500'
                    : 'fixed w-full h-full left-0 right-0 top-[-100%] bottom-[-100%] ease-in-out duration-500'
                }
            >
                {/* Mobile Logo */}
                    <div className="flex justify-evenly items-center py-4 px-4">
                        <div className="flex-1 ml-2">
                            <img src={assets.logo} alt="" />
                        </div>
                        <div onClick={handleNav} className='flex-none py-4 px-4 rounded-full border'>
                            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </div>
                    </div>    

                {/* Mobile Navigation Items */}
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    
                    {navItems.map(item => (
                    <li
                    key={item.id}
                    className="px-4 py-4 rounded inline-block"
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