import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";
import GrievanceForm from "./components/GrievanceForm";
import Footer from "./components/Footer";
import GrievancesSection from "./components/yourgrievances/YourGrievances";
import AboutUsInsight from "./components/AboutUsInsight";

const Grievanceshomepage = () => {
  const [activeComponent, setActiveComponent] = useState("newGrievance"); // Default to New Grievance

  return (
    <div className="h-screen w-screen overflow-x-clip overflow-auto bg-gray-100 font-sans">
      <Navbar notifications={3} />
      <div className="w-full lg:px-24 px-0">
        <ActionButtons setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

        {/* Animated Component Transitions */}
        <AnimatePresence mode="wait">
          {activeComponent === "newGrievance" && (
            <motion.div
              key="newGrievance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GrievanceForm />
            </motion.div>
          )}

          {activeComponent === "yourGrievances" && (
            <motion.div
              key="yourGrievances"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <GrievancesSection />
            </motion.div>
          )}

          {!activeComponent && (
            <motion.div
              key="aboutUs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutUsInsight/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default Grievanceshomepage;
