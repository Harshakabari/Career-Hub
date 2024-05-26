import React from "react";

const steps = () => {
  return (
    <>
      {/* // main div */}
      <div className="text-black">
        <span className="text-4xl text-orange-400 flex justify-center mt-20">How it works?</span>
        <h3 className="text-6xl text-blue-950 flex justify-center mt-4">Follow Easy 3 step</h3>

        {/* // All card */}
        <div className="flex justify-center items-center gap-4 m-8">

          {/* // card 1 */}
          <div className="relative shadow-2xl h-[350px] w-[300px] m-[20px] p-1 bg-gray-300 overflow-hidden rounded-3xl hover:scale-105 ease-in duration-300">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="">
                <h5 className="text-2xl font-semibold text-[#2277AE] mb-3">
                  Register
                </h5>
                <p className="text-sm">
                  Click on apply now, fill in your details, upload your resume
                  and identification documents. We'll reach out to discuss your
                  experiences.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] bg-[#2277AE] .animate-move"></div>
          </div>

          {/* // card 2 */}
          <div className="relative shadow-2xl h-[350px] w-[300px] m-[20px] p-1 bg-gray-300 overflow-hidden rounded-3xl hover:scale-105 ease-in duration-300">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="">
                <h5 className="text-2xl font-semibold text-[#2277AE] mb-3">
                Seamless Screening
                </h5>
                <p className="text-sm">
                We want you to be successful, Our a Recruiter will guide you to an online - vetting process that is smooth and quick.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] bg-[#ae2222] .animate-move"></div>
          </div>

          {/* // card 3 */}
          <div className="relative shadow-2xl h-[350px] w-[300px] m-[20px] p-1 bg-gray-300 overflow-hidden rounded-3xl hover:scale-105 ease-in duration-300">
            <div className="relative h-full w-full bg-white z-[99] pl-5 pt-8 pr-5 rounded-3xl">
              <div className="">
                <h5 className="text-2xl font-semibold text-[#2277AE] mb-3">
                Get Hired Instantly
                </h5>
                <p className="text-sm">
                You'll be instantly notified of jobs that matches with your skills & experience. Pick a job that suits your availability & location.
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rotate-[143deg] h-[550px] w-[150px] bg-[#2277AE] .animate-move"></div>
          </div>

        </div>

      </div>
    </>
  );
};

export default steps;
