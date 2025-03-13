import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    expertise: "Business Strategy & Leadership",
    description: "John is a visionary leader with over 15 years of experience in scaling startups and driving innovation. He specializes in creating sustainable business models and fostering a culture of excellence.",
  },
  {
    name: "Jane Smith",
    role: "CTO & Tech Lead",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    expertise: "Software Development & AI",
    description: "Jane is a tech enthusiast with a deep understanding of AI and machine learning. She has led multiple successful product launches and is passionate about leveraging technology to solve real-world problems.",
  },
  {
    name: "Michael Lee",
    role: "Head of Operations",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    expertise: "Operations & Supply Chain Management",
    description: "Michael is an operations expert with a proven track record of optimizing processes and improving efficiency. He ensures seamless execution of projects and delivers results on time.",
  },
  {
    name: "Alexa",
    role: "Creative Director",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    expertise: "Branding & Visual Design",
    description: "Alexa is a creative genius with a knack for storytelling through design. She has worked with global brands to create impactful visual identities and marketing campaigns.",
  },
  {
    name: "Jinnefer",
    role: "Senior Developer",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    expertise: "Full-Stack Development & DevOps",
    description: "Jinnefer is a coding wizard with expertise in both front-end and back-end development. She is passionate about building scalable and user-friendly applications.",
  },
  {
    name: "Angelina",
    role: "Marketing Head",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    expertise: "Digital Marketing & Growth Hacking",
    description: "Angelina is a marketing strategist with a talent for driving growth through data-driven campaigns. She has helped numerous brands achieve exponential growth in a competitive market.",
  },
];

const LeadershipTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#121212] text-white py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-[#8CA419]">Meet Our Leaders</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="p-6 border border-[#8CA419] rounded-lg flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full border-2 border-[#b0d445] mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-[#C0C0C0]">{member.role}</p>
            <p className="text-md text-white mt-2">
              <strong>Expertise:</strong> {member.expertise}
            </p>
            <p className="text-sm text-white mt-4">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LeadershipTeam;
