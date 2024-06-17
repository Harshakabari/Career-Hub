import React from 'react';
import { Link } from 'react-router-dom';
import Mainimg from "../assets/4565.jpg";
import Counts from "../components/Counts/Counts"


const main = () => {
  return (
    <>
      <div className="relative  lg:mt-0 md:mt-0">
        {/* Background Animation */}
        <div className="area absolute inset-0  ">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    <div className="flex flex-row -mt-5 px-20 ">
      <div className="w-1/2 p-8 ml-12">
        <h2 className="text-6xl mt-16  bg-gradient-to-r from-blue-900  via-blue-800 to-blue-200 inline-block text-transparent bg-clip-text font-bold mb-4">Make your next <br />hire with <br /><span className=''> Career Hub</span></h2>
        <p className="text-gray-600 text-[1.4rem] py-3">We can help you expand your reach and get your jobs <br />  in front of the right candidates.</p>
        <div className='flex  items-center py-6 gap-4'> 
         <button className=' bg-blue-900 hover:bg-[#e7f3ff] hover:text-blue-900 rounded-md  duration-200 font-semibold py-2 px-4 text-xl shadow-lg ' type="button"><Link to="/postform">Hire Telent</Link></button>
         <button className='hover:bg-blue-900 hover:text-white bg-[#e7f3ff] text-blue-900  duration-200 font-semibold rounded-md p-2 px-4 text-xl' type="button" ><Link to="/job"> Explore Job</Link></button>
         </div>
         {/* <SearchBar /> */}
      
      </div>
      <div className="w-1/2 pt-16 flex flex-col space-y-4 -ml-20">
        <img className='h-[400px] w-[700px] mix-blend-multiply opacity-100 ' src={Mainimg} alt="" />
      </div>
    </div>
    <Counts />
    </div>
    </>
  );
}

export default main;
