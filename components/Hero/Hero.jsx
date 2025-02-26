"use client";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function HeroAltseason() {
  const [index, setIndex] = useState(25);

  return (
    <div className="relative flex flex-col items-center justify-center text-white text-center p-6 w-full max-w-4xl mx-auto mt-20">
      <h1 className="text-4xl font-extrabold mb-2">🔥 Altseason Index 🔥</h1>
      <p className="text-lg text-gray-300 mb-6">
        Descubra se estamos na temporada das alts!
      </p>

      <div className="flex flex-col items-center w-full">
        <motion.div
          className="relative flex items-center justify-center w-40 h-40 bg-orange-600 rounded-full shadow-lg text-6xl font-bold"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0px 0px 15px rgba(255, 165, 0, 0.8)",
              "0px 0px 30px rgba(255, 69, 0, 0.8)",
              "0px 0px 15px rgba(255, 165, 0, 0.8)",
            ],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {index}

          <motion.div
            className="absolute inset-0 w-full h-full bg-[radial-gradient(circle, rgba(255,69,0,0.7) 10%, rgba(255,165,0,0) 80%)]"
            animate={{ opacity: [0.6, 0.9, 0.6], scaleY: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="relative w-full flex flex-col md:flex-row items-center justify-between mt-6 gap-6">
          <img
            src="/site1.png"
            alt="Indicador 0"
            className="w-20 md:w-36 hidden md:block lg:w-44 object-cover rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
          <Progress
            value={index}
            className="w-full max-w-lg z-10 bg-gray-800 h-3 rounded-lg overflow-hidden relative"
          />
          <img
            src="/site2.png"
            alt="Indicador 100"
            className="w-20 hidden md:block md:w-36 lg:w-44 object-cover rounded-full  shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
