import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../pages/main.jsx';
import Steps from '../pages/steps.jsx';


const Home = () => {
  return (
    <div className='overflow-x-hidden text-white h-dvh w-dvw '>
      <Header />
      <Main />
      <Steps />
      <Footer />
    </div>
  )
}

export default Home
