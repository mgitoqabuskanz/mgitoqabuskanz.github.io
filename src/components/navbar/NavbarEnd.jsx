import { ClipboardPenIcon, MenuIcon } from 'lucide-react'
import React from 'react'

const links = [
    { link: "Home", section: "home" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarEnd = () => {
  return (
    <div className="navbar-end">
        <a href='contact' className="btn border-amber-600 bg-transparent hover:bg-base-content hover:text-black">
            <ClipboardPenIcon size={16} />
            Hire Me!
        </a>


        <div className="dropdown dropdown-bottom dropdown-end ml-2">
            <a tabIndex={0} role="button" className="btn btn-ghost hover:border-amber-600 hover:bg-base-content hover:text-black lg:hidden md:hidden">
                <MenuIcon/>
            </a>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 w-screen">
            {links.map((link,index)=>{
                return <li key={index} className="cursor-pointer p-2 bg-base-100 opacity-95 hover:text-black hover:bg-base-content hover:opacity-100 transition-all duration-500 ml-4">
                    <a href={link.section} className='p-2'>
                        <div className="hover:bg-transparent mx-auto text-center">{link.link}</div>
                    </a>
                </li>
            })}
        </ul>
        </div>
    </div>
  )
}

export default NavbarEnd