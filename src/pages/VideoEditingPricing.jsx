import React, { useState } from "react";

const VideosEditingPrice = () => {
    const videoEditingPrice = [
        {
            category: "Video Editing",
            plans: [
                {
                    title: "Basic",
                    description: "Basic cuts, transitions, and color correction for a 2-minute video.",
                    delivery: "3-5 days",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "Advanced editing for a 5-minute video with sound design and effects.",
                    delivery: "5-7 days",
                    price: 120
                },
                {
                    title: "Premium",
                    description: "Full professional editing for a 10-minute video with motion graphics.",
                    delivery: "7-10 days",
                    price: 250
                }
            ]
        },
        {
            category: "YouTube Video Editing",
            plans: [
                {
                    title: "Basic",
                    description: "Simple cuts and basic effects for a 5-minute YouTube video.",
                    delivery: "3-5 days",
                    price: 80
                },
                {
                    title: "Standard",
                    description: "Engaging edits with motion graphics and sound effects (10 mins).",
                    delivery: "5-7 days",
                    price: 180
                },
                {
                    title: "Premium",
                    description: "High-quality storytelling, cinematic effects, and full optimization (15 mins).",
                    delivery: "7-10 days",
                    price: 350
                }
            ]
        },
        {
            category: "Short-Form Video Editing (Reels, Shorts, TikToks)",
            plans: [
                {
                    title: "Basic",
                    description: "Editing for 3 short videos (up to 30 seconds each).",
                    delivery: "2-3 days",
                    price: 50
                },
                {
                    title: "Standard",
                    description: "Editing for 5 short videos with effects and captions.",
                    delivery: "3-5 days",
                    price: 100
                },
                {
                    title: "Premium",
                    description: "Editing for 10 short videos with transitions, sound, and branding.",
                    delivery: "5-7 days",
                    price: 180
                }
            ]
        },
        {
            category: "Promotional Video Editing",
            plans: [
                {
                    title: "Basic",
                    description: "A simple 30-second promo video with text and transitions.",
                    delivery: "3-5 days",
                    price: 100
                },
                {
                    title: "Standard",
                    description: "A 60-second promotional video with motion graphics and branding.",
                    delivery: "5-7 days",
                    price: 200
                },
                {
                    title: "Premium",
                    description: "A 90-second high-impact promo with VFX and cinematic effects.",
                    delivery: "7-10 days",
                    price: 400
                }
            ]
        },
        {
            category: "Animation & Motion Graphics",
            plans: [
                {
                    title: "Basic",
                    description: "Simple animated text and logo animation (10 seconds).",
                    delivery: "3-5 days",
                    price: 80
                },
                {
                    title: "Standard",
                    description: "Motion graphics and explainer video (30 seconds).",
                    delivery: "5-7 days",
                    price: 200
                },
                {
                    title: "Premium",
                    description: "Fully animated video with custom graphics (60 seconds).",
                    delivery: "7-10 days",
                    price: 400
                }
            ]
        },
        {
            category: "Corporate Video Editing",
            plans: [
                {
                    title: "Basic",
                    description: "A 2-minute corporate video with simple transitions.",
                    delivery: "3-5 days",
                    price: 120
                },
                {
                    title: "Standard",
                    description: "A 5-minute professional corporate video with branding and motion graphics.",
                    delivery: "5-7 days",
                    price: 250
                },
                {
                    title: "Premium",
                    description: "A high-quality 10-minute corporate video with storytelling and effects.",
                    delivery: "7-10 days",
                    price: 500
                }
            ]
        },
        {
            category: "Wedding & Event Video Editing",
            plans: [
                {
                    title: "Basic",
                    description: "Editing for a 3-minute wedding highlight video.",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Standard",
                    description: "A 5-minute cinematic wedding video with music and effects.",
                    delivery: "7-10 days",
                    price: 300
                },
                {
                    title: "Premium",
                    description: "A 10-minute full wedding film with storytelling and special effects.",
                    delivery: "10-15 days",
                    price: 600
                }
            ]
        },
        {
            category: "Green Screen Editing",
            plans: [
                {
                    title: "Basic",
                    description: "Keying out green screen and basic background replacement (1 min).",
                    delivery: "3-5 days",
                    price: 70
                },
                {
                    title: "Standard",
                    description: "Advanced green screen effects with lighting corrections (3 mins).",
                    delivery: "5-7 days",
                    price: 150
                },
                {
                    title: "Premium",
                    description: "Full professional green screen editing with compositing (5 mins).",
                    delivery: "7-10 days",
                    price: 300
                }
            ]
        },
        {
            category: "VFX & Special Effects Editing",
            plans: [
                {
                    title: "Basic",
                    description: "Simple VFX like light flares and motion blur (1 min).",
                    delivery: "3-5 days",
                    price: 100
                },
                {
                    title: "Standard",
                    description: "Intermediate VFX like explosions and advanced transitions (3 mins).",
                    delivery: "5-7 days",
                    price: 250
                },
                {
                    title: "Premium",
                    description: "Full CGI and professional-level effects for a cinematic video (5 mins).",
                    delivery: "10-15 days",
                    price: 500
                }
            ]
        },
        {
            category: "Video Ads Editing",
            plans: [
                {
                    title: "Basic",
                    description: "A 15-second ad with fast-paced cuts and branding.",
                    delivery: "3-5 days",
                    price: 80
                },
                {
                    title: "Standard",
                    description: "A 30-second high-quality ad with sound design and motion graphics.",
                    delivery: "5-7 days",
                    price: 180
                },
                {
                    title: "Premium",
                    description: "A 60-second premium ad with cinematic effects and storytelling.",
                    delivery: "7-10 days",
                    price: 350
                }
            ]
        }
    ];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPlans = videoEditingPrice
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
        Video Editing Services Price
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
            {videoEditingPrice.map((category, index) => (
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

export default VideosEditingPrice;