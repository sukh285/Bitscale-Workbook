import React from "react";

export const GridFilter = ({
  icon: Icon,
  label,
  active = false,
  badgeValue = null,
}) => {
  return (
    <div className="relative group">
      <button
        className="
          flex items-center gap-1.5
          px-2 py-1
          md:px-3 md:py-1
          bg-white border border-gray-200
          rounded-lg
          hover:bg-gray-50
          transition-colors
        "
      >
        {Icon && (
          <Icon size={14} className="text-gray-500 group-hover:text-gray-600" />
        )}

        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {label}
        </span>
      </button>

      {badgeValue && (
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-[9px] font-bold text-white border border-white z-10">
          {badgeValue}
        </div>
      )}

      {active && !badgeValue && (
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-700 rounded-full border border-white z-20" />
      )}
    </div>
  );
};
