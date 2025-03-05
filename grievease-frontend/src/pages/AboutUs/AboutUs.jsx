import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-10 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')]">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          Welcome to GrievEase
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl"
        >
          Empowering Communities Through Effective Grievance Redressal
        </motion.p>
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
>
  <Link to="/" className="text-white text-xl">
    Get Started
  </Link>
</motion.button>

      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-indigo-900"
        >
          Our Mission
        </motion.h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          GrievEase is dedicated to simplifying the grievance process, ensuring transparency,
          and providing seamless communication between citizens, professionals, and officials.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 max-w-6xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }} 
          className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=100" 
            alt="Secure Login" 
            className="w-20 h-20 mx-auto rounded-full object-cover" 
          />
          <h3 className="text-2xl font-semibold mt-6 text-gray-800">Secure Login</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Users can register and authenticate securely with Firebase.
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }} 
          className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <img 
            src="https://www.bssitm.com/assets/website/img/complaint.jpg" 
            alt="Track Grievances" 
            className="w-20 h-20 mx-auto rounded-full object-cover" 
          />
          <h3 className="text-2xl font-semibold mt-6 text-gray-800">Track Grievances</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Monitor real-time updates on your submitted complaints.
          </p>
        </motion.div>
      </section>

      {/* How to Use Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900">How to Use GrievEase</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=100" 
                alt="Register" 
                className="w-16 h-16 mx-auto rounded-full object-cover" 
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Register</h3>
              <p className="text-gray-600 mt-2">Create an account using a secure login process.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=100" 
                alt="File Complaint" 
                className="w-16 h-16 mx-auto rounded-full object-cover" 
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">File a Grievance</h3>
              <p className="text-gray-600 mt-2">Describe your issue and submit it to the system.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }} 
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=100" 
                alt="Resolution" 
                className="w-16 h-16 mx-auto rounded-full object-cover" 
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Get Resolution</h3>
              <p className="text-gray-600 mt-2">Monitor your complaint and receive updates.</p>
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AboutUs;