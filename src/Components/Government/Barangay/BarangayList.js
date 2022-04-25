import React from 'react'
import BarangayListCard from './BarangayListCard'

const BarangayList = () => {

    const barangays = [
        'Boki',
        'Duhul Batu',
        'Guppah',
        'Iruk-Iruk',
        'Kompang',
        'Liyubud',
        'Lubbak Parang',
        'Lupa Pula',
        'Mahalu',
        'Pawan',
        'Sapah',
        'Sikub',
        'Tabulian',
        'Tanduan',
        'Umus Mataha'
    ]

  return (
    <section className='w-full flex justify-center mt-20'>
        <article className='w-1000px h-auto flex justify-center flex-wrap'>
            {barangays.map(barangay => (
                <BarangayListCard name={barangay} key={barangay}/>
            ))}
        </article>
    </section>
  )
}

export default BarangayList