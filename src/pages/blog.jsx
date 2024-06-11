import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blogcard from "../components/BlogCard/card";

const blog = () => {
  return (
    <>
      <Header />

      <div className=" pt-10 pb-4">
        <h2 className="text-center font-semibold text-5xl">Career Advices</h2>
        <p className="text-gray-600 text-center tracking-wide text-xl m-2">Learn more career tips from company's recruiter</p>
      </div>
      <div className='grid grid-cols-3 gap-6 px-32 pb-5'>
      <Blogcard />
      </div>
      <Footer />
    </>
  )
}

export default blog
