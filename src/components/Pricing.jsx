


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

const Pricing = () => {
  const bhawans = [
    { image: b1, title: "Bhawan 1", price: "₹50,000", material: "Customized" },
    { image: b2, title: "Bhawan 2", price: "₹60,000", material: "Wooden" },
    { image: b3, title: "Bhawan 3", price: "₹55,000", material: "Mitti" },
    { image: b4, title: "Bhawan 4", price: "₹45,000", material: "Stone" },
    { image: b5, title: "Bhawan 5", price: "₹70,000", material: "Marble" },
    { image: b6, title: "Bhawan 6", price: "₹80,000", material: "Wooden" },
    { image: b7, title: "Bhawan 7", price: "₹65,000", material: "Customized" },
  ];

  return (
    <section className="pricing-section">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="pricing-title"
      >
        Bhawan Pricing & Details
      </motion.h2>

      <div className="pricing-grid">
        {bhawans.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="pricing-card"
          >
            <img
              src={item.image}
              alt={item.title}
              className="pricing-image"
            />
            <div className="overlay"></div>
            <div className="overlay-text">View Details</div>

            <div className="pricing-info">
              <h3>{item.title}</h3>
              <p>Material: {item.material}</p>
              <p className="price">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;


