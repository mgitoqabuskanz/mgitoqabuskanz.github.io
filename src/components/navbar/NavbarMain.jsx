import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'

const NavbarMain = () => {
  return (
    <>
        <div className="navbar bg-base-100 shadow-sm">
            <NavbarLogo/>
            <NavbarLinks/>
            <NavbarBtn/>
        </div>
    </>
  )
}

export default NavbarMain