// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../Hooks/ThemeContext";
import { FaMoon, FaSun, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className={`py-3 px-2 text-sm ${darkMode ? "bg-gray-800 text-white" : "bg-green-100 text-gray-800"}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 md:px-2 px-1">
            <div className="flex items-center">
              <FaPhone className="mr-1 text-base md:text-lg" />
              <a href="https://api.whatsapp.com/send?phone=+252613777623&text=Hi-Darulkarim-Primary-and-Secondary-School" className="hover:underline"> +252 613777623 </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-1 text-base md:text-lg" />
              <a href="mailto:info@darulkarim.com">info@darulkarim.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <nav className={`py-3 border-b border-gray-200 ${darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-gray-900"}`}>
        <div className="container mx-auto px-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="DarulkarimLogo.png" alt="Darulkarim" className="w-10 h-10 md:w-12 md:h-12" />
              <span className="text-[14px] md:text-[16px] font-semibold text-red-600">DARUL-KARIM PRIMARY <br /> & SECONDARY SCHOOL</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 ">
            <Link to="/about" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer  font-bold hover:underline transition-colors">About</Link>
            <Link to="/programs" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer  font-bold hover:underline transition-colors">Programs</Link>
            <Link to="/contact" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer  font-bold hover:underline transition-colors">Contact</Link>
            <Link to="/blogs" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer  font-bold hover:underline transition-colors">News</Link>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={toggleDarkMode} className="flex items-center">
              {darkMode ? <FaSun className="hover:text-gray-300" size={24} /> : <FaMoon className="hover:text-gray-700" size={24} />}
            </button>
            <div className="hidden md:flex space-x-2">
              <Link to="#" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">Login</Link>
              <Link to="#" className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition-colors">Student Portal</Link>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
              {mobileMenu ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
            </button>
          </div>
        </div>
        <div className={mobileMenu ? "md:hidden block" : "hidden"}>
          <div className="flex flex-col space-y-2 p-4 text-center">
            <Link to="/about" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer transition-colors">About</Link>
            <Link to="/programs" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer transition-colors">Programs</Link>
            <Link to="/contact" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer transition-colors">Contact</Link>
            <Link to="/blogs" className="hover:text-blue-900 hover:bg-green-300 hover:py-1 px-2 rounded cursor-pointer transition-colors">News</Link>
            <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">Login</Link>
            <Link to="/student-portal" className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition-colors">Student Portal</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;