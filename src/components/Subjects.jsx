// src/components/Subjects.jsx
import React from "react";
import { motion } from "framer-motion";

function Subjects() {
  const subjects = [
    {
      name: "Math",
      image: "Math1.jpg", // Replace with actual image path
      description: "Xisaabtu waa luqadda sayniska, waxayna na baraysaa sida loo xalliyo dhibaatooyinka adag."
    },
    {
      name: "Physics",
      image: "Physics1.jpg", // Replace with actual image path
      description: "Fiisigisku wuxuu na barayaa sida caalamku u shaqeeyo, laga bilaabo atom-ka ilaa xiddigaha."
    },
    {
      name: "Biology",
      image: "Biology1.jpg", // Replace with actual image path
      description: "Biology-gu wuxuu na barayaa sida loo baaro caalamka ku xeeran, iyo sida loo sameeyo tijaabooyin."
    },
    {
      name: "Chemistry",
      image: "Chemistry1.jpg", // Replace with actual image path
      description: "Kimistarigu wuxuu na barayaa sida walxaha isku beddelaan iyo sida loo abuuro walxo cusub."
    },
    {
      name: "English",
      image: "English1.jpg", // Replace with actual image path
      description: "Ingiriisku waa luqad caalami ah, waxayna na baraysaa sida loo wada xiriiro si hufan."
    },
    {
      name: "Somali",
      image: "somali1.jpg", // Replace with actual image path
      description: "Soomaaligu waa luqadda hooyo, waxayna na baraysaa dhaqanka iyo suugaanta Soomaaliyeed."
    },
    {
      name: "Arabic",
      image: "Arabic1.jpg", // Replace with actual image path
      description: "Carabigu waa luqad diini ah iyo mid dhaqan, waxayna na baraysaa qiyamka Islaamka."
    },
    {
      name: "Islamic",
      image: "Islamic2.jpg", // Replace with actual image path
      description: "Islaamku waa diin nabad ah, waxayna na baraysaa sida loo noolaado nolol wanaagsan."
    },
    {
      name: "History",
      image: "History1.jpg", // Replace with actual image path
      description: "Taariikhdu waxay na baraysaa wixii hore, waxayna na siinaysaa aragti ku saabsan mustaqbalka."
    },
    {
      name: "Social Study",
      image: "SocialStudy1.jpg", // Replace with actual image path
      description: "Barashada Bulshadu waxay na baraysaa sida bulshadu u shaqeyso iyo sida aan uga qayb qaadan karno."
    },
    {
      name: "Business",
      image: "Business1.jpg", // Replace with actual image path
      description: "Ganacsigu wuxuu na barayaa sida loo abuuro ganacsi guuleysta iyo sida loo maareeyo lacagta."
    },
    {
      name: "ICT",
      image: "ICT1.jpg", // Replace with actual image path
      description: "ICT-du waxay na baraysaa sida loo isticmaalo teknoolajiyadda si wax looga qabto caqabadaha maanta."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-blue-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Maadooyinka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
              <p className="text-gray-700">{subject.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Subjects;