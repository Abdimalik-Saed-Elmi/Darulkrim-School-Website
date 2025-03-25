import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";

function Hero() {
  const images = [
    "Darulkarimbg.jpg",
    "DarulkarimLogo.png",
    "Passport.jpg",
  ];
  const Darkimages = [
    "DarkImage.webp",
    "DarkImage2.png",
    "DarkImage3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (darkMode ? Darkimages.length : images.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [darkMode, Darkimages.length, images.length]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: darkMode
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Darkimages[currentImageIndex]}')`
          : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${images[currentImageIndex]}')`,
        backgroundSize: "cover", // Sawirka ha buuxiyo qaybta
        backgroundPosition: "center",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
          Waxbarasho Tayo Leh, Mustaqbal Iftiiminaya
        </h1>
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
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