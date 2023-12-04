import React from "react";

export function TextField({ label, placeholder }) {
  return (
    <div className="relative mt-3 h-full">
      <textarea
        name=""
        id=""
        placeholder={placeholder}
        className="peer h-full w-full resize-none  rounded-lg border border-slate-500 bg-gray-600 p-2 outline-none placeholder:text-transparent"
      />
      <label className="pointer-events-none absolute left-2 -translate-y-1/2 rounded-lg bg-gray-600 px-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2">
        {label}
      </label>
    </div>
  );
}
