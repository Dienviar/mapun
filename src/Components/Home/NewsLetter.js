import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewsLetter = () => {
  return (
    <section className='w-full h-auto my-36 flex bg-grey justify-center items-center'>
        <article className='w-1100px h-500px flex justify-center items-center'>
            <div className='w-full h-auto'>
                <div className='w-full h-auto flex justify-center items-center'>
                    <p className='text-4xl text-blue font-bold'>Subscribe to our Newsletter</p>
                </div>

                <div className='w-full h-auto flex justify-center items-center'>
                    <p className='text-base text-blue'>Get Mapuan news delivered to your inbox.</p>
                </div>

                <div className='w-full h-auto flex justify-center mt-10'>        
                    <div className='w-500px h-20 flex justify-center'>
                        <TextField id="filled-basic" label="Your Email Address" variant="filled"  className='w-4/5 h-full' />
                        <Button variant="contained" style={{ backgroundColor : "#82243C" }} className='w-6/12 h-14'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default NewsLetter