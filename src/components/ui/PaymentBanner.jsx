import { Info } from "lucide-react";

export const PaymentBanner = () => {
  return (
    <div className="bg-brand-red text-white px-4 py-2 flex items-center justify-center gap-3 text-sm font-medium">
      <div className="flex items-center gap-2">
        <span>Payment failed. 450,000 credits will permanently expire in 30 days</span>
        <Info className="w-4 h-4 opacity-80" />
      </div>
      <button className="bg-white text-brand-red px-3 py-1 rounded text-xs font-bold hover:bg-gray-50 transition-colors">
        Pay Now
      </button>
    </div>
  );
};