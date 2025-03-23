import React, { useState } from "react";

const GraphicDesignPricing = () => {
    const graphicDesignPricing = [
        {
            category: "Logo Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple text-based logo with minimal elements.",
                    delivery: "3-5 days",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "A custom-designed logo with detailed graphics and color variations.",
                    delivery: "5-7 days",
                    price: 120
                },
                {
                    title: "Premium",
                    description: "A high-end logo with multiple revisions, complete branding, and source files.",
                    delivery: "7-10 days",
                    price: 250
                }
            ]
        },
        {
            category: "Business Card Design",
            plans: [
                {
                    title: "Basic",
                    description: "A clean, single-sided business card design.",
                    delivery: "2-4 days",
                    price: 30
                },
                {
                    title: "Standard",
                    description: "Double-sided business card with a unique design and branding.",
                    delivery: "3-5 days",
                    price: 70
                },
                {
                    title: "Premium",
                    description: "A premium business card with custom illustrations and print-ready files.",
                    delivery: "5-7 days",
                    price: 150
                }
            ]
        },
        {
            category: "Social Media Post Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple, clean social media post design.",
                    delivery: "2-3 days",
                    price: 25
                },
                {
                    title: "Standard",
                    description: "A high-quality, engaging post with custom graphics.",
                    delivery: "3-5 days",
                    price: 60
                },
                {
                    title: "Premium",
                    description: "A premium post with advanced elements, branding, and animations (if needed).",
                    delivery: "5-7 days",
                    price: 120
                }
            ]
        },
        {
            category: "YouTube Thumbnail Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple, attractive thumbnail with text overlay.",
                    delivery: "1-2 days",
                    price: 20
                },
                {
                    title: "Standard",
                    description: "A high-quality thumbnail with proper contrast, branding, and color psychology.",
                    delivery: "2-3 days",
                    price: 40
                },
                {
                    title: "Premium",
                    description: "A premium YouTube thumbnail with advanced effects and custom illustrations.",
                    delivery: "3-4 days",
                    price: 80
                }
            ]
        },
        {
            category: "Flyer & Brochure Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple one-page flyer with minimal elements.",
                    delivery: "3-5 days",
                    price: 40
                },
                {
                    title: "Standard",
                    description: "A detailed multi-page brochure with branding and creative elements.",
                    delivery: "5-7 days",
                    price: 100
                },
                {
                    title: "Premium",
                    description: "A premium-level, custom-illustrated flyer or brochure with print-ready files.",
                    delivery: "7-10 days",
                    price: 200
                }
            ]
        },
        {
            category: "Banner & Poster Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple yet effective banner or poster design.",
                    delivery: "3-5 days",
                    price: 40
                },
                {
                    title: "Standard",
                    description: "A high-quality, engaging design suitable for advertising.",
                    delivery: "5-7 days",
                    price: 90
                },
                {
                    title: "Premium",
                    description: "A premium-level banner with detailed illustrations and marketing value.",
                    delivery: "7-10 days",
                    price: 180
                }
            ]
        },
        {
            category: "Infographic Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple infographic with key data points.",
                    delivery: "3-5 days",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "A professional infographic with creative visuals and well-structured information.",
                    delivery: "5-7 days",
                    price: 120
                },
                {
                    title: "Premium",
                    description: "A premium infographic with custom illustrations, icons, and creative storytelling.",
                    delivery: "7-10 days",
                    price: 250
                }
            ]
        },
        {
            category: "Brand Identity Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple brand kit with color scheme and typography.",
                    delivery: "7-10 days",
                    price: 150
                },
                {
                    title: "Standard",
                    description: "A complete branding kit including logo, business card, and social media assets.",
                    delivery: "10-14 days",
                    price: 350
                },
                {
                    title: "Premium",
                    description: "A full-fledged brand identity package with in-depth branding guide and marketing materials.",
                    delivery: "14-20 days",
                    price: 700
                }
            ]
        },
        {
            category: "UI/UX Design",
            plans: [
                {
                    title: "Basic",
                    description: "A simple UI/UX wireframe for a mobile or web app.",
                    delivery: "7-10 days",
                    price: 200
                },
                {
                    title: "Standard",
                    description: "A complete UI/UX design with user-friendly navigation and branding.",
                    delivery: "10-15 days",
                    price: 500
                },
                {
                    title: "Premium",
                    description: "A high-end, interactive UI/UX prototype with user testing and revisions.",
                    delivery: "15-25 days",
                    price: 1000
                }
            ]
        },
        {
            category: "Marketing Material Design",
            plans: [
                {
                    title: "Basic",
                    description: "A single marketing material such as an ad or product label.",
                    delivery: "3-5 days",
                    price: 60
                },
                {
                    title: "Standard",
                    description: "A full campaign design including banners, brochures, and advertisements.",
                    delivery: "7-10 days",
                    price: 200
                },
                {
                    title: "Premium",
                    description: "A comprehensive marketing package including complete brand promotion materials.",
                    delivery: "10-15 days",
                    price: 500
                }
            ]
        }
    ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPlans = graphicDesignPricing
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
    const whatsappUrl = `https://wa.me/923366469656?text=${encodedMessage}`; // Replace with your WhatsApp number
    window.open(whatsappUrl, "_blank");
  };

   
  return (
    <section className="mt-20 bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl p-5 sm:text-5xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#8CA419] to-[#a0c12b]">
        Graphic Design Services Pricing
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
            {graphicDesignPricing.map((category, index) => (
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

export default GraphicDesignPricing;