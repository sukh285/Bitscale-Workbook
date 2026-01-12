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
    <div
      className="
        w-full bg-white border-t border-brand-border
        flex items-center justify-between
        px-3 md:px-4
        h-14
        shrink-0 z-20
        flex-wrap md:flex-nowrap
        gap-3
      "
    >
      {/* --- LEFT SECTION --- */}
      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        {/* Add Grid Button */}
        <button
          className="
            flex items-center gap-1.5
            px-2 py-1
            md:px-3 md:py-1.5
            bg-gray-50 border border-gray-200
            rounded-lg hover:bg-gray-100
            transition-colors group
          "
        >
          <Plus size={14} className="md:size-[16px] text-gray-800 group-hover:text-black" />
          <span className="text-xs md:text-sm font-semibold text-gray-800">
            Grid
          </span>
        </button>

        {/* Tabs (hidden on small screens) */}
        <div className="hidden md:flex items-start border-r border-gray-200 pr-2 mr-2">
          {MOCK_TABS.map((tab) => (
            <GridTab key={tab.id} label={tab.label} active={tab.active} />
          ))}
        </div>

        {/* Navigation Arrows (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-1">
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
      <div
        className="
          flex items-center gap-3
          ml-auto
          flex-wrap sm:flex-nowrap
        "
      >
        {/* Kill Run (icon-only on small screens) */}
        <button
          className="
            flex items-center gap-2
            px-2 py-1
            md:px-3 md:py-1.5
            hover:bg-red-50 rounded-lg
            transition-colors group
          "
        >
          <Delete size={14} className="md:size-[15px] text-brand-red" />
          <span className="hidden sm:inline text-xs md:text-sm font-medium text-brand-red">
            Kill Run
          </span>
        </button>

        {/* Divider (desktop only) */}
        <div className="hidden md:block h-6 w-px bg-gray-200" />

        {/* Action Filters (hidden on small screens) */}
        <div className="hidden sm:flex items-center gap-2">
          <GridFilter icon={Zap} label="Auto Run" active />
          <GridFilter icon={Shuffle} label="Auto Dedupe" active />
        </div>

        {/* Support Button (always visible) */}
        <SupportButton />
      </div>
    </div>
  );
};
