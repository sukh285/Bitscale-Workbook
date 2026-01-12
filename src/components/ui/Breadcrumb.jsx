import React from "react";
import starIcon from "/star.svg";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm min-w-0">
      <img
        src={starIcon}
        alt="Starred"
        className="w-4 h-4 object-contain shrink-0"
      />

      <div className="flex items-center gap-2 font-medium min-w-0">
        <span className="hidden sm:inline text-gray-400 truncate">
          Workbook - Bitscale UX / UI testing flow
        </span>

        <span className="hidden sm:inline text-gray-400">/</span>

        <div className="flex items-center gap-1 min-w-0">
          <span className="text-gray-700 truncate max-w-[160px] sm:max-w-none">
            Bitscale grid only
          </span>
          <span className="hidden sm:inline text-gray-400 tracking-widest">
            ...
          </span>
        </div>
      </div>
    </div>
  );
};
