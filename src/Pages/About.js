import React from 'react'
import AboutLanding from '../Components/About/AboutLanding'
import MapunMap from '../Components/About/MapunMap'
import AboutMapun from '../Components/About/AboutMapun'

const About = () => {
  return (
    <main className='relative w-full h-auto'>
      <AboutLanding/>
      <MapunMap/>
      <AboutMapun/>
    </main>
  )
}

export default About