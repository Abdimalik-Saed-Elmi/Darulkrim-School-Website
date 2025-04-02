import React, { useState, useEffect } from "react";
import { useTheme } from "../Hooks/ThemeContext";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Tusaale: ka dhig mid muuqda marka hoos loo dhaadhaco 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`relative py-6 border-t-2 border-solid border-gray-300 ${
        darkMode ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-blue-300 text-black"
      }`}
    >
      <div className="container mx-auto text-center flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Darulkarim. All Rights Reserved.</p>
        <p className="">
          <a href="#" className={`hover:underline ${darkMode ? "text-gray-300" : "text-black"}`}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className={`hover:underline md:mr-4 ${darkMode ? "text-gray-300" : "text-black"}`}>
            Terms of Service
          </a>
        </p>
      </div>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp
            size={30}
            className={` text-black rounded-full p-2 ${
              darkMode ? "bg-green-400" : "bg-green-500"
            }`}
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;