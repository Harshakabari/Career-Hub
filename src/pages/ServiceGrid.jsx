import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = () => {
  return (
    <div className="h-full min-h-screen w-full bg-gray-800 pt-8 px-24">
        <h2 className='pb-6 text-center font-bold text-5xl'>Job Category</h2>
        <p className='pb-16 text-center text-lg text-gray-300'>Find a job should not be a full-time endeavor. Tell us <br />
            what you're searching for, and we will find you job</p>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        <ServiceCard
          icon={
            <svg
            viewBox="0 0 64 64"
            fill="currentColor"
            className='h-8 w-10'
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M23 57h18v6H23zM19 47h26v10H19zM41 47v-4l7-13L32 1 16 30l7 13v4"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M36 28.875 A4 4 0 0 1 32 32.875 A4 4 0 0 1 28 28.875 A4 4 0 0 1 36 28.875 z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M32 1v24"
            />
          </svg>
          }
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!"
          bgColor="bg-teal-400"
          shadowColor="shadow-teal-500"
        />
        <ServiceCard
          icon={
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.6611 23.9999 37.7143 23.9999Z"
                fill="#F5F5FC"
              ></path>
            </svg>
          }
          title="UI/Ux Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!"
          bgColor="bg-orange-400"
          shadowColor="shadow-orange-500"
        />
        <ServiceCard
          icon={
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M14 27H22V14H14V27ZM26 34H34V21H26V34ZM40 0H8C3.6 0 0 3.6 0 8V40C0 44.4 3.6 48 8 48H40C44.4 48 48 44.4 48 40V8C48 3.6 44.4 0 40 0ZM44 40C44 41.1 43.1 42 42 42H6C4.9 42 4 41.1 4 40V10H44V40Z"
                fill="white"
              ></path>
            </svg>
          }
          title="Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!"
          bgColor="bg-purple-400"
          shadowColor="shadow-purple-500"
        />
      </div>
    </div>
  );
};

export default ServiceGrid;
