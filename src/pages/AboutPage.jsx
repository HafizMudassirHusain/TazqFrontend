import React from "react";
import AboutHistory from "../components/AboutComponents/AboutHistory";
import MissionValues from "../components/AboutComponents/MissionValues";
import LeadershipTeam from "../components/AboutComponents/LeadershipTeam";
import Achievements from "../components/AboutComponents/Achievements";
import JuniorTeam from "../components/AboutComponents/JuniorTeam";
import homeimg from '../assets/home.jpg'
const AboutPage = () => {
  return (
    <main 
     style={{
                backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"  // Added to ensure proper image scaling
              }} 
              >
        
      <AboutHistory />
      <MissionValues />
      <LeadershipTeam />
      <JuniorTeam />
      <Achievements />
    </main>
  );
};

export default AboutPage;
