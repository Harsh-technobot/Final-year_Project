import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";
import GrievanceForm from "./components/GrievanceForm";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GrievancesSection from "./components/yourgrievances/YourGrievances";

const Grievanceshomepage = () => {
  const [activeComponent, setActiveComponent] = useState("newGrievance"); // Default to New Grievance

  return (
    <div className="h-screen w-screen overflow-x-clip overflow-auto bg-gray-100 font-sans">
      <Navbar notifications={3} />
      <div className="w-full lg:px-24 px-3">
        <ActionButtons setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        {activeComponent === "newGrievance" && <GrievanceForm />}
        {!activeComponent && <AboutUs />}
        {activeComponent === "yourGrievances" && <GrievancesSection/>}
      </div>
      <Footer />
    </div>
  );
};

export default Grievanceshomepage;
