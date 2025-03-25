import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";

function Programs() {
  const { darkMode } = useTheme(); // Use the useTheme hook

  const programs = [
    {
      title: "Qeebta Dugsiga Hoose/Dhexe",
      description: "Qeebtaan dugsigu wuxuu ardayda siiyaa waxbarasho aasaasi ah oo ku saleysan manhajka qaranka.",
      image: "DugsiDhexe.jpeg",
    },
    {
      title: "Qeebta Dugsiga Sare",
      description: "Qeebtaan dugsigu wuxuu ardayda u diyaariyaa imtixaanaadka shahaadiga ah iyo waxbarashada jaamacadeed.",
      image: "DugsiSare1.jpg",
    },
    {
      title: "Qeebta Barashada Ingiriisiga",
      description: "Qeebtaan dugsigu wuxuu ardayda ka caawiyaa inay horumariyaan xirfadahooda luqadda Ingiriisiga.",
      image: "English.webp",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`min-h-screen py-16 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"}`} // Adjust background and text colors
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-black"}`}>
          Qeybaha Waxbarasho
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg shadow-md p-6 ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"}`} // Adjust background and text colors
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{program.title}</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Programs;