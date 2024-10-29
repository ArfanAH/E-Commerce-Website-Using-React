import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchItems from './components/MostSearchItems'
import NewCollection from './components/NewCollection'
import Footer from './components/Footer'

function Home() {
  return (
    <div>



      <Header />
      <Hero />
      <Category />
      <MostSearchItems />
      <NewCollection />
      <Footer/>

    </div>
  )
}

export default Home

