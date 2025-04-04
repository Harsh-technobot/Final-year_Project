"use client";

import React from "react";

const StatCard = ({
  title,
  value,
  changePercentage,
  iconSrc,
  isPositiveChange = true,
}) => {
  return (
    <article className="  p-3 mx-auto w-full hover:scale-105 transition-transform trans bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 s">
      <header className="flex gap-5 justify-between py-1 w-full">
        <h2 className="text-lg font-semibold leading-none text-black">
          {title}
        </h2>
        <div className="flex overflow-hidden justify-center items-center self-start min-h-5">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="object-contain self-stretch my-auto aspect-square w-5"
          />
        </div>
      </header>
      <p className="pb-2.5 mt-4 text-3xl font-bold text-black whitespace-nowrap max-md:pr-5">
        {value}
      </p>
      <div className="flex py-0.5 items-center gap-2 mt-2 w-full">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
        <span className={`text-2xl ${isPositiveChange ? "text-green-500" : "text-red-500"}`}>
  {isPositiveChange ? "▲" : "▼"}
</span>


        </div>
        <p
          className={`flex-auto text-sm ${isPositiveChange ? "text-green-600" : "text-red-600"} w-[340px]`}
        >
          {changePercentage} from last month
        </p>
      </div>
    </article>
  );
};

export default StatCard;
