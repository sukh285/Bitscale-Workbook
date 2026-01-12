import React from "react";

export const StatusTextCell = ({ value }) => {
  // value = { state: 'error'|'success'|'access_denied', value: '...' }
  const isError = value.state === "error";
  const isDenied = value.state === "access_denied";

  return (
    <div
      className={`w-full h-full flex items-center px-3 text-sm truncate ${
        isError
          ? "text-red-500 italic"
          : isDenied
          ? "text-gray-400 italic"
          : "text-gray-900"
      }
    `}
    >
      {value.value}
    </div>
  );
};
