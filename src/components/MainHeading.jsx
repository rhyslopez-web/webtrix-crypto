import React from 'react'
import { twMerge } from 'tailwind-merge'

const MainHeading = ({className, children}) => {
  return (
    <h1 className={twMerge('text-neutral-200 text-2xl lg:text-5xl leading-normal mb-5 z-10', className)}>
        {children}
    </h1>
  )
}

export default MainHeading