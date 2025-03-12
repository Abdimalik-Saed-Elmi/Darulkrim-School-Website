// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" opacity-5  min-h-screen flex items-center justify-center text-center text-black  inset-0 bg-[url('Darulkarim-sahal.jpg')] bg-cover bg-center "
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Waxbarasho Tayo Leh, Mustaqbal Iftiiminaya
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Ku soo dhawoow Dugsiga Darulkarim, halka aan ku dhisno mustaqbalka ardaydeena.
        </p>
        <button className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
          Waxka Baro Darulkarim
        </button>
      </div>
    </motion.section>
  );
}

export default Hero;