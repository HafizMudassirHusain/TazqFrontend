import React, { useEffect, useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa"; // Importing icons
import { BsStars } from "react-icons/bs";
import tazqaboutlogo from "../../assets/brandingkit/tazqaboutlogo.png"; // Replace with the actual logo path
// import Chip from "./Chip";
import { useNavigate } from "react-router-dom";
import uiuximg from '../../assets/uiux/homeuiux.webp'
import brandlogo from '../../assets/brandingidentity/brandlogo.webp'

export default function HomePortfolio() {
  const [selectedProject, setSelectedProject] = useState(null); // State for modal
  const navigate = useNavigate();
  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const projects = [
    { category: "Editing", title: "Video's Editing", image: tazqaboutlogo, btn: "View More Editings" },
    { category: "Marketing", title: "Digital Marketing", image: tazqaboutlogo, btn: "View More digi Marts" },
    { category: "Design", title: "UI/UX Design", image: uiuximg, btn: "View More UI/UX" },
    { category: "graphics", title: "Graphic Design", image: brandlogo, btn: "View More Banners" },
    { category: "Development", title: "Web And App", image: tazqaboutlogo, btn: "View More WebApps" },
    { category: "SEO", title: "SEO Project", image: tazqaboutlogo, btn: "View More Seos" },
  ];

  const chipsData = [
    { image: tazqaboutlogo, name: "John Doe", followers: "50,000+ Followers" },
    { image: tazqaboutlogo, name: "Jane Smith", followers: "30,000+ Followers" },
    { image: tazqaboutlogo, name: "Jane Smith", followers: "30,000+ Followers" },
    { image: tazqaboutlogo, name: "Jane Smith", followers: "30,000+ Followers" },
  ];

  return (
    <div className="text-white pt-20 px-6">
      {/* Title Section */}
      <div className="text-center mb-16">
        <div>
          <button className="my-10 mx-auto text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 sm:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-8 h-8 sm:w-10 sm:h-10" /> Work Collection
          </button>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-4">
          The <span className="text-[#8CA419]">Work</span> We Did for Our Clients
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto text-lg">
        We've had the privilege of working with some of the most recognized names in the industry. You’ve
        probably seen our work on LinkedIn. Helping brands grow, connect, and stand out.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cardlayout border border-[#8CA419] p-6 rounded-lg"
          >
            <div className="border border-gray-700 rounded-lg overflow-hidden">
              {/* Background Image with Title */}
              <div
                className="h-[100px] bg-cover bg-center flex items-end p-2"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "300px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-lg font-bold text-white cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >{project.title}</h1>
              </div>
              {/* Button */}
              <button
                onClick={() => navigate(`/portfolio/${project.category}`, { state: project })}
                className="w-full bg-[#8CA419] text-white py-2 hover:bg-white hover:text-[#8CA419] transition duration-300 text-sm"
              >
                {project.btn}
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {chipsData.map((chip, index) => (
          <Chip
            key={index}
            image={chip.image}
            name={chip.name}
            followers={chip.followers}
          />
        ))}
      </div> */}


      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6">
          <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-2xl relative max-w-2xl w-full border border-[#8CA419]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)} // Close modal
              className="absolute top-4 right-4 text-gray-300 hover:text-red-600 text-2xl"
            >
              <FaTimes />
            </button>
            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            {/* Title */}
            <h3 className="text-2xl font-bold text-center mt-6 text-[#8CA419]">
              {selectedProject.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}