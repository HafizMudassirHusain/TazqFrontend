import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // Black background
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#FFFFFF", // White particles
          },
          move: {
            direction: "bottom", // Particles fall downward
            enable: true,
            speed: 2, // Slow falling speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // More particles
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle", // Snowflake shape
          },
          size: {
            value: { min: 1, max: 5 }, // Random size
          },
        },
      }}
    />
  );
};

export default ParticleBackground;