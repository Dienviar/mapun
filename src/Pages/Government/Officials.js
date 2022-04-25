import React, { useEffect } from 'react'
import OfficialsLanding from '../../Components/Government/Officials/OfficialsLanding'
import Congressman from '../../Components/Government/Officials/Congressman'
import Mayor from '../../Components/Government/Officials/Mayor'
import ViceMayor from '../../Components/Government/Officials/ViceMayor'
import Councilors from '../../Components/Government/Officials/Councilors'

const Officials = () => {
    document.title = "Officials"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <OfficialsLanding/>
      <Congressman/>
      <Mayor/>
      <ViceMayor/>
      <Councilors/>
    </main>
  )
}

export default Officials