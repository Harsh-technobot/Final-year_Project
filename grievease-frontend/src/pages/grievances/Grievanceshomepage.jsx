import React from "react";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";
import GrievanceForm from "./components/GrievanceForm";
import Footer from "./components/Footer";

const Grievanceshomepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar notifications={3} />
     <div className="w-screen px-24">
     <ActionButtons />
      <GrievanceForm />
      <Footer />
     </div>
    </div>
  );
};

export default Grievanceshomepage;