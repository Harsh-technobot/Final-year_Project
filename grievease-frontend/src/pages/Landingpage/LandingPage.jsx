import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PortalIcon from "../../assets/Rectangle 20.png";
import TrackingIcon from "../../assets/Rectangle 21.png";
import CommunityIcon from "../../assets/Rectangle 22.png";
import loginbg from "../../assets/loginbg.png";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [formType, setFormType] = useState(null);
  const navigate = useNavigate();
  const handleOnClickaboutus = () => {
    navigate("/about");
  };

  return (
    <div className="w-screen h-screen px-3 sm:px-8 md:px-16 lg:px-20 py-2 sm:py-12 lg:overflow-hidden overflow-auto relative">
      <NavBar setFormType={setFormType} />

      {/* Background Elements */}
      <div
        className="fixed top-0 right-0 translate-x-12 z-[-1] hidden lg:block"
        data-svg-wrapper
      >
        <svg
          width="724"
          height="575"
          viewBox="0 0 764 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[724px]"
        >
          <path
            d="M846 227C846 446.809 656.616 625 423 625C189.384 625 0 446.809 0 227C0 7.19054 189.384 -171 423 -171C656.616 -171 846 7.19054 846 227Z"
            fill="#F6E8FE"
          />
        </svg>
      </div>
      <div className="fixed right-0 bottom-4 z-[-2] w-3/5 sm:w-2/5 md:w-3/5 h-auto aspect-square bg-[#f2f2ff] rounded-full"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row  sm:mt-12 mt-6 ">
        {/* Left Section */}
        <div
          className={`w-full lg:w-1/2 p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col items-center lg:items-start `}
        >
          <ul className="space-y-3 mb-8 sm:mb-12 lg:mb-16">
            <li className="text-lg sm:text-xl font-bold text-gray-600 flex items-center">
              <img
                src={PortalIcon}
                alt="Portal Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
              />
              Easy to use grievance portal
            </li>
            <li className="text-lg sm:text-xl font-bold text-gray-600 flex items-center">
              <img
                src={TrackingIcon}
                alt="Tracking Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
              />
              Real-time tracking of grievances
            </li>
            <li className="text-lg sm:text-xl font-bold text-gray-600 flex items-center">
              <img
                src={CommunityIcon}
                alt="Community Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
              />
              Community interactions
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={handleOnClickaboutus}
              className="bg-[#2e91e2] rounded-2xl w-full sm:w-[200px] py-3 text-center text-white text-base sm:text-lg font-medium font-['Poppins'] hover:bg-[#1a75c2] transition duration-200"
            >
              About us
            </button>

            <button
              onClick={() => setFormType("login")}
              className="bg-[#9866EB] rounded-2xl w-full sm:w-[200px] py-3 text-center text-white text-base sm:text-lg font-medium font-['Poppins'] hover:bg-[#7f52c9] transition duration-200"
            >
              Login
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`w-full lg:w-1/2 flex ${
            formType === "signup" ? "h-[600px]" : "h-[550px]"
          } justify-center relative overflow-hidden mt-6 lg:mt-0 `}
        >
          <div
            className={`w-full flex items-center justify-center transition-transform duration-700 ease-in-out ${
              formType ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <img
              src={loginbg}
              alt="Login Background"
              className="w-4/5 h-auto"
            />
          </div>

          <div
            className={`absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${
              formType === "login"
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <LoginForm />
          </div>
          <div
            className={`absolute inset-0 flex justify-center items-center transition-all duration-500 ease-in-out ${
              formType === "signup"
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
