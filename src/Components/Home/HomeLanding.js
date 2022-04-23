import React from 'react'
import { FaRegBuilding } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

const HomeLanding = () => {
  return (
      <section className='w-full h-auto'>
        <article className='w-full h-1000px flex justify-center items-center bg -mt-36 screen1050px:h-auto screen1050px:mb-20 screen420px:mt screen420px:pt-5'>
          <div className='w-1300px h-500px flex screen1050px:w-full screen1050px:grid screen1050px:h-auto'>
            <div className='w-full h-auto grid'>
              <div className='w-full h-3/5 flex justify-start items-center px-5 screen1050px:h-auto screen1050px:mb-10 screen1050px:mt-56 screen850px:mt-40 screen420px:mb-0'>
                <p className='text-7xl drop-shadow-0_7_3_rgaba_black_1 text-white font-bold leading-tight select-none break-all screen530px:text-5xl screen530px:leading-snug screen420px:leading-none'>
                  Welcome to Municipality of Mapun!
                </p>
              </div>

              <div className='w-full h-40 flex px-5 screen420px:grid screen420px:mt-5 screen420px:mb-16 screen420px:h-auto'>
                <div className='w-auto h-2/4 bg-blue flex px-3 rounded-2xl screen530px:w-full screen420px:h-20'>
                  <div className='w-20 h-full flex justify-center items-center screen530px:w-10'>
                    <FaRegBuilding className='w-3/5 h-3/5 text-white screen420px:w-full screen420px:h-full'/>
                  </div>
                  <div className='w-auto h-full flex items-center justify-center'>
                    <div className='w-auto h-auto px-3 screen420px:w-full'>
                      <p className='text-white font-semibold text-sm'>Mayor's Office</p>
                      <p className='text-white text-2xl font-bold screen530px:text-xl'>#012344</p>
                    </div>
                  </div>
                </div>

                <div className='w-auto h-2/4 bg-blue flex ml-3 px-3 rounded-2xl screen530px:w-full screen420px:ml-0 screen420px:h-20 screen420px:mt-5'>
                  <div className='w-20 h-full flex justify-center items-center screen530px:w-10'>
                    <BsFillTelephoneFill className='w-3/5 h-3/5 text-white'/>
                  </div>
                  <div className='w-auto h-full flex items-center justify-center'>
                    <div className='w-auto h-auto px-3 screen420px:w-full'>
                      <p className='text-white font-semibold text-sm'>Emergency</p>
                      <p className='text-white text-2xl font-bold screen530px:text-xl'>#012344</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full h-auto flex justify-center items-end'>
              <div className='relative w-full h-300px flex justify-center items-center p-6 mb-16 screen1050px:h-auto'>
                <span className='absolute left-0 -top-5 text-9xl text-white drop-shadow-0_5_10_rgaba_black_8 screen420px:text-7xl screen420px:top-0 screen420px:left-2'>❝</span>
                <div className='w-full h-full bg-rgba_white_05 rounded-xl pb-5'>
                  <p className='text-right text-white drop-shadow-0_5_10_rgaba_black_8 text-xl px-5 mt-5 select-none screen1050px:text-left screen1050px:mt-10'>
                    A community built with diversity, a competent government sector and human resources acknowledging the importance of being a key contributor in building a better nation.
                  </p>

                  <p className='text-right text-2xl font-bold mt-10 text-white drop-shadow-0_5_10_rgaba_black_8 px-5 select-none screen1050px:text-left'>
                    Suraida F. Muksin
                  </p>

                  <p className='text-right text-base font-semibold text-white drop-shadow-0_5_10_rgaba_black_8 px-5 select-none screen1050px:text-left'>
                    Mayor, Municipality of Mapun
                  </p>
                </div>
                <span className='absolute right-0 -bottom-14 text-9xl text-white drop-shadow-0_5_10_rgaba_black_8 select-none screen420px:text-7xl screen420px:-bottom-5 screen420px:right-2'>❞</span>
              </div>
            </div>
          </div>
        </article>
      </section>
  )
}

export default HomeLanding