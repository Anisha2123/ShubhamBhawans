


import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-400/40 transition-all animate-bounce z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsAppButton;
