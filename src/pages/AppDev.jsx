import React, { useState } from "react";

const AppDev = () => {
  const pricingData = [
    {
      category: "Android App Development",
      plans: [
        {
          title: "Basic",
          description: "A simple Android app with up to 3 screens, basic UI, and essential functionalities.",
          delivery: "10-14 days",
          price: "$300",
        },
        {
          title: "Standard",
          description: "A fully functional app with up to 7 screens, database integration, and basic animations.",
          delivery: "20-30 days",
          price: "$700",
        },
        {
          title: "Premium",
          description: "A high-performance Android app with API integration, real-time updates, and custom UI/UX.",
          delivery: "30-45 days",
          price: "$1,200",
        },
      ],
    },
    {
      category: "iOS App Development",
      plans: [
        {
          title: "Basic",
          description: "A simple iOS app with essential functionalities and a basic UI.",
          delivery: "10-14 days",
          price: "$350",
        },
        {
          title: "Standard",
          description: "A medium-scale iOS app with animations, authentication, and cloud integration.",
          delivery: "20-30 days",
          price: "$800",
        },
        {
          title: "Premium",
          description: "A fully custom iOS app with high-end features, security protocols, and seamless UX.",
          delivery: "30-45 days",
          price: "$1,400",
        },
      ],
    },
    {
      category: "Cross-Platform App Development",
      plans: [
        {
          title: "Basic",
          description: "A simple app for both Android & iOS with up to 5 screens.",
          delivery: "15-20 days",
          price: "$500",
        },
        {
          title: "Standard",
          description: "A responsive cross-platform app with database integration and a smooth UI.",
          delivery: "25-35 days",
          price: "$1,000",
        },
        {
          title: "Premium",
          description: "A high-end cross-platform app with cloud storage, API integration, and high performance.",
          delivery: "40-60 days",
          price: "$2,000",
        },
      ],
    },
    {
      category: "E-Commerce Mobile App",
      plans: [
        {
          title: "Basic",
          description: "A small e-commerce app with a product catalog and cart system.",
          delivery: "15-20 days",
          price: "$600",
        },
        {
          title: "Standard",
          description: "A complete shopping app with payment gateways, search filters, and user authentication.",
          delivery: "30-40 days",
          price: "$1,200",
        },
        {
          title: "Premium",
          description: "A scalable e-commerce app with AI recommendations, multi-vendor support, and analytics.",
          delivery: "50-70 days",
          price: "$2,500",
        },
      ],
    },
    {
      category: "Custom Business App",
      plans: [
        {
          title: "Basic",
          description: "A business app with simple UI, contact forms, and basic data management.",
          delivery: "15-25 days",
          price: "$500",
        },
        {
          title: "Standard",
          description: "A dynamic business app with dashboard, analytics, and CRM integration.",
          delivery: "30-45 days",
          price: "$1,200",
        },
        {
          title: "Premium",
          description: "A fully automated business app with AI-driven insights, cloud storage, and automation tools.",
          delivery: "50-75 days",
          price: "$3,000",
        },
      ],
    },
    {
      category: "Social Media App Development",
      plans: [
        {
          title: "Basic",
          description: "A social media app with user profiles, posts, and basic interactions.",
          delivery: "20-30 days",
          price: "$800",
        },
        {
          title: "Standard",
          description: "A fully functional social platform with messaging, notifications, and multimedia sharing.",
          delivery: "40-55 days",
          price: "$1,800",
        },
        {
          title: "Premium",
          description: "A large-scale social media app with real-time features, AI recommendations, and security layers.",
          delivery: "60-90 days",
          price: "$3,500",
        },
      ],
    },
    {
      category: "On-Demand Service App",
      plans: [
        {
          title: "Basic",
          description: "A simple service booking app with listings and contact options.",
          delivery: "20-30 days",
          price: "$700",
        },
        {
          title: "Standard",
          description: "An advanced on-demand app with GPS tracking, payments, and live updates.",
          delivery: "40-55 days",
          price: "$1,500",
        },
        {
          title: "Premium",
          description: "A feature-rich app with AI-driven recommendations, dynamic pricing, and analytics.",
          delivery: "60-90 days",
          price: "$3,000",
        },
      ],
    },
    {
      category: "Healthcare & Fitness App",
      plans: [
        {
          title: "Basic",
          description: "A simple health tracking app with manual input and essential reports.",
          delivery: "20-30 days",
          price: "$600",
        },
        {
          title: "Standard",
          description: "A fitness or medical app with appointment booking, health tracking, and user profiles.",
          delivery: "35-50 days",
          price: "$1,500",
        },
        {
          title: "Premium",
          description: "A high-tech healthcare app with AI diagnostics, telemedicine, and cloud storage.",
          delivery: "60-90 days",
          price: "$3,500",
        },
      ],
    },
    {
      category: "Gaming App Development",
      plans: [
        {
          title: "Basic",
          description: "A 2D mobile game with simple mechanics and engaging design.",
          delivery: "30-40 days",
          price: "$1,000",
        },
        {
          title: "Standard",
          description: "A multi-level game with in-app purchases and optimized performance.",
          delivery: "50-70 days",
          price: "$2,500",
        },
        {
          title: "Premium",
          description: "A high-end mobile game with 3D graphics, multiplayer support, and AI-based gameplay.",
          delivery: "90-120 days",
          price: "$5,000",
        },
      ],
    },
    {
      category: "App Maintenance & Support",
      plans: [
        {
          title: "Basic",
          description: "Monthly bug fixes and small updates.",
          delivery: "Ongoing",
          price: "$100/month",
        },
        {
          title: "Standard",
          description: "Security updates, performance enhancements, and minor feature additions.",
          delivery: "Ongoing",
          price: "$250/month",
        },
        {
          title: "Premium",
          description: "24/7 support, major updates, feature expansions, and analytics reports.",
          delivery: "Ongoing",
          price: "$500/month",
        },
      ],
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPlans = pricingData
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
          Mobile App Development Services Pricing
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
            {pricingData.map((category, index) => (
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
              <p className="text-2xl font-bold text-white mb-6">{plan.price}</p>

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

export default AppDev;