import React from "react";

import DAG from "../../public/images/DAGLogo.png";

export const metadata = {
  title: "Home",
  description: "Global Driving Academy. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
