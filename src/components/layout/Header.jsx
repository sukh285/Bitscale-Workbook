import React from "react";
import { CreditsDisplay } from "../ui/CreditsDisplay";
import { Breadcrumb } from "../ui/Breadcrumb";
import cloudIcon from "/cloud.svg";
import homeIcon from "/homeicon.svg";

export const Header = () => {
  return (
    <header
      className="
        w-full bg-white border-b border-brand-border
        flex items-center justify-between
        px-3 md:px-4
        h-14
        shrink-0
        gap-3
      "
    >
      {/* --- LEFT SIDE: Navigation --- */}
      <div className="flex items-center gap-3 min-w-0">
        <button className="flex items-center justify-center bg-gray-100 rounded-lg p-[5.33px] hover:bg-gray-200 transition-colors">
          <img
            src={homeIcon}
            alt="Home"
            className="w-4 h-4 object-contain opacity-80"
          />
        </button>

        <Breadcrumb />
      </div>

      {/* --- RIGHT SIDE: Actions --- */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <button className="p-1 hover:bg-gray-50 rounded transition-colors">
          <img
            src={cloudIcon}
            alt="Cloud status"
            className="w-5 h-5 object-contain"
          />
        </button>

        <CreditsDisplay />
      </div>
    </header>
  );
};
