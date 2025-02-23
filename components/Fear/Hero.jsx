"use client";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Gauge, AlertCircle } from "lucide-react";

export default function FearGreedIndex() {
  const [index, setIndex] = useState(101);
  const getLabel = () => {
    if (index < 20) return "Medo Extremo";
    if (index < 40) return "Medo";
    if (index < 60) return "Neutro";
    if (index < 80) return "Ganância";
    return "Ganância Extrema";
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-white text-center p-6 w-full max-w-2xl mx-auto mt-20">
      <h1 className="text-4xl font-extrabold mb-2">📉 Fear & Greed Index 📈</h1>
      <p className="text-lg text-gray-300 mb-6">
        Indicador de sentimento de{" "}
        <span className="text-green-300">mercado</span>... ops,{" "}
        <span className="text-red-300">Renato</span>.
      </p>

      <div className="flex flex-col items-center w-full">
        <motion.div
          className="relative flex flex-col items-center justify-center w-44 h-44 bg-gray-900 rounded-full shadow-lg text-4xl font-bold border-4 border-gray-700"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0px 0px 15px rgba(255, 255, 255, 0.2)",
              "0px 0px 30px rgba(255, 255, 255, 0.3)",
              "0px 0px 15px rgba(255, 255, 255, 0.2)",
            ],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Gauge size={50} className="text-yellow-400" />
          {index}
          <span className="text-sm text-gray-400">{getLabel()}</span>
        </motion.div>

        <div className="relative w-full flex flex-col md:flex-row items-center justify-between mt-6 gap-6">
          <AlertCircle className="text-red-500 w-8 h-8 hidden md:block" />
          <Progress
            value={index}
            className="w-full max-w-lg z-10 bg-gray-800 h-3 rounded-lg overflow-hidden relative"
          >
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-500"
              style={{ width: `${index}%` }}
            />
          </Progress>
          <AlertCircle className="text-green-500 w-8 h-8 hidden md:block" />
        </div>
      </div>
      <p className="text-center mt-20 text-red-600">
        Atualização de sentimentos todos os dias ás 20h.
      </p>
      <div className="mt-20">
        <h1 className="font-semibold">E só para lembrar...</h1>
        <img src="/alts.png" className="mt-2" />
      </div>
    </div>
  );
}
