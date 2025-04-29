

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";


const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-center">
      <motion.h2
        className="text-5xl font-extrabold text-white mb-10 tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div 
        className="max-w-3xl mx-auto flex flex-col gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Phone */}
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-4 bg-black/40 hover:bg-orange-600 transition-all text-white text-2xl font-semibold py-5 px-10 rounded-3xl shadow-xl hover:shadow-orange-400/40"
        >
          <FaPhoneAlt className="text-3xl" />
          Call Now: +91 9876543210
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 bg-green-600 hover:bg-green-700 transition-all text-white text-2xl font-semibold py-5 px-10 rounded-3xl shadow-xl hover:shadow-green-400/40"
        >
          <FaWhatsapp className="text-4xl" />
          WhatsApp Now
        </a>

        {/* Location */}
        <div className="flex flex-col items-center justify-center text-gray-300 mt-8 space-y-2">
          <FaMapMarkerAlt className="text-4xl text-orange-400" />
          <p className="text-xl font-medium">Agra, Mathura, Delhi NCR</p>
          <p className="text-gray-500 text-sm">Available for Hindu Festivals, Events, & More</p>
        </div>
      </motion.div>
 
    </section>
  );
};

export default ContactSection;

