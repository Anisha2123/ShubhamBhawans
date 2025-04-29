

// src/components/ContactForm.jsx
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="contact bg-white py-16 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-orange-700 mb-12"
      >
        Contact Us
      </motion.h2>
      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block text-left text-orange-700 mb-2">Name</label>
          <input 
            type="text"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-left text-orange-700 mb-2">Email</label>
          <input 
            type="email"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-left text-orange-700 mb-2">Message</label>
          <textarea 
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:border-orange-500"
            placeholder="Your message"
            rows="4"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
