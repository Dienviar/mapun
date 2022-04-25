import React from 'react'

const EconomyDetails = () => {
  return (
    <section className='w-full h-auto mt-20 px-3'>
        <article className='w-full h-auto flex justify-center'>
            <div className='w-1000px h-20'>
                <p className='text-blue text-4xl font-bold'>Economy</p>
            </div>
        </article>

        <article className='w-full h-auto flex justify-center'>
            <div className='w-1000px h-auto flex justify-center'>
                <img src={require('../../../asset/Municipality/Economy/economy.png')} alt="Economy" />
            </div>
        </article>

        <article className='w-full h-auto flex justify-center mt-10'>
            <div className='w-1000px h-auto'>
                <p className='text-semi_black text-justify text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget amet, fringilla ipsum, duis. Cursus in et, in urna erat eu tellus consequat neque. Tellus convallis urna sit purus, purus integer. Maecenas id convallis morbi ultricies. Faucibus nisi arcu, dignissim viverra amet arcu, est.
                </p>
            </div>
        </article>
    </section>
  )
}

export default EconomyDetails