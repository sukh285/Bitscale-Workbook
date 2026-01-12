import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { GRID_COLUMNS } from '../../lib/gridConfig';
import { generateMockData } from '../../lib/mockData';
import { 
  Loader2, Play, Plus, 
  Users, Calendar, Building, Globe, Linkedin, Mail, AtSign, Target, Database, Phone, Link as LinkIcon, Type 
} from 'lucide-react';

import { IndexCell } from './cells/IndexCell';
import { EntityCell } from './cells/EntityCell';
import { CompanyCell } from './cells/CompanyCell';
import { LinkCell } from './cells/LinkCell';
import { WaterfallCell } from './cells/WaterfallCell';
import { TagCell } from './cells/TagCell';
import { StatusTextCell } from './cells/StatusTextCell';
import { TextCell } from './cells/TextCell';

// 1. Icon Mapper for Headers
const HEADER_ICONS = {
  users: Users,
  calendar: Calendar,
  building: Building,
  globe: Globe,
  linkedin: Linkedin,
  mail: Mail,
  'at-sign': AtSign,
  target: Target,
  database: Database,
  phone: Phone,
  link: LinkIcon,
  text: Type,
  add_new: Plus
};

// 2. Cell Component Mapper
const CELL_COMPONENTS = {
  index: IndexCell,
  entity: EntityCell,
  company: CompanyCell,
  link: LinkCell,
  waterfall: WaterfallCell,
  tag: TagCell,
  status_text: StatusTextCell,
  error_text: StatusTextCell, // Re-use StatusText for errors
  text: TextCell,
  editable: TextCell, // Using TextCell for now
  add_new: () => <div /> // Empty cell for "Add New"
};

// Generate Data Once
const data = generateMockData(2000);

export const VirtualGrid = () => {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 44,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-full w-full overflow-auto bg-white select-none">
      
      <div 
        className="relative min-w-max"
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
      >
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="sticky top-0 z-20 flex bg-gray-50 border-b border-brand-border shadow-sm">
           {GRID_COLUMNS.map((col, index) => {
             const IconComponent = HEADER_ICONS[col.icon] || Type;
             
             // Sticky Logic Calculation
             let stickyStyle = {};
             if (col.pinned) {
               stickyStyle = {
                 position: 'sticky',
                 left: index === 0 ? 0 : 50, // 1st col at 0, 2nd col after 1st (50px)
                 zIndex: 30, // Higher than normal headers
                 backgroundColor: '#F9FAFB'
               };
             }

             return (
               <div 
                 key={col.id}
                 className="flex items-center justify-between px-3 py-2 border-r border-brand-border text-xs font-semibold text-gray-500 uppercase tracking-wide group"
                 style={{ width: col.width, ...stickyStyle }}
               >
                 {/* Left: Icon + Label */}
                 <div className="flex items-center gap-2">
                    <IconComponent size={14} className="text-gray-400" />
                    <span>{col.label}</span>
                 </div>

                 {/* Right: Conditional Spinner / Play Button */}
                 {col.id !== 'addNew' && col.id !== 'id' && (
                   <div className="text-gray-400">
                     {col.loading ? (
                        <Loader2 size={14} className="animate-spin text-indigo-600" />
                     ) : (
                        // Play button appears on hover (or stays if relevant)
                        <Play size={14} className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-indigo-600" />
                     )}
                   </div>
                 )}
               </div>
             );
           })}
        </div>

        {/* --- VIRTUAL BODY --- */}
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = data[virtualRow.index];
          
          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              className="absolute top-8 left-0 flex border-b border-brand-border hover:bg-gray-50 transition-colors"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                height: `${virtualRow.size}px`,
              }}
            >
              {GRID_COLUMNS.map((col, index) => {
                 const CellComponent = CELL_COMPONENTS[col.type] || TextCell;
                 
                 // Reuse sticky logic for cells
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
                      className="border-r border-brand-border h-full flex items-center bg-white group-hover:bg-gray-50"
                      style={{ width: col.width, ...stickyStyle }}
                   >
                      <CellComponent value={row[col.id]} />
                   </div>
                 );
              })}
            </div>
          );
        })}
        
      </div>
    </div>
  );
};