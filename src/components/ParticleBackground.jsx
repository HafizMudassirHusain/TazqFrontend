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
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Grab particles on hover
            },
          },
        },
        particles: {
          color: {
            value: "#8CA419", // Green particles
          },
          links: {
            color: "#8CA419", // Green connecting lines
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            speed: 3, // Medium movement
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
            type: "triangle", // Star-shaped particles
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