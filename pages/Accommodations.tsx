import React from 'react';
import { Wifi, Tv, Wind, Coffee, Utensils, AlertCircle } from 'lucide-react';
import { ROOMS, WHATSAPP_NUMBER } from '../constants';
import RoomCard from '../components/RoomCard';

const Accommodations: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="bg-stone-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">Nossas Acomodações</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Opções que vão de suítes aconchegantes a duplex completos para toda a família.
            Encontre o espaço perfeito para suas férias.
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ROOMS.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>

      {/* Included Amenities Section */}
      <div className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 text-center">
              O que está incluído na sua estadia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl h-fit text-teal-600"><Wind size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-stone-800">Conforto Térmico</h4>
                  <p className="text-stone-600 text-sm">Todas as acomodações possuem ar condicionado split.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl h-fit text-teal-600"><Tv size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-stone-800">Entretenimento</h4>
                  <p className="text-stone-600 text-sm">TV a cabo LED disponível em todos os quartos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl h-fit text-teal-600"><Wifi size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-stone-800">Conectividade</h4>
                  <p className="text-stone-600 text-sm">Wi-Fi grátis de alta velocidade em todas as áreas.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-8">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Comodidades Compartilhadas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4 p-4 border border-stone-200 rounded-xl hover:border-teal-300 transition-colors">
                    <Utensils className="text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-stone-800">Espaço Gourmet Completo</h4>
                        <p className="text-stone-600 text-sm mt-1">
                            Equipado com cooktop, airfryer, micro-ondas, geladeira, torradeira e liquidificador. 
                            Perfeito para preparar suas refeições.
                        </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 border border-stone-200 rounded-xl hover:border-teal-300 transition-colors">
                    <Coffee className="text-orange-500 mt-1" size={24} />
                    <div>
                        <h4 className="font-bold text-stone-800">Política de Alimentação</h4>
                        <p className="text-stone-600 text-sm mt-1">
                            Não servimos café da manhã, mas você tem total liberdade para trazer seus alimentos e bebidas e utilizar nossa estrutura.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-teal-700 py-16 text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Pronto para relaxar em Natal?</h2>
        <p className="text-teal-100 mb-8 max-w-lg mx-auto">Garanta sua reserva com antecedência e aproveite o melhor custo-benefício de Ponta Negra.</p>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-4 px-10 rounded-full transition-all inline-block shadow-lg hover:shadow-amber-400/50 hover:scale-105 transform"
        >
          Reservar Agora via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Accommodations;