import React, { useRef, useState } from 'react'
import LatestNewsModal from './LatestNewsModal'

const LatestNews = () => {

    const [newsDetailsDom, setNewsDetailsDom] = useState(false)
    const [news, setNews] = useState([])

    const newsDetailsRef = useRef()

    const backToStart = () => {
        newsDetailsRef.current.scrollIntoView({behavior: "smooth"})  
    }


    const openNew = (news) => {
        setNewsDetailsDom(true)
        setNews(news)
        backToStart()
    }

  return (
    <section ref={newsDetailsRef} className='w-full h-auto my-36 screen1020px:px-5'>
        {
            !newsDetailsDom

            ?

            <section>
                <article className='flex justify-center w-full h-auto mt-10 mb-5'>
                    <div className='flex items-center justify-center h-20 w-1000px'>
                        <p className='text-4xl font-bold text-black screen600px:text-3xl screen600px:text-center'>Latest From Our <span className='text-blue'>Newsroom</span></p>
                    </div>
                </article>

                <article className='flex justify-center w-full h-auto'>
                    <div className='flex items-center justify-center mb-10 w-1000px h-400px screen1020px:w-full'>
                        <div onClick={() => openNew({image: "news1.png", title: "Courtesy call to Mapun LCE last October 7 at Iruk, Mapun Taw"})} className='relative h-full cursor-pointer w-950px screen1020px:w-full news-bx'>
                            <div className='absolute top-0 left-0 w-full h-full duration-300 news-bg-effect'></div>
                            <img src={require('../../asset/News/news1.png')} alt="News" className='object-cover w-full pointer-events-none h-400px rounded-xl'/>
                            <div className='absolute bottom-0 flex items-center w-full h-auto p-5 bg-rgba_black_05 rounded-b-xl'>
                                <div>
                                    <p className='text-base text-white'>Data Published</p>
                                    <p className='text-2xl font-bold text-white'>Courtesy call to Mapun LCE last October 7 at Iruk, Mapun Tawi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <article className='flex flex-wrap justify-center w-full h-auto'>
                    <div className='flex items-center justify-center w-500px h-400px screen1020px:w-full screen1020px:mb-10'>
                        <div onClick={() => openNew({image: "news2.png", title: "Good Leadership entails service and dedication"})} className='relative h-full cursor-pointer w-450px screen1020px:w-full news-bx'>
                            <div className='absolute top-0 left-0 w-full h-full duration-300 news-bg-effect'></div>
                            <img src={require('../../asset/News/news2.png')} alt="News" className='object-cover w-full pointer-events-none h-400px rounded-xl'/>
                            <div className='absolute bottom-0 flex items-center w-full h-auto p-5 bg-rgba_black_05 rounded-b-xl'>
                                <div>
                                    <p className='text-base text-white'>Data Published</p>
                                    <p className='text-2xl font-bold text-white'>Good Leadership entails service and dedication</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-500px h-400px screen1020px:w-full'>
                        <div onClick={() => openNew({image: "news3.png", title: "Provincial Women Conuncil’s Capacity Building"})} className='relative h-full cursor-pointer w-450px screen1020px:w-full news-bx'>
                            <div className='absolute top-0 left-0 w-full h-full duration-300 news-bg-effect'></div>
                            <img src={require('../../asset/News/news3.png')} alt="News" className='object-cover w-full pointer-events-none h-400px rounded-xl'/>
                            <div className='absolute bottom-0 flex items-center w-full h-auto p-5 bg-rgba_black_05 rounded-b-xl'>
                                <div>
                                    <p className='text-base text-white'>Data Published</p>
                                    <p className='text-2xl font-bold text-white'>Provincial Women Conuncil’s Capacity Building</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            :

            <LatestNewsModal setNewsDetailsDom={setNewsDetailsDom} news={news}/>
        }
    </section>
  )
}

export default LatestNews