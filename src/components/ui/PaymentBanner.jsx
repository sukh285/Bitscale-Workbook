import React from "react";
import infoIcon from "/info.svg";

export const PaymentBanner = () => {
  return (
    <div className="w-full bg-brand-red text-white px-4 py-3 flex items-center justify-center gap-6 text-sm font-medium text-center">
      {/* Text Group */}
      <div className="flex items-center gap-2">
        <span>
          Payment failed. 450,000 credits will permanently expire in 30 days
        </span>
        <img src={infoIcon} alt="Info" className="w-4 h-4 object-contain" />
      </div>

      {/* Pay Now Button */}
      <button className="bg-white text-gray-700 font-semibold py-[4px] px-[16px] rounded-lg shadow-shadow1 transition-transform hover:scale-105 active:scale-95">
        Pay Now
      </button>
    </div>
  );
};
