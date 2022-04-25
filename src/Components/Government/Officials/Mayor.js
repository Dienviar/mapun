import React from 'react'
import OfficialsCard from './OfficialsCard'

const Mayor = () => {
  return (
    <section className='w-full h-auto mt-20'>
        <article className='w-full h-auto flex justify-center'>
            <p className='text-red text-3xl font-bold'>Mayor</p>
        </article>

        <article className='w-full h-auto flex justify-center mt-5'>
            <div className='w-full h-auto flex justify-center items-center'>
                <OfficialsCard name={"Suraida F. Muksin"} image={"mayor.png"}/>
            </div>
        </article>
    </section>
  )
}

export default Mayor