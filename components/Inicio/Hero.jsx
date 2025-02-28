import React from "react";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">
        📢 Analisando o Sentimento de Renato
      </h2>
      <img
        src="/absolute.png"
        alt="Tweet em análise"
        className="w-full max-w-lg rounded-lg shadow-lg border border-gray-700"
      />
      <p className="text-gray-300 text-lg mt-4 text-center font-bold max-w-xl mb-4">
        O mercado de criptomoedas é altamente influenciado pelo sentimento dos
        investidores. Abaixo, apresentamos dois índices que ajudam a interpretar
        esse comportamento, baseado no tweet de Renato:
      </p>
      <img src="/tweet2.png" />
    </div>
  );
}

export default Hero;
