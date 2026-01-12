import React from "react";

export const TagCell = ({ value }) => {
  const isICP = value === "ICP";
  return (
    <div className="w-full h-full flex items-center px-3">
      <span
        className={`
          text-xs font-semibold px-2 py-0.5 rounded" ${
            isICP ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
          }
       `}
      >
        {value}
      </span>
    </div>
  );
};
