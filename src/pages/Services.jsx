import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Testimonials from "../components/HomeComponents/Testimonials";
import { SiTaichigraphics } from "react-icons/si";
import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import homeimg from '../assets/home.jpg'

const services = [
  { icon: <FaLaptopCode size={40} />,  title: "Web Development", desc: "Stunning, responsive websites tailored to your needs.", link: "/webdevelopprice" },
  { icon: <BiSolidBookContent size={40} />,  title: "Content Writer", desc: "Engaging and SEO-optimized content to captivate your audience.", link:"/contentwriterprice" },
  { icon: <FaMobileAlt size={40} />,  title: "Mobile App", desc: "User-friendly and visually appealing mobile applications.", link: "/appdevprice" },
  { icon: <SiTaichigraphics size={40} />, title: "Graphic Design", desc: "Unique logos and brand identities that stand out.", link: "/graphicdesignprice" },
  { icon: <MdOutlineLocalGroceryStore size={40} />, title: "Digital Marketing", desc: "Strategies to grow your online presence and drive results.", link: "/digitalmarketprice" },
  { icon: <PiVideoFill size={40} />, title: "Video Editing", desc: "Professional video editing to bring your stories to life.", link: "/videoeditingprice" },
];

const Services = () => {
const navigate = useNavigate("");

  return (
    <section className="py-20 text-white"
    style={{
                    backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"  // Added to ensure proper image scaling
                  }} >
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 my-20">
        <h2 className="text-4xl font-bold text-[#8CA419]">Our IT Services</h2>
        <p className="mt-4 text-lg text-[#C0C0C0]">We provide a wide range of IT solutions to help your business thrive.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="border border-[#8CA419] rounded-xl p-6  flex flex-col gap-6 hover:shadow-lg hover:shadow-[#8CA419]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon and Title Section */}
              <div className="flex items-center gap-4">
                <div className="text-[#8CA419] p-3 bg-[#1E1E1E] rounded-lg border border-[#8CA419] flex items-center justify-center">
                  {service.icon}
                </div>
                <h1 className="text-2xl font-semibold">{service.title}</h1>
              </div>

              {/* Description */}
              <p className="text-[#C0C0C0] text-left">{service.desc}</p>

              {/* Button */}
              <button 
              onClick={()=> navigate(`${service.link}`)}
              className="mt-4 w-full py-2 px-4 bg-[#8CA419] text-white rounded-lg hover:bg-[#6E8C15] transition duration-300">
                View Full Pricing
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Services;