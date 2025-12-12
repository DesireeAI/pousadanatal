import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a Pousada Coco Verde.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="pulse-ring fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="animate-bounce" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Reserve Agora
      </span>
    </button>
  );
};

export default WhatsAppButton;