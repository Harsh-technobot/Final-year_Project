
// ActionButtons.js
import React from "react";
import { FcInfo, FcList, FcPlus } from "react-icons/fc";

const ActionButtons = () => {
return (
    <div className="flex justify-center gap-[22px] py-[10px] my-2">
        <button className="px-4 py-2 flex items-center space-x-4 shadow-md shadow-fuchsia-400/20 bg-white text-[#4B5563] rounded-[11px] hover:scale-110 hover:shadow-purple-300/40 hover:shadow-xl transition-transform">
            <FcInfo /> <span>About us</span>
        </button>
        <button className="px-4 py-2 flex items-center space-x-4 shadow-md shadow-fuchsia-400/20 bg-white text-[#4B5563] rounded-[11px] hover:scale-110 hover:shadow-purple-300/40 hover:shadow-lg transition-transform">
            <FcPlus /> <span>New Grievance</span>
        </button>
        <button className="px-4 py-2 flex items-center space-x-4 shadow-md shadow-fuchsia-400/20 bg-white text-[#4B5563] rounded-[11px] hover:scale-110 hover:shadow-purple-300/40 hover:shadow-lg transition-transform">
            <FcList /> <span>Your Grievances</span>
        </button>
    </div>
);
};

export default ActionButtons;
