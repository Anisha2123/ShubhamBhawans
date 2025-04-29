

// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Home from './components/Home';
import Navbar from './components/NavBar';
// import ParticleBackground from './components/ParticleBackground';
import { Toaster } from 'react-hot-toast';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Footer from './components/Footer';



function App() {
  return (
    <div className="font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bhawans" element={<Pricing />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/particle" element={<ParticleBackground />} /> */}
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;

