import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Pousada Coco Verde</h3>
          <p className="mb-4 text-stone-400">
            Sua casa em Ponta Negra. Ambiente familiar, aconchegante e pertinho do mar.
            Venha viver dias incríveis em Natal-RN.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-teal-400 transition-colors">Início</Link></li>
            <li><Link to="/acomodacoes" className="hover:text-teal-400 transition-colors">Nossas Acomodações</Link></li>
            <li><Link to="/contato" className="hover:text-teal-400 transition-colors">Fazer Reserva</Link></li>
            <li><Link to="/contato" className="hover:text-teal-400 transition-colors">Localização</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-teal-500 flex-shrink-0 mt-1" size={20} />
              <span>
                Ponta Negra, Natal - RN<br />
                <span className="text-sm text-stone-500">A 300m da praia</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-teal-500 flex-shrink-0" size={20} />
              <span>(84) 99431-7860</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-700 pt-6 text-center text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Pousada Coco Verde. Todos os direitos reservados.</p>
        <div className="mt-2 bg-teal-900 text-teal-200 inline-block px-4 py-1 rounded-full text-xs font-semibold">
           Chegando em Natal hoje? <Link to="/contato" className="underline hover:text-white">Reserve Aqui</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;