import React from 'react'
import TickerItem from './TickerItem'
import constants from '../constants'
import Slider from 'react-infinite-logo-slider'
import SecondaryHeading from './SecondaryHeading'
import HeadingPill from './HeadingPill'

const Ticker = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='px-5 lg:p-0'>
        <HeadingPill>Our Partners</HeadingPill>

        <SecondaryHeading>
          Leading the Way in Crypto Trust with Webtrix
        </SecondaryHeading>
      </div>


        <Slider
        width="250px"
        duration={40}
        // blurBorders={true}
        // blurBoderColor={'#000000'}
        >

            {constants.map((sponsor, index) => (
                <Slider.Slide>
                    <TickerItem key={index} image={sponsor.url}/>
                </Slider.Slide>
            ))}
        </Slider>
    </div>

  )
}

export default Ticker