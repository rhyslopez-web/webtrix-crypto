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
                            All-in-One Web3 ALM Dashboard
                        </MainHeading>

                        <p className='font-light text-neutral-200'>
                            Our all-in-one platform provides a seamless and secure solution for comprehensive Web3
                            Asset & Liability Management, empowering you to optimize your financial operations in the
                            decentralized economy
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