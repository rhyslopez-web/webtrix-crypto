import React from 'react'
import MainHeading from './MainHeading'
import Paragraph from './Paragraph'
import SecondaryButton from './SecondaryButton'
import GridBlock from './GridBlock'

const Faqs = () => {
  return (
    <div className='flex justify-center'>
      <GridBlock className=''>
        <div className='flex flex-col justify-center lg:items-center gap-10 lg:px-10'>        
            <div className='flex flex-col lg:w-5/6 lg:text-center'>
              <MainHeading>
                Have a Question?
                <br/>
                We've Got Your Answers. 
              </MainHeading>

              <div className='flex justify-center'>
                <p className='text-neutral-200 lg:w-4/6 font-light'>
                  Confused or curious? Don't worry-we've got you covered. Our comprehensive FAQ section is here to provide clear, straightforward
                  answers to all your questions.
                </p>
              </div>
            </div>
        
            <div className=''>
              <SecondaryButton>Read More</SecondaryButton>
            </div>
        </div>
      </GridBlock>
    </div>
  )
}

export default Faqs