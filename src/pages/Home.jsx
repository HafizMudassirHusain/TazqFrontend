import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import AboutSection from "../components/HomeComponents/AboutSection";
import TazqSol from "../components/HomeComponents/TazqSol";
import Testimonials from "../components/HomeComponents/Testimonials";
import Portfolio from "../components/HomeComponents/Portfolio";
import CreativeDesigns from "../components/HomeComponents/CreativeDesigns";
import Contact from "../components/Contact";
// import ParticleBackground from "../components/ParticleBackground"; // Import ParticleBackground
import homeimg from "../assets/home.jpg";
import { FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {

      // WhatsApp contact function
      const handleWhatsAppClick = () => {
        // Replace with your WhatsApp number (include country code, remove any +, 0, or spaces)
        const phoneNumber = "923122329854"; // Example: Pakistan number 0300 1234567
        
        // Message that will be pre-filled
        const message = "Hello! I'd like to book a consultation call.";
        
        // Create WhatsApp link
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open in new tab
        window.open(whatsappUrl, "_blank");
      };
  
  return (
    <div 
     style={{
            backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"  // Added to ensure proper image scaling
          }} 
    className="flex flex-col items-center justify-center w-full min-h-screen relative">
      {/* Particle Background */}
      {/* <div className="absolute inset-0 z-10">
        <ParticleBackground />
      </div> */}

      {/* Hero Section */}
      <div className="relative z-10 w-full">
        <HeroSection />
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full">
        <AboutSection />
      </div>

      {/* TazSol Section */}
      <div className="relative z-10 w-full">
        <TazqSol />
      </div>

      {/* Testimonial Section */}
      <div className="relative z-10 w-full">
        <Testimonials />
      </div>

      {/* Portfolio Section */}
      <div className="relative p-2 z-10 w-full">
        <Portfolio />
      </div>

      {/* Creative Design Section */}
      <div className="relative z-10 w-full">
        <CreativeDesigns />
      </div>

      {/* Contact Section */}
      <div className="relative z-10 w-full">
        <Contact />
      </div>


 {/* Modern Working Chat Button */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  className="fixed bottom-8 right-8 z-50"
>
  <div className="relative group">
    {/* Main button - now with proper click handling */}
    <motion.button
      onClick={() => {
        console.log("Chat button clicked!"); // Debugging
        handleWhatsAppClick(); // Make sure this function exists in scope
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        damping: 15,
        stiffness: 400
      }}
      className="flex items-center justify-center h-14 w-14 rounded-full 
                bg-gradient-to-br from-[#8CA419] to-[#bbda22] shadow-lg
                hover:shadow-xl transition-all duration-300 cursor-pointer"
      animate={{
        boxShadow: [
          "0 4px 14px rgba(16, 185, 129, 0.3)",
          "0 6px 20px rgba(16, 185, 129, 0.4)",
          "0 4px 14px rgba(16, 185, 129, 0.3)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
    >
      <FaCommentDots className="text-white text-xl" />
    </motion.button>

    {/* Tooltip remains the same */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 
                   bg-gray-800 text-white text-sm rounded-md whitespace-nowrap
                   opacity-0 group-hover:opacity-100 transition-opacity
                   pointer-events-none shadow-md">
      Chat with our team
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 
                     w-2 h-2 bg-gray-800 rotate-45"></div>
    </div>

    {/* Ping animation remains the same */}
    <motion.div
      className="absolute inset-0 border-2 border-emerald-300 rounded-full pointer-events-none"
      animate={{
        scale: [1, 1.4],
        opacity: [0.7, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  </div>
</motion.div>

    </div>
  );
};

export default Home;