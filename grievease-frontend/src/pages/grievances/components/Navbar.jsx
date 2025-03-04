import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaRegBell } from "react-icons/fa6";

const Navbar = ({ notifications }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex lg:px-16 px-2 justify-between items-center py-3 border-b bg-white border-gray-200">
      <Logo />

      {/* Desktop Menu */}
      <div className="space-x-6 hidden md:flex">
        {[
          { name: "Grievances", path: "/grievances" },
          { name: "Community", path: "/community" },
          { name: "Job Portal", path: "/job-portal" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-[#2E91E2] hover:text-blue-600 border-[1.5px] border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#2E91E2] hover:text-blue-600 border-[1.5px] border-white rounded-2xl py-1 px-2 hover:border-blue-400 transition-transform font-medium text-lg"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed inset-0 bg-white shadow-lg flex flex-col items-center justify-center gap-6 z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Links */}
          <nav className="flex flex-col items-center gap-4">
            {[
              { name: "Grievances", path: "/grievances" },
              { name: "Community", path: "/community" },
              { name: "Job Portal", path: "/job-portal" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#2E91E2] text-xl font-medium hover:text-blue-600 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Notifications & Profile */}
      <div className="flex items-center space-x-2">
        <div className="flex bg-[#E5E7EB] px-3 py-2 items-center space-x-1 rounded-xl">
          <FaRegBell className="hover:text-blue-500" />
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {notifications}
          </span>
        </div>
        <img
          src="https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
