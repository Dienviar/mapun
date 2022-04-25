import React from 'react'
import Button from '@mui/material/Button';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const CityDetailsCard = ({title, desciption, buttonDescp, icon, bg, link}) => {
  return (    
    <div className='relative px-5 m-5 w-300px h-350px bg-blue rounded-3xl screen700px:w-full'>
      <img src={require(`../../asset/CityDetailsBg/${bg}`)} alt={title} className='pointer-events-none absolute w-full opacity-30 h-full top-0 left-0 rounded-3xl' />
        <div className='w-full h-16 mt-5'>
            <div className='w-16 h-full bg-white rounded-full'>{icon}</div>
        </div>

        <div className='w-full h-auto mt-3'>
            <p className='text-3xl text-white'>{title}</p>
            <p className='mt-3 text-base text-white'>{desciption}</p>
        </div>

        <div className='absolute w-full h-auto bottom-10'>
            <NavLink to={link}><Button variant="contained" style={{ backgroundColor : "#82243C" }} className='rounded-full'>{buttonDescp} &nbsp;  <AiOutlineArrowRight className='inline'/></Button></NavLink>
        </div>
    </div>
  )
}

export default CityDetailsCard