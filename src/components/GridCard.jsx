import React from 'react'

const GridCard = ({title, children, icon, image, secondImage}) => {
  return (
    <>
        <div className='w-full h-full bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-14 overflow-hidden'>
            <div className='flex gap-5'>
                <div id='icon-wrapper' className='p-3 h-14 w-14 bg-neutral-900 rounded-lg '>
                    <img src={icon} alt="" />
                </div>

                <div id='' className='flex flex-col gap-3 w-5/6'>
                    <h3 className='text-white text-2xl'>
                        {title}
                    </h3>

                    <p className='text-neutral-200 font-light te'>
                        {children}
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-nowrap justify-end'>
                <img src={image} alt="" className='w-1/2'/>
                {/* <img src={secondImage} alt="" className='w-1/2'/> */}
            </div>
        </div>
    </>
  )
}

export default GridCard