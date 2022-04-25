import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const OfficialsCard = ({name, image, position}) => {
  return (
    <div className='relative w-200px h-350px bg-white shadow-2xl border-2 rounded-2xl py-2 m-2 screen460px:w-full'>
        <div className='w-full h-40 flex justify-center items-center mt-2'>
            <img src={require(`../../../asset/Officials/${image}`)} alt={name} className='w-36 h-36 rounded-full pointer-events-none' />
        </div>

        <div className='w-full h-auto flex justify-center mt-2'>
            <p className='text-red text-xl font-semibold text-center'>{name}</p>
        </div>

        <div className='absolute bottom-2 w-full h-auto flex justify-center mt-10 mb-4'>
            <NavLink to={`/government/officials/${name}/${position}/${image}`}><Button variant="contained" style={{ backgroundColor: "#82243C" }}>View Profile</Button></NavLink>
        </div>
    </div>
  )
}

export default OfficialsCard