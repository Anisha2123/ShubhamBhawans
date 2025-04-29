
// import "../App.css";


// import { motion } from "framer-motion";
// import heroAnimation from "../assets/lotties/hero-animation.json";
// import Mata from "../assets/lotties/Mata.json";
// import Lottie from "lottie-react";
// import ParticleBackground from "./ParticleBackground"; // Ensure this is imported

// const HeroSection = () => {
//   return (
//     <section className="hero bg-gradient-to-br from-yellow-50 via-orange-100 to-amber-200  flex flex-col justify-center items-center text-center p-2 relative overflow-hidden">


//       {/* Glowing Aura behind Lottie */}
//       <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 opacity-30 rounded-full blur-3xl animate-pulse glow-effect"></div>

//       {/* Decorative background blobs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>

//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-6xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg mb-2 leading-tight"
//       >
//         Shubham Bhawans
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="text-xl md:text-xl text-orange-600 mb-2 max-w-auto mx-auto leading-relaxed"
//       >
//         Rent Premium Fiber & Clay Idols. Get Bhawan Setups for Poojas, Events, and Festivals across India.
//       </motion.p>

//       {/* Lottie Animation */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//         className="w-72 h-52 md:w-96 md:h-60 drop-shadow-2xl mb-1"
//       >
//         <Lottie animationData={heroAnimation} loop={true} />
//       </motion.div>

      

//       {/* Call to Actions */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="mt-1 md:mt-4 lg:mt-0 space-x-6"

//       >
//         <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
//           View Gallery
//         </button>
//         <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-500 hover:text-white shadow-lg hover:scale-105 transform transition duration-300">
//           Book Now
//         </button>
//       </motion.div>

//       {/* Trust Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="mt-5 text-orange-700 text-sm md:text-base"
//       >
//         Trusted by 500+ Mandirs, Event Planners & Families Across India 🇮🇳
//       </motion.div>
            
//       {/* Particle Background */}
//       {/* <ParticleBackground />  */}
//     </section>
//   );
// };

// export default HeroSection;

import "../App.css";
import { motion } from "framer-motion";
import heroAnimation from "../assets/lotties/hero-animation.json";
import Lottie from "lottie-react";

const HeroSection = () => {
  return (
    <section className="hero relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col justify-center items-center text-center p-6 overflow-hidden">

      {/* Soft Blur Lights */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-orange-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-400 to-orange-500 opacity-40"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-wide drop-shadow-[0_4px_10px_rgba(255,115,0,0.4)] z-10"
      >
        Shubham Bhawans
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed z-10"
      >
        Premium Fiber & Clay Idols for Poojas, Events, and Festivals. Bhawan Setups delivered Pan-India with Trust & Devotion.
      </motion.p>

      {/* Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-72 h-52 md:w-96 md:h-60 mb-6 drop-shadow-2xl z-10"
      >
        <Lottie animationData={heroAnimation} loop={true} />
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col md:flex-row gap-4 z-10"
      >
        {/* <button className="px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300">
          View Gallery
        </button>
        <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400 hover:text-black hover:shadow-lg hover:scale-105 transform transition duration-300">
          Book Now
        </button> */}
        <button
  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
>
  View Gallery
</button>

<button
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-full hover:bg-orange-400 hover:text-black hover:shadow-lg hover:scale-105 transform transition duration-300"
>
  Book Now
</button>

      </motion.div>

      {/* Trust Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 text-gray-400 text-sm md:text-base z-10"
      >
        Trusted by 500+ Mandirs, Event Planners & Devotees Across India 🇮🇳
      </motion.div>

    </section>
  );
};

export default HeroSection;


