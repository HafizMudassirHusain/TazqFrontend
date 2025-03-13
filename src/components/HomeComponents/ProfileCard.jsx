import { motion } from "framer-motion";
import React from "react";

export default function ProfileCard() {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{
        y: [0, -10, 0], // Floating effect
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Avatar"
        className="w-12 h-12 rounded-full border-4 border-[#8CA419] sm:w-10 sm:h-10"
      />

      {/* Speech Bubble */}
      <div className="relative px-4 py-4 bg-[#b0d445] text-white  rounded-lg shadow-lg text-sm sm:text-xs">
        <p>Hey there! I love coding 🚀</p>

        {/* Tail of the speech bubble */}
        <div className="absolute -bottom-2 left-10 w-5 h-5 bg-[#b0d445] rotate-45"></div>
      </div>
    </motion.div>
  );
}
