import React from "react";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CreativeDesigns() {
  const services = [
    { title: "Content Writer", desc: "Engaging and SEO-optimized content to captivate your audience.", link:"/contentwriterprice" },
    { title: "Web Development", desc: "Stunning, responsive websites tailored to your needs.", link: "/webdevelopprice" },
    { title: "Digital Marketing", desc: "Strategies to grow your online presence and drive results.", link: "/digitalmarketprice" },
    { title: "Graphic Design", desc: "Unique logos and brand identities that stand out.", link: "/graphicdesignprice" },
    { title: "Mobile App", desc: "User-friendly and visually appealing mobile applications.", link: "/appdevprice" },
    { title: "Video Editing", desc: "Professional video editing to bring your stories to life.", link: "/videoeditingprice" },
];
const naviagte = useNavigate("");

  return (
    <section className="bg-gray-900 w-full text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div>
          <button className="my-10 mx-auto text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 sm:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-8 h-8 sm:w-10 sm:h-10" /> Creative Toolkit
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold w-full sm:w-4/5 md:w-3/4 mx-auto text-center">
            Experience The <strong className="text-[#8CA419]">Creative Origin</strong> Of Designs
          </h2>
        </div>
        <p className="text-lg text-white mt-4">
          Get high-quality, innovative designs at the most affordable rates. Our expert designers bring creativity and uniqueness to every project.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black p-8 rounded-lg shadow-lg border border-[#8CA419] hover:border-[#a0c12b] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-[#8CA419] mb-4">{service.title}</h3>
            <p className="text-gray-300 text-lg mb-6">{service.desc}</p>
            <button 
            onClick={()=> naviagte(`${service.link}`)}
            className="w-full bg-[#8CA419] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#a0c12b] transition">
              View Prices
            </button>
          </div>
        ))}
      </div>

      {/* Additional Text */}
      <p className="text-xl text-center mx-auto w-full sm:w-3/4 md:w-1/2 mt-16">
        Take advantage of the Tazq Solution Toolkit and stand out immediately. Use our world-class graphic designers to put your brand out there!
      </p>
    </section>
  );
}