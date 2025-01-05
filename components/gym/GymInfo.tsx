import React from 'react';
import { MapPin } from 'lucide-react';

interface GymInfoProps {
  name: string;
  location: string;
}

export function GymInfo({ name, location }: GymInfoProps) {
  return (
    <div className="relative z-10">
      <h1 className="text-5xl font-bold text-white mb-4">{name}</h1>
      <div className="flex items-center text-white/90">
        <MapPin size={20} className="mr-2" />
        <p className="text-lg">{location}</p>
      </div>
    </div>
  );
}