


// src/components/Pricing.jsx
import { motion } from "framer-motion";
import b1 from '../assets/images/bhawans/b1.jpg';
import b2 from '../assets/images/bhawans/b2.jpg';
import b3 from '../assets/images/bhawans/b3.jpg';
import b4 from '../assets/images/bhawans/b4.jpg';
import b5 from '../assets/images/bhawans/b5.jpg';
import b6 from '../assets/images/bhawans/b6.jpg';
import b7 from '../assets/images/bhawans/b7.jpg';
import '../App.css'; // Import external CSS

import { FaClock, FaTag } from "react-icons/fa";

const PricingCard = ({ title, image, price, time, description }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
        <div className="absolute top-4 right-4 bg-orange-500 px-4 py-2 rounded-full text-white font-semibold">{price}</div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-gray-300">
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaTag />
          <span>Premium</span>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section className="pricing bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 text-center">
      <motion.h2
        className="text-4xl font-extrabold text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Our Premium Bhawans & Idols
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6">
        <PricingCard
          title="Bhawans B1"
          image={b6}
          price="₹15,000"
          time="3-5 Days"
          description="Perfect for small mandirs, events, and poojas. Crafted with care."
        />
        <PricingCard
          title="Bhawans B2"
          image="path-to-image/bhawans-b2.jpg"
          price="₹18,000"
          time="4-6 Days"
          description="A bit larger and highly detailed. Ideal for medium-sized gatherings."
        />
        <PricingCard
          title="Bhawans B3"
          image={b6}
          price="₹20,000"
          time="5-7 Days"
          description="Beautifully designed for temple and event setups."
        />
        <PricingCard
          title="Idol - Laxmi"
          image={b6}
          price="₹8,000"
          time="2-4 Days"
          description="Finely detailed Laxmi idol for your home or temple."
        />
        <PricingCard
          title="Idol - Ganesha"
          image={b6}
          price="₹7,500"
          time="3-5 Days"
          description="A charming Ganesha idol for festive poojas and worship."
        />
        <PricingCard
          title="Bhawans B4"
          image={b6}
          price="₹25,000"
          time="7-10 Days"
          description="A larger Bhawan with intricate designs for grand events."
        />
        <PricingCard
          title="Bhawans B5"
          image={b6}
          price="₹30,000"
          time="7-10 Days"
          description="Exclusive designs with premium clay and fiber."
        />
        {/* Add more Bhawans and Idols here (B6 to B11) */}
      </div>
    </section>
  );
};

export default PricingSection;
