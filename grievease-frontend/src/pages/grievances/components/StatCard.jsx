"use client";
import React from "react";

const StatCard = ({ icon, label, value }) => {
  return (
    <article className="flex  flex-1 gap-4 items-center p-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] max-sm:flex-col max-sm:text-center">
      <div className="flex justify-center items-center w-11 h-11 rounded-lg">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base text-gray-600">{label}</h3>
        <p className="text-2xl font-bold text-black">{value}</p>
      </div>
    </article>
  );
};

export default StatCard;
