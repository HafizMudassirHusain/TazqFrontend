import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tazqaboutlogo from "../assets/brandingkit/tazqaboutlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="w-full bg-black text-white p-3 sm:p-4 fixed top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img
            src={tazqaboutlogo}
            alt="TazQ Logo"
            className="h-12 w-auto" // Fixed height, width adjusts automatically
          />
          <h1 className="text-xl sm:text-2xl tracking-widest ml-2">
            TazQ Solution
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-lg font-semibold">
          <Link
            to="/"
            className="border border-[#8CA419] px-2 py-1 hover:text-[#8CA419] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border border-[#8CA419] px-2 py-1 hover:text-[#8CA419] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="border border-[#8CA419] px-2 py-1 hover:text-[#8CA419] transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="border border-[#8CA419] px-2 py-1 hover:text-[#8CA419] transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="border border-[#8CA419] px-2 py-1 hover:text-[#8CA419] transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? "✖" : "☰"}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col items-center py-4 space-y-4 text-lg font-semibold bg-black shadow-lg"
        >
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-[#8CA419] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-[#8CA419] transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="hover:text-[#8CA419] transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            onClick={handleLinkClick}
            className="hover:text-[#8CA419] transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hover:text-[#8CA419] transition duration-300"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;