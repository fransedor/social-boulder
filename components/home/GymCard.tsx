import React from 'react';
import { Gym } from './types';

interface GymCardProps {
  gym: Gym;
}

export function GymCard({ gym }: GymCardProps) {
  return (
    <div className="relative h-96 rounded-lg overflow-hidden group">
      {/* Background Image */}
      <img 
        src={gym.imageUrl} 
        alt={gym.name}
        className="absolute w-full h-full object-cover"
      />
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      
      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Logo */}
        <div className="w-16 h-16 bg-white rounded-full p-2">
          <img 
            src={gym.logoUrl} 
            alt={`${gym.name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Gym Info */}
        <div>
          <h3 className="text-xl font-bold text-white">{gym.name}</h3>
          <p className="text-white/80 mt-1">{gym.distance} miles away</p>
        </div>
      </div>
    </div>
  );
}