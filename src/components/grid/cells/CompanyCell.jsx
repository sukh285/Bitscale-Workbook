import React from 'react';

export const CompanyCell = ({ value }) => {
  // value = { name: 'Google', logo: '...' }
  return (
    <div className="w-full h-full flex items-center px-3 gap-2">
      <img 
        src={value.logo} 
        alt="" 
        className="w-5 h-5 rounded object-contain opacity-80"
        onError={(e) => e.target.style.display = 'none'} 
      />
      <span className="text-sm text-gray-900 truncate">
        {value.name}
      </span>
    </div>
  );
};