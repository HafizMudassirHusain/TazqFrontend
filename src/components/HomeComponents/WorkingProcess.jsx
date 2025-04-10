import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaHandshake, FaSearch, FaTasks, FaChartLine, FaFileAlt, FaSyncAlt } from 'react-icons/fa';

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Consultation",
      description: "We begin with an in-depth consultation to understand your business needs and goals, establishing a solid foundation for our collaboration.",
      icon: <FaHandshake className="w-6 h-6" />
    },
    {
      title: "Research and Strategy Development",
      description: "Our team conducts thorough research and creates a customized plan tailored to your specific requirements and objectives.",
      icon: <FaSearch className="w-6 h-6" />
    },
    {
      title: "Implementation",
      description: "We implement the solution with precision and care, keeping you informed at every stage of the process.",
      icon: <FaTasks className="w-6 h-6" />
    },
    {
      title: "Monitoring and Optimization",
      description: "Continuous monitoring ensures optimal performance, with regular adjustments to maximize results.",
      icon: <FaChartLine className="w-6 h-6" />
    },
    {
      title: "Reporting and Communication",
      description: "Transparent reporting keeps you informed of progress and achievements through clear, regular updates.",
      icon: <FaFileAlt className="w-6 h-6" />
    },
    {
      title: "Continual Improvement",
      description: "We constantly refine our approach based on data and feedback to ensure ongoing success.",
      icon: <FaSyncAlt className="w-6 h-6" />
    }
  ];

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-22 sm:py-16 lg:py-20 rounded-3xl">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 items-start md:items-center">
        <h1 className="text-3xl sm:text-4xl font-bold bg-[#8CA419] text-white px-6 py-3 rounded-full shadow-lg">
          Our Working Process
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-md">
          A clear, step-by-step guide to achieving your business goals
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg ${
              activeStep === index 
                ? 'bg-gradient-to-r from-[#8CA419] to-[#A3C522] border border-[#8CA419]' 
                : ' border border-gray-200'
            }`}
          >
            <div 
              className={`flex justify-between items-center p-6 cursor-pointer group ${
                activeStep === index ? 'border-b border-white/30' : ''
              }`}
              onClick={() => toggleStep(index)}
            >
              <div className="flex items-center gap-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  activeStep === index 
                    ? 'bg-white text-[#8CA419]' 
                    : 'bg-[#8CA419] text-white'
                }`}>
                  <span className="text-xl font-bold">
                    {step.icon}
                  </span>
                </div>
                <div>
                  <span className={`text-sm font-medium ${
                    activeStep === index ? 'text-white/80' : 'text-white'
                  }`}>
                    Step 0{index + 1}
                  </span>
                  <h2 className={`text-xl sm:text-2xl font-semibold ${
                    activeStep === index ? 'text-white' : 'text-white'
                  }`}>
                    {step.title}
                  </h2>
                </div>
              </div>
              <button className={`p-2 rounded-full ${
                activeStep === index 
                  ? 'bg-white text-[#8CA419] hover:bg-white/90' 
                  : 'bg-gray-100 text-[#8CA419] hover:bg-gray-200'
              } transition-colors duration-200`}>
                {activeStep === index ? (
                  <FiMinus className="w-5 h-5" />
                ) : (
                  <FiPlus className="w-5 h-5" />
                )}
              </button>
            </div>
            
            {activeStep === index && (
              <div className="p-6 pt-0">
                <p className={`text-lg ${
                  activeStep === index ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;