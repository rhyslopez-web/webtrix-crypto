import React from 'react'

const SecondaryButton = ({children}) => {
  return (
    <button className='px-14 py-2 rounded-full bg-neutral-200 font-medium hover:bg-transparent border 
    hover:text-neutral-300 transition ease-in-out z-10 duration-200'
    >
        {children}
    </button>
)
}

export default SecondaryButton