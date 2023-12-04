import React from "react";

export function Input({ children, label, placeholder, ...inputProps }) {
  return (
    <div className="relative flex w-full py-4">
      <input
        {...inputProps}
        placeholder={placeholder}
        className="peer w-full rounded-lg border border-slate-500 bg-gray-600 p-2 outline-none placeholder:text-transparent"
      />
      <label className="pointer-events-none absolute left-2 top-1 rounded-lg bg-gray-600 px-3 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:-translate-y-1/2">
        {label}
      </label>
    </div>
  );
}
