import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JOB from "./pages/job_Post";
import Contact from "./pages/contact";
import About from "./pages/about";
import Jobform from "./pages/PostForm";
import Blog from "./pages/blog";




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/job' element={<JOB />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/postform' element={<Jobform />} />
        <Route path='/blog' element={<Blog />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
