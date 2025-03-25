import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Hooks/ThemeContext";

function Subjects() {
  const { darkMode } = useTheme(); // Use the useTheme hook

  const subjects = [
    {
      name: "Math",
      image: "Math1.jpg",
      description: "Xisaabtu waa luqadda sayniska, waxayna na baraysaa sida loo xalliyo dhibaatooyinka adag."
    },
    {
      name: "Physics",
      image: "Physics1.jpg",
      description: "Fiisigisku wuxuu na barayaa sida caalamku u shaqeeyo, laga bilaabo atom-ka ilaa xiddigaha."
    },
    {
      name: "Biology",
      image: "Biology1.jpg",
      description: "Biology-gu wuxuu na barayaa sida loo baaro caalamka ku xeeran, iyo sida loo sameeyo tijaabooyin."
    },
    {
      name: "Chemistry",
      image: "Chemistry1.jpg",
      description: "Kimistarigu wuxuu na barayaa sida walxaha isku beddelaan iyo sida loo abuuro walxo cusub."
    },
    {
      name: "English",
      image: "English1.jpg",
      description: "Ingiriisku waa luqad caalami ah, waxayna na baraysaa sida loo wada xiriiro si hufan."
    },
    {
      name: "Somali",
      image: "somali1.jpg",
      description: "Soomaaligu waa luqadda hooyo, waxayna na baraysaa dhaqanka iyo suugaanta Soomaaliyeed."
    },
    {
      name: "Arabic",
      image: "Arabic1.jpg",
      description: "Carabigu waa luqad diini ah iyo mid dhaqan, waxayna na baraysaa qiyamka Islaamka."
    },
    {
      name: "Islamic",
      image: "Islamic2.jpg",
      description: "Islaamku waa diin nabad ah, waxayna na baraysaa sida loo noolaado nolol wanaagsan."
    },
    {
      name: "History",
      image: "History1.jpg",
      description: "Taariikhdu waxay na baraysaa wixii hore, waxayna na siinaysaa aragti ku saabsan mustaqbalka."
    },
    {
      name: "Social Study",
      image: "SocialStudy1.jpg",
      description: "Barashada Bulshadu waxay na baraysaa sida bulshadu u shaqeyso iyo sida aan uga qayb qaadan karno."
    },
    {
      name: "Business",
      image: "Business1.jpg",
      description: "Ganacsigu wuxuu na barayaa sida loo abuuro ganacsi guuleysta iyo sida loo maareeyo lacagta."
    },
    {
      name: "ICT",
      image: "ICT1.jpg",
      description: "ICT-du waxay na baraysaa sida loo isticmaalo teknoolajiyadda si wax looga qabto caqabadaha maanta."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-blue-300"}`} // Adjust background color
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-black"}`}>
          Maadooyinka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg shadow-md p-6 ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white"}`} // Adjust background and text color
            >
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>{subject.name}</h3>
              <p className={`text-gray-100 ${darkMode ? "text-gray-400" : ""}`}>{subject.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Subjects;