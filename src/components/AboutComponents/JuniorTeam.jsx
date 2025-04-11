import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaSeedling } from "react-icons/fa";
import shifa from '../../assets/tazqteam/shifa.jpg';
import hamza from '../../assets/tazqteam/hamza.jpg'
import ariba from '../../assets/tazqteam/ariba.jpg'
import aswad from '../../assets/tazqteam/aswad.jpg'
import subhan from '../../assets/tazqteam/subhan.jpg'
import mishgaan from '../../assets/tazqteam/mish.jpg'
import haris from '../../assets/tazqteam/haris.jpg'


const JuniorTeamMembers = [
  {
    name: "Shifa Shaique",
    role: "Marketing",
    img: shifa,
    skills: ["Social Media", "Market Research"],
    tagLine: "Strategic Marketing for Lasting Business Growth at TazQSolutions",
    // progress: 85,
    // socials: {
    //   linkedin: "#",
    //   github: "#"
    // },
    // mentoredBy: "Angelina (Marketing Head)"
  },
  {
    name: "Muhammad Hamza",
    role: "Marketing Associate",
    img:  hamza,
    skills: ["Digital Marketing", "Brand Strategy"],
    tagLine: "Strategic Marketing for Lasting Business Growth at TazQSolutions",
    // progress: 72,
    // socials: {
    //   linkedin: "#",
    //   twitter: "#"
    // },
    // mentoredBy: "Angelina (Marketing Head)"
  },
  {
    name: "Ariba Lakho",
    role: "Marketing Associate",
    img: ariba,
    skills: ["Social Media", "Content Strategy"],
    tagLine: "Building Connections, Creating Impactful Experiences at TazQSolutions",
    // progress: 68,
    // socials: {
    //   linkedin: "#",
    //   twitter: "#"
    // },
    // mentoredBy: "Angelina (Marketing Head)"
  },
  {
    name: "Aswad Raza",
    role: "Business Development",
    img: aswad,
    skills: ["Networking", "Sales", "Client Relations"],
    tagLine: "Connecting Opportunities, Building Relationships, Driving Growth at TazQSolutions",
    // progress: 79,
    // socials: {
    //   linkedin: "#",
    //   dribbble: "#"
    // },
    // mentoredBy: "Michael Lee (Head of Ops)"
  },
  {
    name: "Subhan Abbasi",
    role: "Business Development",
    img: subhan,
    skills: ["Partnerships", "Market Analysis", "Outreach"],
    tagLine: "Connecting Opportunities, Building Relationships, Driving Growth at TazQSolutions",
    // progress: 88,
    // socials: {
    //   linkedin: "#",
    //   github: "#"
    // },
    // mentoredBy: "Michael Lee (Head of Ops)"
  },
  {
    name: "Mishgaan Jamal",
    role: "Graphic Designer",
    img:  mishgaan,
    skills: ["Adobe Creative Suite", "Branding", "Visual Design"],
    tagLine: "Transforming Ideas into Stunning Visual Experiences at TazQ Solutions",
    // progress: 65,
    // socials: {
    //   linkedin: "#",
    //   behance: "#"
    // },
    // mentoredBy: "Alexa (Creative Director)"
  },
  {
    name: "Haris Jamal",
    role: "UI/UX Designer",
    img: haris,
    skills: ["Figma", "Prototyping"],
    tagLine: "Transforming Ideas into Stunning Visual Experiences at TazQ Solutions",
    // progress: 70,
    // socials: {
    //   linkedin: "#",
    //   dribbble: "#"
    // },
    // mentoredBy: "Alexa (Creative Director)"
  }
];
const InfiniteScrollJuniorTeam = () => {
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Pixels per frame (adjust for speed)

  useEffect(() => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    
    if (!scroller || !content) return;

    // Clone all items for seamless looping
    const items = Array.from(content.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      content.appendChild(clone);
    });

    let scrollPosition = 0;
    const contentWidth = content.scrollWidth / 2; // Since we duplicated content

    const animateScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when halfway through duplicated content
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }
      
      content.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animateScroll);

    // Pause on hover for better UX
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationRef.current);
    };
    
    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center mb-4">
          <FaSeedling className="text-[#8CA419] mr-2 text-xl" />
          <span className="text-[#8CA419] font-medium tracking-wider">
            RISING TALENT
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet Our Junior Team
        </h2>
        <p className="text-[#C0C0C0] max-w-2xl mx-auto text-lg">
          The emerging professionals who bring fresh perspectives and boundless
          energy to our projects
        </p>
      </div>

      {/* Scrolling Container */}
      <div 
        ref={scrollerRef}
        className="relative w-full overflow-x-hidden py-4 group"
      >
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <motion.div
          ref={contentRef}
          className="flex w-max gap-8 will-change-transform hide-scrollbar"
          style={{
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {JuniorTeamMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: 0 }}
              className="w-[320px] h-1/2 flex-shrink-0 rounded-xl overflow-hidden
               border border-[#333] hover:border-[#8CA419] transition-all
                duration-300 shadow-lg"
            >
              {/* Card Content */}
              <div className="p-6 pb-0">
                <div className="flex items-start space-x-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-2 border-[#8CA419] object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[#8CA419] text-sm">{member.role}</p>
                    {/* {member.mentoredBy && (
                      <p className="text-xs text-[#C0C0C0] mt-1">
                        Mentored by:{" "}
                        <span className="text-[#8CA419]">
                          {member.mentoredBy}
                        </span>
                      </p>
                    )} */}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4">
                {/* <div className="mb-4">
                  <div className="flex justify-between text-xs text-[#C0C0C0] mb-1">
                    <span>Skill progress</span>
                    <span>{member.progress}%</span>
                  </div>
                  <div className="w-full bg-[#333] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#8CA419] to-[#b0d445] h-2 rounded-full"
                      style={{ width: `${member.progress}%` }}
                    ></div>
                  </div>
                </div> */}

                {/* <div className="mb-5">
                  <h4 className="text-sm font-semibold text-[#C0C0C0] mb-2">
                    Core Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#333] text-[#C0C0C0] text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div> */}

                <div className="bg-[#333] bg-opacity-50 p-4 rounded-lg">
                  <p className="text-sm text-center text-[#C0C0C0]">
                    {/* <span className="text-[#8CA419] font-medium">Tag Fact:</span>{" "} */}
                    {member.tagLine}
                  </p>
                </div>
              </div>

              {/* <div className="px-6 py-3 bg-[#333] bg-opacity-30 flex justify-between items-center">
                <div className="flex space-x-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      aria-label="LinkedIn"
                      className="text-[#C0C0C0] hover:text-[#8CA419] transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      aria-label="GitHub"
                      className="text-[#C0C0C0] hover:text-[#8CA419] transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      aria-label="Twitter"
                      className="text-[#C0C0C0] hover:text-[#8CA419] transition-colors"
                    >
                      <FaTwitter />
                    </a>
                  )}
                </div>
                <span className="text-xs text-[#8CA419]">
                  #{member.role.split(" ")[0].toLowerCase()}
                </span>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      {/* <div className="max-w-7xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Want to join our junior team?
        </h3>
        <button className="bg-[#8CA419] hover:bg-[#a0c12b] text-black font-medium px-8 py-3 rounded-lg transition-colors duration-300">
          View Open Positions
        </button>
      </div> */}
    </section>
  );
};

export default InfiniteScrollJuniorTeam;