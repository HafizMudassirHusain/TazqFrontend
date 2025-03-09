import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TazqSol from "../components/TazqSol";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import CreativeDesigns from "../components/CreativeDesigns";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* Hero Section */}
       <HeroSection />

      {/* About Section */}
       <AboutSection />

       {/* TazSol Section */}
       <TazqSol />

      {/* Testimonial Section */}
      <Testimonials />

         {/* Portfolio Section */}
         <Portfolio />

        {/* Creative Design Section */}
        <CreativeDesigns />


        {/* Contact Section */}
        <Contact />
      
    </div>
  );
};

export default Homepage;
