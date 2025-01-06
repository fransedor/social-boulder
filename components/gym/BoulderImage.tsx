import React from 'react';
import { Status } from './types';

interface ProblemImageProps {
  imageUrl: string;
  name: string;
  color: string;
  status: Status;
}

export function ProblemImage({ imageUrl, name, color, status }: ProblemImageProps) {
  return (
    <div className="relative h-48">
      <img 
        src={imageUrl} 
        alt={`Boulder problem: ${name}`}
        className={`w-full h-full object-cover ${status === 'inactive' ? 'grayscale opacity-75' : ''}`}
      />
      {status === 'inactive' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="px-4 py-2 bg-black/70 text-white rounded-md font-medium">
            Removed
          </span>
        </div>
      )}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1.5" 
        style={{ backgroundColor: color }} 
      />
    </div>
  );
}