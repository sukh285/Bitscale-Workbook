import React from 'react';
import { ChevronDown, Users, Building2 } from 'lucide-react';

export const LoadDataButton = () => {
  return (
    <div className="relative group">
      
      {/* The Main Button */}
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-50 rounded-lg transition-colors">
        
        {/* Icons Frame */}
        <div className="relative flex items-center w-8 h-3">
           {/* Icon 1: Users (Bottom layer) */}
           <div className="absolute left-0 z-10 w-5 h-5 bg-bit-light-blue rounded-full flex items-center justify-center">
              <Users size={15} className="text-gray-600" />
           </div>
           
           {/* Icon 2: Building (Top layer) */}
           <div className="absolute left-3 z-20 w-5 h-5 bg-green-50 rounded-full flex items-center justify-center">
              <Building2 size={15} className="text-gray-600" />
           </div>
        </div>

        <span className="text-sm font-medium text-gray-800 ml-1">Load Data</span>
        
        <ChevronDown size={14} className="text-gray-700" />
      </button>

      {/* The Blue Badge Indicator */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-[9px] font-bold text-white border border-white z-30">
        1
      </div>

    </div>
  );
};