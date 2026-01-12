import React from 'react';

export const IndexCell = ({ value }) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
      {value}
    </div>
  );
};