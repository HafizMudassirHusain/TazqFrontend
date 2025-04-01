import React from "react";
import { motion } from "framer-motion";

const AboutHistory = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full pt-40 text-white py-16 px-6 text-center"
    >
      <motion.h2 
        className="text-4xl font-bold text-[#8CA419]"
        whileHover={{ scale: 1.05, color: "#b0d445" }}
      >
        Our Journey
      </motion.h2>
      <motion.p
        className="text-lg mt-4 text-[#C0C0C0] max-w-2xl mx-auto"
        whileHover={{ scale: 1.02 }}
      >
        Since our founding, <strong className="text-[#8CA419]">TazQ Solutions</strong>  has been at the forefront of IT innovation. We started with a vision to revolutionize digital solutions and have grown into a trusted name in the industry.
      </motion.p>
    </motion.section>
  );
};

export default AboutHistory;
