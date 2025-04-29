


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import b1 from '../assets/images/bhawans/b1.jpg';
// import b2 from '../assets/images/bhawans/b2.jpg';
// import b3 from '../assets/images/bhawans/b3.jpg';
// import b4 from '../assets/images/bhawans/b4.jpg';
// import b5 from '../assets/images/bhawans/b5.jpg';
// import b6 from '../assets/images/bhawans/b6.jpg';
// import b7 from '../assets/images/bhawans/b7.jpg';
// import idol1 from '../assets/images/idols/i1.jpg';
// import idol2 from '../assets/images/idols/i2.jpg';
// import { FaClock, FaTag } from "react-icons/fa";
// import '../App.css';

// // Card component
// const PricingCard = ({ title, image, price, time, description }) => (
//   <motion.div
//     className="bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:w-[calc(25%-1.25rem)]"
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1 }}
//   >
//     <div className="relative overflow-hidden rounded-2xl mb-6">
//       <div className="flex justify-center">
//         <motion.img
//           src={image}
//           alt={title}
//           className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-700 ease-in-out"
//           whileHover={{ rotateY: 10 }}
//         />
//       </div>
//       <div className="absolute top-4 right-4 bg-orange-500 px-5 py-2 rounded-full text-white font-bold text-lg shadow-md">
//         {price}
//       </div>
//     </div>
//     <h3 className="text-3xl font-extrabold text-white mb-4">{title}</h3>
//     <p className="text-base text-gray-400 mb-6">{description}</p>
//     <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
//       <div className="flex items-center gap-2">
//         <FaClock className="text-orange-400" />
//         <span>{time}</span>
//       </div>
//       <div className="flex items-center gap-2">
//         <FaTag className="text-orange-400" />
//         <span>Premium</span>
//       </div>
//     </div>
//   </motion.div>
// );

// // Pricing Section with Pagination
// const PricingSection = () => {
//   const bhawanData = [
//     { title: "Bhawans B1", image: b1, price: "₹5,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
//     { title: "Bhawans B2", image: b2, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
//     { title: "Bhawans B3", image: b3, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
//     { title: "Bhawans B4", image: b4, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
//     { title: "Bhawans B5", image: b5, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
//     { title: "Bhawans B6", image: b6, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
//     { title: "Bhawans B7", image: b7, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardsPerPage, setCardsPerPage] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       setCardsPerPage(window.innerWidth < 640 ? 3 : 4);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const totalPages = Math.ceil(bhawanData.length / cardsPerPage);
//   const start = (currentPage - 1) * cardsPerPage;
//   const currentCards = bhawanData.slice(start, start + cardsPerPage);

//   return (
//     <section className="pricing bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-center">
//       <motion.h2
//         className="text-5xl font-extrabold text-white mb-20 tracking-wider"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 1 }}
//       >
//         Our Premium Bhawans & Idols
//       </motion.h2>

//       {/* Bhawans Section */}
//       <div className="mb-24">
//         <motion.h3
//           className="text-4xl font-bold text-white mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Bhawans Collection
//         </motion.h3>
//         <div className="flex flex-wrap justify-center gap-5 max-w-screen-xl mx-auto">
//           {currentCards.map((card, i) => (
//             <PricingCard key={i} {...card} />
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="mt-10 flex justify-center gap-4">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-4 py-2 rounded-full font-bold ${
//                 currentPage === i + 1
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Idols Section */}
//       <div>
//         <motion.h3
//           className="text-4xl font-bold text-white mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           Idols Collection
//         </motion.h3>
//         <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
//           <PricingCard title="Idol - Laxmi" image={idol1} price="₹8,000" time="2-4 Days" description="Bless your home with Laxmi Mata’s grace." />
//           <PricingCard title="Idol - Ganesha" image={idol2} price="₹7,500" time="3-5 Days" description="Divine Ganesha idol, perfect for all poojas." />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaTag } from "react-icons/fa";
import b1 from '../assets/images/bhawans/b1.jpg';
import b2 from '../assets/images/bhawans/b2.jpg';
import b3 from '../assets/images/bhawans/b3.jpg';
import b4 from '../assets/images/bhawans/b4.jpg';
import b5 from '../assets/images/bhawans/b5.jpg';
import b6 from '../assets/images/bhawans/b6.jpg';
import b7 from '../assets/images/bhawans/b7.jpg';
import idol1 from '../assets/images/idols/i1.jpg';
import idol2 from '../assets/images/idols/i2.jpg';
import '../App.css';

const bhawansData = [
  { title: "Bhawans B1", image: b1, price: "₹5,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
  { title: "Bhawans B2", image: b2, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
  { title: "Bhawans B3", image: b3, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
  { title: "Bhawans B4", image: b4, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
  { title: "Bhawans B5", image: b5, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
  { title: "Bhawans B6", image: b6, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
  { title: "Bhawans B7", image: b7, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
];

const idolsData = [
  { title: "Idol - Laxmi", image: idol1, price: "₹8,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  { title: "Idol - Ganesha", image: idol2, price: "₹7,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
];

const PricingCard = ({ title, image, price, time, description }) => (
  <motion.div
    className="bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative overflow-hidden rounded-2xl mb-6">
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

const PricingSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(bhawansData.length / itemsPerPage);
  const paginatedBhawans = bhawansData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      {/* Bhawans Section */}
      <motion.h3
        className="text-4xl font-bold text-white mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Bhawans Collection
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
        <AnimatePresence mode="wait">
          {paginatedBhawans.map((bhawan) => (
            <PricingCard key={bhawan.title} {...bhawan} />
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-full text-white font-bold transition-all duration-300 ${
              currentPage === index + 1
                ? "bg-orange-500 scale-110 shadow-lg"
                : "bg-gray-700 hover:bg-orange-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Idols Section */}
      <motion.h3
        className="text-4xl font-bold text-white mt-24 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Idols Collection
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
        {idolsData.map((idol) => (
          <PricingCard key={idol.title} {...idol} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;



