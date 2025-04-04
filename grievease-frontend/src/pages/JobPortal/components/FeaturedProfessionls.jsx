import React from "react";
import ProfessionalCard from "./ProfessionalCard";
export const professionals = [
  {
    id: 1,
    name: "John Smith",
    profession: "Master Plumber",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e36ff40a9967f756e30739c32a602db68035009",
    rating: 4.8,
    reviews: 120,
    experience: "10+ years experience",
    services: [
      { name: "Pipe Installation", rate: "$50/hr" },
      { name: "Leak Repair", rate: "$30/hr" },
    ],
    reviewList: [
      { user: "Alice", text: "Very professional and quick!" },
      { user: "Bob", text: "Excellent work and friendly attitude." },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profession: "Electrician",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/33e665217ceed511693692118541b9b56aef4da1",
    rating: 4.9,
    reviews: 85,
    experience: "8+ years experience",
    services: [
      { name: "Wiring", rate: "$45/hr" },
      { name: "Appliance Installation", rate: "$35/hr" },
    ],
    reviewList: [
      { user: "Jane", text: "Fixed our issues in no time!" },
      { user: "Mark", text: "Super responsive and professional." },
    ],
  },
  {
    id: 3,
    name: "Mike Brown",
    profession: "Carpenter",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/62bf10ba194fa15732ff5160ea641d727ae3f869",
    rating: 4.7,
    reviews: 95,
    experience: "12+ years experience",
    services: [
      { name: "Furniture Making", rate: "$60/hr" },
      { name: "Custom Shelving", rate: "$40/hr" },
    ],
    reviewList: [
      { user: "Tom", text: "Craftsmanship is top notch." },
      { user: "Lisa", text: "Transformed our living room!" },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    profession: "House Cleaner",
    image: "https://avatar.iran.liara.run/public",
    rating: 4.6,
    reviews: 76,
    experience: "6+ years experience",
    services: [
      { name: "Deep Cleaning", rate: "$25/hr" },
      { name: "Window Cleaning", rate: "$20/hr" },
    ],
    reviewList: [
      { user: "Rachel", text: "Left my place spotless!" },
      { user: "Sam", text: "Very reliable and punctual." },
    ],
  },
  {
    id: 5,
    name: "David Lee",
    profession: "Mechanic",
    image: "https://avatar.iran.liara.run/public",
    rating: 4.8,
    reviews: 130,
    experience: "9+ years experience",
    services: [
      { name: "Engine Repair", rate: "$70/hr" },
      { name: "Brake Service", rate: "$50/hr" },
    ],
    reviewList: [
      { user: "James", text: "Got my car back in perfect shape!" },
      { user: "Angela", text: "Fair pricing and great work." },
    ],
  },
  {
    id: 6,
    name: "Nina Patel",
    profession: "Gardener",
    image: "https://avatar.iran.liara.run/public",
    rating: 4.7,
    reviews: 60,
    experience: "5+ years experience",
    services: [
      { name: "Lawn Maintenance", rate: "$30/hr" },
      { name: "Planting & Trimming", rate: "$25/hr" },
    ],
    reviewList: [
      { user: "Greg", text: "Beautiful results every time!" },
      { user: "Nora", text: "Takes great care of my garden." },
    ],
  },
  {
    id: 7,
    name: "Carlos Garcia",
    profession: "Painter",
    image: "https://avatar.iran.liara.run/publice",
    rating: 4.9,
    reviews: 105,
    experience: "11+ years experience",
    services: [
      { name: "Interior Painting", rate: "$40/hr" },
      { name: "Exterior Painting", rate: "$50/hr" },
    ],
    reviewList: [
      { user: "Diane", text: "Smooth finish and no mess!" },
      { user: "Kevin", text: "Transformed our house completely." },
    ],
  },
];

const FeaturedProfessionals = ({ setSelectedProfessional }) => {
 

  return (
    <div className="flex bg-white/50 md:p-6 p-2  rounded-2xl flex-wrap gap-8 justify-center">
      <h1>
        <span className="text-3xl font-bold text-gray-800">Featured Professionals</span>
      </h1>
      <div className="flex gap-6 flex-wrap justify-center">

      
      {professionals.map((professional) => (
        <div
          key={professional.id}
          className="cursor-pointer"
          onClick={() => setSelectedProfessional(professional)}
        >
          <ProfessionalCard {...professional} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
