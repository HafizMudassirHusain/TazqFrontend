import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaFacebook, FaTwitter, FaCommentDots } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import homeimg from "../assets/home.jpg";
import { FaWhatsapp } from "react-icons/fa";


function ContactSupport() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your EmailJS credentials
    const serviceID = 'service_kj0ipdq';
    const templateID = 'template_ax35b4d';
    const userID = 'Pv3yL9ioNcyiGiaxV';
    
    emailjs.send(serviceID, templateID, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: "", email: "",subject:"", message: "" });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };


     // WhatsApp contact function
     const handleWhatsAppClick = () => {
      // Replace with your WhatsApp number (include country code, remove any +, 0, or spaces)
      const phoneNumber = "923122329854"; // Example: Pakistan number 0300 1234567
      
      // Message that will be pre-filled
      const message = "Hello! I'd like to book a consultation call.";
      
      // Create WhatsApp link
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Open in new tab
      window.open(whatsappUrl, "_blank");
    };

  return (
    <section 
      style={{
                    backgroundImage: `url(${homeimg})`,  // Fixed syntax - removed URL() and used template literal
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"  // Added to ensure proper image scaling
                  }} 
    className="w-full z-40 text-white py-16 px-6">
      <div className="max-w-5xl mt-20 mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#8CA419]">Contact & Support</h2>
        <p className="text-center text-gray-300 mt-2">
          Have questions? Need assistance? We're here to help!
        </p>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-700 rounded-md text-center"
          >
            Message sent successfully!
          </motion.div>
        )}
        {submitStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-700 rounded-md text-center"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 rounded-lg shadow-md max-w-3xl mx-auto"
        >
          <div className="mb-4">
            <label className="block text-white mb-1">Name</label>
            <input
               type="text"
               id="name"
               name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject" // Must match {{subject}} in the template
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Message</label>
            <textarea
            id="message"
            name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#8CA419] text-black py-2 rounded-lg hover:bg-[#A0C518] transition duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Rest of your component remains the same */}
        {/* FAQs Section */}
        <div className="mt-10">
          <h3 className="text-3xl text-center font-bold text-[#ffffff]">Frequently Asked Questions</h3>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <details className="bg-[#1E1E1E] p-4 rounded-md cursor-pointer">
              <summary className="text-lg font-semibold text-[#8CA419]">How can I get support?</summary>
              <p className="text-[#ffffff] mt-2">You can contact us via the form above, email, or live chat.</p>
            </details>
            <details className="bg-[#1E1E1E] p-4 rounded-md cursor-pointer">
              <summary className="text-lg font-semibold text-[#8CA419]">What is your response time?</summary>
              <p className="text-[#ffffff] mt-2">We typically respond within 24 hours on business days.</p>
            </details>
          </div>
        </div>

        {/* Social Media Links */}
        {/* <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-[#C0C0C0]">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaGlobe className="w-8 h-8" />
            </Link>
            <Link to="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaFacebook className="w-8 h-8" />
            </Link>
            <Link to="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaTwitter className="w-8 h-8" />
            </Link>
          </div>
        </div> */}

       
        {/* Modern Working Chat Button */}
       <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         className="fixed bottom-8 right-8 z-50"
       >
         <div className="relative group">
           {/* Main button - now with proper click handling */}
           <motion.button
         onClick={handleWhatsAppClick}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{
           opacity: 1,
           scale: 1,
           boxShadow: [
             "0 4px 14px rgba(16, 185, 129, 0.3)",
             "0 6px 20px rgba(16, 185, 129, 0.4)",
             "0 4px 14px rgba(16, 185, 129, 0.3)"
           ]
         }}
         whileHover={{
           scale: 1.1,
           boxShadow: "0 10px 20px rgba(16, 185, 129, 0.4)"
         }}
         whileTap={{ scale: 0.9 }}
         transition={{
           // Spring physics for scale/position animations
           type: "spring",
           stiffness: 400,
           damping: 15,
           // Special configuration for boxShadow animation
           boxShadow: {
             duration: 2,
             repeat: Infinity,
             repeatType: "loop",
             ease: "easeInOut"
           }
         }}
         className="flex items-center justify-center h-14 w-14 rounded-full 
                   bg-gradient-to-br from-[#8CA419] to-[#434e11] shadow-lg
                   hover:shadow-xl cursor-pointer relative"
       >
         <FaWhatsapp className="text-white text-2xl" />
         
         {/* Ping animation as separate element */}
         <motion.span
           className="absolute inset-0 rounded-full border-2 border-emerald-300 pointer-events-none"
           animate={{
             scale: [1, 1.4],
             opacity: [0.7, 0]
           }}
           transition={{
             duration: 2,
             repeat: Infinity,
             ease: "easeOut"
           }}
         />
       </motion.button>
       
           {/* Tooltip remains the same */}
           <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 
                          bg-gray-800 text-white text-sm rounded-md whitespace-nowrap
                          opacity-0 group-hover:opacity-100 transition-opacity
                          pointer-events-none shadow-md">
             Chat with our team
             <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 
                            w-2 h-2 bg-gray-800 rotate-45"></div>
           </div>
       
           {/* Ping animation remains the same */}
           <motion.div
             className="absolute inset-0 border-2 border-[#8CA419] rounded-full pointer-events-none"
             animate={{
               scale: [1, 1.4],
               opacity: [0.7, 0]
             }}
             transition={{
               duration: 2,
               repeat: Infinity,
               ease: "easeOut"
             }}
           />
         </div>
       </motion.div>
       
      </div>
    </section>
  );
}

export default ContactSupport;