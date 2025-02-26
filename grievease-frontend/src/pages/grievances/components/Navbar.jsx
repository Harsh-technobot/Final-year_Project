import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { FaRegBell } from "react-icons/fa6";

const Navbar = ({ notifications }) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
};

return (
    <nav className="flex px-16 justify-between items-center  py-3 border-b bg-white border-gray-200">
        <Logo />
        <div className="space-x-6 hidden md:flex">
            <Link
                to="/grievances"
                className="text-[#2E91E2] hover:text-blue-600 border-[1.5px]  border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
            >
                Grievances
            </Link>
            <Link
                to="/community"
                className="text-[#2E91E2] hover:text-blue-600 border-[1.5px]  border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
            >
                Community
            </Link>
            <Link
                to="/job-portal"
                className="text-[#2E91E2] hover:text-blue-600 border-[1.5px]  border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
            >
                Job Portal
            </Link>
        </div>
        <div className="flex items-center space-x-2">
            <div className="flex bg-[#E5E7EB] px-3 py-2 items-center space-x-1 rounded-xl">
                <FaRegBell className="hover:text-blue-500" />
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {notifications}
                </span>
            </div>
            <img
                src={
                    "https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"
                }
                alt="Profile"
                className="w-12 h-12 rounded-full"
            />
        </div>
        <div className="md:hidden">
            <button
                onClick={handleMenuToggle}
                className="text-[#2E91E2] hover:text-blue-600 border-[1.5px]  border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
            >
                Menu
            </button>
            {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 px-4">
                    <Link
                        to="/grievances"
                        className="block text-[#2E91E2] hover:text-blue-600 py-1"
                    >
                        Grievances
                    </Link>
                    <Link
                        to="/community"
                        className="block text-[#2E91E2] hover:text-blue-600 py-1"
                    >
                        Community
                    </Link>
                    <Link
                        to="/job-portal"
                        className="block text-[#2E91E2] hover:text-blue-600 py-1"
                    >
                        Job Portal
                    </Link>
                </div>
            )}
        </div>
    </nav>
);
};

export default Navbar;
