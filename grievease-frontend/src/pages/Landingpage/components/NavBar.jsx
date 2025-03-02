import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ setFormType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttons = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "How it works",
      link: "/howitworks",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-white p-4">
        {/* Logo */}
        <button className="text-center"  onClick={() => setFormType("")}>
          <span className="text-black text-[40px] font-normal font-['Poppins']">
            Griev
          </span>
          <span className="text-black text-[40px] font-bold font-['Poppins']">
            ease
          </span>
        </button>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden text-black text-3xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full justify-end pr-16">
          {buttons.map((button, index) => (
           <Link
           key={index}
           to={button.link}
           className="px-3 h-5 text-right text-[#171A31] text-xl hover:text-[#2e91e2] transition duration-200"
         >
           {button.name}
         </Link>
          ))}
        </div>

        {/* Login Button (Desktop) */}
        <button
          onClick={() => setFormType("login")}
          className="hidden md:block bg-[#2e91e2] rounded-xl w-[130px] py-2 text-white text-lg font-medium font-['Poppins'] hover:bg-[#1a75c2] transition duration-200"
        >
          Login
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40">
            {buttons.map((button, index) => (
             <Link
             key={index}
             to={button.link}
             className="px-3 h-5 text-right text-[#171A31] text-xl hover:text-[#2e91e2] transition duration-200"
           >
             {button.name}
           </Link>
            ))}
            <button
              onClick={() => {
                setFormType("login");
                setIsMenuOpen(false);
              }}
              className="bg-[#2e91e2] rounded-xl w-[130px] py-2 text-white text-lg font-medium font-['Poppins'] hover:bg-[#1a75c2] transition duration-200"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;