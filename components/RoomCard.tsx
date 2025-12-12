import React from 'react';
import { Check, User, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de fazer uma reserva na Pousada Coco Verde para: ${room.name}`)}`;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-stone-100 hover:-translate-y-1`}>
      <div className="relative h-64 overflow-hidden group">
        <img 
          src="https://vngbdkjoaswckwszfscj.supabase.co/storage/v1/object/public/sites/quarto0.jpeg" 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-black/60 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2 rounded-tr-lg">
          <User size={16} /> {room.capacity}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-teal-800 mb-2">{room.name}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{room.description}</p>
        </div>

        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Comodidades</h4>
          <ul className="grid grid-cols-1 gap-2">
            {room.amenities.slice(0, featured ? 4 : undefined).map((amenity, idx) => (
              <li key={idx} className="flex items-center gap-2 text-stone-600 text-sm">
                <Check size={14} className="text-teal-500" />
                {amenity}
              </li>
            ))}
             {featured && room.amenities.length > 4 && (
                <li className="text-xs text-teal-600 font-semibold pl-6 pt-1">+ e muito mais...</li>
             )}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-stone-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <span className="text-xs text-stone-500 block">Diárias a partir de</span>
                    <span className="text-2xl font-extrabold text-teal-600">R$ {room.price}</span>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  Reservar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;