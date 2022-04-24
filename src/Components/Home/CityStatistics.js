import React from 'react'

const CityStatistics = () => {
  return (
    <section className='w-full h-auto screen420px:-mt-20'>
        <article className='flex flex-wrap items-center justify-center w-full h-300px screen920px:h-auto screen920px:mb-20 screen420px:py-10'>
            <div className='h-auto bg-red-500 w-300px screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl font-bold text-red screen650px:text-5xl screen420px:text-2xl'>30K</p></div>
                <div className='w-full h-auto text-center'><p className='text-xl font-bold text-semi_black screen650px:text-lg'>CITY POPULATION</p></div>
            </div>

            <div className='h-auto bg-red-500 w-300px screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl font-bold text-red screen650px:text-5xl screen420px:text-2xl screen420px:mt-10'>181,29</p></div>
                <div className='w-full h-auto text-center'><p className='text-xl font-bold text-semi_black screen650px:text-lg'>TOTAL AREA IN KM^2</p></div>
            </div>

            <div className='h-auto bg-red-500 w-300px screen650px:w-200px screen420px:w-full screen920px:m-5'>
                <div className='w-full h-auto text-center'><p className='text-6xl font-bold text-red screen650px:text-5xl screen420px:text-2xl screen420px:mt-10'>120M</p></div>
                <div className='w-full h-auto text-center'><p className='text-xl font-bold text-semi_black screen650px:text-lg'>AVERAGE REVENUE</p></div>
            </div>       
        </article>
    </section>
  )
}

export default CityStatistics