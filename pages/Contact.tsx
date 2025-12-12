import React, { useState } from 'react';
import { MapPin, Clock, Dog, Info, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkin: '',
    checkout: '',
    guests: '',
    roomType: 'Suite',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `
*Nova Solicitação de Reserva - Site*
--------------------------------
*Nome:* ${formData.name}
*Check-in:* ${formData.checkin}
*Check-out:* ${formData.checkout}
*Pessoas:* ${formData.guests}
*Quarto:* ${formData.roomType}
--------------------------------
*Mensagem:* ${formData.message}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-stone-800 mb-4">Fale Conosco</h1>
          <p className="text-stone-600">Estamos prontos para atender você. Preencha o formulário ou chame no WhatsApp.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-teal-800 mb-6 flex items-center gap-2">
              <Send size={24} /> Pré-Reserva
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Check-in</label>
                  <input 
                    required
                    type="date" 
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Check-out</label>
                  <input 
                    required
                    type="date" 
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Nº Pessoas</label>
                  <input 
                    required
                    type="number" 
                    name="guests"
                    min="1"
                    max="6"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    placeholder="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Acomodação</label>
                  <select 
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                  >
                    <option value="Suíte (2 pessoas)">Suíte (2 pessoas)</option>
                    <option value="Duplex 1 Quarto (3 pessoas)">Duplex 1 Quarto (3 pessoas)</option>
                    <option value="Duplex 2 Quartos (6 pessoas)">Duplex 2 Quartos (6 pessoas)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Mensagem (Opcional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Dúvidas ou pedidos especiais..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2"
              >
                 Solicitar via WhatsApp
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-teal-500">
                <Clock className="text-teal-600 mb-2" size={28} />
                <h3 className="font-bold text-lg text-stone-800">Horários</h3>
                <p className="text-sm text-stone-600 mt-2">
                  <strong>Piscina:</strong> 09h às 22h<br/>
                  <strong>Churrasqueira:</strong> 09h às 18h
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-400">
                <Dog className="text-amber-500 mb-2" size={28} />
                <h3 className="font-bold text-lg text-stone-800">Pet Friendly</h3>
                <p className="text-sm text-stone-600 mt-2">
                  Seu pet de pequeno porte é muito bem-vindo aqui! Avise na reserva.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
                <Info className="text-blue-500 flex-shrink-0" size={24} />
                <div>
                    <h4 className="font-bold text-blue-900">Sobre Alimentação</h4>
                    <p className="text-blue-800 text-sm mt-1">
                        Não servimos café da manhã. Fique à vontade para trazer seus alimentos. Oferecemos cozinha gourmet completa.
                    </p>
                </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm h-80 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.035415309724!2d-35.1762!3d-5.8783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff6555555555%3A0x5555555555555555!2sPonta%20Negra%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa de Localização"
                className="rounded-xl"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded shadow text-xs font-bold flex items-center gap-1">
                <MapPin size={12} className="text-red-500" /> Ponta Negra, Natal - RN
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;