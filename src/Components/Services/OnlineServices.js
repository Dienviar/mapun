import React from 'react'
import OnlineServicesCard from './OnlineServicesCard'

const OnlineServices = () => {
  return (
    <section className='flex justify-center w-full h-auto mt-36'>
        <article className='w-1000px h-auto'>
            <div className='w-full h-20 text-center'>
                <p className='text-4xl font-bold text-blue opacity-90'>Online Services</p>
                <p className='text-xl text-blue opacity-90'>instant solutions for all</p>
            </div>

            <div className='w-full h-auto flex justify-center flex-wrap screen700px:px-3'>
                <OnlineServicesCard title={"Taxes & Bills"} description={"Residential & Non-residentia"} icon={""} />
                <OnlineServicesCard title={"Building Sanction"} description={"Procedure for building permission"} icon={""}/>
                <OnlineServicesCard title={"Commencement"} description={"Every pain get avoided in certain"} icon={""}/>

                <OnlineServicesCard title={"Vendor Registration"} description={"Start your business with registrar"} icon={""}/>
                <OnlineServicesCard title={"Birth Certification"} description={"Apply & Track birth registration"} icon={""}/>
                <OnlineServicesCard title={"Fire NOC"} description={"Login or Register to get NOC"} icon={""}/>

                <OnlineServicesCard title={"Taxis & Private"} description={"Information about registration "} icon={""}/>
                <OnlineServicesCard title={"Death Certificate"} description={"Apply & Track death registration"} icon={""}/>
                <OnlineServicesCard title={"Raise Complaints"} description={"File grievances against deparment"} icon={""}/>
            </div>
        </article>
    </section>
  )
}

export default OnlineServices