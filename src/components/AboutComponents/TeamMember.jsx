import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, imgSrc }) => {
  return (
    <motion.div
      className="p-6 border border-[#8CA419] rounded-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imgSrc} alt={name} className="w-20 h-20 mx-auto rounded-full mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-[#C0C0C0]">{role}</p>
    </motion.div>
  );
};

export default TeamMember;
