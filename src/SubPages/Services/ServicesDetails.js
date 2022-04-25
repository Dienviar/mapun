import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi'

const ServicesDetails = () => {

    const navigate = useNavigate()
    const { title, bg } = useParams();

    document.title = title
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
    <main className='w-full h-auto flex justify-center'>
        <section className='w-full h-auto'>
            <article className={`relative flex items-end justify-center w-full h-300px ${bg} services-img-bg`}>
                <div className='absolute flex justify-center w-full h-20 px-2 top-20 screen700px:top-0'>
                    <div className='z-10 flex items-center h-full w-1000px'>
                        <p onClick={() => navigate(-1)} className='mt-2 text-xl text-white duration-500 cursor-pointer drop-shadow-0_7_3_rgaba_black_1 hover:-ml-2'><BiLeftArrow className='inline mr-2'/>Back</p>
                    </div>
                </div>

                <div className='flex items-center h-auto py-10 w-1000px'>
                    <p className='px-5 font-bold text-white text-6xl drop-shadow-0_7_3_rgaba_black_1 screen900px:text-5xl'>{title}</p>
                </div>
            </article>


            <article className='w-full h-auto flex justify-center mt-10 px-3'>
                <div className='w-1000px text-semi_black text-lg'>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque donec quis hac turpis. Tempor pulvinar est etiam habitant. Faucibus sed facilisis risus elit. Augue tristique scelerisque rhoncus, vitae commodo rutrum. Consequat, nec ornare duis mattis et etiam. Condimentum consequat elit habitant elementum ipsum ac. Gravida ut habitant lacinia eget porta quis laoreet. Ut ultricies nunc mattis dui lectus. Facilisis et in odio interdum aenean nisi montes, faucibus molestie.
                    </p>

                    <br/>

                    <p className=''>
                        Aenean aliquet ultrices at nulla urna, egestas. Id sed ultrices rhoncus, et. Fermentum purus eget fermentum et massa. Odio integer mollis scelerisque pharetra viverra scelerisque. Eu id nunc ornare id tortor. At non diam viverra pulvinar nibh eu. Egestas amet vel sed ut. Elementum aliquam justo, leo volutpat morbi mauris. Malesuada et imperdiet eget mauris aenean volutpat consequat. Commodo tincidunt amet montes, quam turpis nisi, ultricies praesent neque. Ut integer mi facilisis sed risus. Cras urna, massa viverra sed. At quis neque, sed mattis. Posuere a, aenean ornare mi, duis faucibus laoreet tellus molestie. Nibh consequat nibh orci mauris at facilisis in faucibus tincidunt.
                    </p>

                    <br/>

                    <p className=''>
                        Purus neque praesent sem sagittis, facilisi fames justo, vitae. Nisl, eget nulla cursus tincidunt ac felis, et imperdiet dolor. Ipsum in pellentesque malesuada nunc tristique non. Sagittis erat tellus fringilla euismod diam nam posuere a odio. Eget at enim maecenas aliquam iaculis. Rhoncus elit morbi mi amet, turpis. Fringilla posuere sagittis, velit sagittis. Non dolor volutpat ante sed.
                    </p>
                </div>
            </article>
        </section>
    </main>
  )
}

export default ServicesDetails