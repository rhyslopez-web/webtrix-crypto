import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import overlay from '../assets/overlay.jpg'
import Spline from '@splinetool/react-spline'
import ParticlesBackground from './ParticlesBackground'

const HeroSection = () => {
  return (
    <>
        <div className='h-screen flex flex-col items-start lg:items-center justify-center p-5 lg:px-20 gap-14 bg-transparent relative'>
            <div className='flex flex-col justify-center items-center max-w-4xl lg:px-10'> 
              <MainHeading>Revolutionize Your Transactions With Secure Blockchain Solutions</MainHeading>

              <Paragraph>
                  Experience the future of digital transactiolns with our state of the art blockchain technology.
                  Our secure, decentralized platform ensures every transaction is transparent, immutable, and protected
                  against fraud.            
              </Paragraph>
            </div>

            <SecondaryButton>Get Started</SecondaryButton>

            <ParticlesBackground/>
        </div>
    </>
  )
}

export default HeroSection