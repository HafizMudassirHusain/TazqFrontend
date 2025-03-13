import React, { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Marketing Strategist",
      feedback:
        "TazQ Sol transformed our brand’s online presence. Their innovative approach gave us an edge over competitors.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      role: "Creative Director",
      feedback:
        "Incredible experience! Their design and branding solutions are top-notch and truly impactful.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      feedback:
        "TazQ Sol helped scale my startup with their strategic branding and marketing expertise. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Emily Carter",
      role: "LinkedIn Influencer",
      feedback:
        "A must-have partner for content creators. Their team understands branding like no one else.",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  ];

  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 1; // Adjust scroll speed as needed

  useEffect(() => {
    let animationFrameId;

    const scrollContent = () => {
      if (!isHovered && scrollRef.current) {
        setScrollPosition((prev) => {
          const newPosition = prev + scrollSpeed;
          // Reset scroll position when it reaches the end
          if (newPosition >= scrollRef.current.scrollWidth / 2) {
            return 0;
          }
          return newPosition;
        });
      }
      animationFrameId = requestAnimationFrame(scrollContent);
    };

    animationFrameId = requestAnimationFrame(scrollContent);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [scrollPosition]);

  return (
    <div className="w-[100%] bg-gray-900 text-white py-16 px-12 overflow-hidden">
      {/* Title Section */}
      <button className="my-10 mx-auto text-xl sm:text-2xl md:text-3xl font-bold text-white px-6 sm:px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
        <BsStars className="w-8 h-8 sm:w-10 sm:h-10" /> What They Say
      </button>
      <h2 className="mx-auto w-full sm:w-4/5 md:w-2/3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
        What Do The <strong className="text-[#8CA419]">Best Creators</strong> Say About Us?
      </h2>
      <p className="text-gray-300 text-center mt-4 text-lg max-w-3xl mx-auto">
        Our services have been proven effective and are endorsed by top industry
        leaders on LinkedIn. TazQ Sol is the go-to choice for the best creators.
        Hear their success stories directly!
      </p>

      {/* Scrolling Testimonials Container */}
      <div
        className="relative overflow-hidden mt-12"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex space-x-8"
          ref={scrollRef}
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-[#8CA419] flex flex-col items-center text-center w-80 min-w-[320px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-[#C0C0C0] mb-4"
              />
              <h3 className="text-xl font-semibold text-[#C0C0C0]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="mt-4 text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
          {/* Duplicate testimonials for seamless scrolling */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index + testimonials.length}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-[#8CA419] flex flex-col items-center text-center w-80 min-w-[320px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-[#C0C0C0] mb-4"
              />
              <h3 className="text-xl font-semibold text-[#C0C0C0]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="mt-4 text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}