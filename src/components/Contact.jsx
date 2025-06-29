import React from "react";
import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  // WhatsApp contact function
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
    navigate('/contact')
    // // Replace with your WhatsApp number (include country code, remove any +, 0, or spaces)
    // const phoneNumber = "923122329854"; // Example: Pakistan number 0300 1234567
    
    // // Message that will be pre-filled
    // const message = "Hello! I'd like to book a consultation call.";
    
    // // Create WhatsApp link
    // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // // Open in new tab
    // window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="py-16 w-full">
      {/* Contact Section */}
      <button className="my-10 mx-auto text-3xl font-bold text-white px-8 py-2 flex items-center gap-2 rounded-lg border border-[#8CA419] hover:bg-[#8CA419] transition duration-300">
        <BsStars className="w-10 h-10" /> Let's Connect!
      </button>
      
      <div className="relative p-8 rounded-lg text-center mx-auto border-l-4 border-[#8CA419] transform transition-all duration-500 hover:border-[#C0C0C0]">
        {/* Decorative Elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#8CA419] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl
         font-bold text-[#8CA419] mb-4 w-full sm:w-4/5 md:w-3/4 mx-auto text-center">
        Have questions or need expert guidance?
        </h2>
        <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
        Book a free 30-minute consultation and get a personalized branding questionnaire to kickstart your
        success.       
         </p>

        {/* Updated Button with WhatsApp functionality */}
        <button 
          onClick={handleWhatsAppClick}
          className="mt-8 bg-[#8CA419] text-black px-8 py-4 rounded-full
           font-semibold hover:bg-[#a0c12b] transition-all duration-300 
           transform hover:scale-110 hover:shadow-lg flex items-center
            justify-center mx-auto cursor-pointer"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Book a Call
        </button>
      </div>
    </div>
  );
}