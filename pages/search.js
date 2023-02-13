import Footer from 'components/Footer'
import Header from 'components/Header'
import Seek from 'components/Seek'
import { useRouter } from 'next/router'
import React from 'react'
import { format } from 'date-fns';
import InfoCard from 'components/InfoCard'


function Search({searchResults}) {  

  const router=useRouter();
  const {location,startDate,endDate,noOfGuests}= router.query
  console.log(searchResults)

  const formattedStartDate = format(new Date(startDate),"dd MMMM yy");

  const formattedEndDate = format(new Date(endDate),"dd MMMM yy");

  const range = `${formattedStartDate}- ${formattedEndDate}`

  return (
    <div className=''>
        <Header  placeholder= {`${location} | ${range} | ${noOfGuests} guests.`}/>
       
  
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
          <div className='flex flex-col'>
          {searchResults.map((item)=> (
            <InfoCard
            key={item.img}
            img={item.img}
            location={item.location}
            description={item.description}
            title={item.title}
            star= {item.star}
            price={item.price}
            total={item.total}
              />
            )
          )}
          </div>
    </section>
  </main>
    <Footer/>
</div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json())

  return {
    props: {
      searchResults,
    }
  }
}