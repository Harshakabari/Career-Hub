import React from "react";
import jobdesc from "../assets/mainbg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Blob from "../assets/blob.png";

const contentItems = [
  "Don't let work schedule run your life.",
  "We want to help you reach your full potential. Build new experiences by working in different industries.",
  "We want you to take back control of your time, Manage expectations for that perfect work-life balance.",
  "We connect you with jobs allowing you to work where you want, when you want. Every completed shift improves our matching, ensuring we find you work that you enjoy."
];

const Content = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:h-[550px] h-[1200px] lg:mt-0 -lg:gap-8 lg:px-32 items-center relative">
      <div>
        <img
          className="lg:h-[550px] w-[570px] mix-blend-multiply"
          src={jobdesc}
          alt="jobdesc-image"
        />
      </div>
      <div className="lg:mt-24 -mt-56 p-4">
        <div className="text-black">
          <img
            className="absolute lg:top-2 lg:h-[750px] lg:w-[1000px] -z-10 opacity-40 -top-24"
            src={Blob}
            alt=""
          />
          <h2 className="font-semibold lg:text-[43px] text-4xl pb-2">
            Live Life On Your Own Terms.
          </h2>
          <ul className="text-lg text-gray-700 py-6 leading-8 tracking-wide -top-36">
            {contentItems.map((item, index) => (
              <li key={index} className="flex my-2 ml-6">
                <div>
                <FaArrowRightLong className="w-[32px] text-xl my-1.5" />
                </div>
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
