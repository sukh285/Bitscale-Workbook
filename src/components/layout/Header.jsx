import React from "react";
import { CreditsDisplay } from "../ui/CreditsDisplay";
import { Breadcrumb } from "../ui/Breadcrumb";
import cloudIcon from "/cloud.svg";
import homeIcon from "/homeicon.svg";

export const Header = () => {
  return (
    <header className="h-14 w-full bg-white border-b border-brand-border flex items-center justify-between px-4 shrink-0">
      {/* --- LEFT SIDE: Navigation --- */}
      <div className="flex items-center gap-4">
        {/* 1. Home Button */}
        <button className="flex items-center justify-center bg-gray-100 rounded-lg p-[5.33px] hover:bg-gray-200 transition-colors">
          <img
            src={homeIcon}
            alt="Home"
            className="w-4 h-4 object-contain opacity-80"
          />
        </button>

        {/* 2. Breadcrumb Component */}
        <Breadcrumb />
      </div>

      {/* --- RIGHT SIDE: Actions --- */}
      <div className="flex items-center gap-4">
        {/* Cloud Icon */}
        <button className="p-1 hover:bg-gray-50 rounded transition-colors">
          <img
            src={cloudIcon}
            alt="Cloud status"
            className="w-5 h-5 object-contain"
          />
        </button>

        {/* Credits Component */}
        <CreditsDisplay />
      </div>
    </header>
  );
};
