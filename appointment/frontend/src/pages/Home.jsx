import React from 'react'
import Header from '../components/Header'
import Specialities from '../components/Specialities'
import TopDoctors from '../components/TopDoctors'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
      <Header />
      <Specialities />
      <TopDoctors />
      <Review />
    </div>
  )
}

export default Home