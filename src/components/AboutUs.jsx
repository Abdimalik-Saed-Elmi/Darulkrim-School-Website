import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import { useTheme } from "../Hooks/ThemeContext";
import { Link } from "react-router-dom";

function AboutUs() {
  const { darkMode } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`py-16 min-h-screen ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-blue-300 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-semibold text-center mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            <h1
              className={`text-2xl md:text-3xl font-semibold leading-relaxed mb-4 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dugsiga Darulkarim Primary & Secondary School
            </h1>
            <p
              className={`text-base md:text-lg leading-relaxed mb-6 text-center ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Waa xarun waxbarasho oo ku dadaasha inay ardaydeeda siiso waxbarasho tayo leh oo ku saleysan qiimaha diinta iyo dhaqanka.
            </p>
            <p
              className={`text-base md:text-lg leading-relaxed mb-6 text-center ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Waxaan aaminsanahay in waxbarashadu ay tahay furaha mustaqbal wanaagsan, waxaana naga go'an inaan ardaydeena ka caawino gaarida hadafkooda.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 w-full block text-center text-white font-medium py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition-colors"
            >
              Xog Dheeri
            </Link>
          </motion.div>
          <div>
            <img
              src="DarulkarimLogo.png"
              alt="About Us"
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;