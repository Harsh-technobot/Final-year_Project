import React from "react";
import StarRating from "./StarRating";

function ProfessionalCard({
  name,
  profession,
  image,
  rating,
  reviews,
  experience,
}) {
  return (
    <article className="flex-1 p-6 bg-white rounded-xl shadow-sm min-w-[300px]">
      <header className="flex gap-4 items-center mb-4">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-[64px] h-[64px] rounded-[9999px]"
        />
        <div className="flex flex-col">
          <h3 className="text-base font-bold leading-4 text-black">{name}</h3>
          <p className="mt-2 text-base leading-4 text-purple-500 text-opacity-80">
            {profession}
          </p>
        </div>
      </header>
      <StarRating rating={rating} reviews={reviews} />
      <p className="mb-4 text-sm leading-4 text-gray-600">{experience}</p>
      <button className="w-full h-10 text-base text-white rounded-lg bg-[#2e91e2] bg-opacity-80">
        Contact
      </button>
    </article>
  );
}

export default ProfessionalCard;
