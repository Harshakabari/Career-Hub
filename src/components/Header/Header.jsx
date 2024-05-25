import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="py-4 px-10 flex justify-between items-center">
        <a href="/">
          <img className="h-12" src={Logo} alt="" />
        </a>

        <nav>
          <ul className="flex gap-6">
            <li><a href="home">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="postjob">Post Job</a></li>
            <li><a href="findjob">Find Job</a></li>
          </ul>
        </nav>

        <button className="bg-blue-700 rounded-md p-1 px-3" type="button">Login/Register</button>
      </div>
    </>
  );
};

export default Header;
