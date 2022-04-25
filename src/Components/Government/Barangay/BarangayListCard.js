import React from 'react'
import Button from '@mui/material/Button';

const BarangayListCard = ({ name }) => {
  return (
    <div className='w-250px h-auto bg-white shadow-2xl border-2 rounded-xl m-5 screen600px:w-full'>
        <div className='w-full h-150px screen600px:h-auto'>
            <img src={require('../../../asset/Barangay/barangay_default.png')} alt="Barangay" className='w-full h-full' />
        </div>

        <div className='w-full h-auto flex justify-center items-center mt-5'>
            <p className='text-red opacity-80 font-semibold text-2xl'>{name}</p>
        </div>

        <div className='w-full h-auto flex justify-center items-center my-5'>
            <Button variant="contained" style={{ backgroundColor: "#82243C" }} className='h-6'>Overview</Button>
        </div>
    </div>
  )
}

export default BarangayListCard