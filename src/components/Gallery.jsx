

// src/components/Gallery.jsx
import { motion } from "framer-motion";

const images = [
  "/images/idols/gallery1.jpg",
  "/images/idols/gallery2.jpg",
  "/images/bhawans/gallery3.jpg",
  // Add more image paths
];

const Gallery = () => {
  return (
    <section className="gallery py-16 px-6 bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-orange-700 mb-12"
      >
        Gallery
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.img 
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="rounded-lg shadow-md hover:scale-110 transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
