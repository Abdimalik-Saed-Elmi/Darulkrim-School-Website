import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  const images = [
    "Darulkarim-mooseey.jpg",
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
  const scrollContainerRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false); // Ku dar state-ka muuqaalka buttons-ka

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (darkMode ? Darkimages.length : images.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [darkMode, Darkimages.length, images.length]);

  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = darkMode ? Darkimages.length - 1 : images.length - 1;
      }
      return newIndex;
    });
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= (darkMode ? Darkimages.length : images.length)) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setShowNavButtons(true)} // Muuji buttons-ka marka la dul geeyo
      onMouseLeave={() => setShowNavButtons(false)} // Qari buttons-ka marka laga baxo
      ref={scrollContainerRef}
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${Darkimages[currentImageIndex]}')`
            : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${images[currentImageIndex]}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: darkMode ? "white" : "black",
        }}
    >

        <div className="container mx-auto px-4">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
            Waxbarasho Tayo Leh, Mustaqbal Iftiiminaya
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${darkMode ? "text-gray-300" : "text-black"}`}>
            Ku soo dhawoow Dugsiga Darulkarim, halka aan ku dhisno mustaqbalka ardaydeena.
          </p>
          <Link to={"/about"} className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors">
            Waxka Baro Darulkarim
          </Link>
        </div>
        {showNavButtons && (
          <>
            <button
              onClick={scrollLeft}
              className={darkMode ? "absolute left-0 ml-4 text-4xl top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" : "absolute left-0 ml-4 text-4xl top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" }
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }} // Ku dar shadow inline
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className={darkMode ? "absolute right-0 mr-4 text-4xl top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full" : "absolute right-0 mr-4 text-4xl top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" }
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }} // Ku dar shadow inline
            >
              <FaChevronRight />
            </button>
          </>
        )}

    </motion.section>
  );
}

export default Hero;