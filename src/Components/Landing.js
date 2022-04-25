import React from 'react'

const Landing = ({ bg, title, back }) => {
  return (
    <article className={`flex items-end justify-center w-full h-500px ${bg} screen900px:h-350px`}>
        <div className='flex items-center h-auto py-10 w-1000px'>
            <p className='px-5 font-bold text-white text-7xl drop-shadow-0_7_3_rgaba_black_1 screen900px:text-5xl'>{title}</p>
        </div>
    </article>
  )
}

export default Landing