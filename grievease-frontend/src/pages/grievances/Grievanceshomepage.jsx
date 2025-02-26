import React from "react";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";
import GrievanceForm from "./components/GrievanceForm";
import Footer from "./components/Footer";

const Grievanceshomepage = () => {
  return (
    <div className="h-screen w-screen overflow-x-clip overflow-auto bg-gray-100 font-sans">
      <Navbar notifications={3} />
     <div className="w-full lg:px-24 px-3">
     <ActionButtons />
     <GrievanceForm />
     
     </div>
     <Footer />
    </div>
  );
};

export default Grievanceshomepage;