import React from "react";
import bitLogo from "/bitlogo.svg";

export const SupportButton = () => {
  return (
    <button className="flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-2xl hover:bg-gray-200 transition-colors shadow-lg">
      <img src={bitLogo} className="w-5 h-5" alt="Bitscale" />

      <span className="text-sm font-medium text-gray-800">Support</span>
    </button>
  );
};
