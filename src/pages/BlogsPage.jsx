import React from 'react';
import BlogsComponent from '../components/BlogsComponent';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Haddii aad u baahan tahay Link
import { useTheme } from '../Hooks/ThemeContext';

const BlogsPage = () => {
   const { darkMode } = useTheme()
  return (
    <div>
      <motion.div
        className="w-fit mx-auto my-8" // w-fit si uu u qaato ballaca content-kiisa, mx-auto si uu u noqdo bartamaha
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, 20, 0, -20, 0], // Ka bilow bartamaha, u soco midig, dib u noqo bartamaha, u soco bidix, dib u noqo bartamaha
          transition: {
            duration: 3, // Waqtiga uu animation-ku qaadanayo inuu hal wareeg sameeyo (seconds)
            repeat: Infinity, // Ku celceli animation-ka si aan xad lahayn
            repeatType: "loop", // Dib ugu bilow bilowga markaad dhamaato
            ease: "easeInOut", // Saameyn siman oo bilowga iyo dhamaadka ah
          },
        }}
      >
        <Link to="https://darulkarim-blogs.onrender.com/login" className={darkMode ?"bg-gray-200 text-black py-2 px-4 rounded-full hover:bg-green-600 hover:text-white font-semibold transition-colors" : "bg-gray-900 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition-colors"}>
          Create New Blogs
        </Link>
      </motion.div>
      <BlogsComponent />
    </div>
  );
};

export default BlogsPage;