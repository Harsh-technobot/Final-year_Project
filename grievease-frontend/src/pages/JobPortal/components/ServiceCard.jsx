"use client";
import React from "react";

const ServiceCard = ({ icon, title, availableCount }) => {
  return (
    <article className="flex hover:scale-105 transition-transform flex-col flex-1 items-center p-6 bg-white rounded-xl shadow-sm min-w-[250px]">
      <div className="flex justify-center items-center mb-4 w-16 h-16 bg-blue-100 rounded-full">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3 className="mb-2 text-base font-bold text-black">{title}</h3>
      <p className="text-sm text-gray-600">{availableCount}+ Available</p>
    </article>
  );
};

export default ServiceCard;
