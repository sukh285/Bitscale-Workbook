import React from "react";
export const TextCell = ({ value }) => (
  <div className="w-full h-full flex items-center px-3 text-sm text-gray-600 truncate">
    {value || ""}
  </div>
);
