import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import Portfolio from '../assets/Portfolio.png'

const DashboardSection = () => {
  return (
    <div className='flex justify-center p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10 max-w-7xl'>
            <div className='flex flex-col justify-center gap-10'>
                <div className='lg:w-5/6'>
                    <MainHeading>
                        All-in-One Web3 ALM Dashboard
                    </MainHeading>

                    <p className='font-light text-neutral-200'>
                        Our all-in-one platform provides a seamless and secure solution for comprehensive Web3
                        Asset & Liability Management, empowering you to optimize your financial operations in the
                        decentralized economy
                    </p>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <SecondaryButton>
                        Manage your position
                    </SecondaryButton>
                </div>
            </div>

            <div className='flex justify-end lg:order-last order-first'>
                <img src={Portfolio} alt=""  className='lg:w-5/6'/>
            </div>
        </div>
    </div>
  )
}

export default DashboardSection