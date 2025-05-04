

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
import b8 from '../assets/images/bhawans/b8.jpeg';
import b9 from '../assets/images/bhawans/b9.jpeg';
import b10 from '../assets/images/bhawans/b10.jpeg';
// import b11 from '../assets/images/bhawans/b11.jpg';
import b12 from '../assets/images/bhawans/b12.jpg';
import b13 from '../assets/images/bhawans/b13.jpg';
import b14 from '../assets/images/bhawans/b14.jpg';
// import b15 from '../assets/images/bhawans/b15.jpg';
// import b16 from '../assets/images/bhawans/b16.jpg';
import b17 from '../assets/images/bhawans/b17.jpg';
import b18 from '../assets/images/bhawans/b18.jpg';
import b19 from '../assets/images/bhawans/b19.jpg';
import b20 from '../assets/images/bhawans/b20.jpg';
import b21 from '../assets/images/bhawans/b21.jpg';
import b22 from '../assets/images/bhawans/b22.jpg';
import b23 from '../assets/images/bhawans/b23.jpg';
import b24 from '../assets/images/bhawans/b24.jpg';
import b25 from '../assets/images/bhawans/b25.jpg';
import b26 from '../assets/images/bhawans/b26.jpg';


import idol1 from '../assets/images/idols/i1.jpg';
import idol2 from '../assets/images/idols/i2.jpg';
import idol3 from '../assets/images/idols/i3.jpg';
import idol4 from '../assets/images/idols/i4.jpg';
import idol5 from '../assets/images/idols/i5.jpg';
import idol6 from '../assets/images/idols/i6.jpg';
import idol7 from '../assets/images/idols/i7.jpg';
import idol8 from '../assets/images/idols/i8.jpg';
import idol9 from '../assets/images/idols/i9.jpg';

import '../App.css';

