import React from "react";
import { motion } from "framer-motion";

const MissionValues = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#8CA419] text-white py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold">Our Mission & Values</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Innovation", "Integrity", "Excellence"].map((value, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "#b0d445" }}
            className="bg-[#C0C0C0] text-black p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{value}</h3>
            <p className="text-sm">{value === "Innovation" ? "We push the boundaries of technology." : value === "Integrity" ? "Honesty and transparency in every project." : "Delivering top-tier solutions every time."}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MissionValues;
