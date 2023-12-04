import React from "react";
import { ScrollSection } from "../ScrollSection";
import { Button } from "../Button";
import { CourseItems } from "./CoursesItems";
import { SectionHeader } from "../SectionHeader";

export function Courses() {
  return (
    <ScrollSection className="flex w-full flex-col items-center justify-center bg-gray-100 py-4">
      <SectionHeader>Courses</SectionHeader>

      <div className="grid h-full max-h-[100vh] w-2/3 auto-rows-fr grid-cols-2">
        <div className="row-span-3">
          <CourseItems index={0} feature />
        </div>
        <div className="">
          <CourseItems index={1} />
        </div>
        <div className="">
          <CourseItems index={2} />
        </div>
        <div className="">
          <CourseItems index={3} />
        </div>
      </div>
      <Button type="button" variant="link">
        Click here to view all courses
      </Button>
    </ScrollSection>
  );
}
