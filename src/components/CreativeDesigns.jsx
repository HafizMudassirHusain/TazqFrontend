import React from "react";
import { BsStars } from "react-icons/bs";

export default function CreativeDesigns() {
  const services = [
    { title: "Web Design", desc: "Stunning, responsive websites tailored to your needs." },
    { title: "Thumbnail Design", desc: "Eye-catching thumbnails that boost engagement." },
    { title: "Logo & Branding", desc: "Unique logos and brand identities that stand out." },
    { title: "Social Media Graphics", desc: "Custom designs to enhance your online presence." },
    { title: "UI/UX Design", desc: "User-friendly and visually appealing interfaces." },
    { title: "Business Card Design", desc: "Professional and sleek business card designs." },
  ];

  return (
    <section className="bg-gray-900 w-full text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
         <button className="my-10 mx-auto text-3xl font-bold text-white px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
          <BsStars className="w-10 h-10" /> Creative Toolkit
          </button>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold w-3/4 mx-auto ">
          Experience The <strong className="text-[#8CA419]">Creative Origin</strong> Of Designs 
        </h2>
        <p className="text-lg text-white mt-4">
          Get high-quality, innovative designs at the most affordable rates. Our expert designers bring creativity and uniqueness to every project.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-lg border-l-4 border-[#8CA419] hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-white mt-2">{service.desc}</p>
            <button className="mt-4 bg-[#8CA419] text-black px-4 py-2 rounded font-semibold hover:bg-[#a0c12b] transition">
              View Prices
            </button>
          </div>
        ))}
      </div>
      <p className="text-xl mx-auto w-1/2 my-15">Take advantage of the Primordial Toolkit and stand out immediately.
           Use our world-class graphic designers to put your brand out there!</p>

    </section>
  );
}
