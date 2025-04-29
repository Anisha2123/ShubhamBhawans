

import { motion } from "framer-motion";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css';
import '../App.css';

import b4 from '../assets/images/bhawans/b4.jpg';
import i1 from '../assets/images/idols/i1.jpg';
import i2 from '../assets/images/idols/i2.jpg';


const services = [
    {
      title: "Fiber God Idol Rental",
      description: "High-quality Fiber Idols for your events, functions, and pujas.",
      price: "Starting from ₹2000/day",
      image: i1,
      features: [
        "Lightweight and Durable",
        "Vibrant Color Finishing",
        "Delivery and Setup Available"
      ]
    },
    {
      title: "Mitti God Idol Rental",
      description: "Eco-friendly Mitti Idols available for short and long term rent.",
      price: "Starting from ₹1500/day",
      image: i2,
      features: [
        "Eco-friendly Material",
        "Traditional Handcrafted Designs",
        "Custom Size Options"
      ]
    },
    {
      title: "Bhawan Construction",
      description: "We design and build Bhawans with traditional and modern techniques.",
      price: "Starting from ₹50,000",
      image: b4,
      features: [
        "Traditional & Modern Architecture",
        "Complete Construction Solution",
        "Vastu Compliant Designs"
      ]
    }
  ];
  

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  const handleEnquire = (service) => {
    setSelectedService(service);
    setTimeout(() => {
      toast.success(`Thanks for enquiring about ${service.title}!`);
    }, 500);
  };

  return (
    <section className="services-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="services-title"
      >
        Our Premium Services
      </motion.h2>

      <div ref={sliderRef} className="services-grid keen-slider">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="service-card keen-slider__slide"
          >
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              {/* <p className="service-description">{service.description}</p> */}
              {/* <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul> */}
              <p className="service-price">{service.price}</p>
              <button
                className="enquire-button"
                onClick={() => handleEnquire(service)}
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <ul>
              {selectedService.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <p className="service-price">{selectedService.price}</p>
            <button className="close-button" onClick={() => setSelectedService(null)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;
