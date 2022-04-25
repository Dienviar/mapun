import React from 'react'
import Button from '@mui/material/Button';

const OfficialsCard = ({name, image}) => {
  return (
    <div className='w-200px h-auto bg-white shadow-2xl border-2 rounded-2xl py-2 m-2 screen460px:w-full'>
        <div className='w-full h-40 flex justify-center items-center mt-2'>
            <img src={require(`../../../asset/Officials/${image}`)} alt={name} className='w-36 h-36 rounded-full' />
        </div>

        <div className='w-full h-auto flex justify-center mt-2'>
            <p className='text-red text-xl font-semibold'>{name}</p>
        </div>

        <div className='w-full h-auto flex justify-center mt-10 mb-4'>
            <Button variant="contained" style={{ backgroundColor: "#82243C" }}>View Profile</Button>
        </div>
    </div>
  )
}

export default OfficialsCard