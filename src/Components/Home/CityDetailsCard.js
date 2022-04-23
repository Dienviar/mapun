import React from 'react'
import Button from '@mui/material/Button';
import { AiOutlineArrowRight } from 'react-icons/ai'

const CityDetailsCard = ({title, desciption, buttonDescp, icon}) => {
  return (    
    <div className='relative w-300px h-350px bg-blue px-5 rounded-3xl m-5 screen700px:w-full'>
        <div className='w-full h-16 mt-5'>
            <div className='w-16 h-full rounded-full bg-white'>{icon}</div>
        </div>

        <div className='w-full h-auto mt-3'>
            <p className='text-white text-3xl'>{title}</p>
            <p className='text-white text-base mt-3'>{desciption}</p>
        </div>

        <div className='absolute w-full h-auto bottom-10'>
            <Button variant="contained" style={{ backgroundColor : "#82243C" }} className='rounded-full'>{buttonDescp} &nbsp;  <AiOutlineArrowRight className='inline'/></Button>
        </div>
    </div>
  )
}

export default CityDetailsCard