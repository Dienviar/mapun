import React from 'react'
import { FaRegBuilding } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Landing = () => {
  return (
      <section className='w-full h-auto -mt-20'>
        <article className='w-full h-700px flex justify-center items-center bg'>
          <div className='w-1300px h-500px flex'>
            <div className='w-full h-auto '>
              <div className='w-full h-3/5 flex justify-start items-center px-5'>
                <p className='text-7xl drop-shadow-0-35-35_rgaba_black-8 text-white font-bold leading-tight'>Welcome to Municipality of Mapun!</p>
              </div>

              <div className='w-full h-40 flex justify-start items-center px-5'>
                <div className='w-auto h-2/4 bg-blue flex px-3 rounded-2xl'>
                  <div className='w-20 h-full flex justify-center items-center'>
                    <FaRegBuilding className='w-3/5 h-3/5 text-white'/>
                  </div>
                  <div className='w-auto h-full flex items-center justify-center'>
                    <div className='w-auto h-auto px-3'>
                      <p className='text-white font-semibold text-sm'>Mayor's Office</p>
                      <p className='text-white text-2xl font-bold'>#012344</p>
                    </div>
                  </div>
                </div>

                <div className='w-auto h-2/4 bg-blue flex ml-3 px-3 rounded-2xl'>
                  <div className='w-20 h-full flex justify-center items-center'>
                    <BsFillTelephoneFill className='w-3/5 h-3/5 text-white'/>
                  </div>
                  <div className='w-auto h-full flex items-center justify-center'>
                    <div className='w-auto h-auto px-3'>
                      <p className='text-white font-semibold text-sm'>Emergency</p>
                      <p className='text-white text-2xl font-bold'>#012344</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-auto bg-green-500'></div>
          </div>
        </article>
      </section>
  )
}

export default Landing