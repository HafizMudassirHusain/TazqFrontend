import React from "react";
import { MdCloudSync } from "react-icons/md";
import { VscLightbulbSparkle } from "react-icons/vsc";

export default function TazqSol() {
  const challenges = [
    "Your brand feels generic and lacks a unique identity.",
    "You're unsure if your brand truly represents your values.",
    "Outdated marketing materials are holding your business back.",
    "You need a creative partner to bring your vision to life.",
    "Your website fails to engage visitors or drive conversions.",
    "Inconsistent social media branding is costing you credibility.",
    "Your brand needs a refresh to stay ahead of the competition.",
    "Your messaging isn't resonating with your target audience.",
  ];

  const solutions = [
    "Crafting a unique brand identity that makes you unforgettable.",
    "Building a brand that genuinely reflects your values and mission.",
    "Designing high-quality marketing materials that capture attention.",
    "Partnering with you to bring your creative vision to life.",
    "Developing a visually stunning website that turns visitors into customers.",
    "Ensuring consistent, engaging branding across all social platforms.",
    "Strategizing a rebranding approach that keeps you ahead of the curve.",
    "Refining your messaging to create a deep connection with your audience.",
  ];

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 ">
      {/* Header Section */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          How <span className="text-[#8CA419] bg-clip-text text-transparent bg-gradient-to-r from-[#8CA419] to-[#B8D936]">Tazq Sol</span> Can Help You
        </h1>
        <div className="w-24 h-1 bg-[#8CA419] mx-auto mt-4"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6 md:gap-8 relative">

        {/* Challenges Section */}
        <div className="flex flex-col gap-4 p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-[#8CA419]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#ffffff] mb-2 text-center flex items-center justify-center gap-2">
            <MdCloudSync className="text-[#8CA419] text-2xl" />
            Challenges
          </h2>
          <ul className="space-y-3">
            {challenges.map((challenge, index) => (
              <li
                key={index}
                className="relative text-base sm:text-lg px-4 py-3 rounded-lg text-white 
                text-left shadow-md flex items-start border border-gray-700
                 hover:bg-[hsl(70,100%,31%)] transition-colors duration-200"
              >
                <div className="flex items-start">
                  <div className="bg-[#8CA419] p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <MdCloudSync className="text-white text-lg" />
                  </div>
                  <span>{challenge}</span>
                </div>
                <div className="hidden md:block absolute top-1/2 left-[-20px] w-5 h-0.5 bg-[#8CA419]"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="flex flex-col gap-4 p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-[#8CA419]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#8CA419]
           mb-2 text-center 
          flex items-center justify-center gap-2">
            <VscLightbulbSparkle className="text-[#8CA419] text-2xl" />
            Solutions
          </h2>
          <ul className="space-y-3">
            {solutions.map((solution, index) => (
              <li
                key={index}
                className="relative flex items-start text-base sm:text-lg px-4 py-3
                 rounded-lg text-left shadow-md border border-gray-700 hover:bg-[hsl(70,100%,31%)] transition-colors duration-200"
              >
                <div className="flex items-start">
                  <div className="bg-[#8CA419] p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <VscLightbulbSparkle className="text-white text-lg" />
                  </div>
                  <span>{solution}</span>
                </div>
                <div className="hidden md:block absolute top-1/2 left-[-20px] w-5 h-0.5 bg-[#8CA419]"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-center mt-8 sm:mt-12 max-w-2xl px-4">
        <p className="text-lg sm:text-xl text-white mb-6">
          <span className="text-[#8CA419] font-bold">TazqSolution </span>is here to solve your challenges. We take care of the heavy lifting, so you can focus on
          what truly matters—growing your business and achieving your goals.
        </p>
        {/* <button className="px-8 py-3 bg-[#8CA419] hover:bg-[#B8D936] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-[#8CA419]/40">
          Get Your Free Consultation
        </button> */}
      </div>
    </div>
  );
}