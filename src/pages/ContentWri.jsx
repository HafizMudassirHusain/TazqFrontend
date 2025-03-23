import React, { useState } from "react";

const ContentWri = () => {
    const contentWritingPricing = [
        {
            category: "Blog Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A 500-word SEO-friendly blog post on a general topic.",
                    delivery: "3-5 days",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "A 1000-word well-researched blog post with proper structure.",
                    delivery: "5-7 days",
                    price: 100
                },
                {
                    title: "Premium",
                    description: "A 1500-word in-depth blog post with SEO optimization and references.",
                    delivery: "7-10 days",
                    price: 180
                }
            ]
        },
        {
            category: "Website Content Writing",
            plans: [
                {
                    title: "Basic",
                    description: "Homepage content (up to 300 words) with an engaging tone.",
                    delivery: "3-5 days",
                    price: 60
                },
                {
                    title: "Standard",
                    description: "Full website content (up to 3 pages) with brand-aligned messaging.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Premium",
                    description: "A complete website content package with SEO optimization (up to 6 pages).",
                    delivery: "7-10 days",
                    price: 300
                }
            ]
        },
        {
            category: "Product Descriptions",
            plans: [
                {
                    title: "Basic",
                    description: "5 short product descriptions (up to 50 words each).",
                    delivery: "2-3 days",
                    price: 40
                },
                {
                    title: "Standard",
                    description: "10 detailed product descriptions (up to 100 words each).",
                    delivery: "3-5 days",
                    price: 90
                },
                {
                    title: "Premium",
                    description: "20 premium product descriptions with keyword optimization.",
                    delivery: "5-7 days",
                    price: 180
                }
            ]
        },
        {
            category: "Social Media Captions & Posts",
            plans: [
                {
                    title: "Basic",
                    description: "5 engaging social media captions (short and creative).",
                    delivery: "2-3 days",
                    price: 30
                },
                {
                    title: "Standard",
                    description: "10 social media posts with captions, hashtags, and CTA.",
                    delivery: "3-5 days",
                    price: 80
                },
                {
                    title: "Premium",
                    description: "20 high-quality social media posts with complete branding strategy.",
                    delivery: "5-7 days",
                    price: 160
                }
            ]
        },
        {
            category: "YouTube Script Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A 5-minute engaging script with clear storytelling.",
                    delivery: "3-5 days",
                    price: 80
                },
                {
                    title: "Standard",
                    description: "A 10-minute well-researched script with creative hooks.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Premium",
                    description: "A 15-minute professional script with storytelling and SEO elements.",
                    delivery: "7-10 days",
                    price: 250
                }
            ]
        },
        {
            category: "Speech & Presentation Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A short speech or presentation script (up to 500 words).",
                    delivery: "3-5 days",
                    price: 70
                },
                {
                    title: "Standard",
                    description: "A well-structured 1000-word speech or PowerPoint content.",
                    delivery: "5-7 days",
                    price: 140
                },
                {
                    title: "Premium",
                    description: "A 1500-word professional speech with persuasive storytelling.",
                    delivery: "7-10 days",
                    price: 220
                }
            ]
        },
        {
            category: "Resume & Cover Letter Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A simple resume with professional formatting.",
                    delivery: "3-5 days",
                    price: 60
                },
                {
                    title: "Standard",
                    description: "A resume and cover letter tailored for job applications.",
                    delivery: "5-7 days",
                    price: 120
                },
                {
                    title: "Premium",
                    description: "A complete resume package with LinkedIn optimization.",
                    delivery: "7-10 days",
                    price: 200
                }
            ]
        },
        {
            category: "Ebook Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A 2000-word mini-ebook with simple formatting.",
                    delivery: "7-10 days",
                    price: 200
                },
                {
                    title: "Standard",
                    description: "A 5000-word well-structured ebook with a professional layout.",
                    delivery: "10-14 days",
                    price: 500
                },
                {
                    title: "Premium",
                    description: "A 10,000-word high-quality ebook with research and design.",
                    delivery: "14-20 days",
                    price: 900
                }
            ]
        },
        {
            category: "Marketing Copywriting",
            plans: [
                {
                    title: "Basic",
                    description: "A short ad copy (up to 150 words) with a strong CTA.",
                    delivery: "3-5 days",
                    price: 70
                },
                {
                    title: "Standard",
                    description: "A detailed landing page copy or sales page.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Premium",
                    description: "A complete marketing campaign content (multiple copies).",
                    delivery: "7-10 days",
                    price: 300
                }
            ]
        },
        {
            category: "Technical Writing",
            plans: [
                {
                    title: "Basic",
                    description: "A 1000-word technical article or guide.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Standard",
                    description: "A 3000-word detailed technical document.",
                    delivery: "7-10 days",
                    price: 350
                },
                {
                    title: "Premium",
                    description: "A complete technical writing package with illustrations.",
                    delivery: "10-15 days",
                    price: 700
                }
            ]
        }
    ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPlans =contentWritingPricing
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
          Content Writting Services Pricing
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
            {contentWritingPricing.map((category, index) => (
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

export default ContentWri;