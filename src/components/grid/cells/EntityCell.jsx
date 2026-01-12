import React from 'react';
import { Users, Building, PlayCircle } from 'lucide-react';

export const EntityCell = ({ value }) => {
  // value = { type: 'user' | 'company', value: 'Name' }
  const isCompany = value.type === 'company';
  
  return (
    <div className="w-full h-full flex items-center px-3 gap-2 group cursor-pointer">
      {/* Icon: Changes to Play Button on Hover */}
      <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
        <div className="group-hover:hidden text-gray-400">
           {isCompany ? <Building size={16} /> : <Users size={16} />}
        </div>
        <div className="hidden group-hover:block text-indigo-600">
           <PlayCircle size={18} />
        </div>
      </div>
      
      <span className="text-sm font-medium text-gray-900 truncate">
        {value.value}
      </span>
    </div>
  );
};