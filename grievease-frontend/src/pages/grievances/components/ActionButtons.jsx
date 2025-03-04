import React from "react";
import { FcInfo, FcList, FcPlus } from "react-icons/fc";

const ActionButtons = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="flex justify-center gap-[22px] py-[10px] my-2">
      <button
        onClick={() => setActiveComponent("")}
        className={`px-4 py-2 flex items-center space-x-4 shadow-md rounded-[11px] transition-transform ${
          activeComponent === "" ? "text-[#2E91E2]" : "bg-white text-[#4B5563] hover:bg-gray-200"
        }`}
      >
        <FcInfo /> <span>About us</span>
      </button>
      <button
        onClick={() => setActiveComponent("newGrievance")}
        className={`px-4 py-2 flex items-center space-x-4 shadow-md rounded-[11px] transition-transform ${
          activeComponent === "newGrievance" ? "text-[#2E91E2]" : "bg-white text-[#4B5563] hover:bg-gray-200"
        }`}
      >
        <FcPlus /> <span>New Grievance</span>
      </button>
      <button
        onClick={() => setActiveComponent("yourGrievances")}
        className={`px-4 py-2 flex items-center space-x-4 shadow-md rounded-[11px] transition-transform ${
          activeComponent === "yourGrievances" ? "text-[#2E91E2]" : "bg-white text-[#4B5563] hover:bg-gray-200"
        }`}
      >
        <FcList /> <span>Your Grievances</span>
      </button>
    </div>
  );
};

export default ActionButtons;
