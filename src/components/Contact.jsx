// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/about.css";
function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-[url('https://via.placeholder.com/1500')] bg-cover bg-center bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg font-bold leading-relaxed mb-12">
              Waxaad nagala soo xiriiri kartaa macluumaadka hoos ku qoran:
            </p>
            <ul className="list-disc list-inside mb-4 flex flex-col space-y-6">
              <li className="flex items-center space-x-2"><FaMapMarkerAlt size={40} className=" bg-green-500 rounded-full p-1 mr-2" />Address: 30th Street, Hodan District, Mogadishu-Somalia</li>
              <li className="flex items-center space-x-2"><FaPhoneAlt size={40} className=" bg-green-500 rounded-full p-1 mr-2" />Phone: +252613777623 | +252615633116 </li>
              <li className="flex items-center space-x-2"> <FaEnvelope size={40} className=" bg-green-500 rounded-full p-1 mr-2" />Email:  <a href="https://mail.google.com/" className="text-blue-400 ml-2"> schooldks2022@gmail.com</a></li>
            </ul>
            <div className="flex space-x-8 mt-8">
            <a href="https://www.facebook.com/profile.php?id=100057218268902" className="hover:text-gray-300 flex items-center gap-2">
            <FaFacebook size={40}  className=" bg-green-500 rounded-full p-1"/>
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center gap-2">
            <FaTwitter size={40} className=" bg-green-500 rounded-full p-1"/>
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center gap-2">
            <FaInstagram size={40} className=" bg-green-500 rounded-full p-1"/>
            Instagram
          </a>
            </div>
          </div>
          <div>
            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-lg font-medium mb-1">Magaca:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1">Email:</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1">Fariinta:</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
                ></textarea>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-500">
                Submit
              </button>
            </motion.form>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.285848520958!2d77.6309395148216!3d13.01185019081273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44c6d%3A0xf8cc46b52781525b!2sYour%20School%20Location!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;