import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex justify-center w-full h-450px mt-60 bg-blue screen550px:h-680px select-none'>
        <section className='flex w-1000px h-300px px-3 screen950px:grid screen950px:grid:h-auto my-10'>
            <article className='w-full h-full flex justify-center items-center screen950px:mb-10'>
              <div className='w-full h-full'>
                <div className='w-full h-auto flex justify-start items-center screen950px:justify-center'>
                  <img src={require('../asset/Logo/mapun_logo.png')} alt="Mapun Logo" className='w-20 h-full pointer-events-none' />
                </div>

                <div className='w-full h-auto mt-5'>
                  <p className='text-white text-lg screen950px:text-center'>Municipality of Mapun, Tawi-Tawi</p>
                  <p className='text-white text-lg screen950px:text-center'>+0012345678</p>
                  <p className='text-white text-lg screen950px:text-center'>hello@mapun.com</p>
                </div>
              </div>
            </article>

            <article className='w-full h-full flex justify-center items-center'>
                <div className='w-full h-auto flex screen550px:grid'>
                  <div className='w-full h-auto grid'>
                    <NavLink to="/" className='text-white text-xl hover:text-red duration-300'>Home</NavLink>
                    <NavLink to="/about" className='text-white text-xl hover:text-red duration-300'>About</NavLink>
                    <NavLink to="/services" className='text-white text-xl hover:text-red duration-300'>Services</NavLink>
                    <NavLink to="/contact" className='text-white text-xl hover:text-red duration-300'>Contact</NavLink>
                  </div>

                  <div className='w-full h-auto grid screen550px:mt-5'>
                    <p className='text-xl font-semibold text-yellow-200'>Municipality</p>
                    <NavLink to="/municipality/economy" className='text-white text-xl hover:text-red duration-300'>Economy</NavLink>
                    <NavLink to="/municipality/tourism" className='text-white text-xl hover:text-red duration-300'>Tourism</NavLink>
                    <NavLink to="/municipality/education" className='text-white text-xl hover:text-red duration-300'>Education</NavLink>
                    <NavLink to="/municipality/mapunday" className='text-white text-xl hover:text-red duration-300'>Mapun Day</NavLink>
                  </div>

                  <div className='w-full h-auto grid screen550px:mt-5'>
                    <p className='text-xl font-semibold  text-yellow-200'>Government</p>
                    <NavLink to="/government/officials" className='text-white text-xl hover:text-red duration-300'>Government Officials</NavLink>
                    <NavLink to="/government/barangay" className='text-white text-xl hover:text-red duration-300'>Barangay</NavLink>
                  </div>
                </div>
            </article>
        </section>
    </footer>
  )
}

export default Footer