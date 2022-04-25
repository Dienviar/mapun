import React from 'react'
import Landing from '../../Components/Landing'

const MapunDay = () => {
  return (
    <main className='relative w-full h-full'>
        <section className="mapun-day">
          <Landing title={"Mapun Day"} bg={"mapunday-landing-bg"}/>

          <article className='w-full h-full flex justify-center mt-20'>
            <div className='w-1000px h-auto flex screen850px:grid'>
              <div className="w-full flex flex-row mx-auto space-x-1 m-5 place-content-center">
                  <div className="flex flex-col space-y-1">
                      <img src={require('../../asset/Municipality/MapunDay/mapunday-1.jpg')} className="w-48 md:w-96" alt=""/>
                      <img src={require('../../asset/Municipality/MapunDay/mapunday-3.jpg')} className="w-48 h-60 md:w-96 md:h-96" alt=""/>
                  </div>
                  <div className="flex flex-col space-y-1">
                      <img src={require('../../asset/Municipality/MapunDay/mapunday-2.jpg')} className="w-48 h-60 md:w-96 md:h-96" alt=""/>
                      <img src={require('../../asset/Municipality/MapunDay/mapunday-4.jpg')} className="w-48 md:w-96" alt=""/>
                  </div>
              </div>

              <div className="w-full flex mx-auto px-10 screen850px:mt-10">
                  <p className="text-justify leading-relaxed text-semi_black text-lg"> <a className="text-red opacity-60 font-semibold text-xl">Mapun Foundation Day </a> is celebrated by the Jama Mapun every September 5. 
                      This week-long celebration starts on September 1, with a parade and then a short program held in Lupa Pula Central School. 
                      Various competitions are held during Mapun Day, which includes singing competitions (in English, Tausug, and Pullun Mapun), 
                      dance showdowns (modern dance, folk dance, pangalay, which is a native dance, and lunsay, which is a dance performed during 
                      weddings), Azaan competition, Tarasul iban Daman (Mapun’s version of declamation and oration), and Leleng, to name a few. 
                      Each Barangay has their own representatives in the various events. However, the most popular is the “Budjang Mapun”, 
                      which is a beauty contest. Each barangay has its own contestant in this event. The winner of the search for “Budjang Mapun” 
                      is usually sent to Bongao as Mapun’s representative in Budjang Tawi-Tawi, a similar beauty search held in Bongao every 
                      Province Day. Every municipality in Tawi-Tawi has its own contestant.</p>
              </div>
            </div>  
          </article> 
        </section>
    </main>
  )
}

export default MapunDay