import { motion } from "framer-motion";
import React from "react";

export default function ProfileCard({imgSrc}) {
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
        src={imgSrc}
        alt="Avatar"
        className="w-10 h-10 rounded-full border-1 border-[#8CA419] sm:w-15 sm:h-15"
      />

      {/* Speech Bubble */}
      <div className="relative px-4 py-4 bg-[#b0d445] text-white 
       rounded-lg shadow-lg text-md sm:text-xs">
        <p className="text-lg sm:text-sm">Hey there! I love coding 🚀</p>

        {/* Tail of the speech bubble */}
        <div className="absolute -bottom-2 left-10 w-5 h-5 bg-[#b0d445] rotate-45"></div>
      </div>
    </motion.div>
  );
}
