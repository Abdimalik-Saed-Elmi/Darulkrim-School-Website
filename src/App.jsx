// src/App.jsx
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProgramsPage from "./pages/Programs"; // Import the Programs page
import FacultyPage from "./pages/Faculty"; // Import the Faculty page
import ContactPage from "./pages/Contact"; // Import the Contact page
import Dashboard from "./pages/Dashboard";

function App() {
  return (
  <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/programs" element={<ProgramsPage />} /> 
        <Route path="/faculty" element={<FacultyPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
   
      <Footer />
  
  </div>
  );
}

export default App;