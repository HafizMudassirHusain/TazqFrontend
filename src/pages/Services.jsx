import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock, FaCogs, FaHandsHelping } from "react-icons/fa";
import Testimonials from "../components/HomeComponents/Testimonials";

const services = [
  { icon: <FaLaptopCode size={40} />, title: "Web Development", description: "Custom websites and web apps tailored to your needs." },
  { icon: <FaMobileAlt size={40} />, title: "Mobile App Development", description: "iOS and Android apps built for performance and scalability." },
  { icon: <FaCogs size={40} />, title: "Software Solutions", description: "End-to-end software solutions for various industries." },
  { icon: <FaCloud size={40} />, title: "Cloud Computing", description: "Leverage the power of cloud technologies for efficiency." },
  { icon: <FaLock size={40} />, title: "Cybersecurity", description: "Protect your business with top-tier security measures." },
  { icon: <FaHandsHelping size={40} />, title: "IT Consulting", description: "Expert IT consulting to help you grow your business." }
];

const Services = () => {
  return (
    <section className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto text-center px-10 my-20">
        <h2 className="text-4xl font-bold text-[#8CA419]">Our IT Services</h2>
        <p className="mt-4 text-lg text-[#C0C0C0]">We provide a wide range of IT solutions to help your business thrive.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-[#1E1E1E] rounded-lg shadow-lg flex flex-col items-center text-center border border-[#8CA419]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#8CA419] mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-[#C0C0C0]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Services;
