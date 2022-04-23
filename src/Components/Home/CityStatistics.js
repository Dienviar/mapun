import React from 'react'

const CityStatistics = () => {
  return (
    <section className='w-full h-auto screen420px:-mt-20'>
        <article className='w-full h-300px flex justify-center items-center flex-wrap screen920px:h-auto screen920px:mb-20 screen420px:py-10'>
            <div className='w-300px h-auto bg-red-500 screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl text-red font-bold screen650px:text-5xl screen420px:text-2xl'>30K</p></div>
                <div className='w-full h-auto text-center'><p className='text-black font-bold text-xl screen650px:text-lg'>CITY POPULATION</p></div>
            </div>

            <div className='w-300px h-auto bg-red-500 screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl text-red font-bold screen650px:text-5xl screen420px:text-2xl screen420px:mt-10'>181,29</p></div>
                <div className='w-full h-auto text-center'><p className='text-black font-bold text-xl screen650px:text-lg'>TOTAL AREA IN KM^2</p></div>
            </div>

            <div className='w-300px h-auto bg-red-500 screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl text-red font-bold screen650px:text-5xl screen420px:text-2xl screen420px:mt-10'>120M</p></div>
                <div className='w-full h-auto text-center'><p className='text-black font-bold text-xl screen650px:text-lg'>AVERAGE REVENUE</p></div>
            </div>       
        </article>
    </section>
  )
}

export default CityStatistics