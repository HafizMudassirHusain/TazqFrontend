import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Importing React Icons

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Motive */}
          <div>
            <h2 className="text-2xl font-bold text-[#8CA419]">Tazq</h2>
            <p className="text-gray-400 mt-2">
              Empowering businesses with creative designs and branding solutions.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C0C0C0] mb-2">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-[#8CA419] transition duration-300">
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
                <p className="text-gray-400">contact@tazq.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <p className="text-gray-400">+123 456 7890</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C0C0C0] mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-[#8CA419] transition duration-300"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tazq. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}