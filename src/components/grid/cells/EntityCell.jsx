import React from "react";
import { Users, Building2, ChevronRight } from "lucide-react";

export const EntityCell = ({ value }) => {
  // value = { type: 'user' | 'company', value: 'Name' }
  const isCompany = value.type === "company";

  return (
    <div className="w-full h-full flex items-center px-4 py-2">
      {/* The Inner Container */}
      <div
        className={`
         w-full h-full flex items-center justify-between px-2 rounded-full border transition-colors cursor-pointer group
         ${
           isCompany
             ? "bg-bit-light-green border-green-100 text-gray-700"
             : "bg-bit-light-blue border-blue-100 text-gray-700"
         }
      `}
      >
        {/* Left: Icon + Name */}
        <div className="flex items-center gap-2 truncate">
          <div className="shrink-0 text-gray-500">
            {isCompany ? <Building2 size={14} /> : <Users size={14} />}
          </div>
          <span className="text-sm font-medium truncate">{value.value}</span>
        </div>

        {/* Right: Chevron */}
        <ChevronRight size={14} className="text-gray-400 shrink-0" />
      </div>
    </div>
  );
};
