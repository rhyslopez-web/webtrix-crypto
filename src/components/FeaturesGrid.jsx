import React from 'react'
import GridBlock from './GridBlock'
import { IoMdAnalytics } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import Chart from '../assets/Chart.png'
import Security from '../assets/Security.svg'
import Economy from '../assets/Economy.png'
import CreditCard from '../assets/CreditCard.png'
import Card2 from '../assets/Card2.png'
import CardMobile from '../assets/CardMobile.png'
import { motion } from "framer-motion"


const FeaturesGrid = () => {
  return (
    <motion.div 
    initial='initial'
    animate='animate'
    transition={{
      staggerChildren: 0.05
    }}
    className='grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto px-3 lg:max-w-7xl grid-flow-dense text-white'>        
      <AnalyticsBlock/>
      <SecurityBlock/>
      <EcosystemBlock/>
      <CurrencyBlock/>
    </motion.div>
  )
}

export default FeaturesGrid

const AnalyticsBlock = () => {
  return(
    <GridBlock
    whileHover={{
      rotate: '2.5deg',
    }}
    className='lg:col-span-7 flex flex-col gap-5'>
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

          <img src={Chart} alt="" className='opacity-90 '/>
        </div>       
      </div>
    </GridBlock>
  )
}

const SecurityBlock = () => {
  return(
    <GridBlock
    whileHover={{
      rotate: '2.5deg',
    }}
    className='lg:col-span-5 flex flex-col lg:justify-between gap-14 lg:gap-5'>
      
      <div className='flex flex-col items-start lg:items-end gap-5 lg:gap-5'>
        <div className='h-14 w-14 p-2 flex justify-center items-center bg-transparent border border-neutral-700 rounded-xl backdrop-blur-xl'>
          <MdSecurity size='50' /> 
        </div>

        
        <h3 className='text-2xl lg:text-3xl lg:w-5/6 lg:text-end'>
        Advanced encryption and multi-layered security
        </h3>

        <p className='lg:w-4/6 lg:text-end font-light'>
        to protect your assets and personal information from threats
        </p>
      </div>

      <div className='flex justify-center lg:justify-start'>
        <img src={Security} alt="" className='w-1/2 lg:ml-5 lg:mb-5 ' />
      </div>
    </GridBlock>
  )
}

const EcosystemBlock = () => {
  return(
    <GridBlock
    whileHover={{
      rotate: '2.5deg',
    }}
    className='lg:col-span-5 flex flex-col gap-5'>
      <div className='flex justify-center'>
        <img src={Economy} alt="" className='w-4/6' />
      </div>
      <div className='h-14 w-14 p-2 flex justify-center items-center bg-transparent border border-neutral-700 rounded-xl backdrop-blur-xl'>
        <IoMdPeople size='50' /> 
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl lg:text-3xl '>Ecosystem and Partnerships</h3>
        <p className='font-light lg:w-5/6'>
          Fostering a thriving ecosystem through partnerships, community engagement, and support for innovation.        
        </p>
      </div>

    </GridBlock>
  )
}

const CurrencyBlock = () => {
  return(
    <GridBlock
    whileHover={{
      rotate: '2.5deg',
    }}
    className='lg:col-span-7 lg:p-0 flex flex-col gap-5'>
      <div className='lg:p-10 flex flex-col items-start lg:items-end gap-5'>
        <div className='h-14 w-14 p-2 flex justify-center items-center bg-transparent border border-neutral-700 rounded-xl backdrop-blur-xl'>
          <CiCreditCard2 size='50' /> 
        </div>

        <h3 className='text-2xl lg:text-3xl lg:w-4/6 lg:text-end'>
          Manage and trade a wide range of cryptocurrencies from a single platform.
        </h3>
      </div>

      {/* Image Desktop */}
      <div className='lg:pb-10 hidden lg:flex gap-5 overflow-hidden'>
        <img src={CreditCard} alt="" className='w-3/6'/>
      </div>
      
      {/* Image Mobile */}
      <div className='lg:pb-10 lg:hidden gap-5 overflow-hidden order-first'>
        <img src={CardMobile} alt="" className=''/>
      </div>
    </GridBlock>
  )
}

