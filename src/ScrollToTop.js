import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const ScrollToTop = ({showToTop}) => {

    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <article className={`fixed items-center w-auto right-5 h-20 ${showToTop ? 'bottom-0' : '-bottom-20'} duration-300`}>
        <div onClick={backToTop} className='absolute right-0 w-12 h-12 bg-white rounded-full  flex justify-center items-center z-10 cursor-pointer'>
            <BsFillArrowUpSquareFill className='w-full h-full text-red z-10 hover:text-yellow-600 duration-300'/>
        </div>
    </article>
  )
}

export default ScrollToTop