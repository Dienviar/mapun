import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi'
import { MdPhone, MdEmail } from 'react-icons/md'

const OfficialsDetails = () => {

    const { name, position, image } = useParams()
    const navigate = useNavigate()

    document.title = name
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='w-full h-auto flex justify-center'>
        <section className='w-1000px h-auto mt-16'>
            <article className='w-full h-20 px-5'>
                <p onClick={() => navigate(-1)} className='mt-2 text-xl text-blue font-bold duration-500 cursor-pointer hover:-ml-2'><BiLeftArrow className='inline mr-2'/>Back</p>
            </article>

            <article className='w-full h-300px flex screen800px:grid screen800px:h-auto'>
                <div className='w-auto h-full flex justify-center items-center'>
                    <div className='w-72 h-72 screen420px:w-auto screen420px:h-auto'>
                        <img src={require(`../../../asset/Officials/${image}`)} alt={name} className='rounded-full w-full h-ful p-5' />
                    </div>
                </div>
                <div className='w-full h-full flex items-start'>
                    <div className='w-full h-auto mt-8 px-5'>
                        <div className='w-full h-20'>
                            <p className='text-5xl font-bold text-red screen800px:text-center screen600px:text-3xl'>{name}</p>
                            <p className='font-semibold text-xl text-red opacity-75 screen800px:text-center'>{position}</p>

                            <div className='w-full h-auto flex mt-20 screen800px:mt-10 screen800px:justify-center'>
                                <MdPhone className='inline mt-1 w-7 h-7 text-red opacity-50 mr-2 screen420px:w-5 screen420px:h-5'/>
                                <p className='font-semibold text-2xl text-red opacity-90 screen420px:text-lg'>123-456-7893</p>
                            </div>

                            <div className='w-full h-auto flex mt-5 screen800px:mt-2 screen800px:justify-center'>
                                <MdEmail className='inline mt-1 w-7 h-7 text-red opacity-50 mr-2 screen420px:w-5 screen420px:h-5'/>
                                <p className='font-semibold text-2xl text-red opacity-90 screen420px:text-lg'>hello@mapun.com</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </article>


            <article className='w-full h-auto mt-20 px-5 screen800px:mt-48'>
                <div className='w-full h-20 flex items-center'>
                    <p className='text-blue text-2xl font-bold'>Background Informtation </p>
                </div>

                <div className='w-full h-auto'>
                    <p className='text-semi_black text-xl text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis mollis egestas pretium, lorem risus, amet. Phasellus dictumst euismod ultrices posuere commodo vel mauris id leo. Nunc scelerisque quis dignissim purus mauris varius euismod tortor, lorem. Massa tincidunt in ullamcorper velit eget ornare. 
                    </p>

                    <br/>

                    <p className='text-semi_black text-xl text-justify'>
                        Quis elementum a libero justo, ac. Ac at eget faucibus semper in. Erat consectetur eu ipsum iaculis fames arcu, commodo tempus tortor. Ut congue et eu enim faucibus elementum suscipit odio lacus. Posuere quis adipiscing in nulla consectetur. Erat pretium ut facilisi sagittis. 
                    </p>

                    <br/>

                    <p className='text-semi_black text-xl text-justify'>
                        Dignissim sed mauris diam interdum mi commodo fames imperdiet. Ac ipsum felis quis in diam faucibus. Id eget morbi est in morbi malesuada sollicitudin tristique. Et est consectetur sem libero molestie elit id sit.
                    </p>
                </div>
            </article>
        </section>
    </main>
  )
}

export default OfficialsDetails