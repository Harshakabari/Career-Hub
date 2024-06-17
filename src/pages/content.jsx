import React from "react";
import jobdesc from "../assets/mainbg.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Blob from "../assets/blob.png";



const content = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:h-[550px] h-[1200px] lg:mt-0 -lg:gap-8 lg:px-32 items-center relative">
        <div>
          <img
            className=" lg:h-[550px] w-[570px] mix-blend-multiply"
            src={jobdesc}
            alt="jobdesc-image"
          />
        </div>
        <div className="lg:mt-24 -mt-56 p-4">
          <div className="text-black ">
            <img
              className="absolute lg:top-2  lg:h-[750px] lg:w-[1000px] -z-10 opacity-40 -top-24 "
              src={Blob}
              alt=""
              srcSet=""
            />
            

            <h3 className="font-semibold lg:text-5xl text-4xl  -top-60">
              Live Life On Your Own Terms.
            </h3>
            <ul className="text-lg text-gray-700 py-6 leading-8 tracking-wide	-top-36">
              <li className="flex ">
                <FaArrowCircleRight  className="w-[32px] text-2xl mt-1" />
                Don't let work schedule run your life.
              </li>
              <li className="flex ">
                <FaArrowCircleRight  className="w-[50px] text-2xl mt-1" />
                We want to help you reach your full potential. Build new
                experiences by working in different industries.
              </li>
              <li className="flex ">
                <FaArrowCircleRight  className="w-[50px] text-2xl mt-1" /> We
                want you to take back control of your time, Manage expectations
                for that perfect work-life balance.
              </li>
              <li className="flex ">
                <FaArrowCircleRight  className="w-20 text-2xl mt-1" />
                We connect you with jobs allowing you to work where you want,
                when you want, Every completed shift improves our matching,
                ensuring we find you work that you enjoy.
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default content;
