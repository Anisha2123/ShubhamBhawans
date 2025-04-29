

// src/components/AboutUs.jsx
import { motion } from "framer-motion";
import ownerPhoto from "../assets/images/team/owner.jpg";

const AboutUs = () => {
  return (
    <section className="aboutus bg-white py-16 px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-orange-700 mb-6"
      >
        About Us
      </motion.h2>
      <motion.img 
        src={ownerPhoto} 
        alt="Owner" 
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
      />
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 1 }}
        className="text-lg text-gray-600 max-w-2xl mx-auto"
      >
        We are passionate about spreading divine energy by providing beautifully crafted Fiber and Mitti God idols across India. With 10+ years of expertise, we also specialize in building Bhawans with devotion and excellence.
      </motion.p>
    </section>
  );
};

export default AboutUs;
