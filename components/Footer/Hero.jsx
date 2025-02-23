import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center p-4 bg-gray-900 text-white mt-8 border-t border-gray-700 absolute bottom-0 left-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span>© 2025 Todos os direitos reservados</span>
        <div className="flex items-center gap-2">
          <span>Criado por:</span>
          <a
            href="https://x.com/CriptoDogDoge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            <img src="/image.png" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
