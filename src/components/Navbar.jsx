import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-black text-white p-4 fixed top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl pl-10 font-extrabold tracking-widest text-[#8CA419]">TazQ Sol</h1>
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to='#' className="hover:text-[#8CA419] transition duration-300">Home</Link>
          <Link to='#' className="hover:text-[#8CA419] transition duration-300">Services</Link>
          <Link to='#' className="hover:text-[#8CA419] transition duration-300">Portfolio</Link>
          <Link to='#' className="hover:text-[#8CA419] transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
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
          className="md:hidden flex flex-col items-center py-6 space-y-4 text-lg font-semibold shadow-lg"
        >
          <Link to='#' onClick={handleLinkClick} className="hover:text-[#8CA419] transition duration-300">Home</Link>
          <Link to='#' onClick={handleLinkClick} className="hover:text-[#8CA419] transition duration-300">Services</Link>
          <Link to='#' onClick={handleLinkClick} className="hover:text-[#8CA419] transition duration-300">Portfolio</Link>
          <Link to='#' onClick={handleLinkClick} className="hover:text-[#8CA419] transition duration-300">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
