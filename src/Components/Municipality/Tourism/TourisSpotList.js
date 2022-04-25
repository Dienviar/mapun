import React from 'react'
import TourisSpotCard from './TourisSpotCard'

const TourisSpotList = () => {
  return (
    <section className='w-full h-auto mt-36 px-3'>
        <article className='w-full h-auto flex justify-center'>
            <TourisSpotCard image={"manda_island.png"} title={"Manda Island"} context={"Manda Island is home to one of the beautiful sandy beaches and hot diving spots of the island municipality."}/>
        </article>

         <article className='w-full h-auto flex justify-center mt-20'>
            <TourisSpotCard image={"lake.png"} title={"Lake"} context={"One must not miss visiting the two crater lakes of Mapun and get a glimpse of Jurata Bay."}/>
        </article>


        <article className='w-full h-auto flex justify-center mt-20'>
            <TourisSpotCard image={"mangroves_widlife.png"} title={"Mangroves Wildlife"} context={"Monkeys search for food to eat at Linggisan's mangroves"}/>
        </article>

        <article className='w-full h-auto flex justify-center mt-20'>
            <TourisSpotCard image={"diving_spots.png"} title={"Diving Spots"} context={"Beautiful coral beds surround Manda, Linggisan, Kinapusan and Umus Umus."}/>
        </article>       
    </section>
  )
}

export default TourisSpotList