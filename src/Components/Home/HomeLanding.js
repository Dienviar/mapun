import React from 'react'
import { FaRegBuilding } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

const HomeLanding = () => {
  return (
      <section className='w-full h-auto'>
        <article className='flex items-center justify-center w-full h-1000px bg -mt-36 screen1050px:h-auto screen1050px:mb-20 screen420px:mt screen420px:pt-5'>
          <div className='flex w-1300px h-500px screen1050px:w-full screen1050px:grid screen1050px:h-auto'>
            <div className='grid w-full h-auto'>
              <div className='flex items-center justify-start w-full px-5 h-3/5 screen1050px:h-auto screen1050px:mb-10 screen1050px:mt-56 screen850px:mt-40 screen420px:mb-0'>
                <p className='font-bold leading-tight text-white select-none text-7xl drop-shadow-0_7_3_rgaba_black_1 screen530px:text-5xl screen530px:leading-snug screen420px:leading-none screen420px:break-all'>
                  Welcome to Municipality of Mapun!
                </p>
              </div>

              <div className='flex w-full h-40 px-5 screen420px:grid screen420px:mt-5 screen420px:mb-16 screen420px:h-auto'>
                <div className='flex w-auto px-3 h-2/4 bg-blue rounded-2xl screen530px:w-full screen420px:h-20'>
                  <div className='flex items-center justify-center w-20 h-full screen530px:w-10'>
                    <FaRegBuilding className='w-3/5 text-white h-3/5 screen420px:w-full screen420px:h-full'/>
                  </div>
                  <div className='flex items-center justify-center w-auto h-full'>
                    <div className='w-auto h-auto px-3 screen420px:w-full'>
                      <p className='text-sm font-semibold text-white'>Mayor's Office</p>
                      <p className='text-2xl font-bold text-white screen530px:text-xl'>#012344</p>
                    </div>
                  </div>
                </div>

                <div className='flex w-auto px-3 ml-3 h-2/4 bg-blue rounded-2xl screen530px:w-full screen420px:ml-0 screen420px:h-20 screen420px:mt-5'>
                  <div className='flex items-center justify-center w-20 h-full screen530px:w-10'>
                    <BsFillTelephoneFill className='w-3/5 text-white h-3/5'/>
                  </div>
                  <div className='flex items-center justify-center w-auto h-full'>
                    <div className='w-auto h-auto px-3 screen420px:w-full'>
                      <p className='text-sm font-semibold text-white'>Emergency</p>
                      <p className='text-2xl font-bold text-white screen530px:text-xl'>#012344</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-end justify-center w-full h-auto'>
              <div className='relative flex items-center justify-center w-full p-6 mb-16 h-300px screen1050px:h-auto'>
                <span className='absolute left-0 text-white -top-5 text-9xl drop-shadow-0_5_10_rgaba_black_8 screen420px:text-7xl screen420px:top-0 screen420px:left-2'>❝</span>
                <div className='w-full h-full pb-5 bg-rgba_white_05 rounded-xl'>
                  <p className='px-5 mt-5 text-xl text-right text-white select-none drop-shadow-0_5_10_rgaba_black_8 screen1050px:text-left screen1050px:mt-10'>
                    A community built with diversity, a competent government sector and human resources acknowledging the importance of being a key contributor in building a better nation.
                  </p>

                  <p className='px-5 mt-10 text-2xl font-bold text-right text-white select-none drop-shadow-0_5_10_rgaba_black_8 screen1050px:text-left'>
                    Suraida F. Muksin
                  </p>

                  <p className='px-5 text-base font-semibold text-right text-white select-none drop-shadow-0_5_10_rgaba_black_8 screen1050px:text-left'>
                    Mayor, Municipality of Mapun
                  </p>
                </div>
                <span className='absolute right-0 text-white select-none -bottom-14 text-9xl drop-shadow-0_5_10_rgaba_black_8 screen420px:text-7xl screen420px:-bottom-5 screen420px:right-2'>❞</span>
              </div>
            </div>
          </div>
        </article>
      </section>
  )
}

export default HomeLanding