import React from 'react'

const MainHeading = ({children}) => {
  return (
    <h1 className='text-neutral-200 text-5xl text-center leading-normal mb-5 z-10'>
        {children}
    </h1>
  )
}

export default MainHeading