import React from "react";
import tazqaboutlogo from "../../assets/brandingkit/tazqaboutlogo.png";
import { BsStars } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 py-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <button className="mb-8 text-xl sm:text-2xl font-bold text-white px-6 py-2 flex items-center justify-center lg:justify-start gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
          <BsStars className="w-7 h-7 sm:w-8 sm:h-8" />
          About Us
        </button>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8CA419] leading-tight">
          TazQ Solution Creator
        </h2>

        <div className="mt-6 space-y-4 text-base sm:text-lg text-left max-w-xl mx-auto lg:mx-0">
          <p>
            At TazQ Solution, we are a team of IT experts, designers, content
            strategists, and developers dedicated to delivering high-quality
            digital solutions that fuel business growth.
          </p>
          <p>
            With cutting-edge design, compelling content, seamless development,
            and powerful marketing strategies, we help brands stand out, scale,
            and succeed in the competitive digital landscape.
          </p>
          <p>
            Our motive is simple: 'Why settle for ordinary when you can achieve
            extraordinary?' We design, develop, and dominate your brand to new heights.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={tazqaboutlogo}
          alt="TazQ Solution Logo"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSection;
