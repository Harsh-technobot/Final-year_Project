import React from 'react'
import PopularServices from './components/PopularServices'
import FeaturedProfessionals from './components/FeaturedProfessional'
import HowItWorks from './components/HowitWorks'

const JobPortal = () => {
  return (
    <div className='space-y-20'>
        <PopularServices/>
        <FeaturedProfessionals/>
        <HowItWorks/>
    </div>
  )
}

export default JobPortal