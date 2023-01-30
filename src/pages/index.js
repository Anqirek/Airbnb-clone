import Header from 'components/Header'
import Banner from 'components/Banner'
import Head from 'next/head'
import Image from 'next/legacy/image'
import MainCards from 'components/MainCards'



export default function Home({exploreData, cardsData}) {
  exploreData
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
      </Head>

      <Header />
      <Banner />
      <MainCards exploreData = {exploreData} cardsData={cardsData} />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res)=>res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res)=>res.json()
  )
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
