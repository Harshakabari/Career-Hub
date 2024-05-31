import React from 'react';
import { Form, FormGroup } from 'reactstrap';
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import job from '../assets/JOBimage.png';

const Main = () => {
  return (
    <>
      <div className="relative">
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
        <img className='mx-auto my-1 h-80 w-96 pt-20' src={job} alt="" />
         <h2 className='text-6xl text-center '> Make Your Dream true <br /> with 
         <span className='text-blue-500'> Jobmaster</span> 
         </h2> 
        <div className='flex justify-center items-center py-4 gap-4'> 
         <button className=' bg-[#2277AE] hover:text-[#2277AE] hover:bg-white rounded-md py-2 px-4' type="button">What you Looking for</button>
         <button className='bg-white hover:bg-[#2277AE] hover:text-white text-[#2277AE] rounded-md p-2 px-4' type="button">Explore Job Page</button>
         </div>
         
        </div>

        {/*=========== Search bar ============ */}
        <div className="text-black p-4 rounded-lg mt-10 w-max bg-slate-200 m-auto relative z-10">
          <Form className="flex items-center gap-4 h-[50px]">
            <FormGroup className="flex gap-3 items-center form__group form__group-fast">
              <IoSearch className='mt-3 ml-[10px] mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]' />
              <input className='p-2 mt-3 px-3 pl-[45px] rounded-md outline-none' type="text" placeholder="Job title or keyword" required />
            </FormGroup>
            <FormGroup className="flex mt-3 gap-3 items-center form__group form__group-fast">
              <IoLocationOutline className='mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]'/>
              <input className='p-2 px-3 pl-[45px] rounded-md outline-none' type="text" placeholder="Location" />
            </FormGroup>
            <button className="bg-[#2e94b3] text-white rounded-md p-2 px-12" type="submit">
              Search
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Main;
