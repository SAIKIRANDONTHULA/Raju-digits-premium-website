"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RS Digitals on WhatsApp"
      className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
      <FaWhatsapp size={26} className="relative" />
    </motion.a>
  );
}
