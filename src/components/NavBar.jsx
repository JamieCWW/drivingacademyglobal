import Link from "next/link";
import React from "react";
import Image from "next/image";

import DAG from "../../public/images/DAGLogo.png";

export function NavBar() {
  return (
    <>
      <div className="absolute right-4 top-2 z-40 text-white">
        Tel: 01234 123 123
      </div>

      <nav className="sticky top-4 z-40 mx-4 my-10 flex h-20 justify-center text-white">
        <div className="flex grow items-center justify-evenly bg-[#333333] p-3 px-4 shadow-md shadow-slate-700">
          <Image
            src={DAG}
            className="h-16 w-auto"
            alt="Driving Academy Global Logo"
          />
          <Link href="/">Home</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Seminars</Link>
          <Link href="/">FleetAdmin</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}
