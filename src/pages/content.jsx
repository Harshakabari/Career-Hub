import React from "react";
import jobdesc from "../assets/content-image.png";
import { LuArrowBigRightDash } from "react-icons/lu";
import background from "../assets/bac-removebg.png";

const content = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 bg-slate-00 py px-48 h-[550px] items-center">
        <div>
          <img
            className="h-[450px] w-[450px]"
            src={jobdesc}
            alt="jobdesc-image"
          />
        </div>
        <div className="mt-24">
          <div className="text-black relative">
            <img
              className="absolute left-10 -top-52"
              src={background}
              alt=""
              srcset=""
            />
            <h3 className="font-semibold text-5xl absolute -top-60">
              Live Life On Your Own Terms.
            </h3>
            <ul className="text-lg text-slate-600 py-6 leading-8 absolute -top-36">
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
