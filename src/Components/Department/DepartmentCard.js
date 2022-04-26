import React from 'react'

const DepartmentCard = ({title, icon}) => {
  return (
    <div className='relative m-5 border-2 rounded-xl w-250px h-300px bg-blue opacity-80 screen600px:w-full'>
        <div className='flex items-center justify-center w-full h-20'>
            {icon}
        </div>

        <div className='flex items-center justify-center w-full h-auto px-3'>
            <p className='text-xl font-bold text-center text-white'>{title}</p>
        </div>

        <div className='absolute w-full h-auto px-3 mt-2 text-center bottom-2'>
            <p className='text-xs text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p className='mt-10 text-sm text-white'>
                thisoffice@mapun.ph
            </p>

            <p className='text-sm text-white'>
                +63 068 123 4567
            </p>
        </div>
    </div>
  )
}

export default DepartmentCard