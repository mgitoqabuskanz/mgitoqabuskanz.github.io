import { BriefcaseBusinessIcon, FolderGitIcon, HomeIcon, HouseIcon, Link, MedalIcon, User2Icon, UserCog2Icon } from 'lucide-react'
import React from 'react'

const links = [
    { link: "Home", section: "home" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1">
            {links.map((link,index)=>{
                return <li key={index} className="group">
                    <a 
                        href="#"
                        className="cursor-pointer hover:text-white transition-all duration-500"
                    >
                        {link.link}
                    </a>
                </li>
            })}
            {/* <HouseIcon size={16} />
            <MedalIcon size={16} />  
            <BriefcaseBusinessIcon size={16} />  
            <FolderGitIcon size={16} />
            <User2Icon size={16} /> */}
        </ul>
    </div>
  )
}

export default NavbarLinks