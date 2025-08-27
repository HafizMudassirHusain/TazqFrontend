import React from "react";
import tazqaboutlogo from "../../assets/brandingkit/tazqaboutlogo.png";
import { BsStars } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section className="w-full text-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <button className="mb-8 text-lg sm:text-xl font-bold px-6 py-2 flex items-center justify-center lg:justify-start gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-6 h-6 sm:w-7 sm:h-7" />
            About Us
          </button>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#8CA419] leading-snug">
            TazQ Solution Creator
          </h2>

          <div className="mt-6 space-y-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
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
              Our motive is simple:{" "}
              <span className="text-white font-semibold">
                'Why settle for ordinary when you can achieve extraordinary?'
              </span>{" "}
              We design, develop, and dominate your brand to new heights.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={tazqaboutlogo}
            alt="TazQ Solution Logo"
            className="w-full max-w-[450px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
