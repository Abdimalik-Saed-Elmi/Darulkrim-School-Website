// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../Hooks/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav
      className={`p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="DarulkarimLogo.png"
            alt="Darulkarim"
            className="h-[50px] w-[50px] rounded mr-2"
          />
          <span className="font-bold text-4xl text-green-500 hover:text-green-400">
            Darulkarim
          </span>
        </Link>
       
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
        <div className="">
        <button onClick={toggleDarkMode} className="flex items-center">
            {darkMode ? (
              <FaSun size={30} className="mr-2" />
            ) : (
              <FaMoon size={30} className="mr-2" />
            )}
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
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
            <HiX className="text-3xl text-black" />
          ) : (
            <HiMenuAlt3 className="text-3xl text-black" />
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
  );
}

export default Navbar;
