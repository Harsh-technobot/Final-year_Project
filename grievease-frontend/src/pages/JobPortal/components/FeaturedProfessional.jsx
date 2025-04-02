"use client";
import React from "react";
import ProfessionalCard from "./ProfessionalCard";

function FeaturedProfessionals() {
  const professionals = [
    {
      id: 1,
      name: "John Smith",
      profession: "Master Plumber",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e36ff40a9967f756e30739c32a602db68035009",
      rating: 4.8,
      reviews: 120,
      experience: "10+ years experience",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      profession: "Electrician",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/33e665217ceed511693692118541b9b56aef4da1",
      rating: 4.9,
      reviews: 85,
      experience: "8+ years experience",
    },
    {
      id: 3,
      name: "Mike Brown",
      profession: "Carpenter",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/62bf10ba194fa15732ff5160ea641d727ae3f869",
      rating: 4.7,
      reviews: 95,
      experience: "12+ years experience",
    },
  ];

  return (
    <section className="flex flex-col gap-14 items-center px-4 py-6 w-full bg-gray-50">
      <h2 className="text-3xl font-bold leading-8 text-center text-black/80">
        Featured Professionals
      </h2>
      <div className="flex gap-8 justify-center items-start w-full max-md:flex-wrap max-sm:gap-6">
        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            name={professional.name}
            profession={professional.profession}
            image={professional.image}
            rating={professional.rating}
            reviews={professional.reviews}
            experience={professional.experience}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProfessionals;
