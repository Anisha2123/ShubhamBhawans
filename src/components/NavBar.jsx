

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Bhawans", "About", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/30 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-orange-400 tracking-wider"
          >
            Shubham Bhawans
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => {
              const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              return (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {link}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:hidden bg-black/40 backdrop-blur-md"
            >
              {navLinks.map((link, index) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                return (
                  <a
                    key={index}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-orange-400 px-6 py-4 border-b border-gray-700 text-center text-lg"
                  >
                    {link}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;



  




