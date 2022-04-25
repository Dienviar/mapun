import React from 'react'

const BarangayOfficialsCard = () => {
  return (
    <div className='w-200px h-auto m-5 screen750px:w-150px'>
        <div className='w-full h-200px'>
            <img src={require('../../../asset/Barangay/barangay_official_default.png')} alt="Barangay Officials" />
        </div>
        <div className='w-full h-auto mt-5'>
            <p className='text-red font-semibold text-2xl text-center'>Name</p>
            <p className='text-red opacity-60 text-xl text-center mt-1'>Position</p>
        </div>
    </div>
  )
}

export default BarangayOfficialsCard