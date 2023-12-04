import React from "react";

const styleVariant = {
  cta: "cursor-pointer rounded-lg bg-[#0D5E8A] px-10 py-4 text-white hover:bg-[#3d7ea1]",
  link: "cursor-point bg-transparent text-[#0D5E8A] underline hover:text-blue-400",
};

export function Button({ children, variant, ...buttonProps }) {
  return (
    <button
      className={`${styleVariant[variant]}`}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
