import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GrievancesSection from "./components/yourgrievances/YourGrievances";
import GrievanceForm from "./components/GrievanceForm";
import ActionButtons from "./components/ActionButtons";
import AboutUsInsight from "./components/AboutUsInsight";
import StatsSection from "./components/StatSection";

const GrievanceScreen = () => {
  const [activeComponent, setActiveComponent] = useState("newGrievance");

  return (
    <motion.div
      key="grievances"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full lg:px-24 px-0 py-4"
    >
      {/* Action Buttons (Only in Grievances) */}
      <ActionButtons setActiveComponent={setActiveComponent} activeComponent={activeComponent} />

      {/* Show selected content */}
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
            <StatsSection/>
          </motion.div>
        )}
        {activeComponent === "" && (
          <motion.div
            key="aboutus"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AboutUsInsight/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GrievanceScreen;
