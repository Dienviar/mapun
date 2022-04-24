import React from 'react'
import AboutLanding from '../Components/About/AboutLanding'
import MapunMap from '../Components/About/MapunMap'
import AboutMapun from '../Components/About/AboutMapun'
import History from '../Components/About/History'

const About = () => {
  return (
    <main className='relative w-full h-auto'>
      <AboutLanding/>
      <MapunMap/>
      <AboutMapun/>
      <History/>
    </main>
  )
}

export default About