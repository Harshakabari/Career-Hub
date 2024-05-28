import React from 'react'
import Ractangle from '../assets/Rectangle2.png';
import { Form, FormGroup } from 'reactstrap';
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
// import job from '../assets/JOBimage.png';


const main = () => {
  return (
    <>
      <div>
        <img
          className="w-dvw h-[400px] divide-rose-50 "
          src={Ractangle}
          alt="Ractangle-image"
        />
        {/* <img src={job} alt="job-image" /> */}
      </div>

      {/*=========== Search bar ============ */}
      <div className="text-black p-4 rounded-lg mt-4 w-max bg-slate-200 m-auto">
        <Form className="flex items-center gap-4 h-[50px] ">

          <FormGroup className="flex gap-3 items-center form__group form__group-fast ">
            <IoSearch className='mt-3 ml-[10px] mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]' />
            <input className='p-2 mt-3 px-3 pl-[45px] rounded-md outline-none ' type="text" placeholder="Job title or keyword" />
          </FormGroup>

          <FormGroup className="flex mt-3 gap-3 items-center form__group form__group-fast ">
            <IoLocationOutline className=' mr-[-50px] z-10 border-transparent bg-slate-300 rounded-lg border-2 h-8 w-8 p-[7px]'/>
            <input className='p-2 px-3 pl-[45px] rounded-md outline-none' type="text" placeholder="Location" />
          </FormGroup>

          <button
            className="bg-[#2e94b3] text-white rounded-md p-2 px-12"
            type="button"
          >
            Search
          </button>

        </Form>
      </div>
    </>
  );
}

export default main;