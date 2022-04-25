import React from 'react'
import OfficialsCard from './OfficialsCard'

const Councilors = () => {
  return (
    <section className='w-full h-auto mt-20'>
        <article className='w-full h-auto flex justify-center'>
            <p className='text-red text-3xl font-bold'>Councilors</p>
        </article>

        <article className='w-full h-auto flex justify-center mt-5'>
            <div className='w-1000px h-auto flex justify-center flex-wrap'>
                <OfficialsCard name={"Chernie Said"} image={"councilor1.png"} position={"Councilor"}/>
                <OfficialsCard name={"Mukdim Japaal"} image={"councilor2.png"} position={"Councilor"}/>
                <OfficialsCard name={"Macky Sarapil"} image={"councilor3.png"} position={"Councilor"}/>
                <OfficialsCard name={"Markaren Canizares"} image={"councilor4.png"} position={"Councilor"}/>

                <OfficialsCard name={"Rambie Sadjiril"} image={"councilor5.png"} position={"Councilor"}/>
                <OfficialsCard name={"Gayu Gubih"} image={"councilor6.png"} position={"Councilor"}/>
                <OfficialsCard name={"Charles Lao"} image={"councilor7.png"} position={"Councilor"}/>
                <OfficialsCard name={"Omar Mockthar Abdulpatta"} image={"councilor8.png"} position={"Councilor"}/>              
            </div>
        </article>
    </section>
  )
}

export default Councilors