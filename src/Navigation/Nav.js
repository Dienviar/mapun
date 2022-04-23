import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({pathname, openMunicipality, setOpenMunicipality, openGovernment, setOpenGovernment }) => {
  return (
    <div className='absolute right-0 w-auto h-full bg-green-500 flex items-center'>
        <NavLink to="/" className={`${pathname === "/" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Home</NavLink>

        <NavLink to="/about" className={`${pathname === "/about" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>About</NavLink>

        <NavLink to="/news" className={`${pathname === "/news" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>News</NavLink>

        <NavLink to="/services" className={`${pathname === "/services" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Services</NavLink>

        <div onMouseLeave={() => setOpenMunicipality(false)} onMouseEnter={() => setOpenMunicipality(true)} className='w-auto h-full'>
            <div className='w-full h-full flex justify-center items-center cursor-pointer duration-300'>
                <p className={`${openMunicipality ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>
                    {
                    pathname === "/municipality/economy" ? <span className='currentPage px-3'>Economy</span>
                    : pathname === "/municipality/tourism" ? <span className='currentPage px-3'>Tourism</span>
                    : pathname === "/municipality/education" ? <span className='currentPage px-3'>Education</span>
                    : pathname === "/municipality/mapunday" ? <span className='currentPage px-3'>Mapun Day</span>
                    : "Municipality"
                    }
                </p>
            </div>

            <div className={`relative w-full ${openMunicipality ? 'h-80 duration-300' : 'h-0 duration-0'} bg-red-500`}>
                <div className={`w-full h-auto ${openMunicipality ? 'visible' : 'invisible'}`}>
                    <NavLink to="/municipality/economy" 
                    className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/municipality/economy" ? 'currentPage' : 'relative navHover'}`}>Economy</NavLink>
                    
                    <NavLink to="/municipality/tourism" 
                    className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/municipality/tourism" ? 'currentPage' : 'relative navHover'}`}>Tourism</NavLink>

                    <NavLink to="/municipality/education" 
                    className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/municipality/education" ? 'currentPage' : 'relative navHover'}`}>Education</NavLink>

                    <NavLink to="/municipality/mapunday" 
                    className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/municipality/mapunday" ? 'currentPage' : 'relative navHover'}`}>Mapun Day</NavLink>
                </div>
            </div>
        </div>

        <div onMouseLeave={() => setOpenGovernment(false)} onMouseEnter={() => setOpenGovernment(true)} className='w-auto h-full'>
            <div className='w-full h-full flex justify-center items-center cursor-pointer duration-300'>
                <p className={`${openGovernment ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>
                    {
                    pathname === "/government/officials" ? <span className='currentPage px-3'>Officials</span>
                    : pathname === "/government/barangay" ? <span className='currentPage px-3'>Barangay</span>
                    : "Government"
                    }
                </p>
            </div>

            <div className={`relative w-full ${openGovernment ? 'h-40 duration-300' : 'h-0 duration-0'} bg-red-500`}>
                <div className={`w-full h-auto ${openGovernment ? 'visible' : 'invisible'}`}>
                    <NavLink to="/government/officials" 
                    className={`relative w-full ${openGovernment ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/government/officials" ? 'currentPage' : 'relative navHover'}`}>Officials</NavLink>
                    
                    <NavLink to="/government/barangay" 
                    className={`relative w-full ${openGovernment ? 'h-20 duration-300' : 'h-0 duration-0'} px-5 flex items-center justify-center 
                    ${pathname === "/government/barangay" ? 'currentPage' : 'relative navHover'}`}>Barangay</NavLink>
                </div>
            </div>
        </div>

          <NavLink to="/contact" className={`${pathname === "/contact" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Contact</NavLink>
    </div>
  )
}

export default Nav