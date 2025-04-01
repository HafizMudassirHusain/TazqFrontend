import React, { useState } from "react";

function DigitalMarketingPricing() {
  const digitalMarketingPricing = [
    {
      category: "Social Media Marketing (SMM)",
      plans: [
        {
          title: "Basic",
          description: "3 social media posts per week, engagement monitoring.",
          delivery: "7 days",
          price: 100
        },
        {
          title: "Standard",
          description: "5 posts per week, content creation, and audience interaction.",
          delivery: "7 days",
          price: 250
        },
        {
          title: "Premium",
          description: "Daily posts, strategy planning, and ad campaign optimization.",
          delivery: "7 days",
          price: 500
        }
      ]
    },
    {
      category: "Pay-Per-Click Advertising (PPC)",
      plans: [
        {
          title: "Basic",
          description: "Small PPC campaign setup and management ($500 ad spend required).",
          delivery: "7 days",
          price: 150
        },
        {
          title: "Standard",
          description: "Medium-scale PPC campaign with optimization ($1000 ad spend required).",
          delivery: "10 days",
          price: 350
        },
        {
          title: "Premium",
          description: "Large PPC campaign with A/B testing and conversion tracking.",
          delivery: "14 days",
          price: 700
        }
      ]
    },
    {
      category: "Email Marketing",
      plans: [
        {
          title: "Basic",
          description: "1 email campaign setup with pre-designed templates.",
          delivery: "5 days",
          price: 80
        },
        {
          title: "Standard",
          description: "3 email campaigns with custom designs and audience segmentation.",
          delivery: "7 days",
          price: 200
        },
        {
          title: "Premium",
          description: "Full email marketing strategy, automation, and analytics.",
          delivery: "10 days",
          price: 400
        }
      ]
    },
    {
      category: "Google Ads & Facebook Ads",
      plans: [
        {
          title: "Basic",
          description: "Google or Facebook ad campaign setup with targeting research.",
          delivery: "5 days",
          price: 120
        },
        {
          title: "Standard",
          description: "Campaign setup with A/B testing and audience retargeting.",
          delivery: "7 days",
          price: 300
        },
        {
          title: "Premium",
          description: "Fully optimized ad campaigns with conversion tracking and analytics.",
          delivery: "10 days",
          price: 600
        }
      ]
    },
    {
      category: "Conversion Rate Optimization (CRO)",
      plans: [
        {
          title: "Basic",
          description: "Website analysis with 3 key recommendations to improve conversion rates.",
          delivery: "5 days",
          price: 100
        },
        {
          title: "Standard",
          description: "Detailed audit, heatmap analysis, and 5+ improvements.",
          delivery: "7 days",
          price: 250
        },
        {
          title: "Premium",
          description: "Full CRO strategy, A/B testing, and implementation of changes.",
          delivery: "10 days",
          price: 500
        }
      ]
    }
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlans = digitalMarketingPricing
    .filter((category) => selectedCategory === "All" || category.category === selectedCategory)
    .flatMap((category) => category.plans
      .filter((plan) => plan.title.toLowerCase().includes(searchQuery.toLowerCase())
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
          Digital Marketing Services Pricing
        </h1>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA419]" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA419]"
          >
            <option value="All">All Categories</option>
            {digitalMarketingPricing.map((category, index) => (
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
}

export default DigitalMarketingPricing;