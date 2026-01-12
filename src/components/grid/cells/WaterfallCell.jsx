import React from "react";
import { Check, X, Loader2 } from "lucide-react";

export const WaterfallCell = ({ value }) => {
  // value = { state: 'found'|'missing'|'loading'|'error', label: '...' }

  const { state, label } = value;

  if (state === "loading" || state === "queued" || state === "pending") {
    return (
      <div className="px-3 text-gray-400 italic text-sm">
        {label || "Loading..."}
      </div>
    );
  }

  if (state === "missing") {
    return <div className="px-3 text-orange-400 italic text-sm">{label}</div>;
  }

  if (state === "error") {
    return (
      <div className="px-3 flex items-center gap-2 text-sm text-gray-500">
        <X size={14} className="text-red-500" />
        <span>{label}</span>
      </div>
    );
  }

  // Found State
  return (
    <div className="mx-3 flex items-center gap-2 px-2 py-1 rounded-full text-sm font-medium bg-green-50 border border-green-200 w-fit">
      <div className="bg-green-600 rounded-full p-0.5">
        <Check size={10} className="text-white" />
      </div>
      <span className="text-green-700">{label}</span>
    </div>
  );
};
