import React from 'react'
import Ractangle from '../assets/Rectangle.png';
import { Form, FormGroup } from 'reactstrap';
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
// import job from '../assets/JOBimage.png';


const main = () => {
  return (
    <>
      <div>
        <img
          className="w-dvw h-[400px]"
          src={Ractangle}
          alt="Ractangle-image"
        />
        {/* <img src={job} alt="job-image" /> */}
      </div>

      {/*=========== Search bar ============ */}
      <div className="text-black p-4 rounded-lg w-max bg-slate-200 m-auto">
        <Form className="flex items-center gap-4">

          <FormGroup className="flex gap-3 items-center form__group form__group-fast ">
            <IoSearch />
            <input className='p-2 px-3 rounded-md' type="text" placeholder="job title or keyword" />
          </FormGroup>

          <FormGroup className="flex gap-3 items-center form__group form__group-fast ">
            <IoLocationOutline />
            <input className='p-2 px-3 rounded-md' type="text" placeholder="Location" />
          </FormGroup>

          <button
            className="bg-[#2e94b3] text-white rounded-md p-2 px-6"
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