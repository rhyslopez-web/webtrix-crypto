import React from 'react'
import MainHeading from './MainHeading'
import SecondaryButton from './SecondaryButton'
import Pool from '../assets/Pool.png'

const PoolsSection = () => {
  return (
    <div className='flex justify-center p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10 max-w-7xl'>
            <div className='flex justify-end'>
                <img src={Pool} alt=""  className=''/>
            </div>

            <div className='flex flex-col justify-center items-end'>
                <div className='lg:w-5/6 flex flex-col gap-10'>
                    <div className=''>
                        <MainHeading>
                            Supply Liquidity to Leading Pools
                        </MainHeading>

                        <p className='font-light text-neutral-200'>
                            By contributing your assets to these high-performing pools, you can earn competitibve rewards
                            while supporting the growth and stability of the ecosystem
                        </p>
                    </div>

                    <div>
                        <SecondaryButton>Explore top pools</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PoolsSection