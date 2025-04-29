

// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600 cursor-pointer">
          Shubham
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-semibold">
          <Link to="services" smooth={true} duration={500} className="hover:text-orange-600 cursor-pointer">Services</Link>
          <Link to="pricing" smooth={true} duration={500} className="hover:text-orange-600 cursor-pointer">Pricing</Link>
          <a href="#contact" className="hover:text-orange-600">Contact</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-orange-600"></div>
              <div className="w-6 h-0.5 bg-orange-600"></div>
              <div className="w-6 h-0.5 bg-orange-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-4 bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 text-gray-700 font-semibold md:hidden"
          >
            <Link to="services" smooth={true} duration={500} className="hover:text-orange-600 cursor-pointer" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="pricing" smooth={true} duration={500} className="hover:text-orange-600 cursor-pointer" onClick={() => setIsOpen(false)}>Pricing</Link>
            <a href="#contact" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
