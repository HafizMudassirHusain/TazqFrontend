import React from "react";
import tazqaboutlogo from "../../assets/brandingkit/tazqaboutlogo.png"; // Replace with the actual logo path
import { BsStars } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white  py-20 px-10 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">

        <button className="my-10 text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 sm:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
          <BsStars className="w-8 h-8 sm:w-10 sm:h-10" /> About Us
        </button>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8CA419]">
          TazQ Solution Creator
        </h2>
        <p className="text-lg mt-4 text-white text-left max-w-lg">
          Brand owners & CEOs often face the challenge of dedicating sufficient time to <em className="text-[#8CA419]">effective brand design</em>, diverting their attention from critical areas of their business.
        </p>
        <p className="text-lg mt-4 text-white text-left max-w-lg">
          TazQ Sloution this by <em className="text-[#8CA419]">providing expert design services</em> , freeing up valuable hours for clients to focus on high-impact business development initiatives.
        </p>
        <p className="text-lg mt-4 text-white text-left max-w-lg">
          This strategic approach enables clients to optimize their time & <em className="text-[#8CA419]">maximize business growth!</em>
        </p>

      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 h-[40vh]  flex justify-center mt-10 lg:mt-0">
        <img
          src={tazqaboutlogo}
          alt="TazQ Solution Logo"
          className="w-full h-full md:w-120"
        />
      </div>
    </section>
  );
};

export default AboutSection;
