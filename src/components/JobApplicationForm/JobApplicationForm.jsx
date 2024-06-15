import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, Navigate } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoIosArrowBack } from "react-icons/io";


// Set the app element for accessibility
Modal.setAppElement('#root');

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    portfolio: '',
    position: '',
    startDate: '',
    salary: '',
    education: '',
    school: '',
    degree: '',
    graduationYear: '',
    experience: [{ title: '', company: '', startDate: '', endDate: '', responsibilities: '' }],
    skills: '',
    certifications: '',
    references: [{ name: '', relationship: '', company: '', phone: '', email: '' }],
    coverLetter: '',
    resume: null,
    hearAboutUs: '',
    comments: '',
    authorized: false,
    sponsorship: false,
    certify: false,
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.position) newErrors.position = 'Position Applied For is required';
    if (!formData.authorized) newErrors.authorized = 'Authorization confirmation is required';
    if (!formData.certify) newErrors.certify = 'Certification is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log(formData);
      setIsModalOpen(true); // Open modal on successful submission
    }
  };

  return (
    <>
    <Header />
    <button className='flex items-center gap-1 bg-blue-500 px-2 py-1 pr-4 ml-2 mt-3 rounded-full text-white'> 
    <Link className='flex items-center' to="/job"><IoIosArrowBack />back</Link></button>
    <div className='m-6'>
      <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded shadow-lg max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>

        {/* Basic Information */}
        <div className="space-y-4">
          <label className="block">
            Full Name
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
          </label>
          <label className="block">
            Email Address
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label className="block">
            Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
          </label>
          <label className="block">
            Address
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            LinkedIn Profile
            <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Portfolio/Website
            <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Position Information */}
        <div className="space-y-4">
          <label className="block">
            Position Applied For
            <input type="text" name="position" value={formData.position} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
            {errors.position && <span className="text-red-500">{errors.position}</span>}
          </label>
          <label className="block">
            Available Start Date
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Desired Salary
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <label className="block">
            Highest Level of Education
            <input type="text" name="education" value={formData.education} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            School Name
            <input type="text" name="school" value={formData.school} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Degree/Major
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Graduation Year
            <input type="text" name="graduationYear" value={formData.graduationYear} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <label className="block">
            Previous Job Title
            <input type="text" name="experience[0].title" value={formData.experience[0].title} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Company Name
            <input type="text" name="experience[0].company" value={formData.experience[0].company} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Start Date
            <input type="date" name="experience[0].startDate" value={formData.experience[0].startDate} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            End Date
            <input type="date" name="experience[0].endDate" value={formData.experience[0].endDate} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Job Responsibilities
            <textarea name="experience[0].responsibilities" value={formData.experience[0].responsibilities} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <label className="block">
            Relevant Skills
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Certifications/Licenses
            <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* References */}
        <div className="space-y-4">
          <label className="block">
            Reference Name
            <input type="text" name="references[0].name" value={formData.references[0].name} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Relationship
            <input type="text" name="references[0].relationship" value={formData.references[0].relationship} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Company
            <input type="text" name="references[0].company" value={formData.references[0].company} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Phone Number
            <input type="tel" name="references[0].phone" value={formData.references[0].phone} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Email Address
            <input type="email" name="references[0].email" value={formData.references[0].email} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <label className="block">
            Cover Letter
            <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Resume/CV
            <input type="file" name="resume" onChange={handleFileChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            How Did You Hear About Us?
            <input type="text" name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
          <label className="block">
            Additional Comments
            <textarea name="comments" value={formData.comments} onChange={handleChange} className="block w-full mt-1 p-2 border rounded" />
          </label>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <label className="flex items-center">
            <input type="checkbox" name="authorized" checked={formData.authorized} onChange={handleChange} className="mr-2" />
            Are you legally authorized to work in the country?
            {errors.authorized && <span className="text-red-500 ml-2">{errors.authorized}</span>}
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="sponsorship" checked={formData.sponsorship} onChange={handleChange} className="mr-2" />
            Will you now or in the future require sponsorship for employment visa status?
          </label>
        </div>

        {/* Consent */}
        <div className="space-y-4">
          <label className="flex items-center">
            <input type="checkbox" name="certify" checked={formData.certify} onChange={handleChange} className="mr-2" />
            I certify that the information provided is true and complete to the best of my knowledge.
            {errors.certify && <span className="text-red-500 ml-2">{errors.certify}</span>}
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" />
            I consent to a background check if required.
          </label>
        </div>

        <button type="submit" className="block w-full bg-blue-500 text-white py-2 rounded">
          Submit Application
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Application Submitted</h2>
          <p className="mb-4">Thank you for submitting your application. We will review your application and get back to you shortly.</p>
          <button onClick={() => setIsModalOpen(false)} className="bg-blue-500 text-white py-2 px-4 rounded">
           <Link to="/"> Close </Link>
          </button>
        </div>
      </Modal>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}

export default JobApplicationForm;
