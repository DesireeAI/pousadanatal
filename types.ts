import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  capacity: string;
  description: string;
  amenities: string[];
  price: number;
  image: string;
}

export interface Amenity {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export interface LocationLink {
  name: string;
  category: 'Praia' | 'Serviço' | 'Lazer' | 'Gastronomia';
}
