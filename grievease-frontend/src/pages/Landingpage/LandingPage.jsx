import React from "react";
import NavBar from "./components/NavBar";
import PortalIcon from "../../assets/Rectangle 20.png";
import TrackingIcon from "../../assets/Rectangle 21.png";
import CommunityIcon from "../../assets/Rectangle 22.png";
import loginbg from "../../assets/loginbg.png";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen p-20">
      <NavBar />
      <div className="fixed top-0 right-0 translate-x-12 z-[-1]" data-svg-wrapper>
        <svg
          width="724"
          height="575"
          viewBox="0 0 764 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M846 227C846 446.809 656.616 625 423 625C189.384 625 0 446.809 0 227C0 7.19054 189.384 -171 423 -171C656.616 -171 846 7.19054 846 227Z"
            fill="#F6E8FE"
          />
        </svg>
      </div>
      <div class=" fixed right-0 bottom-4 z-[-2] w-3/5 h-auto aspect-square bg-[#f2f2ff] rounded-full"></div>
      <div className="flex mt-16">
        <div
          className="w-1/2 p-20 items-center justify-center">
          <ul className="space-y-3 mb-16">
            <li className=" text-xl font-bold text-gray-600">
              <img
                src={PortalIcon}
                alt="Portal Icon"
                className="inline-block w-10 h-10 mr-2"
              />
              Easy to use grievance portal
            </li>
            <li className=" text-xl font-bold text-gray-600">
              <img
                src={TrackingIcon}
                alt="Tracking Icon"
                className="inline-block w-10 h-10 mr-2"
              />
              Real-time tracking of grievances
            </li>
            <li className=" text-xl font-bold text-gray-600">
              <img
                src={CommunityIcon}
                alt="Community Icon"
                className="inline-block w-10 h-10 mr-2"
              />
              Community interactions
            </li>
          </ul>
          <div className="space-x-4">
            <button className="bg-[#2e91e2] rounded-2xl w-[200px] h-auto py-3 text-center text-white text-lg font-medium font-['Poppins']">
             About us
            </button>
            <button className="bg-[#9866EB] rounded-2xl w-[200px] h-auto py-3 text-center text-white text-lg font-medium font-['Poppins']">
              Sign up
            </button>

          </div>
        </div>
        <div className="w-1/2  flex justify-center">
          <img src={loginbg}
           alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
