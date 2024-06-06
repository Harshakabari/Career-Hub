import React from 'react';
import { Form, FormGroup } from 'reactstrap';
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import job from '../assets/jobs.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="relative -mt-10 lg:mt-0 md:mt-0">
        {/* Background Animation */}
        <div className="area absolute inset-0 mt-[-16px]">
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

        {/* ================== content ================== */}
        <div className='text-white'>
        <img className='mx-auto my-1 h-80 w-[550px] pt-20' src={job} alt="" />
         <h2 className='lg:text-6xl md:text-4xl text-3xl text-center '> Get Your Dream Job <br /> with 
         <span className='text-blue-500/100 '> Jobmaster</span> 
         </h2> 
        <div className='flex justify-center items-center py-6 gap-4'> 
         <button className=' bg-[#2277AE] hover:text-[#2277AE] hover:bg-white rounded-md font-semibold py-2 px-4' type="button">Hire Telent</button>
         <button className='bg-white hover:bg-[#2277AE] hover:text-white text-[#2277AE] font-semibold rounded-md p-2 px-4' type="button"><Link to="/job"> Explore Job Page </Link></button>
         </div>
         
        </div>

        {/*=========== Search bar ============ */}
        <div className="text-black p-4 rounded-lg mt-10 w-max bg-slate-200 m-auto relative z-10">
          <Form className="grid lg:grid-cols-3 md:grid-cols-2 -mt-3 items-center justify-center gap-4 lg:h-[50px]">
            <FormGroup className="flex gap-3 items-center form__group form__group-fast">
              <IoSearch className='mt-3 ml-[10px] mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]' />
              <input className='p-2 mt-3 px-3 pl-[45px] rounded-md outline-none' type="text" placeholder="Job title or keyword" required />
            </FormGroup>
            <FormGroup className="flex mt-3 gap-3 ml-2 lg:ml-0 md:ml-0 items-center form__group form__group-fast">
              <IoLocationOutline className='mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]'/>
              <input className='p-2 px-3 pl-[45px] rounded-md outline-none' type="text" placeholder="Location" />
            </FormGroup>
            <button className="items-center md:col-span-2 lg:col-span-1 px-10 py-2.5 text-sm font-medium text-center text-white bg-[#2277AE] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" type="submit">
              Search
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Main;
