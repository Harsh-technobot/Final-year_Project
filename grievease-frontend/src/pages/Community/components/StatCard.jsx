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
    <article className="p-3 mx-auto w-full bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-6">
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
      <div className="flex py-0.5 mt-2 w-full">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-3.5">
          <img
            src={
              isPositiveChange
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/fee0fad58d38f80bf60b9d92f984972f993295a803fe3efc7f9ceddf6750ade5?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/cb8598bf59909436a2b0209ec150bb6a9c480fca5d5699a85a1d472998aa484b?placeholderIfAbsent=true"
            }
            alt={isPositiveChange ? "Increase indicator" : "Decrease indicator"}
            className="object-contain self-stretch my-auto w-2.5 aspect-[0.71]"
          />
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
