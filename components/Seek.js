// import { useRouter } from 'next/router'
// import React from 'react'
// import InfoCard from './InfoCard'

// function Seek({location, range, noOfGuests, searchResults}) {


//   return (
//     <main className='flex'>
//     <section className='flex-grow pt-14 px-5'>
//         <p className='text-xs'>
//             300+ Stays - {range} - for {noOfGuests} guests.
//         </p>
//         <h1 className='text-3xl font-semi-bold mt-3 mb-5'>Stays in {location}</h1>

//         <div className='hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap'>
//             <p className='button'>Cancellation Flexibility</p>
//             <p className='button'>Type of Place</p>
//             <p className='button'>Price</p>
//             <p className='button'>Rooms</p>
//             <p className='button'>More Filters</p>

//         </div>
//         <div className='flex flex-col'>
//         {searchResults.map((img, location,title, description, star, price, total)=> (
//           <InfoCard
//           key={img}
//           img={img}
//           location={location}
//           description={description}
//           title={title}
//           star= {star}
//           price={price}
//           total={total}
//           />
          
//         ))}
//         </div>
      
//     </section>
// </main>
//   )
// }

// export default Seek