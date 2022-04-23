import React from 'react'
import HomeLanding from '../Components/Home/HomeLanding'
import CityStatistics from '../Components/Home/CityStatistics'

const Home = () => {
  return (
    <main className='relative w-full h-auto'>
      <HomeLanding/>
      <CityStatistics/>
    </main>
  )
}

export default Home