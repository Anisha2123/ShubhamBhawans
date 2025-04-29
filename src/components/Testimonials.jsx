

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarti Sharma",
    role: "Event Organizer, Agra",
    message:
      "Their setup during Devi Jaagran was absolutely divine. The lighting, idols, and energy were unforgettable!",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Rajeev Thakur",
    role: "Community Leader, Mathura",
    message:
      "We were stunned by the Navratri mandap design. Shubham Birla and team truly understand spiritual aesthetics.",
    avatar: "https://i.pravatar.cc/100?img=3"
  },
  {
    name: "Neha Verma",
    role: "Cultural Head, Delhi",
    message:
      "One of the best setups we've ever had. The Ram Baraat looked like a scene from mythology. Totally recommend!",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-center">
      <motion.h2
        className="text-5xl font-extrabold text-white mb-16 tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What People Say
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-2xl hover:shadow-orange-400/30 transition-all duration-500 text-white flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
            <p className="text-lg italic text-gray-300 mb-6">
              "{testimonial.message}"
            </p>

            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-orange-500 shadow-lg mb-3 hover:scale-105 transition-transform"
            />
            <p className="text-xl font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

