

// src/components/Home.jsx
import { motion } from "framer-motion";
import Services from "./Services";
import Pricing from "./Pricing";
import HeroSection from "./HeroSection";
import AboutUs from "./About";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Navbar from "./NavBar";
import Footer from "./Footer";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";


const Home = () => {
  return (
    <main className="bg-orange-50 min-h-screen overflow-x-hidden">
      
      <Navbar/>
      <section id="hero" className="pt-15">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-0">
        {/* <Services /> */}
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-0">
        <Pricing />
      </section>
      <section id="about" className="py-0">
        <AboutUs />
      </section>
      
      <section id="test" className="py-0">
        <Testimonials />
      </section>
      <section id="contact" className="py-0">
        <ContactForm />
      </section>
      

      {/* Footer */}
    
    </main>
  );
};

export default Home;
