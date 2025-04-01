import React from "react";
import { motion } from "framer-motion";

const MissionValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of technology.",
      color: "#b0d445" // green
    },
    {
      title: "Integrity",
      description: "Honesty and transparency in every project.",
      color: "#b0d445" // blue
    },
    {
      title: "Excellence",
      description: "Delivering top-tier solutions every time.",
      color: "#b0d445" // purple
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full text-white py-16 px-6 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Our Mission & Values</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderTop: `4px solid ${value.color}` }}
            >
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-white">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MissionValues;