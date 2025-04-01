import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tazqaboutlogo from "../assets/brandingkit/tazqaboutlogo.png";
import Testimonials from "../components/HomeComponents/Testimonials";
import { BsStars } from "react-icons/bs";

// Define projects outside the component
const projects = [
  { title: "Video's Editing", category: "Editing", image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { title: "Digital Marketing", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "UI/UX Design", category: "Design", image: tazqaboutlogo, tagline: "Transforming ideas into stunning visuals." },
  { title: "Social Media Banner", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "Web And App", category: "Development", image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
  { title: "SEO Project", category: "SEO Project", image: tazqaboutlogo, tagline: "Boosting visibility, one keyword at a time." },
  { title: "Logo Design", category: "Design", image: tazqaboutlogo, tagline: "Transforming ideas into stunning visuals." },
  { title: "Branding Strategy", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "E-commerce Website", category: "Development", image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
  { title: "Mobile App Development", category: "Development", image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
  { title: "Content Writing", category: "Editing", image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { title: "Email Marketing", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "Graphic Design", category: "Design", image: tazqaboutlogo, tagline: "Transforming ideas into stunning visuals." },
  { title: "Social Media Management", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "Landing Page Design", category: "Design", image: tazqaboutlogo, tagline: "Transforming ideas into stunning visuals." },
  { title: "Video Production", category: "Editing", image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { title: "PPC Advertising", category: "Marketing", image: tazqaboutlogo, tagline: "Driving growth with innovative strategies." },
  { title: "Animation", category: "Editing", image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { title: "Data Analysis", category: "SEO Project", image: tazqaboutlogo, tagline: "Boosting visibility, one keyword at a time." },
  { title: "Copywriting", category: "Editing", image: tazqaboutlogo, tagline: "Crafting stories through seamless edits." },
  { title: "User Research", category: "Design", image: tazqaboutlogo, tagline: "Transforming ideas into stunning visuals." },
  { title: "Website Redesign", category: "Development", image: tazqaboutlogo, tagline: "Building the future, one line of code at a time." },
];

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (location.state) {
      // Find the selected project from the `projects` array
      const project = projects.find((p) => p.title === location.state.title);
      if (project) {
        setSelectedProject(project);
      } else {
        navigate("/portfolio"); // Redirect if the project is not found
      }
    } else {
      navigate("/portfolio"); // Redirect if no project is found
    }
  }, [location.state, navigate]); // Removed `projects` from dependencies

  if (!selectedProject) {
    return null; // Prevents rendering until the project is loaded
  }

  // Filter related projects (excluding the current project)
  const relatedProjects = projects.filter(
    (project) =>
      project.category === selectedProject.category &&
      project.title !== selectedProject.title
  );

  // Function to handle related project click
  const handleRelatedProjectClick = (project) => {
    setSelectedProject(project); // Update the selected project
  };

  return (
    <>
      <div className="w-full mx-auto p-4 sm:p-6 md:p-10 mt-20 bg-black text-white">
        {/* Project Title */}
        <div>
          <button className="my-6 sm:my-8 md:my-10 mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white px-4 sm:px-6 md:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" /> Design Portfolio
          </button>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8CA419] text-center mb-4 sm:mb-6">
          {selectedProject.title}
        </h1>

        {/* Project Tagline */}
        <p className="text-base sm:text-lg text-gray-300 text-center mb-6 sm:mb-8">
          {selectedProject.tagline}
        </p>

        {/* Project Image */}
        <div className="flex justify-center">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <>
            <h2 className="text-xl sm:text-2xl mt-8 sm:mt-12 text-[#8CA419] font-semibold text-center sm:text-left">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {relatedProjects.map((project, index) => (
                <div
                  key={index}
                  className="border border-[#8CA419] p-3 sm:p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                  onClick={() => handleRelatedProjectClick(project)} // Update selected project
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 object-cover rounded-md"
                    loading="lazy"
                  />
                  <h3 className="text-base sm:text-lg text-[#8CA419] font-bold mt-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {project.tagline}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Testimonials />
    </>
  );
}