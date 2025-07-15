// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProgramsPage from "./pages/Programs"; // Import the Programs page
import FacultyPage from "./pages/Faculty"; // Import the Faculty page
import ContactPage from "./pages/Contact"; // Import the Contact page
import Dashboard from "./pages/Dashboard";
import BlogsPage from "./pages/BlogsPage";
import Contact from "./components/Contact";
import AboutusPage from "./pages/AboutusPage";

function App() {
  return (
  <div>
    <div className="mb-[114px] md:mb-[118px]">
      <Navbar />

    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutusPage />} /> 
        <Route path="/programs" element={<ProgramsPage />} /> 
        <Route path="/faculty" element={<FacultyPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
      <Contact />
      <Footer />
  
  </div>
  );
}

export default App;