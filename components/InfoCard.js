import React from 'react'
import Image from 'next/legacy/image'

function InfoCard({img, location,title, description, star, price, total, long}) {

  return (
    <div>
        <div>
        <Image className=''
        src={img}
        layout='fill'
        priority 
        />
        </div>
    </div>
  )
}

export default InfoCard