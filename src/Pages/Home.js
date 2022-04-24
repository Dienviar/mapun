import React from 'react'
import HomeLanding from '../Components/Home/HomeLanding'
import CityStatistics from '../Components/Home/CityStatistics'
import CityDetails from '../Components/Home/CityDetails'
import LatestNews from '../Components/Home/LatestNews'

const Home = () => {
  return (
    <main className='relative w-full h-auto'>
      <HomeLanding/>
      <CityStatistics/>
      <CityDetails/>
      <LatestNews/>
    </main>
  )
}

export default Home