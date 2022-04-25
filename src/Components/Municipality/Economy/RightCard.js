import React from 'react'

const RightCard = ({ title, context, image }) => {
  return (
    <div className='w-1000px h-auto px-3 my-20'>
        <div className='w-full h-auto'>
            <p className='text-blue text-2xl text-right screen850px:text-left'>{title}</p>
        </div>

        <div className='w-full h-auto flex justify-center mt-5 screen850px:grid'>
            <div className='w-auto h-full bg-green-500 screen850px:mt-5 screen850px:order-last'>
                <img src={require(`../../../asset/Municipality/Economy/${image}`)} alt={title} className='pointer-events-none screen850px:w-full screen850px:h-full' />
            </div>
                    
            <div className='w-full h-full'>
                <p className='text-lg text-right screen850px:text-left'>
                    {context}
                </p>
            </div>
        </div>
    </div>
  )
}

export default RightCard