import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { GRID_COLUMNS } from "../../lib/gridConfig";
import { generateMockData } from "../../lib/mockData";
import { useGridData } from "../../hooks/useGridData"; 
import {
  Loader2,
  Play,
  Plus,
  Users,
  Calendar,
  Building2,
  Globe,
  Linkedin,
  Mail,
  AtSign,
  Target,
  Database,
  Phone,
  Link as LinkIcon,
  Type,
} from "lucide-react";

// Import Cells
import { IndexCell } from "./cells/IndexCell";
import { EntityCell } from "./cells/EntityCell";
import { CompanyCell } from "./cells/CompanyCell";
import { LinkCell } from "./cells/LinkCell";
import { WaterfallCell } from "./cells/WaterfallCell";
import { TagCell } from "./cells/TagCell";
import { StatusTextCell } from "./cells/StatusTextCell";
import { TextCell } from "./cells/TextCell";
import { SkeletonRow } from "../ui/SkeletonRow";

const CELL_COMPONENTS = {
  index: IndexCell,
  entity: EntityCell,
  company: CompanyCell,
  link: LinkCell,
  waterfall: WaterfallCell,
  tag: TagCell,
  status_text: StatusTextCell,
  error_text: StatusTextCell,
  text: TextCell,
  editable: TextCell,
  add_new: () => <div />,
};

const HEADER_ICONS = {
  users: Users,
  calendar: Calendar,
  building: Building2,
  globe: Globe,
  linkedin: Linkedin,
  mail: Mail,
  "at-sign": AtSign,
  target: Target,
  database: Database,
  phone: Phone,
  link: LinkIcon,
  text: Type,
  add_new: Plus,
};

export const VirtualGrid = () => {
  const { data, loading } = useGridData();
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 44,
    overscan: 5,
  });

  // --- HELPER: Header Render Function ---
  const renderHeader = () => (
    <div className="sticky top-0 z-20 flex bg-white border-b border-brand-border shadow-sm min-w-max">
      {GRID_COLUMNS.map((col, index) => {
        const IconComponent = HEADER_ICONS[col.icon] || Type;

        // Sticky Logic
        let stickyStyle = {};
        if (col.pinned) {
          stickyStyle = {
            position: "sticky",
            left: index === 0 ? 0 : 50,
            zIndex: 30,
            backgroundColor: "white",
          };
        }

        // 1. Sno Column: Checkbox + Play Icon
        if (col.id === "id") {
          return (
            <div
              key={col.id}
              className="flex items-center justify-center gap-2 px-3 py-2 border-r border-brand-border bg-gray-50"
              style={{ width: col.width, ...stickyStyle }}
            >
              <div className="w-4 h-4 rounded-[3px] border border-gray-300 bg-white" />
              <Play size={12} className="text-gray-300 fill-gray-300" />
            </div>
          );
        }

        // 2. Imported Data Column: Overlapping Icons
        if (col.id === "importedData") {
          return (
            <div
              key={col.id}
              className="flex items-center gap-2 px-3 py-2 border-r border-brand-border bg-gray-50"
              style={{ width: col.width, ...stickyStyle }}
            >
              <div className="relative flex items-center w-8 h-4 shrink-0">
                <div className="absolute left-0 z-10 w-5 h-5 bg-bit-light-blue rounded-full flex items-center justify-center border border-white">
                  <Users size={10} className="text-gray-600" />
                </div>
                <div className="absolute left-3 z-20 w-5 h-5 bg-green-50 rounded-full flex items-center justify-center border border-white">
                  <Building2 size={10} className="text-gray-600" />
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Imported Data
              </span>
            </div>
          );
        }

        // 3. Default Columns
        return (
          <div
            key={col.id}
            className="flex items-center justify-between px-3 py-2 border-r border-brand-border text-xs font-semibold text-gray-500 uppercase tracking-wide group"
            style={{ width: col.width, ...stickyStyle }}
          >
            <div className="flex items-center gap-2">
              <IconComponent size={14} className="text-gray-400" />
              <span>{col.label}</span>
            </div>

            {col.id !== "addNew" && (
              <div className="text-gray-400">
                {col.loading ? (
                  <Loader2
                    size={14}
                    className="animate-spin text-indigo-600"
                  />
                ) : (
                  <Play
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-indigo-600"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // --- RENDER LOADING STATE ---
  if (loading) {
    return (
      <div className="h-full w-full overflow-hidden bg-white select-none">
        <div className="h-full w-full overflow-auto scrollbar-thin">
           <div className="min-w-max">
              {/* 1. Reuse Header */}
              {renderHeader()}

              {/* 2. Render Skeletons */}
              {Array.from({ length: 15 }).map((_, i) => (
                <SkeletonRow key={i} />
              ))}
           </div>
        </div>
      </div>
    );
  }

  // --- RENDER LOADED STATE ---
  return (
    <div
      ref={parentRef}
      className="h-full w-full overflow-auto bg-white select-none scrollbar-thin"
    >
      <div
        className="relative min-w-max"
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
      >
        {/* 1. Reuse the Header */}
        {renderHeader()}

        {/* 2. Virtual Rows */}
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

                // Sticky Body Logic
                let stickyStyle = {};
                if (col.pinned) {
                  stickyStyle = {
                    position: "sticky",
                    left: index === 0 ? 0 : 50,
                    zIndex: 10,
                    backgroundColor: "white",
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