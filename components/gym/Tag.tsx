import React from 'react';
import { Tag as TagType } from './types';

interface TagProps {
  tag: TagType;
}

export function Tag({ tag }: TagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
      {tag}
    </span>
  );
}