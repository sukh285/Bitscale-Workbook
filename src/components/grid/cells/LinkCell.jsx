import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

export const LinkCell = ({ value }) => {
  if (!value) return null;
  
  return (
    <div className="w-full h-full flex items-center px-3">
      <a 
        href={value} 
        target="_blank" 
        rel="noreferrer" 
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors w-full"
      >
        <ExternalLink size={14} className="shrink-0 text-gray-400" />
        
        <span className="truncate underline decoration-gray-300 underline-offset-2">
            {value}
        </span>
      </a>
    </div>
  );
};