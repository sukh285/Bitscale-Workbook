import React from "react";
import coinsIcon from "/coins.svg";

export const CreditsDisplay = () => {
  return (
    <div className="flex items-center bg-bit-light-green rounded-lg border border-transparent hover:border-brand-border transition-colors">
      <div className="flex items-center gap-2 py-1 px-2 md:pr-2 md:pl-2">
        {/* Coins + Count */}
        <div className="flex items-center gap-1.5">
          <img
            src={coinsIcon}
            alt="credits"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-medium text-bit-dark-green">
            500/500
          </span>
        </div>

        {/* Plan Badge (secondary info) */}
        <div className="hidden sm:inline bg-bit-dark-green text-white text-sm font-medium px-2.5 py-1.5 rounded-lg ml-2 leading-none">
          Free
        </div>
      </div>
    </div>
  );
};
