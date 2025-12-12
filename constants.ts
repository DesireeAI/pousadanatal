import { Wifi, Utensils, Dog, Waves, Wind, Tv, Coffee, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { Room, Amenity, LocationLink } from './types';

// Replace with actual number in production
export const WHATSAPP_NUMBER = "5584999999999"; 

export const COLORS = {
  primary: "teal-600",
  secondary: "emerald-500",
  accent: "amber-400",
  bg: "stone-50"
};

export const ROOMS: Room[] = [
  {
    id: "suite",
    name: "Suíte Casal/Dupla",
    capacity: "Até 2 pessoas",
    description: "Ideal para casais ou amigos. Aconchego e praticidade.",
    amenities: [
      "Cama de casal ou 02 de solteiro",
      "Ar condicionado split",
      "TV a cabo LED",
      "Geladeira",
      "Chuveiro elétrico",
      "Banheiro privativo"
    ],
    price: 120,
    image: "https://picsum.photos/id/164/800/600"
  },
  {
    id: "duplex-1",
    name: "Apto Duplex - 01 Quarto",
    capacity: "Até 3 pessoas",
    description: "Quarto triplo com cozinha privativa completa.",
    amenities: [
      "Quarto triplo",
      "Ar condicionado split",
      "TV a cabo LED",
      "Cozinha americana privativa",
      "Cooktop, geladeira e micro-ondas",
      "Utensílios completos"
    ],
    price: 150,
    image: "https://picsum.photos/id/188/800/600"
  },
  {
    id: "duplex-2",
    name: "Duplex Família - 02 Quartos",
    capacity: "Até 6 pessoas",
    description: "Espaço amplo para toda a família com 2 andares.",
    amenities: [
      "02 Quartos no piso superior",
      "Ar condicionado split (quartos)",
      "TV a cabo LED",
      "Cozinha americana no térreo",
      "Geladeira e Cooktop",
      "Micro-ondas e utensílios",
      "Banheiro no térreo"
    ],
    price: 250,
    image: "https://picsum.photos/id/235/800/600"
  }
];

export const MAIN_AMENITIES: Amenity[] = [
  {
    icon: Waves,
    title: "Piscina",
    description: "Aberta das 9h às 22h para seu lazer."
  },
  {
    icon: Utensils,
    title: "Churrasqueira & Gourmet",
    description: "Área completa disponível das 9h às 18h."
  },
  {
    icon: Wifi,
    title: "Wi-Fi Grátis",
    description: "Conexão de alta velocidade em toda a pousada."
  },
  {
    icon: Dog,
    title: "Pet Friendly",
    description: "Aceitamos seu pet de pequeno porte com carinho."
  }
];

export const NEARBY_LOCATIONS: LocationLink[] = [
  { name: "Praia de Ponta Negra (300m)", category: "Praia" },
  { name: "Morro do Careca (< 2km)", category: "Lazer" },
  { name: "Mercado de Ponta Negra", category: "Serviço" },
  { name: "Farmácias e Padarias", category: "Serviço" },
  { name: "Feira de Artesanato", category: "Lazer" },
  { name: "Restaurantes e Cafeterias", category: "Gastronomia" },
];
