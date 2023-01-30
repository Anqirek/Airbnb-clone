import React from 'react'
import SmallCards from './SmallCards'
import MediumCards from './MediumCards'
import LargeCard from './LargeCard'
import Footer from './Footer'

function MainCards({exploreData, cardsData}) {
  return (
   <div>
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
    <section className='pt-6'>
      <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

    {/* Pull data from server */}
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map(({img,distance,location}) =>(
         <SmallCards 
            key={img}
            img={img} 
            distance={distance} 
            location={location} 
            />
        ))}     
     </div>
    </section>

    <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-4'>
        {cardsData?.map(({img,title}) =>(
         <MediumCards 
         key={img} 
         img={img} 
         title={title}
          />
        ))}
        </div>
    </section>

    <LargeCard
        img='https://links.papareact.com/4cj'

        title='The Greatest Outdoors'
        description='Wishlist curated by Airbnb'
        buttonText='Get Inspired'
     />

  </main>

    <Footer/>
</div>
  )
}

export default MainCards