import React from 'react';
import { GRID_COLUMNS } from '../../lib/gridConfig';

export const SkeletonRow = () => {
  return (
    <div className="flex border-b border-brand-border h-[44px] animate-pulse">
      {GRID_COLUMNS.map((col, index) => {
        let stickyStyle = {};
        if (col.pinned) {
            stickyStyle = {
                position: 'sticky',
                left: index === 0 ? 0 : 50,
                zIndex: 10,
                backgroundColor: 'white' 
            };
        }

        return (
          <div 
            key={col.id}
            className="border-r border-brand-border h-full flex items-center px-3 bg-white"
            style={{ width: col.width, ...stickyStyle }}
          >
            <div 
              className="bg-gray-100 rounded h-4" 
              style={{ width: `${Math.random() * 40 + 40}%` }} // Random width between 40-80%
            />
          </div>
        );
      })}
    </div>
  );
};