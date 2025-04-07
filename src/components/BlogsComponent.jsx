import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";
import SkeletonPost from "./SkeletonPost";

function BlogsComponent() {
  const { darkMode } = useTheme();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch("https://darulkarim-blogs.onrender.com");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPrograms(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <SkeletonPost />
    <SkeletonPost />
    <SkeletonPost />
    <SkeletonPost />
    <SkeletonPost />
    <SkeletonPost />
</div>
  }

  if (error) {
    return (
      <motion.section
        className={`min-h-screen py-16 ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className={`w-64 h-48 bg-gray-300 rounded-md animate-pulse mb-4`}></div>
          <div className={`h-6 bg-gray-300 rounded-md animate-pulse w-48 mb-2`}></div>
          <div className={`h-4 bg-gray-300 rounded-md animate-pulse w-64 mb-4`}></div>
          <p className={`text-red-500 font-semibold text-xl`}>
            Waxaa dhacay qalad. Fadlan dib u cusbooneysii bogga.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`min-h-screen py-16 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-black"}`}>
          Bogga Wararka iyo Dhacdooyinka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg shadow-md p-6 ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"}`}
            >
              {program.image && (
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{program.title}</h3>
              <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{program.description}</p>
              <button className="bg-green-600 py-2 px-4 mt-2 rounded cursor-pointer text-white font-semibold hover:bg-blue-600">See more...</button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default BlogsComponent;