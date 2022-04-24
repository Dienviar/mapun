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
                <article className='w-full h-auto flex justify-center mt-10 mb-5'>
                    <div className='w-1000px h-20 flex justify-center items-center'>
                        <p className='text-4xl text-black font-bold screen600px:text-3xl screen600px:text-center'>Latest From Our <span className='text-blue'>Newsroom</span></p>
                    </div>
                </article>

                <article className='w-full h-auto flex justify-center'>
                    <div className='w-1000px h-400px flex justify-center items-center mb-10 screen1020px:w-full'>
                        <div onClick={() => openNew({image: "news1.png", title: "Courtesy call to Mapun LCE last October 7 at Iruk, Mapun Taw"})} className='relative w-950px h-full screen1020px:w-full cursor-pointer news-bx'>
                            <div className='news-bg-effect absolute top-0 left-0 w-full h-full duration-300'></div>
                            <img src={require('../../asset/News/news1.png')} alt="News" className='w-full h-400px object-cover rounded-xl pointer-events-none'/>
                            <div className='absolute bottom-0 w-full h-auto bg-rgba_black_05 rounded-b-xl flex items-center p-5'>
                                <div>
                                    <p className='text-white text-base'>Data Published</p>
                                    <p className='text-white font-bold text-2xl'>Courtesy call to Mapun LCE last October 7 at Iruk, Mapun Tawi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <article className='w-full h-auto flex justify-center flex-wrap'>
                    <div className='w-500px h-400px flex justify-center items-center screen1020px:w-full screen1020px:mb-10'>
                        <div onClick={() => openNew({image: "news2.png", title: "Good Leadership entails service and dedication"})} className='relative w-450px h-full screen1020px:w-full cursor-pointer news-bx'>
                            <div className='news-bg-effect absolute top-0 left-0 w-full h-full duration-300'></div>
                            <img src={require('../../asset/News/news2.png')} alt="News" className='w-full h-400px object-cover rounded-xl pointer-events-none'/>
                            <div className='absolute bottom-0 w-full h-auto bg-rgba_black_05 rounded-b-xl flex items-center p-5'>
                                <div>
                                    <p className='text-white text-base'>Data Published</p>
                                    <p className='text-white font-bold text-2xl'>Good Leadership entails service and dedication</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-500px h-400px flex justify-center items-center screen1020px:w-full'>
                        <div onClick={() => openNew({image: "news3.png", title: "Provincial Women Conuncil’s Capacity Building"})} className='relative w-450px h-full screen1020px:w-full cursor-pointer news-bx'>
                            <div className='news-bg-effect absolute top-0 left-0 w-full h-full duration-300'></div>
                            <img src={require('../../asset/News/news3.png')} alt="News" className='w-full h-400px object-cover rounded-xl pointer-events-none'/>
                            <div className='absolute bottom-0 w-full h-auto bg-rgba_black_05 rounded-b-xl flex items-center p-5'>
                                <div>
                                    <p className='text-white text-base'>Data Published</p>
                                    <p className='text-white font-bold text-2xl'>Provincial Women Conuncil’s Capacity Building</p>
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