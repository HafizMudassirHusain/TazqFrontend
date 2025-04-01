import { FaArrowRight } from "react-icons/fa";
import c1 from "../../assets/clientsimg/c1.png";
import c2 from "../../assets/clientsimg/c2.png";
import creater1 from "../../assets/tazqteam/ariba.jpg";
import creater2 from "../../assets/tazqteam/asif.jpg";
import creater3 from "../../assets/tazqteam/asim.jpg";
import creater4 from "../../assets/tazqteam/aswad.jpg";
import creater5 from "../../assets/tazqteam/huzaifa.jpg";
import herobgimg from "../../assets/herobgimg.png";
import ProfileCard from "./ProfileCard";

const HeroSection = () => {
  const creater = [
    { create: creater1 },
    { create: creater2 },
    { create: creater3 },
    { create: creater4 },
    { create: creater5 },
  ];

  return (
    <section
      className="relative text-center mt-16 py-10 sm:py-20 h-auto min-h-[600px] sm:min-h-[800px] w-full flex flex-col items-center px-4"
    >
      {/* Rest of your component remains the same */}
      {/* Floating Profile Cards (Responsive Positioning) */}
      <div className="hidden lg:block absolute top-20 right-10">
        <ProfileCard imgSrc={c1} />
      </div>
      <div className="hidden md:block absolute left-10 top-[70%] transform -translate-y-1/2">
        <ProfileCard imgSrc={c2} />
      </div>
      <div className="hidden md:block absolute bottom-5 right-10">
        <img
          src={herobgimg}
          alt="Power image"
          className="relarive w-[60%] sm:w-[80%] md:w-[90%]"
        />
      </div>

      {/* Avatar Row */}
      <div className="flex justify-center items-center space-x-[-10px] mt-10 sm:mt-20 mb-4">
        {creater.map((data, index) => (
          <img
            key={index}
            src={data.create}
            alt="avatar"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#8CA419]"
          />
        ))}
        <h2 className="text-sm sm:text-base font-semibold ml-4 sm:ml-10 w-1/3 text-white">
          Trusted By The{" "}
          <strong className="text-[#8CA419]">Best Creators</strong>
        </h2>
      </div>

      {/* Heading & Description */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-[90%] sm:w-[80%] md:w-[70%] mx-auto text-white leading-tight mt-6 sm:mt-10">
        The <strong className="text-[#8CA419]">Creative Origin</strong> Of Your
        Brand's Identity
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-semibold mt-4 max-w-2xl mx-auto text-[#C0C0C0]">
        Is your brand lost in the sea of generic designs? Take hold of the
        Primordial toolkit and make your brand stand out!
      </p>

      {/* CTA Button */}
      <button className="mt-8 sm:mt-10 mx-auto text-white px-6 sm:px-8 py-2 sm:py-3 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
        View Pricing <FaArrowRight />
      </button>
    </section>
  );
};

export default HeroSection;