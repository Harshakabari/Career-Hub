import React from "react";
import jobdesc from "../assets/content-image.png";
import { LuArrowBigRightDash } from "react-icons/lu";
import background from "../assets/bac-removebg.png";
// import Blobimg from "../assets/blob.png";


const content = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:h-[550px] h-[1200px] lg:mt-0 -mt-40 lg:gap-8 lg:px-48 items-center">
        <div>
          <img
            className=" lg:h-[450px] w-[450px]"
            src={jobdesc}
            alt="jobdesc-image"
          />
        </div>
        <div className="lg:mt-24 -mt-56 p-4">
          <div className="text-black relative">
            <img
              className="absolute lg:left-10 lg:-top-40 opacity-70 -top-24 "
              src={background}
              alt=""
              srcSet=""
            />
            

            <h3 className="font-semibold lg:text-5xl text-4xl absolute -top-60">
              Live Life On Your Own Terms.
            </h3>
            <ul className="text-lg text-slate-600 py-6 leading-8 absolute tracking-wide	-top-36">
              <li className="flex ">
                <LuArrowBigRightDash className="w-[32px] text-2xl mt-1" />
                Don't let work schedule run your life.
              </li>
              <li className="flex ">
                <LuArrowBigRightDash className="w-[50px] text-2xl mt-1" />
                We want to help you reach your full potential. Build new
                experiences by working in different industries.
              </li>
              <li className="flex ">
                <LuArrowBigRightDash className="w-[50px] text-2xl mt-1" /> We
                want you to take back control of your time, Manage expectations
                for that perfect work-life balance.
              </li>
              <li className="flex ">
                <LuArrowBigRightDash className="w-20 text-2xl mt-1" />
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
