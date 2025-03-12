// src/components/Faculty.jsx
import React from "react";
import { motion } from "framer-motion";

function Faculty() {
  const teachers = [
    {
      name: "Abdimalik Said Elmi",
      time: "PART TIME",
      image: "Passport.jpg",
    },
    {
      name: "Macalin Faadumo",
      time: "Saynis",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Macalin Xasan",
      time: "Ingiriis",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Macalimiinta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg shadow-md p-6 text-center"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <p className="text-lg">{teacher.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Faculty;