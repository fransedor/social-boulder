import React from 'react';
import { Grade } from './types';

interface GradeLabelProps {
  grade: Grade;
}

export function GradeLabel({ grade }: GradeLabelProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-bold bg-gray-800 text-white">
      {grade}
    </span>
  );
}