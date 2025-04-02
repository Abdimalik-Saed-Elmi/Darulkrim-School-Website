import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  const images = ["white-hero1.jpg", "white-hero2.jpg", "white-hero3.jpg"];
  const Darkimages = ["DarkImage.webp", "DarkImage2.png", "DarkImage3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useTheme();
  const scrollContainerRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

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
      onMouseEnter={() => setShowNavButtons(true)}
      onMouseLeave={() => setShowNavButtons(false)}
      ref={scrollContainerRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: darkMode
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${Darkimages[currentImageIndex]}')`
          : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${images[currentImageIndex]}')`,
        backgroundSize: "cover",
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
        <h1 className={`text-3xl md:text-5xl font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
          Waxbarasho Tayo Leh, Mustaqbal Iftiiminaya
        </h1>
        <p className={`text-lg md:text-xl mb-8 ${darkMode ? "text-gray-300" : "text-black"}`}>
          Ku soo dhawoow Dugsiga Darulkarim, halka aan ku dhisno mustaqbalka ardaydeena.
        </p>
        <div className="flex flex-col mt-28 md:mt-12 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to={"/about"}
            className="bg-green-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Waxka Baro Darulkarim
          </Link>
          <Link
            to={"/contact"}
            className="bg-gray-200 text-black py-3 px-6 rounded-full font-medium hover:bg-gray-300 transition-colors"
          >
            Nagala Soo Xiriir
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {showNavButtons && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={scrollLeft}
              className={
                darkMode
                  ? "absolute left-2 md:left-4 text-3xl md:text-4xl top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
                  : "absolute left-2 md:left-4 text-3xl md:text-4xl top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
              }
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              onClick={scrollRight}
              className={
                darkMode
                  ? "absolute right-2 md:right-4 text-3xl md:text-4xl top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
                  : "absolute right-2 md:right-4 text-3xl md:text-4xl top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
              }
            >
              <FaChevronRight />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Hero;