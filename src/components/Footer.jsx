

// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-300 py-14 px-6 md:px-20">
      
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Brand and Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">Shubham Birla Events</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            7+ years of expertise in capturing spiritual events like Ram Baraat, Devi Jaagran, Navratri, and more across Agra, Mathura, Delhi, and nearby cities.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-orange-400" />
            Agra, Uttar Pradesh, India
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <a href="https://wa.me/919876543210" target="_blank" className="hover:text-white transition">Message on WhatsApp</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Follow Us</h2>
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-orange-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919876543210" className="hover:text-orange-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="mt-12 pt-6 border-t border-gray-600 text-center text-xs text-gray-400 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        © {new Date().getFullYear()} Shubham Birla Events. All rights reserved.
      </motion.div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 center-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 animate-bounce z-50"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;





