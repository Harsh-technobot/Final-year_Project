import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const AboutUsInsight = () => {
  // Animation variants for fading in sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Main Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col items-center justify-center px-6 py-12 md:py-20"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">
            About GrievEase
          </h1>
          <p className="text-lg md:text-xl text-blue-600 mb-8">
            Connecting Communities, Solving Problems
          </p>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl text-center"
        >
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-teal-600">GrievEase</span>, your go-to platform for seamless grievance redressal and community collaboration. We’re here to bridge the gap between citizens, professionals, and government officials, ensuring that concerns are heard, addressed, and resolved with transparency and efficiency.
          </p>
        </motion.div>

        {/* Mission & What We Do */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
        >
          {/* Our Mission */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-500"
          >
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At GrievEase, we believe in empowering communities by simplifying the process of raising and resolving grievances. Whether it’s a pothole on your street, a sanitation issue, or a public health concern, we’ve built a space where your voice matters—and solutions are just a few clicks away.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg Hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              What We Do
            </h2>
            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="font-medium text-blue-600 mr-2">•</span>
                <span>
                  <span className="font-medium">For Citizens:</span> Easily file, track, and resolve grievances in real-time with intuitive tools and direct communication channels.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-600 mr-2">•</span>
                <span>
                  <span className="font-medium">For Professionals:</span> Collaborate with citizens to provide expert solutions and build trust through meaningful engagement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-600 mr-2">•</span>
                <span>
                  <span className="font-medium">For Government Officials:</span> Monitor community concerns, update statuses, and drive accountability through a dedicated dashboard.
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-700">
            With features like AI-powered complaint categorization, real-time updates, and a responsive design, GrievEase is your partner in creating a smarter, more connected community.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUsInsight;