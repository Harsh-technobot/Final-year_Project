import React from "react";

const StepCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col flex-1 items-center text-center min-w-[250px]">
      <div className="flex justify-center items-center mb-4 w-16 h-16 bg-blue-100 rounded-full">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3 className="mb-2 text-base font-bold text-black">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </article>
  );
};

export default StepCard;
