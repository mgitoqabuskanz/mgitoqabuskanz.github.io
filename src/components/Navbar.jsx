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
            <img src={assets.logo} className='' alt="" />

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
            {/* <div onClick={handleNav} className='block md:hidden'> */}
            <div onClick={handleNav} className='block md:hidden w-7 cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                nav
                    // ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                    // : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    ? 'lg:hidden fixed bg-white w-full right-0 top-25 bottom-0 overflow-hidden ease-in-out duration-500'
                    : 'ease-in-out duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
                {/* <img src={assets.logo} className='block lg:hidden' alt="" /> */}
                

                {/* Mobile Navigation Items */}
                {/* {navItems.map(item => (
                <li
                    key={item.id}
                    className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                >
                    {item.text}
                </li>
                ))} */}
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    {navItems.map(item => (
                    <li
                        key={item.id}
                        className='px-4 py-2 rounded inline-block'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            </ul>
            </div>
        </div>
    
  );
};

export default Navbar