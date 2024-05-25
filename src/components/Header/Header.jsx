import React from "react";
import Logo from "../../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="py-4 px-12 flex justify-between items-center">
        <a href="/">
          <img className="h-12" src={Logo} alt="" />
        </a>

        <nav>
          <ul className="gap-6 hidden md:flex">
            <li><a href="home">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="postjob">Post Job</a></li>
            <li><a href="findjob">Find Job</a></li>
          </ul>
        </nav>

        <button className="bg-[#2277AE] rounded-md p-1 px-4 hidden md:block" type="button">Login/Register</button>
        <RiMenu3Fill class="block md:hidden"/>

      </div>
    </>
  );
};

export default Header;
