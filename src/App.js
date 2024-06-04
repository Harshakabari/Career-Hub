import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JOB from "./pages/job_Post";
import Contact from "./pages/contact";


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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
