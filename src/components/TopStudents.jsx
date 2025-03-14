// src/components/TopStudents.jsx
import React from "react";
import { motion } from "framer-motion";

function TopStudents() {
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
      className="min-h-screen py-16 bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Ardayda 2024 Kaalmaha Galay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topStudents.map((student, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-auto  mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p className="text-lg">{student.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default TopStudents;