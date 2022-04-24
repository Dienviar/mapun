import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewsLetter = () => {
  return (
    <section className='flex items-center justify-center w-full h-auto my-36 bg-grey'>
        <article className='flex items-center justify-center w-1100px h-500px screen600px:w-full'>
            <div className='w-full h-auto'>
                <div className='flex items-center justify-center w-full h-auto screen600px:px-5'>
                    <p className='text-4xl font-bold text-blue screen600px:text-center'>Subscribe to our Newsletter</p>
                </div>

                <div className='flex items-center justify-center w-full h-auto'>
                    <p className='text-base text-blue screen600px:text-center'>Get Mapuan news delivered to your inbox.</p>
                </div>

                <div className='flex justify-center w-full h-auto mt-10 screen600px:px-5'>        
                    <div className='flex justify-center h-20 w-500px screen600px:w-full screen350px:grid'>
                        <TextField id="filled-basic" label="Your Email Address" variant="filled"  className='w-4/5 h-full screen350px:w-full screen350px:text-center' />
                        <Button variant="contained" style={{ backgroundColor : "#82243C" }} className='w-6/12 h-14 screen350px:w-full screen350px:mt-5'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default NewsLetter