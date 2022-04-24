import React from 'react'
import CityDetailsCard from './CityDetailsCard';
import { BiBuildingHouse } from 'react-icons/bi'
import { RiFileHistoryLine } from 'react-icons/ri'
import { MdOutlineHomeRepairService } from 'react-icons/md'

const CityDetails = () => {
  return (
    <section className='w-full h-auto mb-20'>
        <article className='flex flex-wrap items-center justify-center w-full h-auto screen700px:flex-none'>
            <CityDetailsCard 
                title={"History & Establishment"} 
                desciption={"Take a look at the history of Mapun"} 
                buttonDescp={"Read More"}
                icon={<RiFileHistoryLine className='w-full h-full p-2 text-black'/>}
            />
            <CityDetailsCard 
                title={"Explore Our Departments"} 
                desciption={"Mapuan’s local department"} 
                buttonDescp={"View Departments"}
                icon={<BiBuildingHouse className='w-full h-full p-2 text-black'/>}
            />

            <CityDetailsCard 
                title={"Mapuan Services"} 
                desciption={"Including online services!"} 
                buttonDescp={"View Services"}
                icon={<MdOutlineHomeRepairService className='w-full h-full p-2 text-black'/>}
            />
        </article>
    </section>
  )
}

export default CityDetails