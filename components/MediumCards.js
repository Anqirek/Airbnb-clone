import React from 'react'
import Image from 'next/legacy/image'

function MediumCards({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform-400 ease-out'>
     <div className='relative h-80 w-80'>
        <Image className='rounded-xl' alt=''
        src={img}
        layout='fill'
        />
     </div>
     <h3 className='text-3xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCards