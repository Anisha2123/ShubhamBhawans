

// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address & Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-orange-500">Shubham Bhawans</h3>
            <p className="flex items-center text-sm">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              123 Bhawan Street, City, State, 12345
            </p>
            <p className="flex items-center text-sm">
              <FaPhoneAlt className="mr-2 text-orange-500" />
              +91 9876543210
            </p>
            <p className="flex items-center text-sm">
              <FaEnvelope className="mr-2 text-orange-500" />
              contact@shubhambhawans.com
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition duration-300">Services</a></li>
              <li><a href="#gallery" className="hover:text-orange-500 transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-orange-500 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-orange-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-orange-500 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">Newsletter</h3>
            <p className="text-sm">Sign up for updates and special offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full rounded-md text-gray-900"
              />
              <button className="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-6 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} Shubham Bhawans. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



