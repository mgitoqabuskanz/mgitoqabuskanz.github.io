import React from 'react'
import Home from '../content/Home';
import Skills from '../content/Skills';

const links = [
    { link: "Home", section: "home" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarCenter = () => {
  return (
    <div className=" navbar-center hidden lg:flex md:flex transition-all duration-300">
        <ul className="menu menu-horizontal px-1">
            {links.map((link,index)=>{
                return <li key={index}>
                    <a href={link.section} className="cursor-pointer hover:text-white transition-all duration-500">
                        {link.link}
                    </a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavbarCenter