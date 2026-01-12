import React from "react";
import { ExternalLink } from "lucide-react";

export const LinkCell = ({ value }) => {
  if (!value) return null;

  return (
    <div className="w-full h-full flex items-center px-3">
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-indigo-600 hover:underline flex items-center gap-1 truncate"
      >
        <span className="truncate">{value}</span>
        <ExternalLink size={12} className="shrink-0" />
      </a>
    </div>
  );
};
