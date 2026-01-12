import React from "react";
import { Plus, ChevronLeft, ChevronRight, Delete } from "lucide-react";
import { GridTab } from "./GridTab";
import { GridFilter } from "./GridFilter";
import { SupportButton } from "../ui/SupportButton";
import { Zap, Shuffle } from "lucide-react";

const MOCK_TABS = [
  { id: 1, label: "Bitscale grid only", active: true },
  { id: 2, label: "User Engagement", active: false },
  { id: 3, label: "Customer Insights", active: false },
  { id: 4, label: "Audience Interaction", active: false },
  { id: 5, label: "Lead Generation", active: false },
];

export const GridFooter = () => {
  return (
    <div className="w-full bg-white border-t border-brand-border h-14 flex items-center justify-between px-4 shrink-0 z-20">
      {/* --- LEFT SECTION --- */}
      <div className="flex items-center gap-4">
        {/* 1. Add Grid Button */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors group">
          <Plus size={16} className="text-gray-800 group-hover:text-black" />
          <span className="text-sm font-semibold text-gray-800">Grid</span>
        </button>

        {/* 2. Tabs List */}
        <div className="flex items-start border-r border-gray-200 pr-2 mr-2">
          {MOCK_TABS.map((tab) => (
            <GridTab key={tab.id} label={tab.label} active={tab.active} />
          ))}
        </div>

        {/* 3. Navigation Arrows (Disabled/Active States) */}
        <div className="flex items-center gap-1">
          <button
            className="p-1 rounded hover:bg-gray-100 disabled:opacity-30"
            disabled
          >
            <ChevronLeft size={18} className="text-gray-400" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronRight size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* --- RIGHT SECTION --- */}
      <div className="flex items-center gap-4">
        {/* 1. Kill Run Button */}
        <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-red-50 rounded-lg transition-colors group">
          <Delete size={15} className="text-brand-red" />
          <span className="text-sm font-medium text-brand-red">Kill Run</span>
        </button>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-gray-200" />

        {/* 2. Action Buttons Group */}
        <div className="flex items-center gap-2">
          {/* Reusing GridFilter for uniform look */}
          <GridFilter icon={Zap} label="Auto Run" active />
          <GridFilter icon={Shuffle} label="Auto Dedupe" active />
        </div>

        {/* 3. Support Button */}
        <SupportButton />
      </div>
    </div>
  );
};