const bhawansData = [
  { title: "Bhawans", image: b1, price: "₹12,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
  { title: "Bhawans", image: b2, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
  { title: "Bhawans", image: b3, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
  { title: "Bhawans", image: b4, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
  { title: "Bhawans", image: b5, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
  { title: "Bhawans", image: b6, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
  { title: "Bhawans", image: b7, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
  { title: "Bhawans", image: b8, price: "₹5,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
  { title: "Bhawans", image: b9, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
  { title: "Bhawans", image: b10, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
  // { title: "Bhawans", image: b11, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
  { title: "Bhawans", image: b12, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
  { title: "Bhawans", image: b13, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
  { title: "Bhawans", image: b14, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
  // { title: "Bhawans", image: b15, price: "₹5,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
  // { title: "Bhawans", image: b16, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
  { title: "Bhawans", image: b17, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
  { title: "Bhawans", image: b18, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
  { title: "Bhawans", image: b19, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
  { title: "Bhawans", image: b20, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
  { title: "Bhawans", image: b21, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
  { title: "Bhawans", image: b22, price: "₹9,000", time: "1-2 Days", description: "Perfect for small mandirs, events, and poojas." },
  { title: "Bhawans", image: b23, price: "₹10,000", time: "1-2 Days", description: "Highly detailed for medium gatherings." },
  { title: "Bhawans", image: b24, price: "₹8,000", time: "1-2 Days", description: "Elegant and beautifully designed setups." },
  { title: "Bhawans", image: b25, price: "₹10,000", time: "1-2 Days", description: "Grand events with intricate craftsmanship." },
  { title: "Bhawans", image: b26, price: "₹10,000", time: "1-2 Days", description: "Majestic mandapam setup for poojas." },
  // { title: "Bhawans", image: b13, price: "₹12,000", time: "1-2 Days", description: "Ornate temple-style structures." },
  // { title: "Bhawans", image: b14, price: "₹10,000", time: "10-14 Days", description: "Exclusive luxury crafted Bhawans." },
];

const idolsData = [
  { title: "Idol - Sai Baba", image: idol1, price: "₹3,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  { title: "Idol - Bholenath", image: idol2, price: "₹2,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
  { title: "Idol - Sai Baba", image: idol3, price: "₹3,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  { title: "Idol - Bholenath", image: idol4, price: "₹2,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
  { title: "Idol - Sai Baba", image: idol5, price: "₹3,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  { title: "Idol - Bholenath", image: idol6, price: "₹2,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
  { title: "Idol - Sai Baba", image: idol7, price: "₹2,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  { title: "Idol - Bholenath", image: idol8, price: "₹3,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
  { title: "Idol - Sai Baba", image: idol9, price: "₹2,000", time: "2-4 Days", description: "Bless your home with Laxmi Mata’s grace." },
  // { title: "Idol - Bholenath", image: idol2, price: "₹7,500", time: "3-5 Days", description: "Divine Ganesha idol, perfect for all poojas." },
];

// const PricingCard = ({ title, image, price, time, description }) => (
//   <motion.div
//     className="bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2"
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 40 }}
//     transition={{ duration: 0.5 }}
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

// const PricingSection = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
  

//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerPage(window.innerWidth < 768 ? 3 : 4);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const totalPages = Math.ceil(bhawansData.length / itemsPerPage);
//   const paginatedBhawans = bhawansData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

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
//       <motion.h3
//         className="text-4xl font-bold text-white mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 1 }}
//       >
//         Bhawans Collection
//       </motion.h3>

//       <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
//         <AnimatePresence mode="wait">
//           {paginatedBhawans.map((bhawan) => (
//             <PricingCard key={bhawan.title} {...bhawan} />
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-10 flex justify-center gap-2">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index + 1)}
//             className={`w-10 h-10 rounded-full text-white font-bold transition-all duration-300 ${
//               currentPage === index + 1
//                 ? "bg-orange-500 scale-110 shadow-lg"
//                 : "bg-gray-700 hover:bg-orange-400"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       {/* Idols Section */}
//       <motion.h3
//         className="text-4xl font-bold text-white mt-24 mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 1 }}
//       >
//         Idols Collection
//       </motion.h3>

//       <div className="flex flex-wrap justify-center gap-10 max-w-screen-xl mx-auto">
//         {idolsData.map((idol) => (
//           <PricingCard key={idol.title} {...idol} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingSection;


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaClock, FaTag } from "react-icons/fa";

const PricingCard = ({ title, image, price, time, description, width, height }) => (
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
          className={`${width} ${height} object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-700 ease-in-out`}
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
  console.log("Idols Data", idolsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [idolPage, setIdolPage] = useState(1);
  const [idolsPerPage, setIdolsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setItemsPerPage(isMobile ? 3 : 4);
      setIdolsPerPage(isMobile ? 3 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalBhawansPages = Math.ceil(bhawansData.length / itemsPerPage);
  const paginatedBhawans = bhawansData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalIdolPages = Math.ceil(idolsData.length / idolsPerPage);
  const paginatedIdols = idolsData.slice(
    (idolPage - 1) * idolsPerPage,
    idolPage * idolsPerPage
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
          {/* Bhawans */}
{paginatedBhawans.map((bhawan) => (
  <PricingCard
    key={bhawan.title}
    {...bhawan}
    width="w-[500px]"
    height="h-[300px]" // Landscape
  />
))}
        </AnimatePresence>
      </div>

      {/* Bhawan Pagination */}
      <div className="mt-10 flex justify-center gap-2">
        {[...Array(totalBhawansPages)].map((_, index) => (
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
      <AnimatePresence mode="wait">
  {paginatedIdols.map((idol, idx) => (
    <motion.div
      key={`${idol.title}-${idolPage}-${idx}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <PricingCard
        {...idol}
        width="w-[300px]"
        height="h-[500px]" // Portrait
      />
    </motion.div>
  ))}
</AnimatePresence>

      </div>

      {/* Idol Pagination */}
      <div className="mt-10 flex justify-center gap-2">
        {[...Array(totalIdolPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setIdolPage(index + 1)}
            className={`w-10 h-10 rounded-full text-white font-bold transition-all duration-300 ${
              idolPage === index + 1
                ? "bg-orange-500 scale-110 shadow-lg"
                : "bg-gray-700 hover:bg-orange-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
