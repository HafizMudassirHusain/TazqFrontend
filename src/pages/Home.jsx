import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TazqSol from "../components/TazqSol";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import CreativeDesigns from "../components/CreativeDesigns";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground"; // Import ParticleBackground

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative">
      {/* Particle Background */}
      <div className="absolute inset-0 z-10">
        <ParticleBackground />
      </div>

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
      <div className="relative z-10 w-full">
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

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;