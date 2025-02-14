import { ClipboardPenIcon, MenuIcon } from 'lucide-react'
import React from 'react'

const links = [
    { link: "Home", section: "home" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarBtn = () => {
  return (
    <div className="navbar-end">
        <a className="btn border-amber-600 bg-transparent hover:bg-base-content hover:text-black">
            <ClipboardPenIcon size={16} />
            Hire Me!
        </a>


        <div className="dropdown dropdown-bottom dropdown-end ml-2">
            <button tabIndex={0} role="button" className="btn btn-ghost hover:border-amber-600 hover:bg-base-content hover:text-black lg:hidden md:hidden">
                <MenuIcon/>
            </button>
            <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 w-screen">
                { links.map ((link,index) => {
                    return (
                        <div className="cursor-pointer p-2 hover:text-white hover:bg-base-300 transition-all duration-500">
                            <li key={index}>
                                <button href="#" className="mx-auto hover:bg-transparent">
                                    {link.link}
                                </button>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default NavbarBtn