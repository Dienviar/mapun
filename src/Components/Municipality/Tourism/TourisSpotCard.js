import React from 'react'

const TourisSpotCard = ({ title, context, image }) => {
  return (
    <div className='w-1000px h-auto'>
        <div className='w-full h-auto'>
            <img src={require(`../../../asset/Municipality/Tourism/${image}`)} alt="" className='pointer-events-none' />
        </div>

        <div className='w-full h-auto mt-5'>
            <p className='text-blue text-2xl font-bold'>{title}</p>

            <p className='text-justify text-semi_black text-lg mt-2'>
                {context}
            </p>
        </div>
    </div>
  )
}

export default TourisSpotCard