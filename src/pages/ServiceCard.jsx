import React from 'react';

const ServiceCard = ({ icon, title, description, bgColor, shadowColor }) => {
  return (
    <div className="rounded-xl bg-white px-6 text-center shadow-xl">
      <div
        className={`mx-auto mt-4 flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full ${bgColor} shadow-lg ${shadowColor}/40`}
      >
        {icon}
      </div>
      <h3 className="text-black mb-3 text-2xl font-medium lg:px-14">{title}</h3>
      <p className="px-4 pb-3 text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
