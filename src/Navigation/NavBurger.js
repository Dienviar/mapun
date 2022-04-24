import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBurger = ({open, pathname, openMunicipality, setOpenMunicipality, openGovernment, setOpenGovernment}) => {
  return (
    <article className={`fixed ${open ? 'left-0' : '-left-1000px '} flex justify-center top-20 w-full h-570px bg-black duration-300 overflow-y-auto`}>
        <div className='w-full h-auto'>
            <div className='flex items-center w-full h-20'>
                <NavLink to="/" className={`${pathname === "/" ? 'currentPage' : 'relative navHover'} relative text-xl text-white w-full h-full flex items-center px-5`}>Home</NavLink>
            </div>

            <div className='flex items-center w-full h-20'>
               <NavLink to="/about" className={`${pathname === "/about" ? 'currentPage' : 'relative navHover'} relative text-xl text-white w-full h-full flex items-center px-5`}>About</NavLink>
            </div>

            <div className='flex items-center w-full h-20'>
                <NavLink to="/news" className={`${pathname === "/news" ? 'currentPage' : 'relative navHover'} relative text-xl text-white w-full h-full flex items-center px-5`}>News</NavLink>
            </div>
            
            <div className='flex items-center w-full h-20'>
                <NavLink to="/services" className={`${pathname === "/services" ? 'currentPage' : 'relative navHover'} w-full text-xl text-white relative h-full flex items-center px-5`}>Services</NavLink>
            </div>

            <div onClick={() => setOpenMunicipality(!openMunicipality)} className={`w-full ${openMunicipality ? 'h-auto py-5' : 'h-20 py-0'} `}>
                <div className='flex items-center justify-center w-full h-full duration-300 cursor-pointer'>
                    <p className={`${openMunicipality ? 'p-5' : 'relative navHover'} text-xl text-white w-full relative h-full flex items-center px-5`}>
                        {
                            pathname === "/municipality/economy" ? <span className='px-3 currentPage'>Economy</span>
                            : pathname === "/municipality/tourism" ? <span className='px-3 currentPage'>Tourism</span>
                            : pathname === "/municipality/education" ? <span className='px-3 currentPage'>Education</span>
                            : pathname === "/municipality/mapunday" ? <span className='px-3 currentPage'>Mapun Day</span>
                            : "Municipality"
                        }
                    </p>
                </div>

                <div className={`relative w-full ${openMunicipality ? 'h-80 bg-red' : 'h-0 bg-none'} duration-300`}>
                    <div className={`w-full h-auto ${openMunicipality ? 'visible' : 'invisible'}`}>
                        <NavLink to="/municipality/economy" 
                        className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white px-5 flex items-center
                        ${pathname === "/municipality/economy" ? 'currentPage' : 'relative navHover'}`}>Economy</NavLink>
                        
                        <NavLink to="/municipality/tourism" 
                        className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white px-5 flex items-center
                        ${pathname === "/municipality/tourism" ? 'currentPage' : 'relative navHover'}`}>Tourism</NavLink>

                        <NavLink to="/municipality/education" 
                        className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white px-5 flex items-center
                        ${pathname === "/municipality/education" ? 'currentPage' : 'relative navHover'}`}>Education</NavLink>

                        <NavLink to="/municipality/mapunday" 
                        className={`relative w-full ${openMunicipality ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white px-5 flex items-center
                        ${pathname === "/municipality/mapunday" ? 'currentPage' : 'relative navHover'}`}>Mapun Day</NavLink>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenGovernment(!openGovernment)} className={`w-full ${openGovernment ? 'h-auto py-5' : 'h-20 py-0'} `}>
                <div className='flex items-center justify-center w-full h-full duration-300 cursor-pointer'>
                    <p className={`${openGovernment ? 'p-5' : 'relative navHover'} text-xl text-white w-full relative h-full flex items-center px-5`}>
                        {
                            pathname === "/government/officials" ? <span className='px-3 currentPage'>Officials</span>
                            : pathname === "/government/barangay" ? <span className='px-3 currentPage'>Barangay</span>
                            : "Government"
                        }
                    </p>
                </div>

                <div className={`relative w-full ${openGovernment ? 'h-40 bg-red' : 'h-0 bg-none'} duration-300`}>
                    <div className={`w-full h-auto ${openGovernment ? 'visible' : 'invisible'}`}>
                        <NavLink to="/government/officials" 
                        className={`relative w-full ${openGovernment ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white w-full px-5 flex items-center
                        ${pathname === "/government/officials" ? 'currentPage' : 'relative navHover'}`}>Officials</NavLink>
                        
                        <NavLink to="/government/barangay" 
                        className={`relative w-full ${openGovernment ? 'h-20 duration-300' : 'h-0 duration-0'} text-xl text-white w-full px-5 flex items-center 
                        ${pathname === "/government/barangay" ? 'currentPage' : 'relative navHover'}`}>Barangay</NavLink>
                    </div>
                </div>
            </div>

            <div className='flex items-center w-full h-20'>
                <NavLink to="/contact" className={`${pathname === "/contact" ? 'currentPage' : 'relative navHover'} relative text-xl text-white w-full h-full flex items-center px-5`}>Contact</NavLink>
            </div>
        </div>
    </article>
  )
}

export default NavBurger