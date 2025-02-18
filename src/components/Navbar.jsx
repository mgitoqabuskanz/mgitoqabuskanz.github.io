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
    <div className='fixed top-0 left-0 w-full'>
        <div className="flex mx-auto justify-between bg-black/75 backdrop-blur-md text-white py-4 px-20 items-center">
            <a href="#" className='text-4xl font-semibold bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text text-transparent hover:text-white'>
                KANZ
            </a>

            <ul className='hidden lg:inline-flex space-x-10 text-xl'>
                {navItems.map(item => (
                <li
                    key={item.id}
                    className='text-white bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-text hover:text-transparent'
                >
                    <a href="">{item.text}</a>
                </li>
                ))}
            </ul>

            <ul className='inline-flex space-x-5 items-center'>
                <li className='md:flex hidden'><a href="" className='border rounded-lg py-2 px-4 bg-clip-border hover:border-white border-white/50 hover:bg-none bg-linear-to-r from-cyan-400/70 to-lime-300/70'>Hire Me</a></li>
                <li className='md:flex hidden '><a href="" className='border rounded-lg py-2 px-4 hover:border-white hover:bg-linear-to-r from-cyan-400/70 to-lime-300/70 bg-clip-border border-white/50 bg-transparent'>Resume</a></li>
                <li className='flex-none rounded-lg border  mx-auto items-center hover:border-white border-white/50'>
                    <button onClick={handleNav} className='py-2.5 px-3'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </button>
                </li>                
            </ul>

            <ul
                className={
                nav

                    ? 'fixed w-screen h-screen bg-black/90 left-0 right-0 top-0 backdrop-blur-lg text-white transition-all duration-500'
                    : 'fixed w-full h-0 bg-transparent left-0 right-0 top-[-1000%] backdrop-blur-lg text-white transition-all duration-500'
                }
            >

            <div className="flex justify-between items-center py-2 px-10">
            <a href="#" className='py-2 text-4xl'>
                KANZ
            </a>

            <ul className='inline-flex space-x-3 items-center py-2'>
                <li className='flex'><a href="" className='border rounded-lg py-1.5 px-3'>Hire Me</a></li>
                <li className='flex'><a href="" className='border rounded-lg py-1.5 px-3'>Resume</a></li>
                <li className='flex-none rounded-lg border py-2 px-2'>
                    <a onClick={handleNav} className='mx-auto items-center'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </a>
                </li>                
            </ul>
            </div>
            <div className="flex py-5 mt-10">
                <ul className='flex-col mx-auto space-y-8 text-center text-xl'>
                    {navItems.map(item => (
                    <li
                        key={item.id}
                        className=''
                    >
                        {item.text}
                    </li>
                    ))}
                </ul>
            </div>
        </ul>
    </div>
</div>
  );
};

export default Navbar