import React from 'react'
import MapunServicesCard from './MapunServicesCard'

const MapunServices = () => {

  return (
    <section className='flex justify-center w-full h-auto mt-20'>
        <article className='flex flex-wrap justify-center h-auto w-1000px'>
            <MapunServicesCard title={"Policing & Crime"} description={""} bg={"policing_crime"}/>
            <MapunServicesCard title={"Transport & Traffic"} description={""} bg={"transport_traffic"}/>
            <MapunServicesCard title={"Housing & Land"} description={""} bg={"housing_land"}/>
            <MapunServicesCard title={"Health & Medical"} description={""} bg={"health_medical"}/>
            <MapunServicesCard title={"Arts & Culture"} description={""} bg={"arts_culture"}/>
            <MapunServicesCard title={"Finance & Legal"} description={""} bg={"finance_legal"}/>
            <MapunServicesCard title={"Park & Recreation"} description={""} bg={"park_recreation"}/>
            <MapunServicesCard title={"Tourism & Travel"} description={""} bg={"tourism_travel"}/>
        </article>
    </section>
  )
}

export default MapunServices