import React from "react";
import { ScrollSection } from "../ScrollSection";
import { AboutUsCards } from "../AboutUsCards";

export function AboutUsSection() {
  return (
    <ScrollSection className="flex min-h-[50vh] flex-col items-center justify-start py-10">
      <div className="flex w-5/6 flex-col gap-10 text-center">
        <div>
          <strong>Welcome to the Driving Academy Global</strong>, Specialist
          Driver Training – your premier destination for top-tier, professional
          driver education. At our academy, we are committed to providing
          unparalleled quality in driver training, catering to a diverse range
          of needs.
        </div>
        <div className="flex justify-evenly py-4">
          <AboutUsCards
            title="Our Passion"
            iconIndex={0}
            descriptions="Fueling excellence, our high-quality driver training caters to novices and professionals. Tailored courses meet unique needs, ensuring skill enhancement for all."
          />
          <AboutUsCards
            title="Global Reach, Local Expertise"
            iconIndex={1}
            descriptions="
            Dedicated instructors offer personalized attention, shaping confident and responsible drivers. From basic skills to advanced maneuvers and corporate training, we empower students for any driving scenario."
          />
          <AboutUsCards
            title="Tailored Courses"
            iconIndex={2}
            descriptions="
            Tailored for beginners, experienced drivers, and corporate teams, our courses are customized to your needs. With global reach, our trainers adapt to diverse environments, ensuring effective and relevant training delivered directly to your location"
          />
        </div>
        Discover a new level of driving expertise with Driving Academy Global
        Specialist Driver Training – where our passion meets your driving needs.
      </div>
    </ScrollSection>
  );
}
