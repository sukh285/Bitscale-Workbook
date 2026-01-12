import React from 'react';
import { LoadDataButton } from './LoadDataButton';
import { GridFilter } from './GridFilter';
import { 
  List, 
  Columns, 
  ArrowUpDown, 
  Filter, 
  ChevronDown, 
  Sparkles 
} from 'lucide-react';

export const GridToolbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4 border-gray-200 border">
      
      {/* --- LEFT SECTION --- */}
      <div className="flex items-center gap-4">
        
        {/* 1. Load Data Component */}
        <LoadDataButton />

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 mx-1" />

        {/* 2. Filter Group */}
        <div className="flex items-center gap-3">
          <GridFilter icon={List} label="2000 Rows" active />
          <GridFilter icon={Columns} label="16/20 Columns" active />
          <GridFilter icon={ArrowUpDown} label="Sort by" active />
          <GridFilter icon={Filter} label="Filter" badgeValue="1" active />
        </div>

      </div>

      {/* --- RIGHT SECTION --- */}
      <div className="flex items-center gap-3">
        
        {/* 1. Action Button */}
        <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          <span className="text-sm font-medium text-gray-800">Action</span>
          <ChevronDown size={14} className="text-gray-700" />
        </button>

        {/* 2. Enrichment Button Group */}
        <div className="flex items-center gap-[2px]">
          {/* Main Button */}
          <button className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-l-lg hover:bg-gray-700 transition-colors">
             <Sparkles size={14} className="text-white" />
             <span className="text-sm font-medium">Enrichment</span>
          </button>
          
          {/* Dropdown Trigger */}
          <button className="bg-gray-800 text-white px-2 py-2.5 rounded-r-lg hover:bg-gray-700 transition-colors">
             <ChevronDown size={16} className="text-white" />
          </button>
        </div>

        {/* 3. Gradient Icon Button */}
        <button className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          style={{
             background: 'linear-gradient(to bottom left, #A855F7, #EA580C)' // Purple-500 to Orange-600
          }}
        >
          <Sparkles size={14} className="text-white" />
        </button>

      </div>

    </div>
  );
};