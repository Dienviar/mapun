import React from 'react'
import DepartmentCard from './DepartmentCard'
import { GiFamilyHouse } from 'react-icons/gi'
import { FaWallet } from 'react-icons/fa'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { MdPedalBike } from 'react-icons/md'
import { AiFillWarning } from 'react-icons/ai'
 
const DepartmentList = () => {
  return (
    <section className='flex justify-center w-full h-full mt-32'>
        <article className='flex flex-wrap justify-center h-auto w-1000px'>
            <DepartmentCard icon={<GiFamilyHouse className='w-10 h-10 text-white'/>} title={"Mayor's Office"}/>
            <DepartmentCard icon={<GiFamilyHouse className='w-10 h-10 text-white'/>} title={"Office of the Vice Mayor's"}/>
            <DepartmentCard icon={<GiFamilyHouse className='w-10 h-10 text-white'/>} title={"Office of the Sangguniang Bayan"}/>
        
            <DepartmentCard icon={<FaWallet className='w-10 h-10 text-white'/>} title={"Finance Department"}/>
            <DepartmentCard icon={<FaWallet className='w-10 h-10 text-white'/>} title={"Office of the Municipal Treasurer"}/>
            <DepartmentCard icon={<FaWallet className='w-10 h-10 text-white'/>} title={"Office of the Municipal Budget Officer"}/>
            <DepartmentCard icon={<FaWallet className='w-10 h-10 text-white'/>} title={"Mayor's Office"}/>
        
            <DepartmentCard icon={<BsFillHouseDoorFill className='w-10 h-10 text-white'/>} title={"Housing and Land Department"}/>
            <DepartmentCard icon={<BsFillHouseDoorFill className='w-10 h-10 text-white'/>} title={"Municipal Planning and Development Coordinator"}/>
            <DepartmentCard icon={<BsFillHouseDoorFill className='w-10 h-10 text-white'/>} title={"Assessors Office"}/>
            <DepartmentCard icon={<BsFillHouseDoorFill className='w-10 h-10 text-white'/>} title={"Municipal Engineer"}/>

            <DepartmentCard icon={<MdPedalBike className='w-10 h-10 text-white'/>} title={"Tourism and Travel Department"}/>
            <DepartmentCard icon={<MdPedalBike className='w-10 h-10 text-white'/>} title={"Municipal Tourism Office"}/>
  
            <DepartmentCard icon={<AiFillWarning className='w-10 h-10 text-white'/>} title={"Risk Reduction Department"}/>
            <DepartmentCard icon={<AiFillWarning className='w-10 h-10 text-white'/>} title={"Municipal Disaster Risk Reduction  Management Office"}/>
        </article>
    </section>
  )
}

export default DepartmentList