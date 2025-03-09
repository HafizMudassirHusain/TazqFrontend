import { FaArrowRight } from "react-icons/fa";
import avatar1 from "../assets/avatar1.avif";
import ProfileCard from "./ProfileCard";

const HeroSection = () => {
  return (
    <section className="relative text-center my-16 py-20 h-auto min-h-[800px] w-full flex flex-col items-center px-4">
      {/* Floating Profile Cards (Responsive Positioning) */}
      <div className="hidden lg:block absolute top-20 right-15">
        <ProfileCard />
      </div>
      <div className="absolute left-10 top-[50%] transform -translate-y-1/2 hidden md:block">
        <ProfileCard />
      </div>
      <div className="absolute bottom-25 right-25 hidden sm:block">
        <ProfileCard />
      </div>

      {/* Avatar Row */}
      <div className="flex justify-center items-center space-x-[-10px] mt-20 mb-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={avatar1}
            alt="avatar"
            className="w-12 h-12 rounded-full border-2 border-[#8CA419] sm:w-10 sm:h-10"
          />
        ))}
        <h2 className="text-sm font-semibold ml-10 w-1/3 text-white">
          Trusted By The <strong className="text-[#8CA419]"> Best Creators </strong>
        </h2>
      </div>

      {/* Heading & Description */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold w-[90%] md:w-[70%] mx-auto text-white leading-tight">
        The <strong className="text-[#8CA419]">Creative Origin</strong> Of Your
        Brand's Identity
      </h1>
      <p className="text-lg md:text-xl font-semibold mt-4 max-w-2xl mx-auto text-[#C0C0C0]">
        Is your brand lost in the sea of generic designs? Take hold of the
        Primordial toolkit and make your brand stand out!
      </p>

      {/* CTA Button */}
      <button className="mt-10 mx-auto text-white px-8 py-4 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
        View Pricing <FaArrowRight />
      </button>
    </section>
  );
};

export default HeroSection;
