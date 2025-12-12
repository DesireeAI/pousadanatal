import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sun, Calendar, ArrowRight } from 'lucide-react';
import { MAIN_AMENITIES, ROOMS, NEARBY_LOCATIONS } from '../constants';
import RoomCard from '../components/RoomCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://vngbdkjoaswckwszfscj.supabase.co/storage/v1/object/public/sites/hoteis-ponta-negra-natal-capa-01.jpg?q=80&w=1920&auto=format&fit=crop" 
            alt="Vista da Praia de Ponta Negra e Morro do Careca" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-teal-600/90 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 animate-bounce shadow-lg cursor-pointer hover:bg-teal-500 transition-colors">
            Chegando em Natal hoje? Reserve Aqui
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-shadow leading-tight">
            Seu refúgio tropical em <br/><span className="text-teal-400">Ponta Negra</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-stone-100 font-medium text-shadow">
            A 300 metros da praia, com piscina, churrasqueira e tudo que você precisa para relaxar. 
            Ambiente familiar e Pet Friendly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/acomodacoes" className="btn-shine bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-teal-500/50 hover:-translate-y-1 transform flex items-center justify-center gap-2 text-lg">
              Ver Acomodações
            </Link>
            <Link to="/contato" className="bg-white hover:bg-stone-100 text-teal-800 font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform flex items-center justify-center gap-2 text-lg">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* About & Location Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Sobre a Pousada</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Localização Privilegiada &<br/>Conforto Familiar
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Estamos localizados em Ponta Negra, o cartão postal de Natal-RN. 
                Aqui você fica a apenas <strong>300 metros da praia</strong> e a menos de 2 km do famoso <strong>Morro do Careca</strong>.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-stone-800">Perto de tudo</h4>
                    <p className="text-stone-500 text-sm">Próximo a mercados, farmácias, padarias e feiras de artesanato.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Sun size={20} /></div>
                  <div>
                    <h4 className="font-bold text-stone-800">Custo-benefício</h4>
                    <p className="text-stone-500 text-sm">Excelente estrutura com preços acessíveis a partir de R$ 120.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img src="https://vngbdkjoaswckwszfscj.supabase.co/storage/v1/object/public/sites/entrada.jpeg" alt="Praia de Ponta Negra" className="rounded-2xl shadow-2xl z-10 relative" />
              <div className="absolute -bottom-6 -left-6 bg-teal-600 p-6 rounded-xl shadow-xl z-20 text-white hidden md:block">
                <p className="text-3xl font-bold">300m</p>
                <p className="text-sm opacity-90">Da praia de Ponta Negra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Comodidades Pensadas em Você</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Oferecemos uma estrutura completa para que você se sinta em casa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAIN_AMENITIES.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Nossas Acomodações</span>
              <h2 className="text-3xl font-bold text-stone-800 mt-2">Escolha seu Espaço Ideal</h2>
            </div>
            <Link to="/acomodacoes" className="text-teal-600 font-bold flex items-center gap-2 hover:text-teal-800 transition-colors group">
              Ver todos os quartos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map(room => (
              <RoomCard key={room.id} room={room} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">O que você encontra nos arredores</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {NEARBY_LOCATIONS.map((loc, idx) => (
              <div key={idx} className="bg-teal-800/50 backdrop-blur-sm p-4 rounded-lg border border-teal-700 text-center hover:bg-teal-700 transition-colors cursor-default">
                <span className="text-xs font-bold text-teal-300 uppercase block mb-2">{loc.category}</span>
                <p className="font-semibold">{loc.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;