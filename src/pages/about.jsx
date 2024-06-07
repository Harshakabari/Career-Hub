import React, { useRef, useEffect } from 'react';
import Img from '../assets/instagram.svg';
import Header from '../components/Header/Header';
// import MenImg from "../assets/men.png";
import AboutImg from "../assets/about.png";
import Footer from "../components/Footer/Footer"


const About = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (line1Ref.current) observer.observe(line1Ref.current);
    if (line2Ref.current) observer.observe(line2Ref.current);
    if (line3Ref.current) observer.observe(line3Ref.current);
    if (line4Ref.current) observer.observe(line4Ref.current);

  }, []);

  return (
    <>
    <Header />
    <div className="relative w-full h-[250px] overflow-hidden bg-slate-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 ref={line1Ref} className="uppercase tracking-widest font-bold backdrop-blur-md bg-slate-200 p-2 rounded-md px-16 text-gray-800 text-5xl opacity-0 transition-transform duration-700">About Jobmaster</h2>
        </div>
        
      </div >
      <div className="absolute top-0 left-0 m-8">
        <img src={Img} alt="Logo 1" className="animate-float h-6" />
      </div>
      <div className="absolute top-0 right-0 m-8">
        <img src={Img} alt="Logo 2" className="animate-float h-6" />
      </div>
      <div className="absolute bottom-0 left-0 m-8">
        <img src={Img} alt="Logo 3" className="animate-float h-6" />
      </div>
      <div className="absolute bottom-0 right-0 m-8">
        <img src={Img} alt="Logo 4" className="animate-float h-6" />
      </div>
      <div className="absolute right-1/4 top-1/4">
        <img src={Img} alt="Logo 6" className="animate-float h-6" />
      </div>
      <div className="absolute left-1/4 top-1/3">
        <img src={Img} alt="Logo 7" className="animate-float h-6" />
      </div>
      
    </div>

    <div ref={line2Ref} className='flex flex-col px-20 py-10 justify-center opacity-0 transition-transform duration-700'>
        {/* <img className='mt-12' src={MenImg} alt="men-image" /> */}
        {/* <div className='lg:pr-28 px-5 mt-12 text-lg'> */}
            <img className='mx-auto w-[950px]' src={AboutImg} alt="" />
            <p className='text-center my-4 px-10'> At jobmaster, our mission is to help people get jobs. We have more than 5000 global employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workspace that strives to create the best experience for job seekers. </p>
        {/* </div> */}
    </div>
    <Footer />
    </>
  );
}

export default About;
