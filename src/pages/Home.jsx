// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import AboutUs from "../components/AboutUs";
import TopStudents from "../components/TopStudents";
import Contact from "../components/Contact";
import Subjects from "../components/Subjects";
import { useTheme } from "../Hooks/ThemeContext";
import BlogsComponent from "../components/BlogsComponent";

function Home() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Hero />
      <AboutUs />
      <Programs />
      <Subjects />
      <TopStudents />
    </div>
  );
}

export default Home;
