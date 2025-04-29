


import { motion } from "framer-motion";
import b1 from '../assets/images/bhawans/b1.jpg';
import b2 from '../assets/images/bhawans/b2.jpg';
import b3 from '../assets/images/bhawans/b3.jpg';
import b4 from '../assets/images/bhawans/b4.jpg';
import b5 from '../assets/images/bhawans/b5.jpg';
import b6 from '../assets/images/bhawans/b6.jpg';
import b7 from '../assets/images/bhawans/b7.jpg';
import idol1 from '../assets/images/idols/i1.jpg';
import idol2 from '../assets/images/idols/i2.jpg';
import { FaClock, FaTag } from "react-icons/fa";
import '../App.css';

// Single Card
const PricingCard = ({ title, image, price, time, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6">
        {/* <motion.img
          src={image}
          alt={title}
          // className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg hover:scale-110 transition-all duration-700 ease-in-out aspect-[4/3]"
           className="w-full h-[400px] object-cover rounded-lg mb-4 transform hover:scale-105 transition-all duration-500"
          whileHover={{ rotateY: 10 }}
        /> */}
        {/* <motion.img
  src={image}
  alt={title}
  className="w-[1200] h-[300] object-cover rounded-2xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-700 ease-in-out aspect-[4/3]"

  whileHover={{ rotateY: 10 }}
/> */}
<div className="flex justify-center">
  <motion.img
    src={image}
    alt={title}
    className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-700 ease-in-out"
    whileHover={{ rotateY: 10 }}
  />
</div>


        <div className="absolute top-4 right-4 bg-orange-500 px-5 py-2 rounded-full text-white font-bold text-lg shadow-md">
          {price}
        </div>
      </div>
      <h3 className="text-3xl font-extrabold text-white mb-4">{title}</h3>
      <p className="text-base text-gray-400 mb-6">{description}</p>
      <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
        <div className="flex items-center gap-2">
          <FaClock className="text-orange-400" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTag className="text-orange-400" />
          <span>Premium</span>
        </div>
      </div>
    </motion.div>
  );
};

// Pricing Section
const PricingSection = () => {
  return (
    <section className="pricing bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-center">
      <motion.h2
        className="text-5xl font-extrabold text-white mb-20 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Our Premium Bhawans & Idols
      </motion.h2>

      {/* Bhawans */}
      <div className="mb-24">
        <motion.h3
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Bhawans Collection
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-screen-xl mx-auto">
          <PricingCard title="Bhawans B1" image={b1} price="₹15,000" time="3-5 Days" description="Perfect for small mandirs, events, and poojas." />
          <PricingCard title="Bhawans B2" image={b2} price="₹18,000" time="4-6 Days" description="Highly detailed for medium gatherings." />
          <PricingCard title="Bhawans B3" image={b3} price="₹20,000" time="5-7 Days" description="Elegant and beautifully designed setups." />
          <PricingCard title="Bhawans B4" image={b4} price="₹25,000" time="7-10 Days" description="Grand events with intricate craftsmanship." />
          <PricingCard title="Bhawans B5" image={b5} price="₹28,000" time="8-12 Days" description="Majestic mandapam setup for poojas." />
          <PricingCard title="Bhawans B6" image={b6} price="₹32,000" time="9-13 Days" description="Ornate temple-style structures." />
          <PricingCard title="Bhawans B7" image={b7} price="₹35,000" time="10-14 Days" description="Exclusive luxury crafted Bhawans." />
        </div>
      </div>

      {/* Idols */}
      <div>
        <motion.h3
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Idols Collection
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
          <PricingCard title="Idol - Laxmi" image={idol1} price="₹8,000" time="2-4 Days" description="Bless your home with Laxmi Mata’s grace." />
          <PricingCard title="Idol - Ganesha" image={idol2} price="₹7,500" time="3-5 Days" description="Divine Ganesha idol, perfect for all poojas." />
          {/* Add more idols if needed */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


