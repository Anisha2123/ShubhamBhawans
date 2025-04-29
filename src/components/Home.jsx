

// src/components/Home.jsx
import { motion } from "framer-motion";
import Services from "./Services";
import Pricing from "./Pricing";
import HeroSection from "./HeroSection";
import AboutUs from "./About";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <main className="bg-orange-50 min-h-screen overflow-x-hidden">
      
      <Navbar/>
      <section id="hero" className="py-15">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-0">
        <Services />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-0">
        <Pricing />
      </section>
      <section id="about" className="py-0">
        <AboutUs />
      </section>
      <section id="contact" className="py-0">
        <ContactForm />
      </section>
      <section id="test" className="py-0">
        <Testimonials />
      </section>

      

      {/* Footer */}
      <footer className="bg-orange-700 text-white text-center py-6 mt-10">
        <p>© 2025 Shubhum Creations. All rights reserved.</p>
      </footer>

    </main>
  );
};

export default Home;
