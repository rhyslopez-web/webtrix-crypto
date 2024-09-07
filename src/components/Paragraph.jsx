import React from 'react'

const Paragraph = ({children}) => {
  return (
    <div className='text-neutral-500  lg:text-center z-10'>
        {children}
    </div>
  )
}

export default Paragraph