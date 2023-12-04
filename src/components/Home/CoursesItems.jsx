import Link from "next/link";
import React from "react";

import Courses from "../../courses.json";

export function CourseItems({ index, feature }) {
  return (
    <div
      className={`flex h-full w-full gap-4 overflow-hidden ${
        feature ? "flex-col" : ""
      }`}
    >
      <div className={`flex ${feature ? "h-1/2" : "w-1/2"} p-2`}>
        <div className="h-full w-full bg-gray-600">Image</div>
      </div>
      <div
        className={`flex ${feature ? "h-1/2" : "w-1/2"} flex-col gap-2 px-2`}
      >
        <h4 className="ml-0 mr-auto px-2 text-xl font-bold">
          {Courses[index].Name}
        </h4>
        <div className="flex justify-start gap-2 px-2">
          {Courses[index].Types.map((el) => (
            <span key={el} className=" bg-gray-300 px-2 text-sm">
              {el}
            </span>
          ))}
        </div>
        <p className="mb-2 h-full min-h-0 overflow-hidden text-ellipsis px-2">
          {Courses[index].LandingDescription}
        </p>

        <Link
          href={`/Courses/${Courses[index].Name}`}
          className="mb-2 w-28 bg-[#0D5E8A] p-2 text-start text-white hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
