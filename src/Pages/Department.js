import React, { useEffect } from 'react'
import LandingDepartment from '../Components/Department/LandingDepartment'

const Department = () => {

    document.title = "Department"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <LandingDepartment/>
    </main>
  )
}

export default Department