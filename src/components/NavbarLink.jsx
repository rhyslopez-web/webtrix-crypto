import React from 'react'

const NavbarLink = ({children}) => {
  return (
    <>
        <a href="" 
        className='text-base text-neutral-300 
        hover:text-neutral-100 transition
        ease-in-out 
        '>
          {children}
        </a>
    </>
  )
}

export default NavbarLink