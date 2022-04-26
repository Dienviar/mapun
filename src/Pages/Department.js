import React, { useEffect } from 'react'
import LandingDepartment from '../Components/Department/LandingDepartment'
import DepartmentList from '../Components/Department/DepartmentList'

const Department = () => {

    document.title = "Department"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <LandingDepartment/>
      <DepartmentList/>
    </main>
  )
}

export default Department