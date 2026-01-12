import React from "react";
import { MoreVertical } from "lucide-react";

export const GridTab = ({ label, active }) => {
  return (
    <div
      className={`relative px-4 py-3 flex items-center gap-2 max-w-[150px] cursor-pointer transition-colors ${
        active
          ? "text-blue-700 bg-blue-50/10"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {/* Active Indicator (Border Top) */}
      {active && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-700" />
      )}

      {/* Label with truncation */}
      <span className="text-sm font-medium truncate select-none">{label}</span>

      {/* Active Tab Menu Icon */}
      {active && <MoreVertical size={14} className="shrink-0 text-blue-700" />}
    </div>
  );
};
