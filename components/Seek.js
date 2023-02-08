import { useRouter } from 'next/router'
import React from 'react'
import { format } from 'date-fns';


function Seek() {

  const router=useRouter();
  const {location,startDate,endDate,noOfGuests}= router.query
  console.log(router.query)

  const formattedStartDate = format(new Date(startDate),"dd MMMM yy");

  const formattedEndDate = format(new Date(endDate),"dd MMMM yy");

  const range = `${formattedStartDate}- ${formattedEndDate}`

  return (
    <main className='flex'>
    <section className='flex-grow pt-14 px-5'>
        <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests.
        </p>
        <h1 className='text-3xl font-semi-bold mt-3 mb-5'>Stays in {location}</h1>

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