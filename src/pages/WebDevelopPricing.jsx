import React, { useState } from "react";

const WebDevelopPricing = () => {
    const websiteDevelopmentPricing = [
        {
            category: "Frontend Development",
            plans: [
                {
                    title: "Basic",
                    description: "A simple, responsive 3-page website with basic animations and mobile-friendly design.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Standard",
                    description: "A 7-page website with interactive UI, animations, and optimized performance.",
                    delivery: "10-14 days",
                    price: 300
                },
                {
                    title: "Premium",
                    description: "A fully customized website with advanced animations, responsiveness, and unique UI/UX.",
                    delivery: "15-20 days",
                    price: 500
                }
            ]
        },
        {
            category: "Backend Development",
            plans: [
                {
                    title: "Basic",
                    description: "API setup, database integration, and authentication system.",
                    delivery: "7-10 days",
                    price: 200
                },
                {
                    title: "Standard",
                    description: "Secure backend with authentication, admin panel, and role management.",
                    delivery: "14-18 days",
                    price: 400
                },
                {
                    title: "Premium",
                    description: "Scalable architecture with cloud-based integration and real-time data processing.",
                    delivery: "20-30 days",
                    price: 700
                }
            ]
        },
        {
            category: "Full-Stack Development",
            plans: [
                {
                    title: "Basic",
                    description: "A complete website with frontend and backend, including basic user authentication.",
                    delivery: "10-14 days",
                    price: 400
                },
                {
                    title: "Standard",
                    description: "Dynamic website with authentication, user roles, and database management.",
                    delivery: "15-21 days",
                    price: 800
                },
                {
                    title: "Premium",
                    description: "Advanced full-stack web application with real-time features, high security, and cloud integration.",
                    delivery: "25-35 days",
                    price: 1500
                }
            ]
        },
        {
            category: "E-Commerce Website Development",
            plans: [
                {
                    title: "Basic",
                    description: "Online store with up to 10 products, basic cart, and payment integration.",
                    delivery: "10-14 days",
                    price: 500
                },
                {
                    title: "Standard",
                    description: "Store with up to 50 products, secure checkout, and responsive design.",
                    delivery: "15-25 days",
                    price: 1000
                },
                {
                    title: "Premium",
                    description: "Unlimited products, multi-vendor support, and complete e-commerce automation.",
                    delivery: "30-45 days",
                    price: 2000
                }
            ]
        },
        {
            category: "WordPress Website Development",
            plans: [
                {
                    title: "Basic",
                    description: "Install and set up a WordPress theme with essential plugins.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Standard",
                    description: "Custom WordPress design, plugin setup, and SEO optimization.",
                    delivery: "10-14 days",
                    price: 350
                },
                {
                    title: "Premium",
                    description: "Fully customized WordPress website with advanced functionalities.",
                    delivery: "15-20 days",
                    price: 700
                }
            ]
        },
        {
            category: "Web App Development",
            plans: [
                {
                    title: "Basic",
                    description: "A simple web application with login and essential functionalities.",
                    delivery: "14-20 days",
                    price: 600
                },
                {
                    title: "Standard",
                    description: "Interactive web application with database and multiple user roles.",
                    delivery: "25-35 days",
                    price: 1200
                },
                {
                    title: "Premium",
                    description: "High-performance web app with cloud storage, real-time updates, and scalability.",
                    delivery: "40-60 days",
                    price: 2500
                }
            ]
        },
        {
            category: "UI/UX Design for Websites",
            plans: [
                {
                    title: "Basic",
                    description: "Simple UI design for up to 2 pages with a modern layout.",
                    delivery: "3-5 days",
                    price: 100
                },
                {
                    title: "Standard",
                    description: "Complete website UI/UX design with a professional look.",
                    delivery: "7-10 days",
                    price: 250
                },
                {
                    title: "Premium",
                    description: "High-end, fully customized UI/UX with research-based design.",
                    delivery: "12-18 days",
                    price: 500
                }
            ]
        },
        {
            category: "Website Maintenance & Support",
            plans: [
                {
                    title: "Basic",
                    description: "Monthly website updates and bug fixes.",
                    delivery: "Ongoing",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "Security updates, performance optimization, and minor feature additions.",
                    delivery: "Ongoing",
                    price: 150
                },
                {
                    title: "Premium",
                    description: "24/7 support, security patches, performance enhancements, and feature expansion.",
                    delivery: "Ongoing",
                    price: 300
                }
            ]
        },
        {
            category: "Landing Page Design",
            plans: [
                {
                    title: "Basic",
                    description: "Simple single-page design with a contact form.",
                    delivery: "3-5 days",
                    price: 100
                },
                {
                    title: "Standard",
                    description: "High-converting landing page with animations and CTAs.",
                    delivery: "7-10 days",
                    price: 250
                },
                {
                    title: "Premium",
                    description: "Fully customized landing page with interactive elements and A/B testing.",
                    delivery: "10-15 days",
                    price: 500
                }
            ]
        },
        {
            category: "Custom Web Solutions",
            plans: [
                {
                    title: "Basic",
                    description: "Custom website with essential features based on client needs.",
                    delivery: "14-20 days",
                    price: 500
                },
                {
                    title: "Standard",
                    description: "Fully customized web application with unique functionalities.",
                    delivery: "25-35 days",
                    price: 1000
                },
                {
                    title: "Premium",
                    description: "Enterprise-level web solution with advanced automation and AI integration.",
                    delivery: "40-60 days",
                    price: 2000
                }
            ]
        }
    ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPlans = websiteDevelopmentPricing
    .filter((category) => selectedCategory === "All" || category.category === selectedCategory)
    .flatMap((category) =>
      category.plans
        .filter((plan) =>
          plan.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((plan) => ({ ...plan, category: category.category })) // Add category to each plan
    );

  // Function to handle WhatsApp contact
  const handleContactUs = (plan) => {
    const message = `Hi, I'm interested in the ${plan.title} plan (${plan.category}). Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923122329854?text=${encodedMessage}`; // Replace with your WhatsApp number
    window.open(whatsappUrl, "_blank");
  };

   
  return (
    <section className="mt-20 bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl p-5 sm:text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#8CA419] to-[#a0c12b]">
          Web Development Services Pricing
        </h1>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA419]"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA419]"
          >
            <option value="All">All Categories</option>
            {websiteDevelopmentPricing.map((category, index) => (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtered Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#8CA419] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Window-Like Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#8CA419]">{plan.title}</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-[#8CA419] text-black text-sm font-semibold rounded-full">
                  {plan.category}
                </span>
              </div>

              {/* Plan Details */}
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <p className="text-gray-400 mb-2">
                <strong>Delivery:</strong> {plan.delivery}
              </p>
              <p className="text-2xl font-bold text-white mb-6">${plan.price}</p>

              {/* Additional Options */}
              <div className="flex flex-col space-y-2">
                {/* <button className="w-full px-4 py-2 bg-[#8CA419] text-black rounded-lg font-semibold hover:bg-[#a0c12b] transition duration-300">
                  View Details
                </button>
                <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300">
                  Customize Plan
                </button> */}
                <button 
                 onClick={() => handleContactUs(plan)}
                className="w-full px-4 py-2 bg-[#8CA419] text-black rounded-lg font-semibold hover:bg-[#a0c12b] transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopPricing;