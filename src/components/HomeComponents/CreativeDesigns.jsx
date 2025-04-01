import React from "react";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CreativeDesigns() {
  const services = [
    { title: "Content Writer", desc: "Engaging and SEO-optimized content to captivate your audience.", link:"/contentwriterprice" },
    { title: "Web Development", desc: "Creating high-quality, responsive, and user-friendly websites.", link: "/webdevelopprice" },
    { title: "Digital Marketing", desc: "Boosting online presence with strategic marketing solutions.", link: "/digitalmarketprice" },
    { title: "Graphic Design", desc: "High-quality branding, graphic design, and UI/UX.", link: "/graphicdesignprice" },
    { title: "Mobile App", desc: "Building intuitive and efficient mobile applications.", link: "/appdevprice" },
    { title: "Video Editing", desc: "Producing engaging and professional video content.", link: "/videoeditingprice" },
];
const naviagte = useNavigate("");

  return (
    <section className=" w-full text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div>
          <button className="my-10 mx-auto text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 sm:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
            <BsStars className="w-8 h-8 sm:w-10 sm:h-10" /> We Offer
          </button>
          <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold w-full sm:w-4/5 md:w-3/4 mx-auto text-center">
          Top-tier<strong className="text-[#8CA419]"> Digital </strong> Services
          </h2>
        </div>
        <p className="text-lg text-white mt-4 mx-auto w-2/3">
        High-quality, innovative solutions according to your business needs.
         Our team combines creativity,strategy, and technology to 
         help you stand out, grow, and succeed.        
         </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className=" p-8 rounded-lg shadow-lg border border-[#8CA419] hover:border-[#a0c12b] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
      <p className="text-xl  text-center mx-auto w-full sm:w-3/4 md:w-2/3 mt-16">
      Stand out instantly with TazQ Solution’s expert services. From stunning designs to strategic
      solutions, we help bring your vision to life.
      </p>
    </section>
  );
}