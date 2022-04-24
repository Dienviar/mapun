import React from 'react'
import { GoLocation } from 'react-icons/go'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 
const Contact = () => {
  return (
    <main className='relative flex justify-center w-full h-auto'>
      <section className='flex justify-center h-auto px-5 mt-16 w-1000px screen1050px:grid'>
          <article className='w-full h-auto'>
            <div className='flex items-center w-full h-auto'>
              <p className='text-xl font-semibold text-red'>Be Connected!</p>
            </div>

            <div className='flex items-center w-full h-auto'>
              <p className='text-6xl font-bold text-blue screen800px:text-5xl screen350px:break-all'>Our Contact Information</p>
            </div>

            <div className='flex items-center w-full h-auto mt-5'>
              <p className='text-xl text-semi_black'>We understand that it is important for you access our services in a way time.</p>
            </div>

            <div className='flex items-center w-full h-auto mt-5'>
              <div className='flex items-center justify-center w-20 h-20'>
                <GoLocation className='w-10 h-10 opacity-50 text-red'/>
              </div>

              <div className='flex items-center w-full h-20 p-2'>
                <div>
                  <p className='text-sm font-semibold text-red opacity-70'>Address</p>
                  <p className='text-2xl font-bold text-red'>Mapun, Tawi-Tawi</p>
                </div>
              </div>
            </div>

            <div className='flex items-center w-full h-auto mt-5'>
              <div className='flex items-center justify-center w-20 h-20'>
                <HiOutlineMail className='w-10 h-10 opacity-50 text-red'/>
              </div>

              <div className='flex items-center w-full h-20 p-2'>
                <div>
                  <p className='text-sm font-semibold text-red opacity-70'>Email</p>
                  <p className='text-2xl font-bold text-red'>Mapun, Tawi-Tawi</p>
                </div>
              </div>
            </div>

            <div className='flex items-center w-full h-auto mt-5'>
              <div className='flex items-center justify-center w-20 h-20'>
                <BsTelephone className='w-10 h-10 opacity-50 text-red'/>
              </div>

              <div className='flex items-center w-full h-20 p-2'>
                <div>
                  <p className='text-sm font-semibold text-red opacity-70'>Phone</p>
                  <p className='text-2xl font-bold text-red'>+00 12 345 67</p>
                </div>
              </div>
            </div>
          </article>

          <article className='w-full h-auto px-5 rounded-xl screen1050px:mt-20'>
            <div className='flex items-center w-full h-20'>
              <p className='text-2xl font-bold text-red opacity-70'>Send a Message</p>
            </div>

            <div className='flex items-center justify-center w-full h-20'>
              <TextField id="outlined-basic" label="Name" variant="outlined" className='w-full'/>
            </div>

            <div className='flex items-center justify-center w-full h-20'>
              <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' />
            </div>

            <div className='flex items-center justify-center w-full h-20'>
              <TextField id="outlined-basic" label="Subject" variant="outlined" className='w-full' />
            </div>

            <div className='flex items-center justify-center w-full h-auto'>
              <TextField id="outlined-basic" multiline rows={4} label="Message" variant="outlined" className='w-full' />
            </div>

            <div className='flex items-center justify-center w-full h-auto mt-5 mb-7'>
              <Button variant="contained" style={{ backgroundColor: "#064789" }} className='w-full h-14'>Submit</Button>
            </div>
          </article>
      </section>
    </main>
  )
}

export default Contact