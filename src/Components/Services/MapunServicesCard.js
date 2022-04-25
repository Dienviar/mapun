import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const MapunServicesCard = ({title, description, bg}) => {
  
  return (
    <div className={`relative m-2 sample w-300px h-350px flex items-center bg-blue rounded-xl ${bg} services-img-bg screen650px:w-full`}>
        <div className='w-full h-auto px-3'>
            <p className='text-2xl font-semibold text-center text-white drop-shadow-0_7_3_rgaba_black_1'>{title}</p>
            <p className='text-base text-center text-white drop-shadow-0_5_10_rgaba_black_8'>Beguiled demoralized the charms pleasure moments that so blinded by desire.</p>
        </div>


        <div className='absolute flex justify-center w-full h-auto mt-2 bottom-6'>
            <NavLink to={`/services/${title}/${bg}`}><Button style={{ backgroundColor: "#82243C" }} variant="contained">Read More</Button></NavLink>
        </div>
    </div>
  )
}

export default MapunServicesCard