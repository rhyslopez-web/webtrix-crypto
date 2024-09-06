import React from 'react'
import GridCard from './GridCard'
import CarbonAnalytics from '../assets/CarbonAnalytics.svg'
import CarbonSecurity from '../assets/CarbonSecurity.svg'
import Chart from '../assets/Chart.png'

const FeaturesGrid = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
        <div className='px-72 grid grid-cols-3 gap-5'>
            <div className='col-span-2'>
              <GridCard
              title='Real-time Analytics'
              icon={CarbonAnalytics}
              image={Chart}
              secondImage={Chart}
              >
                Gain insights with our comprehensive real-time analytics. Track market trends, monitor portfolio performance, and make data driven decisions with ease.
              </GridCard>
            </div>

            <div className='col-span-1'>
                <GridCard
                title='Advanced Security'
                icon={CarbonSecurity}
                >
                  Webtrix uses advanced encryption and multi-layered securrity to protect your assets and personal information from threats
                </GridCard>
            </div>

            <div className='col-span-1'>
                <GridCard
                title='Ecosystem & Partnerships'
                icon={CarbonSecurity}
                >
                  Fosters a thriving ecosystem through strategic partnerships, community enggagement, and support for innovatice projects.
                </GridCard>
            </div>

            <div className='col-span-2'>
                <GridCard
                title='Multi-Currency Support'
                icon={CarbonSecurity}
                >
                  Manage and trade a wide range of cryptocurrencies from a single platform. Webtrix supports all major digital currencies, providing you with a comprehensive trading experience.
                </GridCard>
            </div>
        </div>
    </div>
  )
}

export default FeaturesGrid