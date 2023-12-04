import React from "react";

import Image from "next/image";

// Correct import
// eslint-disable-next-line import/no-unresolved
import drivingInstructorImage from "../../public/images/drivinginstructor.jpg";
import driver from "../../public/images/driver.jpg";
import globe from "../../public/images/globe.jpg";

const iconVariant = [driver, globe, drivingInstructorImage];

export function AboutUsCards({ title, descriptions, iconIndex }) {
  return (
    <div className="relative flex h-72 min-h-[10rem] w-96  shrink-0 grow-0 flex-col gap-2 rounded-lg shadow-md shadow-slate-500">
      <Image
        src={iconVariant[iconIndex]}
        className="absolute left-0 top-0 h-full shrink-0 rounded-lg object-cover"
      />

      <div className=" absolute left-0 top-0 flex h-full w-full shrink-0 flex-col justify-evenly rounded-lg bg-gray-500/60	text-white	backdrop-blur-sm">
        <h4 className="mt-16 w-full text-center text-xl font-bold drop-shadow-lg">
          {title}
        </h4>
        <p className=" mb-0 mt-auto flex h-1/2 items-start justify-start rounded-b-lg bg-black/60 px-4 pt-4 text-justify text-sm backdrop-blur-lg">
          {descriptions}
        </p>
      </div>
    </div>
  );
}
