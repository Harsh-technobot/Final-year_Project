import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
        <p data-aos="fade-up" className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
          Empowering Communities Through Effective Grievance Redressal
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          data-aos="zoom-in" 
          className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <Link to="/" className="text-white text-xl">
            Get Started
          </Link>
        </motion.button>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-indigo-900">
          Our Mission
        </h2>
        <p data-aos="fade-up" className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          GrievEase is dedicated to simplifying the grievance process, ensuring transparency,
          and providing seamless communication between citizens, professionals, and officials.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 max-w-6xl mx-auto">
        {[{title: "Secure Login", img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2070"}, 
          {title: "Track Grievances", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"}, 
          {title: "Instant Notifications", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"}, 
          {title: "Data Privacy", img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070"}]
          .map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img src={feature.img} alt={feature.title} className="rounded-lg w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              {feature.title === "Secure Login" ? "Users can register and authenticate securely with Firebase." : 
              feature.title === "Track Grievances" ? "Monitor real-time updates on your submitted complaints." : 
              feature.title === "Instant Notifications" ? "Receive real-time alerts on grievance updates." : 
              "Your data is protected with end-to-end encryption."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* How to Use Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-indigo-900">How to Use GrievEase</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Register", "File a Grievance", "Get Resolution"
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mt-4 text-gray-800">{step}</h3>
                <p className="text-gray-600 mt-2">
                  {step === "Register" ? "Create an account using a secure login process." :
                  step === "File a Grievance" ? "Describe your issue and submit it to the system." :
                  "Monitor your complaint and receive updates."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
