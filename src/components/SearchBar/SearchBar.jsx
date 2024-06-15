import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap'; // Assuming you're using reactstrap for forms
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


const SearchBar = ({ searchHandler }) => {
  const locationRef = useRef(null);
  const distanceRef = useRef(null);
  

  return (
    <div className="search__bar  rounded-lg shadow-xl w-full mt-12 mb-10">
      <Form className='flex flex-col md:flex-row items-center gap-4 px-5 justify-between'>
        <FormGroup className='flex items-center gap-3 border-b md:border-r-2 border-gray-300 w-full'>
          
          <div className='flex items-center gap-2'>
          <IoIosSearch />

            <input
              type="text"
              placeholder='Job title or keyword'
              ref={locationRef}
              className="border-none text-md font-medium text-gray-800 focus:outline-none p-1 w-64"
            />
          </div>
        </FormGroup>

        <FormGroup className='flex items-center gap-3 border-b md:border-r-2 border-gray-300 w-full'>
          <span className="text-3xl text-red-500"><i className="ri-map-pin-time-line"></i></span>
          <div className='flex gap-2 items-center'>
          <IoLocationOutline />

            <input
              type="text"
              placeholder='Enter Location'
              ref={distanceRef}
              className="border-none text-md font-medium text-gray-800 focus:outline-none p-1 w-64"
            />
          </div>
        </FormGroup>

        <button className='bg-white hover:bg-blue-500 border border-blue-900 hover:text-white text-blue-900 font-semibold rounded-lg hover:border-none py-1 px-4 text-md w-72 -mt-3 ' type="button" ><Link to="/job"> Search Job</Link></button>

      </Form>
    </div>
  );
};

export default SearchBar;

