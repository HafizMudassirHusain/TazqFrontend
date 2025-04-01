import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaAward, FaGlobeAmericas } from "react-icons/fa";

const achievements = [
  { 
    title: "500+ Projects", 
    description: "Delivered successful IT solutions worldwide.",
    icon: <FaChartLine className="w-full h-full" />,
    color: "#8CA419" // green
  },
  { 
    title: "Certified Experts", 
    description: "Our team holds top industry certifications.",
    icon: <FaAward className="w-full h-full" />,
    color: "#8CA419" // green
  },
  { 
    title: "Global Recognition", 
    description: "Awarded for innovation in IT solutions.",
    icon: <FaGlobeAmericas className="w-full h-full" />,
    color: "#8CA419" // green
  },
];

const Achievements = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full text-white py-20 px-6 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Our Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              style={{ borderTop: `4px solid #b0d445` }}
              transition={{ 
                delay: index * 0.15, 
                type: "spring", 
                stiffness: 100 
              }}
              viewport={{ once: true }}
              className=" text-white p-8 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" 
                   style={{ backgroundColor: achievement.color + "20", color: achievement.color }}>
                <div className="w-8 h-8">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {achievement.title}
              </h3>
              <p className="text-white">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;