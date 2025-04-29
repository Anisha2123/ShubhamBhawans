

import { motion } from "framer-motion";
import ownerPic from '../assets/images/team/owner1.jpg'; // Put Shubham Birla's HD pic here
import '../App.css';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-center">
      
      <motion.h2
        className="text-5xl font-extrabold text-white mb-16 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Owner Image */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={ownerPic} 
            alt="Owner Shubham Birla" 
            className="rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 object-cover h-[450px] w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* About Text */}
        <motion.div 
          className="flex-1 text-gray-300 space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl font-bold text-orange-400 mb-4">
            Shubham Birla - 7+ Years of Crafting Divine Experiences
          </p>

          <p>
            With over <span className="text-white font-semibold">7 years of experience</span> in the art of Bhawan and Idol setup,
            Shubham Birla has become a trusted name across <span className="text-white font-semibold">Agra, Mathura, Delhi, and nearby regions</span>.
          </p>

          <p>
            Specializing in <span className="text-white font-semibold">all major Hindu festivals</span> including <span className="text-orange-400">Ram Baraat, Devi Jaagran, Navratri, and Jagrate</span>,
            we create breathtaking experiences that blend tradition with innovation.
          </p>

          <p>
            Our team brings a <span className="text-white font-semibold">perfect fusion of devotion, creativity, and excellence</span> to every event.
            From majestic <span className="text-orange-400">Mandirs</span> to intricate <span className="text-orange-400">Idols</span>, every detail is crafted with passion and precision.
          </p>

          {/* <p>
            We believe that every celebration deserves a setup that touches the soul and leaves lasting memories.
            Trust us to turn your vision into a magical reality!
          </p> */}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
