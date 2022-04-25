import React from 'react'

const OnlineServicesCard = ({title, description}) => {
  return (
    <div className='w-300px h-28 bg-blue flex opacity-90 rounded-2xl shadow-xl m-2 screen700px:w-full cursor-default'>
        <div className='w-20 h-full flex justify-center items-center mx-2'>
            <div className='w-16 h-16 bg-white rounded-full'></div>
        </div>

        <div className='w-auto h-full flex items-center mx-2'>   
            <div>
                <p className='text-white font-bold text-xl'>{title}</p>
                <p className='text-white text-sm'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default OnlineServicesCard