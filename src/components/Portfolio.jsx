import React, { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa"; // Importing icons
import portfolio1 from "../assets/portfoliobrand.jpg";
import portfolio2 from "../assets/portfoliomarket.jfif";
import portfolio3 from "../assets/portfoliouiux.png";
import portfolio4 from "../assets/portfoliosocial.webp";
import portfolio5 from "../assets/portfolioidentity.jpg";
import { BsStars } from "react-icons/bs";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null); // State for modal

  const projects = [
    { title: "Branding for Tech Startup", image: portfolio1 },
    { title: "Marketing Campaign for E-commerce", image: portfolio2 },
    { title: "UI/UX Design for Mobile App", image: portfolio3 },
    { title: "Social Media Strategy", image: portfolio4 },
    { title: "Creative Visual Identity", image: portfolio5 },
  ];

  return (
    <div className=" text-white py-16 px-6">
      {/* Title Section */}
            <button className="my-10 mx-auto text-3xl font-bold text-white px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-10 h-10" /> Design Portfolio
            </button>
      <h2 className="text-5xl md:text-6xl font-bold text-center text-[#ffffff]">
        The <strong className="text-[#8CA419]">Work</strong>  We Did For Our Clients
      </h2>
      <p className="text-gray-300 text-center mt-4 text-lg max-w-3xl mx-auto">
        Primordial has already worked with the industry's most recognized names.
        Our work is widespread on LinkedIn.
      </p>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {projects.map((project, index) => (
          <div key={index} className="relative group rounded-lg shadow-lg border border-[#8CA419] overflow-hidden">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with Button */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#8CA419] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:border-[#576c3a] hover:border hover:border-2  hover:bg-white hover:text-[#8CA419] transition"
              >
                <FaEye className="text-lg" /> {project.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className=" text-black p-6 rounded-lg shadow-lg relative max-w-lg w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-0 right-0 text-white hover:text-red-600 text-xl"
            >
              <FaTimes />
            </button>
            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover rounded-md"
            />
            {/* Title */}
            <h3 className="text-lg font-semibold text-center mt-4">{selectedProject.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
