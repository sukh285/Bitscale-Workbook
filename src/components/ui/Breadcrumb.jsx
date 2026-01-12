import React from "react";
import starIcon from "/star.svg";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {/* Star Icon */}
      <img src={starIcon} alt="Starred" className="w-4 h-4 object-contain" />

      {/* Breadcrumb Text Flow */}
      <div className="flex items-center gap-2 font-medium">
        <span className="text-gray-400">
          Workbook - Bitscale UX / UI testing flow
        </span>
        <span className="text-gray-400">/</span>

        {/* Active Item */}
        <div className="flex items-center gap-1">
          <span className="text-gray-700">Bitscale grid only</span>
          {/* "More Options" dots */}
          <span className="text-gray-400 tracking-widest">...</span>
        </div>
      </div>
    </div>
  );
};
