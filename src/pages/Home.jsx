// src/pages/Home.jsx
    import React from "react";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import AboutUs from "../components/AboutUs";
import Faculty from "../components/Faculty";
import TopStudents from "../components/TopStudents";
import Contact from "../components/Contact";
import Subjects from "../components/Subjects";
import { useTheme } from "../Hooks/ThemeContext";

    function Home() {
      const { darkMode } = useTheme();
      return (
        <div>
           <Hero />
        <div className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
       
        <AboutUs />
        <Programs />
        <Subjects />
        <TopStudents />
        <Contact />
        </div>
        </div>
      );
    }

    export default Home;