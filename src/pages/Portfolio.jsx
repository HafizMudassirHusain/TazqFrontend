import React, { useEffect, useState } from "react";
import { FaEye, FaTimes, FaArrowRight } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import tazqaboutlogo from "../assets/brandingkit/tazqaboutlogo.png";
// import Chip from "../components/HomeComponents/Chip";
import { useNavigate } from "react-router-dom";
import homeimg from "../assets/home.jpg";


export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const projects = [
    { 
      category: "Editing", 
      title: "Video's Editing", 
      description: "Professional video editing services for content creators and businesses",
      image: tazqaboutlogo, 
      btn: "View More Editings" 
    },
    { 
      category: "Marketing", 
      title: "Digital Marketing", 
      description: "Comprehensive digital marketing strategies to grow your brand",
      image: tazqaboutlogo, 
      btn: "View More digi Marts" 
    },
    { 
      category: "Design", 
      title: "UI/UX Design", 
      description: "Beautiful and intuitive user interfaces designed for optimal experience",
      image: tazqaboutlogo, 
      btn: "View More UI/UX" 
    },
    { 
      category: "Marketing", 
      title: "Social Media Banner", 
      description: "Eye-catching banners designed to increase engagement on social platforms",
      image: tazqaboutlogo, 
      btn: "View More Banners" 
    },
    { 
      category: "Development", 
      title: "Web And App", 
      description: "Custom web and mobile applications built with modern technologies",
      image: tazqaboutlogo, 
      btn: "View More WebApps" 
    },
    { 
      category: "SEO", 
      title: "SEO Project", 
      description: "Search engine optimization services to improve your online visibility",
      image: tazqaboutlogo, 
      btn: "View More Seos" 
    },
  ];

  const chipsData = [
    { image: tazqaboutlogo, name: "John Doe", followers: "50,000+ Followers" },
    { image: tazqaboutlogo, name: "Jane Smith", followers: "30,000+ Followers" },
    { image: tazqaboutlogo, name: "Alex Johnson", followers: "45,000+ Followers" },
    { image: tazqaboutlogo, name: "Sarah Williams", followers: "25,000+ Followers" },
  ];

  return (
    <div 
     style={{
                backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"  // Added to ensure proper image scaling
              }} 
    className="text-white pt-20 pb-20 px-4 sm:px-6">
      {/* Title Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <button className="my-10 mx-auto text-xl sm:text-2xl md:text-3xl font-bold
           text-white px-6 sm:px-8 py-3 flex items-center gap-2 rounded-full 
           border-2 border-[#8CA419] hover:bg-[#8CA419] transition-all 
           duration-300 hover:scale-105 shadow-lg hover:shadow-[#8CA419]/30">
            <BsStars className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" /> 
            <span>Work Collection</span>
          </button>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center
         text-white mb-6 leading-tight">
          Our <span className="text-[#8CA419] bg-clip-text 
           bg-gradient-to-r from-[#8CA419] to-[#B8D936]">Work</span> Speaks Volumes
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
          We've collaborated with industry leaders to deliver exceptional results.
          Explore some of our standout projects below.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="h-full border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-[#8CA419]/20 transition-all duration-300">
              {/* Project Image */}
              <div 
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-6 py-2 bg-[#8CA419] 
                    rounded-full hover:bg-white hover:text-[#8CA419] 
                    transition-all duration-300 cursor-pointer"
                  >
                    <FaEye /> Quick Preview
                  </button>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <span className="text-sm font-medium text-[#8CA419] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button
                  onClick={() => navigate(`/portfolio/${project.category}`, { state: project })}
                  className="flex items-center gap-2 text-sm font-medium text-[#8CA419] hover:text-white transition-colors duration-300 group"
                >
                  {project.btn}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      {/* <div className="mt-28 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Trusted by <span className="text-[#8CA419]">Creatives</span> Worldwide
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-6">
          {chipsData.map((chip, index) => (
            <div key={index} className="hover:scale-105 transition-transform 
            duration-300 mb-20">
              <Chip
                image={chip.image}
                name={chip.name}
                followers={chip.followers}
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-br from-[#171B1E] to-[#0f1113] p-6 sm:p-8 rounded-2xl shadow-2xl relative max-w-4xl w-full border border-[#8CA419]/50">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600/80 rounded-full p-2 transition-all duration-300"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <span className="text-sm font-medium text-[#8CA419] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description || "No description available for this project."}
                </p>
                <button
                  onClick={() => {
                    navigate(`/portfolio/${selectedProject.category}`, { state: selectedProject });
                    setSelectedProject(null);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-[#8CA419] rounded-lg hover:bg-white hover:text-[#8CA419] transition-all duration-300 font-medium"
                >
                  View Full Project
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}