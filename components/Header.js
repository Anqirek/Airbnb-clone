import React, { useState } from 'react'
import Image from 'next/legacy/image'
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon
 } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput]=useState('')
  const [startDate, setStartDate]=useState(new Date());
  const [endDate, setEndDate]=useState(new Date());
  const [noOfGuests, setNoOfGuests]=useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        
        {/* left */}
        <div className='relative h-7 w-8/12 sm:h-7 sm:w-7/12 md:h-8 md:w-6/12 lg:h-9 lg:w-5/12 xl:h-10 xl:w-5/12 flex items-center cursor-pointer my-auto'>
            <Image 
                src="https://links.papareact.com/qd3" alt=''
                layout="fill"
                objectFit="container"
                objectPosition="left"
                priority
            />
        </div>


        {/* middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            className='flex-grow pl-5 bg-transparent
            outline-none text-sm text-gray-600 placeholder-gray-400'
            type='text'
            placeholder='Start your Search'
            
            />
            <SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'
            />
            
        </div>


        {/* right */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
         <p className='hidden md:inline cursor-pointer'>Become a Host</p>
         <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
             <MenuIcon className='h-6 cursor-pointer' />
             <UserCircleIcon className='h-6 cursor-pointer' />   
            </div>
        </div>
        {searchInput && 
        <div className='flex flex-col col-span-3 mx-auto mt-10'>
            <DateRangePicker
             ranges={[selectionRange]}
             minDate={new Date()}
             rangeColors={['#FD5B61']}
             onChange={handleSelect}
             />
             <div className='flex items-center border-b mb-5'>
                <h2 className='text-2xl flex-grow font-semibold'>Number of Guests
                </h2>

              <UsersIcon className='h-5' />
              <input type="number" className='w-12 pl-3 text-lg outline-none text-gray-400'
              value={noOfGuests}
              onChange={e=>setNoOfGuests(e.target.value)}
              min={1}
               />
             </div>
             <div className='flex'>
                <button className='flex-grow text-gray-400'>Cancel</button>
                <button className='flex-grow text-red-400'>Search</button>
             </div>
            </div>
            }
        
    </header>
  )
}

export default Header