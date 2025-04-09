import React from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import TopSpecies from '../components/TopSpecies'
import Donation from '../components/Donation'

const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <TopSpecies />
      <Donation />
    </div>
  )
}

export default Home