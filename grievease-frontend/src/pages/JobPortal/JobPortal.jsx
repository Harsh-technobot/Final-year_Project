import React from 'react';
import { motion } from 'framer-motion';
import PopularServices from './components/PopularServices';
import FeaturedProfessionals from './components/FeaturedProfessional';
import HowItWorks from './components/HowitWorks';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const JobPortal = () => {
  return (
    <div className='space-y-20'>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <PopularServices />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <FeaturedProfessionals />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <HowItWorks />
      </motion.div>
    </div>
  );
};

export default JobPortal;
