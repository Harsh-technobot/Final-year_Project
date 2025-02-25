import React from "react";

const NavBar = () => {
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
    <div className="">
      <div className="flex justify-between items-center  text-white p-4">
        <div class="text-center">
          <span class="text-black text-[40px] font-normal font-['Bona Nova SC']">
            Griev
          </span>
          <span class="text-black text-[40px] font-bold font-['Bona Nova SC']">
            ease
          </span>
        </div>
        <div className="flex w-full justify-end pr-16">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="px-3 h-5 text-right text-[#171A31] text-xl font-medium font-['Poppins']"
            >
              {button.name}
            </a>
          ))}
        </div>
        <div class=" bg-[#2e91e2] rounded-xl w-[130px] h-auto p-1 text-center text-white text-lg font-medium font-['Poppins']">
          Login
        </div>
      </div>
    </div>
  );
};

export default NavBar;
