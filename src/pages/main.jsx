import React from 'react';
import { Link } from 'react-router-dom';
// import Img1 from "../assets/BlogCard/blog1.webp";
// import Img2 from "../assets/BlogCard/blog2.jpg";
// import video from "../assets/video/jobvideo.mp4";
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
    <div className="flex flex-row ">
      <div className="w-1/2 p-8 ml-12">
      <img src="" alt="" />
        <h2 className="text-6xl mt-16  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 inline-block text-transparent bg-clip-text font-bold mb-4">Make your next <br />hire with <br /><span className=''> Career Hub</span></h2>
        <p className="text-gray-600 text-[1.4rem] py-3">We can help you expand your reach and get your jobs <br />  in front of the right candidates.</p>
        <div className='flex  items-center py-6 gap-4'> 
         <button className=' bg-blue-600 text-white hover:bg-blue-700  rounded-md font-semibold py-2 px-4 text-xl border shadow-lg hover:scale-105 duration-500' type="button"><Link to="/postform">Hire Telent</Link></button>
         <button className='bg-white hover:bg-blue-600 border border-blue-900 hover:text-white text-blue-900 hover:border-none hover:scale-105 duration-500 font-semibold rounded-md p-2 px-4 text-xl' type="button" ><Link to="/job"> Explore Job</Link></button>
         </div>
         {/* <SearchBar /> */}
         <Counts />
      </div>
      <div className="w-1/2 pt-16 flex flex-col space-y-4 ml-1">
        {/* <img
          src={Img1}
          alt=""
          className="-ml-20 w-[400px] h-52 object-cover border-blue-900 border rounded-lg"
        />
        <video src={video} alt="video" controls autoPlay loop playsInline className="w-[400px] h-52 border-blue-900 border object-cover rounded-lg" />   

        <img
          src={Img2}
          alt=""
          className="ml-20 w-[400px] h-52 object-cover  border-blue-900 border rounded-lg"
        /> */}
        <img className='h-[550px] w-[750px] mix-blend-multiply opacity-100 ' src={Mainimg} alt="" />
      </div>
    </div>
    
    </div>
    </>
  );
}

export default main;
