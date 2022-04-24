import React from 'react'

const MapunMap = () => {
  return (
    <section className='w-full h-auto mt-20'>
        <article className='flex justify-center w-full h-auto px-5'>
            <div className='h-auto w-1000px bg-red'>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe className='w-full h-500px' id="gmap_canvas" src="https://maps.google.com/maps?q=Mapun,%20Tawi-Tawi&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </article>


        <article className='flex justify-center w-full h-auto px-5 mt-5'>
            <div className='h-auto w-1000px'>
                <p className='text-xl text-semi_black'>
                    Mapun, officially the Municipality of Mapun, is a 4th class municipality in the province of Tawi-Tawi, Philippines. According to the 2020 census, it has a population of 30,038 people. It is formerly known as Cagayan de Sulu until 1984, then as Cagayan de Tawi-Tawi until 1988.
                </p>
            </div>
        </article>
    </section>
  )
}

export default MapunMap