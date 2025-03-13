import React from "react";
import { motion } from "framer-motion";

const achievements = [
  { title: "500+ Projects", description: "Delivered successful IT solutions worldwide." },
  { title: "Certified Experts", description: "Our team holds top industry certifications." },
  { title: "Global Recognition", description: "Awarded for innovation in IT solutions." },
];

const Achievements = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#8CA419] text-white py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold">Our Achievements</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "#b0d445" }}
            className="bg-[#C0C0C0] text-black p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
            <p className="text-sm">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
