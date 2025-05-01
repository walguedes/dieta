
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue py-8 text-white text-center">
      <div className="container px-4">
        <p className="mb-4">© {new Date().getFullYear()} Dieta Prática e Eficaz - Todos os direitos reservados</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
