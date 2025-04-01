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

const Home = () => {
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

    </div>
  );
};

export default Home;