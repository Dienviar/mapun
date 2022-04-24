import React from 'react'
import Button from '@mui/material/Button';
import { AiOutlineArrowRight } from 'react-icons/ai'

const CityDetailsCard = ({title, desciption, buttonDescp, icon}) => {
  return (    
    <div className='relative px-5 m-5 w-300px h-350px bg-blue rounded-3xl screen700px:w-full'>
        <div className='w-full h-16 mt-5'>
            <div className='w-16 h-full bg-white rounded-full'>{icon}</div>
        </div>

        <div className='w-full h-auto mt-3'>
            <p className='text-3xl text-white'>{title}</p>
            <p className='mt-3 text-base text-white'>{desciption}</p>
        </div>

        <div className='absolute w-full h-auto bottom-10'>
            <Button variant="contained" style={{ backgroundColor : "#82243C" }} className='rounded-full'>{buttonDescp} &nbsp;  <AiOutlineArrowRight className='inline'/></Button>
        </div>
    </div>
  )
}

export default CityDetailsCard