import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaFacebook, FaTwitter, FaCommentDots } from "react-icons/fa";

function ContactSupport() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full mt-20 bg-[#121212] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#8CA419]">Contact & Support</h2>
        <p className="text-center text-gray-300 mt-2">
          Have questions? Need assistance? We're here to help!
        </p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-[#1E1E1E] p-6 rounded-lg shadow-md max-w-3xl mx-auto"
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-[#8CA419] bg-[#121212] rounded-md text-white"
              required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
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
            className="w-full bg-[#8CA419] text-black py-2 rounded-lg hover:bg-[#A0C518] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* FAQs Section */}
        <div className="mt-10">
          <h3 className="text-3xl text-center font-bold text-[#C0C0C0]">Frequently Asked Questions</h3>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <details className="bg-[#1E1E1E] p-4 rounded-md cursor-pointer">
              <summary className="text-lg font-semibold text-[#8CA419]">How can I get support?</summary>
              <p className="text-gray-300 mt-2">You can contact us via the form above, email, or live chat.</p>
            </details>
            <details className="bg-[#1E1E1E] p-4 rounded-md cursor-pointer">
              <summary className="text-lg font-semibold text-[#8CA419]">What is your response time?</summary>
              <p className="text-gray-300 mt-2">We typically respond within 24 hours on business days.</p>
            </details>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-[#C0C0C0]">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaGlobe className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#8CA419] hover:text-[#A0C518] transition duration-300">
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Live Chat Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed bottom-6 right-6 bg-[#8CA419] text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#A0C518] transition duration-300 flex items-center"
        >
          <FaCommentDots className="mr-2" /> Live Chat
        </motion.button>
      </div>
    </section>
  );
}

export default ContactSupport;