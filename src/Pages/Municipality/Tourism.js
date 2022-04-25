import React, { useEffect } from 'react'
import TourismLanding from '../../Components/Municipality/Tourism/TourismLanding'
import TourisSpotList from '../../Components/Municipality/Tourism/TourisSpotList'

const Tourism = () => {

    document.title = "Tourism"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto -mt-20'>
      <TourismLanding/>
      <TourisSpotList/>
    </main>
  )
}

export default Tourism