import React from 'react'
import { twMerge } from 'tailwind-merge'

const GridBlock = ({className, ...rest}) => {
  return (
    <div className={twMerge(
        'col-span-12 rounded-lg border border-zinc-700 bg-gradient-to-br from-neutral-800 via-neutral-950 via-60% to-neutral-900 p-5 lg:p-10',
        className
    )}
    {...rest}
    />
  )
}

export default GridBlock