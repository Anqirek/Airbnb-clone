import { useRouter } from 'next/router'
import React from 'react'

function Seek() {

  return (
    <main className='flex'>
    <section className='flex-grow pt-14 px-5'>
        <p className='text-xs'>
            300+ Stays for 5 guests.
        </p>
        <h1 className='text-3xl font-semi-bold mt-3 mb-5'>Stays in Europe</h1>

        <div className='hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms</p>
            <p className='button'>More Filters</p>

        </div>
    </section>
</main>
  )
}

export default Seek