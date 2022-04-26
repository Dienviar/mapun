import React from 'react'
import { FaPenNib } from 'react-icons/fa'

const OnlineServicesCard = ({title, description}) => {
  return (
    <div className='flex m-2 shadow-xl cursor-default w-300px h-28 bg-blue opacity-90 rounded-2xl screen700px:w-full'>
        <div className='flex items-center justify-center w-20 h-full mx-2'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full'>
              <FaPenNib className='w-10 h-10 text-white'/>
            </div>
        </div>

        <div className='flex items-center w-auto h-full mx-2'>   
            <div>
                <p className='text-xl font-bold text-white'>{title}</p>
                <p className='text-sm text-white'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default OnlineServicesCard