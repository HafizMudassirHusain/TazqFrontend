import { FaArrowRight } from "react-icons/fa";
import c1 from "../../assets/clientsimg/c1.png";
import c2 from "../../assets/clientsimg/c2.png";
import creater1 from "../../assets/tazqteam/ariba.jpg";
import creater2 from "../../assets/tazqteam/asif.jpg";
import creater3 from "../../assets/tazqteam/asim.jpg";
import creater4 from "../../assets/tazqteam/aswad.jpg";
import creater5 from "../../assets/tazqteam/huzaifa.jpg";
import herorbimg from "../../assets/herobgimg.png";
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
    <section className="relative text-center mt-12 sm:mt-16 py-8 sm:py-20 h-auto min-h-[400px] sm:min-h-[600px] md:min-h-[800px] w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Profile Cards - Hidden on small screens */}
      <div className="hidden lg:block absolute top-20 right-4 lg:right-10">
        <ProfileCard imgSrc={c1} />
      </div>
      <div className="hidden md:block absolute left-4 md:left-10 top-[80%] transform -translate-y-1/2">
        <ProfileCard imgSrc={c2} />
      </div>
      <div className="hidden md:block absolute bottom-5 right-4 lg:right-10">
        <img
          src={herorbimg}
          alt="Power image"
          className="w-[60%] sm:w-[80%] md:w-[90%] max-w-[500px]"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading & Description */}
        <h1 className="pt-6 sm:pt-10 md:pt-16 text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-white leading-snug sm:leading-tight">
          Grow Your Business with <strong className="text-[#8CA419]">Top-Notch</strong> IT Services
        </h1>
        
        <p className="text-sm xs:text-base sm:text-lg md:text-xl font-medium sm:font-semibold max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 text-[#C0C0C0]">
          Struggling to scale your business? What if expert IT solutions
          handled the workload. So you could focus on growth and success?
        </p>

        {/* CTA Button */}
        <button className="mt-6 sm:mt-8 mx-auto text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300 text-sm sm:text-base">
          View Pricing <FaArrowRight className="text-xs sm:text-sm" />
        </button>
      </div>




{/* <div>
  <div className="flex">
    <h1 className="add bg color">Our working Process</h1>
    <p>step by step Guide to Achiving your bussiness</p>
  </div>
  <div className=" active bgcolor">
    <div className="flex bottomborder">
      <div className="rendered on left">
      <span className="text-2xl">01</span>
      <h2>Consultation</h2>
      </div>
      <button className="add functionality on these to below paragraph or not" ><span>icon of addintion</span>
      <span>icon of subtraction</span></button>
     
      </div>
      <p>Lorem ipsum dolor, sit 
        amet consectetur adipisicing 
        elit. Est, facilis sint. C</p>
    </div>
  </div> */}





    </section>
  );
};

export default HeroSection;