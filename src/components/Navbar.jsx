// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../Hooks/ThemeContext";
import { FaMoon, FaSun, FaPhone, FaEnvelope } from "react-icons/fa"; // Ku dar icons-ka

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div
        className={`py-4 px-2 text-lg ${
          darkMode ? "bg-gray-700 text-white" : "bg-green-200 text-black"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center px-2">
              <FaPhone  className="mr-1 text-[25px] md:text-[30px]" />
              <a href="https://api.whatsapp.com/send?phone=+252613777623&text=Hi-Darulkarim-Primary-and-Secondary-School" className="hover:underline"> +252 613777623 </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-1 text-[25px] md:text-[30px]" />
              <a href="#">info@darulkarim.com</a>
            </div>
            {/* Waxyaabo kale oo aad rabto inaad ku darto */}
          </div>
          <div className="flex items-center space-x-4">
            {/* Social media links ama waxyaabo kale */}
          </div>
        </div>
      </div>
      <nav
        className={`py-6 border-b-2 border-solid border-gray-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="container mx-auto px-2 flex justify-between items-center">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                <img
                  src="DarulkarimLogo.png"
                  alt="Darulkarim"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <span className=" md:text-[20px] font-semibold text-red-600">DARUL-KARIM PRIMARY <br /> AND SECONDARY SCHOOL</span>
              </Link>
            </div>
          <div className="hidden md:flex space-x-3">
            <Link
              to="/about"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/programs"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Blogs
            </Link>
          </div>
          <div>
            <button onClick={toggleDarkMode} className="flex items-center">
              {darkMode ? <FaSun size={30} className="mr-2" /> : <FaMoon size={30} className="mr-2" />}
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
          <div className="hidden md:flex space-x-3">
            <Link
              to="/dashboard"
              className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Student Portal
            </Link>
          </div>
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className="md:hidden"
          >
            {mobileMenu ? (
              <HiX className={darkMode ? "text-white text-4xl" : "text-4xl text-black"} />
            ) : (
              <HiMenuAlt3 className={darkMode ? "text-white text-4xl" : "text-4xl text-black"} />
            )}
          </button>
        </div>
        <div className={mobileMenu ? "md:hidden block" : "hidden"}>
          <div className="flex flex-col space-y-2 p-6 text-center">
            <Link
              to="/about"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/programs"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="bg-green-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;