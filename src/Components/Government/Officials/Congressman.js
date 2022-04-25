import React from 'react'
import OfficialsCard from './OfficialsCard'

const Congressman = () => {
  return (
    <section className='w-full h-auto mt-36'>
        <article className='w-full h-auto flex justify-center'>
            <p className='text-red text-3xl font-bold'>Congressman</p>
        </article>

        <article className='w-full h-auto flex justify-center mt-5'>
            <div className='w-full h-auto flex justify-center items-center'>
                <OfficialsCard name={"Rashidin H. Matba"} image={"congressman.png"} position={"Congressman"}/>
            </div>
        </article>
    </section>
  )
}

export default Congressman