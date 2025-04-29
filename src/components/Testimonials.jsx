

// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    feedback: "Beautiful idols and excellent service! Highly recommended for religious events.",
    photo: "/images/testimonials/ravi.jpg",
  },
  {
    name: "Pooja Verma",
    feedback: "They built a beautiful Bhawan at our village temple. Truly divine work!",
    photo: "/images/testimonials/pooja.jpg",
  },
  {
    name: "Manoj Tiwari",
    feedback: "Affordable prices and authentic idols, delivered on time. Great experience!",
    photo: "/images/testimonials/manoj.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials bg-orange-50 py-16 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-orange-700 mb-12"
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <img 
              src={testimonial.photo} 
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
            <h4 className="text-orange-700 font-semibold">{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
