import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaTiktok } from "react-icons/fa"; // Importing React Icons
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-12 px-6 z-100">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Motive */}
          <div>
            <h2 className="text-2xl font-bold text-[#8CA419]">TazQ Solution</h2>
            <p className="text-gray-400 mt-2">
              Empowering businesses with creative designs and branding solutions.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C0C0C0] mb-2">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#C0C0C0] mb-2">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <p className="text-gray-400">tazqsolutions@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <p className="text-gray-400">+92 312 2329854</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C0C0C0] mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/tazqsolutions"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://x.com/tazqsolutions"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaSquareXTwitter size={24} />
              </Link>
              <Link
                to="https://www.instagram.com/tazqsolutions/"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com/company/tazqsolutions"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                to="https://www.tiktok.com/@tazqsolutions"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TazQ Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}