import React from 'react'

const TickerItem = ({image}) => {
  return (
    <div className='p-10 text-white flex justify-center backdrop-blur rounded-2xl border border-neutral-700'>
        <img src={image} alt="" className='invert grayscale opacity-90 h-10'/>
    </div>
  )
}

export default TickerItem