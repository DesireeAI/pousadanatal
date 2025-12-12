import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-teal-600 font-bold" : "text-stone-600 hover:text-teal-600";
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-teal-500 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
             CV
           </div>
           <div className="flex flex-col">
             <span className="text-xl font-extrabold text-teal-800 leading-tight">Coco Verde</span>
             <span className="text-xs text-stone-500 tracking-wider">POUSADA EM NATAL</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`transition-colors ${isActive('/')}`}>Início</Link>
          <Link to="/acomodacoes" className={`transition-colors ${isActive('/acomodacoes')}`}>Acomodações</Link>
          <Link to="/contato" className={`transition-colors ${isActive('/contato')}`}>Contato</Link>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-all flex items-center gap-2 text-sm shadow-md hover:shadow-lg hover:scale-105 animate-pulse hover:animate-none"
          >
            <Phone size={16} />
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-700 p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={toggleMenu} className={`text-lg ${isActive('/')}`}>Início</Link>
            <Link to="/acomodacoes" onClick={toggleMenu} className={`text-lg ${isActive('/acomodacoes')}`}>Acomodações</Link>
            <Link to="/contato" onClick={toggleMenu} className={`text-lg ${isActive('/contato')}`}>Contato</Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg text-center font-bold shadow-lg animate-pulse"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;