import Footer from 'components/Footer'
import Header from 'components/Header'
import Seek from 'components/Seek'
import { useRouter } from 'next/router'
import React from 'react'


function Search() {  

  return (
    <div className=''>
        <Header/>
        <Seek />
        <Footer/>
    </div>
  )
}

export default Search