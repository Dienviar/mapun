import React, { useEffect } from 'react'
import Landing from '../../Components/Landing'
import { IoMdArrowDropright } from 'react-icons/io'

const Education = () => {

    document.title = "Education"
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='relative w-full h-auto'>
      <section className='w-full h-auto'>
        <Landing title={"Education"} bg={"education-landing-bg"}/>

        <article className='w-full h-auto mt-20 flex justify-center px-3'>
          <div className='w-1000px h-auto'>
            <div className='W-full h-auto'>
              <p className='text-semi_black font-semibold text-3xl'>Elementary</p>

              <ul className='mt-5 text-semi_black text-lg'>
                <li><IoMdArrowDropright className='inline'/>Lupa Pula Pilot School (formerly Lupa Pula Central School) - elementary pupils are primarily from Lupa Pula, Liyubud, and Mahalu.</li>
                <li><IoMdArrowDropright className='inline'/>Mahalu Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Duhul Batu Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Sikub Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Surong Baiddin Memorial Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Boki Elementary School</li>

                <li><IoMdArrowDropright className='inline'/>Kompang Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Tanduan Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Pawan Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Guppah Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Iruk-Iruk Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Umus Mataha Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Lubbak Parang Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Imam Saat Elementary School</li>
              </ul>
            </div>
          </div>
        </article>

        <article className='w-full h-auto mt-20 flex justify-center px-3'>
          <div className='w-1000px h-auto'>
            <div className='W-full h-auto'>
              <p className='text-semi_black font-semibold text-3xl'>Secondary</p>

              <ul className='mt-5 text-semi_black text-lg'>
                <li><IoMdArrowDropright className='inline'/>Notre Dame of Cagayan (NDC) - a private school located in the border of Barangay Lupa Pula and Barangay Mahalu.</li>
                <li><IoMdArrowDropright className='inline'/>Mindanao State University (MSU) - a public school located in Mahalu</li>
                <li><IoMdArrowDropright className='inline'/>Tawi-Tawi Academy (TTA) - a private school located in Barangay Guppah</li>
                <li><IoMdArrowDropright className='inline'/>Sikub Elementary School</li>
                <li><IoMdArrowDropright className='inline'/>Mapun SHS</li>
              </ul>
            </div>
          </div>
        </article>

        <article className='w-full h-auto mt-20 flex justify-center px-3'>
          <div className='w-1000px h-auto'>
            <div className='W-full h-auto'>
              <p className='text-semi_black font-semibold text-3xl'>Tertiary</p>

              <ul className='mt-5 text-semi_black text-lg'>
                <li><IoMdArrowDropright className='inline'/>Mindanao State University Extension</li>
              </ul>
            </div>
          </div>
        </article>        
      </section>      
    </main>
  )
}

export default Education