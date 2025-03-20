import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GrievanceScreen from "./grievances/Grievanceshomepage";
import Community from "./Community/Community";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MainScreen = () => {
  const [activePage, setActivePage] = useState("grievances");

  return (
    <div className="h-screen w-screen overflow-x-clip overflow-auto bg-gray-100 font-sans">
      <Navbar notifications={3} setActivePage={setActivePage} />

      {/* Wrapper for different sections */}
      <div id="main-content" className="w-full lg:px-24 px-0 py-4">
        <AnimatePresence mode="wait">
          {activePage === "grievances" && <GrievanceScreen key="grievances" />}
          {activePage === "community" && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Community />
            </motion.div>
          )}
          {activePage === "jobPortal" && (
            <motion.div
              key="jobPortal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 text-center text-gray-700 text-lg">
                Job Portal Content Goes Here!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default MainScreen;
