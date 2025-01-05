import React from 'react';
import { GymInfo } from './GymInfo';

export function Hero() {
  return (
    <div className="relative h-[60vh] mb-12">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?auto=format&fit=crop&q=80&w=2000"
          alt="Summit Climbing Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <GymInfo 
          name="Summit Climbing Gym"
          location="123 Granite Street, Boulder, CO"
        />
      </div>
    </div>
  );
}