import React from 'react'
import TickerItem from './TickerItem'
import constants from '../constants'
import Slider from 'react-infinite-logo-slider'

const Ticker = () => {
  return (
    <div className=''>
        <Slider
        width="250px"
        duration={40}
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