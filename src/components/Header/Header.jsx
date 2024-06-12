import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo (2).png'; 
import { NavbarLinks } from "../../Data/navbar-links.js"
import ProfileDropdown from "../core/ProfileDropdown.jsx"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"



function Header() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [subLinks, setSubLinks] = useState([])
  

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className="flex h-14 items-center justify-center bg-blue w-100vw border-b-richblack-700"
    >
      <div className="flex  items-center justify-between backdrop-blur-xl fixed bg-blue-200 z-30 ">
        {/* Logo */}
        <Link to="/">
        <img src={Logo} className="mr-3 lg:h-14 h-12" loading='lazy' alt="Logo"/>
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}> 
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path)? "text-yellow-400" : "text-red-500" }`} >
                      {link.title}
                    </p>
                  </Link>             
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">

          {token == null && (
            <Link to="/login">
              <button 
             className=" dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
             text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </button>
            </Link>
          )}
          {token == null && (
            <Link to="/signup">
              <button 
            className=" dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
            text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Get started
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )

};

export default Header;
