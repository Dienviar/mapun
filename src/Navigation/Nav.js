import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({pathname, openMunicipality, setOpenMunicipality, openGovernment, setOpenGovernment }) => {
  return (
    <article className='absolute right-0 flex items-center w-auto h-full text-white drop-shadow-xl'>
        <NavLink to="/mapun" className={`${pathname === "/" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Home</NavLink>

        <NavLink to="/department" className={`${pathname === "/department" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Department</NavLink>

        <NavLink to="/about" className={`${pathname === "/about" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>About</NavLink>

        <NavLink to="/services" className={`${pathname === "/services" ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>Services</NavLink>

        <div onMouseLeave={() => setOpenMunicipality(false)} onMouseEnter={() => setOpenMunicipality(true)} className='w-auto h-full'>
            <div className='flex items-center justify-center w-full h-full duration-300 cursor-pointer'>
                <p className={`${openMunicipality ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>
                    {
                        pathname === "/municipality/economy" ? <span className='px-3 currentPage'>Economy</span>
                        : pathname === "/municipality/tourism" ? <span className='px-3 currentPage'>Tourism</span>
                        : pathname === "/municipality/education" ? <span className='px-3 currentPage'>Education</span>
                        : pathname === "/municipality/mapunday" ? <span className='px-3 currentPage'>Mapun Day</span>
                        : "Municipality"
                    }
                </p>
            </div>

            <div className={`relative w-full ${openMunicipality ? 'h-80 duration-300' : 'h-0 duration-0'} bg-rgba_black_05`}>
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
            <div className='flex items-center justify-center w-full h-full duration-300 cursor-pointer'>
                <p className={`${openGovernment ? 'currentPage' : 'relative navHover'} relative h-full flex items-center px-5`}>
                    {
                    pathname === "/government/officials" ? <span className='px-3 currentPage'>Officials</span>
                    : pathname === "/government/barangay" ? <span className='px-3 currentPage'>Barangay</span>
                    : "Government"
                    }
                </p>
            </div>

            <div className={`relative w-full ${openGovernment ? 'h-40 duration-300' : 'h-0 duration-0'} bg-rgba_black_05`}>
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
    </article>
  )
}

export default Nav