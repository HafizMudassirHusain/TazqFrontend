import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import asim from '../../assets/tazqteam/asim.jpg'
import asif from '../../assets/tazqteam/asif.jpg'
import huzaifa from '../../assets/tazqteam/huzaifa.jpg'
import rumaisa from '../../assets/tazqteam/rumaisa.jpg'
import sadain from '../../assets/tazqteam/sadain.jpg'
import ibrahim from '../../assets/tazqteam/ibrahim.png'
import mudassir from '../../assets/tazqteam/mudassir.jpg'

const teamMembers = [
  {
    name: "Muhammad Asim",
    role: "Founder & CEO",
    img: asim,
    expertise: "Digital Innovation & Leadership",
    description: "Innovating Digital Excellence at TazQ Solutions. At TazQ, his role goes beyond design. He is the backbone of our creative ecosystem. He works hand in hand with Writers, Marketers, Developers together, they craft a unified brand experience.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
    {
    name: "Ibrahim Awan",
    role: "Co-Founder & COO",
    img: ibrahim,
    expertise: "Expertise: Project Management & Cross-team coordination",
    description: "Oversees operations and ensures efficient project execution through strategic management.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Syed Muhammad Asif",
    role: "Co-Founder & CSO",
    img: asif,
    expertise: "Expertise: Writing & Storytelling",
    description: "Leads creative direction and content strategy to align storytelling with business objectives.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Muhammad Abu Huzaifa",
    role: "Marketing Lead",
    img: huzaifa,
    expertise: "Digital Marketing & Growth Strategy",
    description: "Driving Growth & Brand Success with Data-Driven Marketing at TazQ Solutions.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  // {
  //   name: "Rumaisa Arif",
  //   role: "Video Editor Lead",
  //   img: rumaisa,
  //   expertise: "Video Production & Motion Graphics",
  //   description: "Bringing Stories to Life with Engaging & High-Quality Video Editing at TazQ Solutions.",
  //   social: {
  //     facebook: "#",
  //     instagram: "#",
  //     linkedin: "#"
  //   }
  // },
  {
    name: "Sadain Sikandar",
    role: "Lead Email Marketer",
    img: sadain,
    expertise: "Email Marketing & Automation",
    description: "Driving Engagement & Conversions Through Powerful Email Strategies at TazQ Solutions.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Hafiz Mudassir Husain",
    role: "Lead Developer",
    img: mudassir,
    expertise: "Full-Stack Development",
    description: "Building Scalable & High-Performance Web & App Solutions at TazQ Solutions.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
];

const LeadershipTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full text-white py-16 px-4 sm:px-6 text-center "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8CA419] mb-4">Meet Our Leadership Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          The visionary minds driving innovation and excellence at TazQ Solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 border border-gray-700 rounded-xl transition-all duration-300 flex flex-col items-center"
            >
              {/* Improved Image Container */}
              <div className="relative w-32 h-32 mb-5 rounded-full border-2 border-[#8CA419] p-1 group-hover:border-white transition-colors duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full bg-[#8CA419] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[#8CA419] font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-300 mb-3 italic min-h-[60px]">"{member.description}"</p>
              
              <div className="mt-3 mb-4 px-4">
                <p className="text-sm text-white bg-gray-900/50 rounded-lg py-2 px-3">
                  <span className="font-semibold">Expertise:</span> {member.expertise}
                </p>
              </div>
              
              {/* <div className="flex gap-4 mt-auto pt-3">
                <Link href={member.social.facebook} className="text-gray-400 hover:text-[#3b5998] transition-colors text-xl">
                  <FaFacebook />
                </Link>
                <Link href={member.social.instagram} className="text-gray-400 hover:text-[#E1306C] transition-colors text-xl">
                  <FaInstagram />
                </Link>
                <Link href={member.social.linkedin} className="text-gray-400 hover:text-[#0077B5] transition-colors text-xl">
                  <FaLinkedin />
                </Link>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LeadershipTeam;