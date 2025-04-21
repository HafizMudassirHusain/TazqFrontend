import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tazqaboutlogo from "../assets/brandingkit/tazqaboutlogo.png";
import Testimonials from "../components/HomeComponents/Testimonials";
import { BsStars, BsArrowLeft, BsChevronRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import uiuximg from '../assets/uiux/homeuiux.webp';
import cover from '../assets/uiux/cover.jpg';
import midle from '../assets/uiux/midimg.webp';
import lastimg from '../assets/uiux/lastimg.webp';
import anotherimg from '../assets/uiux/anotherimg.webp';
import sone from '../assets/brandingidentity/brandlogo.webp';
import stwo from '../assets/brandingidentity/brandgraphics.jpg';
import homeimg from "../assets/home.jpg";

const PROJECT_CATEGORIES = {
  EDITING: "Editing",
  MARKETING: "Marketing",
  DESIGN: "Design",
  GRAPHICS: "Graphics",
  DEVELOPMENT: "Development",
  SEO: "SEO"
};


// Normalized projects data
const projects = [
  { id: 1, title: "Video Editing", category: PROJECT_CATEGORIES.EDITING, image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { id: 2, title: "Video's Editing", category: PROJECT_CATEGORIES.EDITING, image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { id: 3, title: "Content Writing", category: PROJECT_CATEGORIES.EDITING, image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { id: 4, title: "Video Production", category: PROJECT_CATEGORIES.EDITING, image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { id: 5, title: "Animation", category: PROJECT_CATEGORIES.EDITING, image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  
  { id: 6, title: "Digital Marketing", category: PROJECT_CATEGORIES.MARKETING, image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { id: 7, title: "Social Media Banner", category: PROJECT_CATEGORIES.MARKETING, image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { id: 8, title: "Email Marketing", category: PROJECT_CATEGORIES.MARKETING, image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { id: 9, title: "PPC Advertising", category: PROJECT_CATEGORIES.MARKETING, image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { id: 10, title: "Branding Strategy", category: PROJECT_CATEGORIES.MARKETING, image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },

  { id: 11, title: "SEO Optimization", category: PROJECT_CATEGORIES.SEO, image: tazqaboutlogo, tagline: "Boosting visibility, one keyword at a time." },
  { id: 12, title: "Content Strategy", category: PROJECT_CATEGORIES.SEO, image: tazqaboutlogo, tagline: "Strategic content for better engagement." },

  { id: 13, title: "Mobile App UI", category: PROJECT_CATEGORIES.DESIGN, image: uiuximg, tagline: "Transforming ideas into stunning visuals." },
  { id: 14, title: "Website Redesign", category: PROJECT_CATEGORIES.DESIGN, image: anotherimg, tagline: "Modern redesign for better user experience." },
  { id: 15, title: "Dashboard UI", category: PROJECT_CATEGORIES.DESIGN, image: cover, tagline: "Clean and functional dashboard designs." },
  { id: 16, title: "UI/UX Design", category: PROJECT_CATEGORIES.DESIGN, image: midle, tagline: "Transforming ideas into stunning visuals." },
  { id: 17, title: "Enhanced Design", category: PROJECT_CATEGORIES.DESIGN, image: lastimg, tagline: "Transforming ideas into stunning visuals." },

  { id: 18, title: "Social Media Banner", category: PROJECT_CATEGORIES.GRAPHICS, image: tazqaboutlogo, tagline: "Eye-catching designs for social media." },
  { id: 19, title: "Brand Identity", category: PROJECT_CATEGORIES.GRAPHICS, image: stwo, tagline: "Creating memorable brand visuals." },
  { id: 20, title: "Marketing Graphics", category: PROJECT_CATEGORIES.GRAPHICS, image: sone, tagline: "Visuals that convert and engage." },

  { id: 21, title: "E-commerce Website", category: PROJECT_CATEGORIES.DEVELOPMENT, image: tazqaboutlogo, tagline: "Building the future, one line at a time." },
  { id: 22, title: "Web Application", category: PROJECT_CATEGORIES.DEVELOPMENT, image: tazqaboutlogo, tagline: "Powerful web applications for businesses." },
  { id: 23, title: "Mobile App Development", category: PROJECT_CATEGORIES.DEVELOPMENT, image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
  { id: 24, title: "Web And App", category: PROJECT_CATEGORIES.DEVELOPMENT, image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
  { id: 25, title: "Mobile Development", category: PROJECT_CATEGORIES.DEVELOPMENT, image: tazqaboutlogo, tagline: "Cross-platform mobile solutions." },
];


export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (location.state?.projectId) {
      const project = projects.find(p => p.id === location.state.projectId);
      if (project) {
        setSelectedProject(project);
      } else {
        navigate("/portfolio", { replace: true });
      }
    } else if (location.state?.category) {
      const categoryProjects = projects.filter(
        p => p.category.toLowerCase() === location.state.category.toLowerCase()
      );
      if (categoryProjects.length > 0) {
        setSelectedProject(categoryProjects[0]);
      } else {
        navigate("/portfolio", { replace: true });
      }
    } else {
      navigate("/portfolio", { replace: true });
    }
  }, [location.state, navigate]);

  if (!selectedProject) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-[#8CA419] rounded-full mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-32"></div>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(
    project => 
      project.category.toLowerCase() === selectedProject.category.toLowerCase() &&
      project.id !== selectedProject.id
  );

  const handleRelatedProjectClick = (project) => {
    navigate(`/portfolio/${project.category.toLowerCase()}`, { 
      state: { projectId: project.id },
      replace: true
    });
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleImageExpand = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <section
     style={{
                backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"  // Added to ensure proper image scaling
              }} 
              className=" py-20"
              >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-20 text-white">
        {/* Back Button and Breadcrumbs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#8CA419] hover:text-white transition-colors duration-300"
          >
            <BsArrowLeft className="text-xl" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex items-center text-sm text-gray-400">
            <span>Portfolio</span>
            <BsChevronRight className="mx-2" />
            <span>{selectedProject.category}</span>
            <BsChevronRight className="mx-2" />
            <span className="text-white">{selectedProject.title}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#8CA419]/10 text-[#8CA419] rounded-full text-sm font-medium mb-6">
            {selectedProject.category}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {selectedProject.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {selectedProject.tagline}
          </p>
        </div>

        {/* Main Project Content */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Left Column - Project Image */}
          <div className="lg:w-2/3">
            <div className={`relative rounded-2xl overflow-hidden ${isImageExpanded ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4' : ''}`}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className={`w-full h-auto object-cover cursor-zoom-in transition-all duration-300 ${isImageExpanded ? 'max-h-[90vh] max-w-[90vw]' : 'rounded-2xl shadow-xl'}`}
                onClick={toggleImageExpand}
                loading="eager"
              />
              {isImageExpanded && (
                <button 
                  onClick={toggleImageExpand}
                  className="absolute top-6 right-6 bg-black/70 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-800 mb-8">
                <button
                  className={`pb-4 px-6 font-medium ${activeTab === 'overview' ? 'text-[#8CA419] border-b-2 border-[#8CA419]' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`pb-4 px-6 font-medium ${activeTab === 'details' ? 'text-[#8CA419] border-b-2 border-[#8CA419]' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-gray-300 mb-6">
                      {selectedProject.description || "Our comprehensive approach to this project delivered exceptional results through innovative solutions and meticulous execution."}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <svg className="h-5 w-5 text-[#8CA419]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Client</h4>
                          <p className="text-gray-400">Various Industry Leaders</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <svg className="h-5 w-5 text-[#8CA419]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Services</h4>
                          <p className="text-gray-400">{selectedProject.category}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <svg className="h-5 w-5 text-[#8CA419]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Year</h4>
                          <p className="text-gray-400">2022-2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">
                          The client needed a solution that would address their specific business needs while maintaining scalability for future growth.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Solution</h4>
                        <p className="text-gray-300">
                          We developed a comprehensive strategy that leveraged the latest technologies and best practices in {selectedProject.category.toLowerCase()}.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Results</h4>
                        <p className="text-gray-300">
                          The project delivered measurable improvements in key metrics, exceeding client expectations and establishing a foundation for continued success.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#8CA419] text-black font-medium rounded-lg hover:bg-white transition-colors">
                  View Live Project
                  <FiExternalLink />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  More {selectedProject.category} Projects
                </h2>
                <p className="text-gray-400">
                  Explore similar work in this category
                </p>
              </div>
              <button 
                onClick={() => navigate(`/portfolio/${selectedProject.category.toLowerCase()}`)}
                className="text-[#8CA419] hover:text-white flex items-center gap-2 transition-colors"
              >
                View all {selectedProject.category} projects
                <BsChevronRight />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#8CA419] transition-all duration-300 cursor-pointer"
                  onClick={() => handleRelatedProjectClick(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#8CA419]/10 text-[#8CA419] rounded-full text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.tagline}</p>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Testimonials />
    </section>
  );
}