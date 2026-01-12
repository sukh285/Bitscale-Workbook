import React from "react";
import { LoadDataButton } from "./LoadDataButton";
import { GridFilter } from "./GridFilter";
import {
  List,
  Columns,
  ArrowUpDown,
  Filter,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export const GridToolbar = () => {
  return (
    <div
      className="
        flex w-full border border-gray-200
        px-3 py-3
        md:px-4 md:py-4
        lg:flex-nowrap flex-wrap
        gap-3
      "
    >
      {/* --- LEFT SECTION --- */}
      <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
        {/* Load Data */}
        <LoadDataButton />

        {/* Divider (hide on small screens) */}
        <div className="hidden md:block h-6 w-px bg-gray-300 mx-1" />

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <GridFilter icon={List} label="2000 Rows" active />
          <GridFilter icon={Columns} label="16/20 Columns" active />
          <GridFilter icon={ArrowUpDown} label="Sort by" active />
          <GridFilter icon={Filter} label="Filter" badgeValue="1" active />
        </div>
      </div>

      {/* --- RIGHT SECTION --- */}
      <div
        className="
          flex items-center gap-2
          ml-auto
          flex-wrap
          sm:flex-nowrap
        "
      >
        {/* Action Button */}
        <button
          className="
            flex items-center gap-1.5
            bg-gray-100
            px-2 py-1.5
            md:px-3 md:py-2
            rounded-lg
            hover:bg-gray-200
            transition-colors
          "
        >
          <span className="text-xs md:text-sm font-medium text-gray-800">
            Action
          </span>
          <ChevronDown size={12} className="md:size-[14px] text-gray-700" />
        </button>

        {/* Enrichment Group */}
        <div className="flex items-center gap-[1px]">
          <button
            className="
              flex items-center gap-1.5
              bg-gray-800 text-white
              px-2 py-1.5
              md:px-3 md:py-2
              rounded-l-lg
              hover:bg-gray-700
              transition-colors
            "
          >
            <Sparkles size={12} className="md:size-[14px]" />
            <span className="text-xs md:text-sm font-medium">Enrichment</span>
          </button>

          <button
            className="
              bg-gray-800 text-white
              px-2 py-1.5
              md:py-2.5
              rounded-r-lg
              hover:bg-gray-700
              transition-colors
            "
          >
            <ChevronDown size={14} className="md:size-[16px]" />
          </button>
        </div>

        {/* Gradient Icon */}
        <button
          className="
            relative
            w-8 h-8
            md:w-9 md:h-9
            rounded-full
            flex items-center justify-center
            transition-transform
            hover:scale-110
            shadow-sm
          "
          style={{
            background: "linear-gradient(to bottom left, #A855F7, #EA580C)",
          }}
        >
          <Sparkles size={12} className="md:size-[14px] text-white" />
        </button>
      </div>
    </div>
  );
};
