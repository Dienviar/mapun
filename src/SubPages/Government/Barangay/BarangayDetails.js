import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi'
import Landing from '../../../Components/Landing';
import BarangayOfficialsCard from './BarangayOfficialsCard';


const BarangayDetails = () => {
    const { name } = useParams()
    const navigate = useNavigate()

    document.title = name
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <main className='w-full h-auto flex justify-center'>
        <section className='w-full h-auto'>
            <Landing title={name} bg={"barangay_default"}/>
            <article className='absolute top-36 w-full flex justify-center h-20 px-5'>
                <div className='w-1000px h-full'>
                    <p onClick={() => navigate(-1)} className='absolute mt-2 text-xl text-blue font-bold duration-500 cursor-pointer hover:-ml-2'><BiLeftArrow className='inline mr-2'/>Back</p>
                </div>
            </article>


            <article className='w-full h-auto flex justify-center mt-20 px-3'>
                <div className='w-1000px h-auto'>
                    <div className='w-full h-auto flex items-center'>
                        <p className='text-blue opacity-50 text-xl'>Barangay</p>
                    </div>

                    <div className='w-full h-auto flex items-center'>
                        <p className='text-blue text-4xl font-bold'>{name}</p>
                    </div>

                     <div className='w-full h-auto flex items-center mt-3'>
                        <p className='text-semi_black text-xl text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus arcu cras diam orci augue nunc, semper. Vitae, vitae quis aliquam ornare imperdiet. Orci viverra parturient tortor vitae lectus odio sit quam. Tellus pulvinar congue quisque semper lectus. In leo donec dui risus metus, viverra in.
                        </p>
                    </div>
                </div>
            </article>


            <article className='w-full h-auto flex justify-center mt-20'>
                <div className='w-1000px h-auto flex justify-center'>
                    <p className='text-4xl text-red'>Barangay Official</p>
                </div>
            </article>

            <article className='w-full h-auto flex justify-center'>
                <div className='w-1000px h-auto flex'>
                    <div className='w-full h-auto flex justify-center flex-wrap mt-10'>
                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>

                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>

                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>
                        <BarangayOfficialsCard/>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}

export default BarangayDetails