import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from "framer-motion"

const GridBlock = ({className, ...rest}) => {
  return (
    <motion.div
    variants={{
      initial: {
        scale: 0.5,
        y: 50,
        opacity: 0
      },
      animate: {
        scale: 1,
        y: 0,
        opacity: 1
      },
    }}
    transition={{
      type: 'spring',
      mass: 3,
      stiffness: 400,
      damping: 50,
      ease: 'easeInOut',
      duration: 1
    }}
    className={twMerge(
        'col-span-12 rounded-3xl border border-zinc-700 bg-gradient-to-br from-neutral-800 via-neutral-950 via-60% to-neutral-900 p-5 lg:p-10',
        className
    )}
    {...rest}
    />
  )
}

export default GridBlock