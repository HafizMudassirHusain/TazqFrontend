import React from "react";
import { MdCloudSync } from "react-icons/md";
import { VscLightbulbSparkle } from "react-icons/vsc";

export default function TazqSol() {
  const challenges = [
    " My brand feels basic and lacks distinction",
    " Not confident if my brand reflects my values",
    " Marketing materials are outdated & ineffective",
    " I need a creative partner to bring my vision to life",
    // " My website is not engaging or converting visitors",
    // " Struggling with consistent social media branding",
    // " Need a rebranding strategy to stay competitive",
    // " My target audience doesn’t connect with my messaging",
  ];

  const solutions = [
    " Unique brand identity that sets you apart",
    " A brand that authentically reflects your values",
    " High-quality marketing materials that attract",
    " Collaborative partnership with a creative agency",
    // " A visually stunning website that drives conversions",
    // " Consistent and engaging social media branding",
    // " A tailored rebranding strategy for modern appeal",
    // " Clear messaging that resonates with your audience",
  ];

  return (
    <div className=" text-white min-h-screen flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center text-white">
        How <strong className="text-[#8CA419]">Tazq Sol</strong> Can Help You
      </h1>

      {/* Main Container */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 relative">

        {/* Challenges Section */}
        <div className="flex flex-col gap-6 p-6 rounded-lg shadow-lg border-l-4 border-[#8CA419]">
          <h2 className="text-2xl font-semibold text-[#C0C0C0] mb-2 text-center">
            Challenges
          </h2>
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li
                key={index}
                className="relative text-2xl px-4 py-2 rounded-md text-gray-300 text-left shadow-lg flex items-center border border-[#8CA419]"
              >
                <MdCloudSync className="bg-[#8CA419] text-4xl w-10 mr-4 border 
                rounded border-gray-100" />
                {challenge}

                {/* Connecting Arrow Line */}
                <div className="hidden md:block absolute top-1/2 left-[-25px] w-6 h-0.5 bg-[#8CA419]"></div>
              </li>
            ))}
          </ul>
        </div>


        {/* Solutions Section */}
        <div className="flex flex-col gap-6 p-6 rounded-lg shadow-lg border-l-4 border-[#C0C0C0]">
          <h2 className="text-2xl font-semibold text-[#8CA419] mb-2 text-center">
            Solutions
          </h2>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li
                key={index}
                className="relative flex items-center text-2xl px-4 py-2 rounded-md text-gray-300 
                text-left shadow-lg border border-[#C0C0C0]"
              >
                <VscLightbulbSparkle className="bg-[#8CA419] w-10 text-4xl mr-4 border 
                rounded border-gray-100" />{solution}

                {/* Connecting Arrow Line */}
                <div className="hidden md:block absolute top-1/2 left-[-25px] w-6 h-0.5 bg-[#C0C0C0]"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <p className="text-center text-lg text-white mt-10 max-w-2xl">
        <span className="text-[#8CA419] font-bold">TazqSolution</span> has the solution to your needs. We can free up your valuable hours to help you maximize business growth.
      </p>
    </div>
  );
}
