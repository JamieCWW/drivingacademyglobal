import React from "react";

export function ScrollSection({ children, className }) {
  return <section className={`w-screen ${className}`}>{children}</section>;
}
