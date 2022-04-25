import React, { useEffect } from 'react'
import EconomyLanding from '../../Components/Municipality/Economy/EconomyLanding'
import EconomyDetails from '../../Components/Municipality/Economy/EconomyDetails'
import FactsandFigure from '../../Components/Municipality/Economy/FactsandFigure'

const Economy = () => {

    document.title = "Economy"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto -mt-20'>
      <EconomyLanding/>
      <EconomyDetails/>
      <FactsandFigure/>
    </main>
  )
}

export default Economy