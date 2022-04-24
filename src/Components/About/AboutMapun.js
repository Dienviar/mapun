import React from 'react'

const AboutMapun = () => {
  return (
    <section className='flex justify-center w-full h-auto mt-20'>
        <article className='flex justify-center h-auto w-1000px screen850px:grid'>
            <div className='w-full h-auto p-5'>
                <div className='flex items-center w-full h-auto'>
                    <p className='text-5xl font-bold text-blue screen600px:text-4xl'>Location</p>
                </div>

                <div className='w-full h-auto mt-5'>
                    <p className='text-lg text-semi_black'>
                        The Municipality of Mapun is an island municipality in the Sulu Sea on the south-western part of the Philippines, located very close to Sabah, Malaysia. 
                    </p>

                    <br/>

                    <p className='text-lg text-semi_black'>
                        Its coordinates are Latitude 6.9767 Lat (DMS) 6° 58′ 36N and Longitude 118.5136 Long (DMS) 118° 30′ 49E.
                    </p>

                    <br/>

                    <p className='text-lg text-semi_black'>
                        Mapun is approximately 163 miles northwest of Bongao, the provincial capital of Tawi-Tawi. It is 220 miles west of Zamboanga City and only 69 miles north of Sandakan town of Sabah, Malaysia.
                    </p>                    
                </div>
            </div>
            
            <div className='w-full h-full p-5'>
                <div className='flex items-center w-full h-auto'>
                    <p className='text-5xl font-bold text-blue screen600px:text-4xl'>Culture</p>
                </div>   

                <div className='w-full h-auto mt-5'>
                    <div className='flex w-full h-auto my-2 bg-blue rounded-xl'>
                        <div className='flex items-center justify-center h-auto px-2 w-28'>
                            <div className='flex items-center justify-center w-full h-28'>
                                <img src={require('../../asset/AboutPage/about_culture1.png')} alt="Culture 1"/>
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-full h-auto'>
                            <p className='p-2 text-white'>
                                The people of Mapun or Jama Mapun are peace-loving people who belong to the Sama tribe of indigenous people. The native dialect is Pullun Mapun but Jama Mapun also speaks Tausug, Sama, Tagalog, Chavacano, Bisaya, Malayu, and English.
                            </p>
                        </div>
                    </div>                

                    <div className='flex w-full h-auto my-2 bg-blue rounded-xl'>
                        <div className='flex items-center justify-center h-auto px-2 w-28'>
                            <div className='flex items-center justify-center w-full h-28'>
                                <img src={require('../../asset/AboutPage/about_culture2.png')} alt="Culture 2"/>
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-full h-auto'>
                            <p className='p-2 text-white'>
                                While predominantly a Muslim island, Mapun’s culture has a strong inter-faith connection and people belonging to the Muslim and Christian communities live peacefully with each other.
                            </p>
                        </div>
                    </div>   

                    <div className='flex w-full h-auto my-2 bg-blue rounded-xl'>
                        <div className='flex items-center justify-center h-auto px-2 w-28'>
                            <div className='flex items-center justify-center w-full h-28'>
                                <img src={require('../../asset/AboutPage/about_culture3.png')} alt="Culture 3"/>
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-full h-auto'>
                            <p className='p-2 text-white'>
                                Mapun culture is heavily influenced by Malaysian culture, since many of its inhabitants often travel to Sabah, Malaysia. Until today, many Jama Mapun have close relatives living in Malaysian islands such as Sandakan and Kota Kinabalu.
                            </p>
                        </div>
                    </div>    
                </div>        
            </div>
        </article>
    </section>
  )
}

export default AboutMapun