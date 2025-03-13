import React from "react";
import AboutHistory from "../components/AboutComponents/AboutHistory";
import MissionValues from "../components/AboutComponents/MissionValues";
import LeadershipTeam from "../components/AboutComponents/LeadershipTeam";
import Achievements from "../components/AboutComponents/Achievements";

const AboutPage = () => {
  return (
    <main>
        
      <AboutHistory />
      <MissionValues />
      <LeadershipTeam />
      <Achievements />
    </main>
  );
};

export default AboutPage;
