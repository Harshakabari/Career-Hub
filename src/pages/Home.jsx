import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../pages/main.jsx'


const Home = () => {
  return (
    <div className='bg-[#060C23] text-white h-dvh w-dvw '>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
