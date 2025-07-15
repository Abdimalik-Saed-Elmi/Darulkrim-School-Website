import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";

function TopStudents() {
  const { darkMode } = useTheme(); // Use the useTheme hook

  const topStudents = [
    {
      name: "Arday ......",
      position: "Kaalinta 1aad",
      image: "Top1.jpg",
    },
    {
      name: "Arday .......",
      position: "Kaalinta 2aad",
      image: "top2.jpg",
    },
    {
      name: "Arday .......",
      position: "Kaalinta 3aad",
      image: "topThree.jpg",
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
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-20 ${darkMode ? "text-white" : "text-black"}`}>
          Ardayda 2025 Kaalmaha Galay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topStudents.map((student, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg shadow-md p-6 text-center ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"}`} // Adjust background and text colors
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-auto mx-auto mb-4 object-cover"
              />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{student.name}</h3>
              <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{student.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TopStudents;