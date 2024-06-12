import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JOB from "./pages/job_Post";
import Contact from "./pages/contact";
import About from "./pages/about";
import Jobform from "./pages/PostForm";
import Blog from "./pages/blog";
import JobApplicationForm from './components/JobApplicationForm/JobApplicationForm';
import OpenRoute from './components/core/OpenRoute';
import Error from './components/core/Error.jsx';
import VerifyEmail from './components/core/VerifyEmail.jsx'
import UpdatePassword from './components/core/UpdatePassword.jsx'
import ForgotPassword from './components/core/ForgotPassword.jsx'



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/job' element={<JOB />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/postform' element={<Jobform />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/jobappllicationform' element={<JobApplicationForm />} />
        <Route path="*" element={<Error />} />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail/>
            </OpenRoute>
          }
        />
          <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
      </Routes>
  );
}

export default App;
