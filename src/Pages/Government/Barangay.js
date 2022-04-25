import React, { useEffect } from 'react'
import BarangayLanding from '../../Components/Government/Barangay/BarangayLanding'
import BarangayList from '../../Components/Government/Barangay/BarangayList'

const Barangay = () => {
    document.title = "Barangays"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <BarangayLanding/>
      <BarangayList/>
    </main>
  )
}

export default Barangay