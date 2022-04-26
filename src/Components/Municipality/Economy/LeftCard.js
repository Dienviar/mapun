import React from 'react'

const LeftCard = ({ title, context, image }) => {
  return (
    <div className='h-auto px-3 my-20 w-1000px'>
        <div className='w-full h-auto'>
            <p className='text-2xl text-blue'>{title}</p>
        </div>

        <div className='flex justify-center w-full h-auto mt-5 screen850px:grid'>
            <div className='w-full h-full'>
                <p className='text-lg text-left'>
                   {context}
                </p>
            </div>

            <div className='w-auto h-full bg-green-500 screen850px:mt-5'>
                <img src={require(`../../../asset/Municipality/Economy/${image}`)} alt={title} className='pointer-events-none screen850px:w-full screen850px:h-full' />
            </div>
        </div>
    </div>
  )
}

export default LeftCard