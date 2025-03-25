import React from "react";
import { useTheme } from "../Hooks/ThemeContext";

function Footer() {
  const { darkMode } = useTheme(); // Use the useTheme hook

  return (
    <footer className={`py-8 border-t-2 border-solid border-gray-300 ${darkMode ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-blue-300 text-black"}`}>
      <div className="container mx-auto text-center flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Darulkarim. All Rights Reserved.</p>
        <p className="">
          <a href="#" className={`hover:underline ${darkMode ? "text-gray-300" : "text-black"}`}>Privacy Policy</a> | <a href="#" className={`hover:underline ${darkMode ? "text-gray-300" : "text-black"}`}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;