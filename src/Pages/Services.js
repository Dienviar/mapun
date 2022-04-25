import React, { useEffect } from 'react'
import ServicesLanding from '../Components/Services/ServicesLanding'
import MapunServices from '../Components/Services/MapunServices'

const Services = () => {

    document.title = "Services"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <ServicesLanding/>
      <MapunServices/>
    </main>
  )
}

export default Services