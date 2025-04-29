
import "../App.css";


import { motion } from "framer-motion";
import heroAnimation from "../assets/lotties/hero-animation.json";
import Mata from "../assets/lotties/Mata.json";
import Lottie from "lottie-react";
import ParticleBackground from "./ParticleBackground"; // Ensure this is imported

const HeroSection = () => {
  return (
    <section className="hero bg-gradient-to-br from-yellow-50 via-orange-100 to-amber-200  flex flex-col justify-center items-center text-center p-2 relative overflow-hidden">


      {/* Glowing Aura behind Lottie */}
      <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 opacity-30 rounded-full blur-3xl animate-pulse glow-effect"></div>

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg mb-2 leading-tight"
      >
        Shubham Bhawans
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-xl text-orange-600 mb-2 max-w-auto mx-auto leading-relaxed"
      >
        Rent Premium Fiber & Clay Idols. Get Bhawan Setups for Poojas, Events, and Festivals across India.
      </motion.p>

      {/* Lottie Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-72 h-52 md:w-96 md:h-60 drop-shadow-2xl mb-1"
      >
        <Lottie animationData={heroAnimation} loop={true} />
      </motion.div>

      

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-1 md:mt-4 lg:mt-0 space-x-6"

      >
        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
          View Gallery
        </button>
        <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-500 hover:text-white shadow-lg hover:scale-105 transform transition duration-300">
          Book Now
        </button>
      </motion.div>

      {/* Trust Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-5 text-orange-700 text-sm md:text-base"
      >
        Trusted by 500+ Mandirs, Event Planners & Families Across India 🇮🇳
      </motion.div>
            
      {/* Particle Background */}
      {/* <ParticleBackground />  */}
    </section>
  );
};

export default HeroSection;

