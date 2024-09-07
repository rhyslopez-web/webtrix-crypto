import React from 'react'
import GridBlock from './GridBlock'
import { IoMdAnalytics } from "react-icons/io";
import Chart from '../assets/Chart.png'
import { MdSecurity } from "react-icons/md";
import Security from '../assets/Security.svg'

const FeaturesGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 mx-auto px-3 lg:max-w-7xl grid-flow-dense text-white'>        
      <AnalyticsBlock/>
      <SecurityBlock/>
    </div>
  )
}

export default FeaturesGrid

const AnalyticsBlock = () => {
  return(
    <GridBlock className='lg:col-span-7 flex flex-col gap-5'>
      <div className='flex lg:flex-row flex-col gap-5'>
        <div className='h-14 w-14 p-2 flex justify-center items-center bg-transparent border border-neutral-700 rounded-xl backdrop-blur-xl'>
          <IoMdAnalytics size='50' /> 
        </div>

        <div className='flex flex-col gap-5 lg:w-5/6 w-full'>
          <div className='flex flex-col gap-3 bg-gradient-to-br from-neutral-800 via-neutral-950 via-60% to-neutral-900 bg-clip-text'>
            <h3 className='text-3xl'>
              Real-time Analytics
            </h3>

            <p className='font-light text-base'>
            Gain insights with our comprehensive real-time analytics. Track market trends, monitor portfolio performance, and make data driven decisions with ease.
            </p>
          </div>

          <img src={Chart} alt="" className='opacity-90 w-full'/>
        </div>       
      </div>
    </GridBlock>
  )
}

const SecurityBlock = () => {
  return(
    <GridBlock className='lg:col-span-5 flex flex-col lg:justify-between gap-10 lg:gap-5'>
      
      <div className='flex flex-col items-end gap-2 lg:gap-5'>
        {/* <div className='h-14 w-14 p-2 flex justify-center items-center bg-transparent border border-neutral-700 rounded-xl backdrop-blur-xl'>
          <MdSecurity size='50' /> 
          </div> */}

        <h3 className='text-2xl lg:text-3xl lg:w-5/6 lg:text-end'>
        Advanced encryption and multi-layered security
        </h3>

        <p className='lg:w-4/6 lg:text-end'>
        to protect your assets and personal information from threats
        </p>
      </div>

      <img src={Security} alt="" className='w-1/2 lg:ml-5 lg:mb-5' />
    </GridBlock>
  )
}


