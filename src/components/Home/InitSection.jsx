import React from "react";
import Image from "next/image";

import { ScrollSection } from "../ScrollSection";

import ImageBackground from "../../../public/images/pexels-mike-bird-192364.jpg";
import { Button } from "../Button";
import { ContactUsForm } from "./ContactUsForm";

export function InitSection() {
  return (
    <ScrollSection className="relative  -mt-40 flex h-[calc(100vh-2.5rem)] items-center">
      <div className="pointer-events-none absolute left-0 top-0 z-[10] h-[calc(100vh-2.5rem)] w-full bg-black/25">
        {" "}
      </div>
      <Image
        src={ImageBackground}
        className="pointer-events-none absolute left-0 top-0 h-[calc(100vh-2.5rem)]"
        alt="main background image"
      />
      <div className="absolute left-0 top-0 z-[20] mt-36 flex h-[calc(100vh-14rem)] w-full justify-evenly gap-2 px-4 text-start max-md:flex-col max-sm:flex-col ">
        <div className="flex shrink-0 grow flex-col items-start justify-center gap-7 pl-4 text-white max-md:h-1/2 max-sm:h-1/2">
          <h1 className="w-1/2 text-4xl">
            Elevate Your Driving Skills with{" "}
            <strong>Driving Academy Global</strong>
          </h1>
          <Button variant="cta" type="button">
            Courses
          </Button>
        </div>
        <div className="mr-10 flex w-full shrink-0 grow-0 items-center justify-center sm:h-1/2 md:h-full md:w-1/4 lg:h-full lg:w-1/4">
          <div className="flex h-3/4 min-h-0 w-full rounded-lg  bg-gray-600/25 p-2	 text-[#CCCCCC] shadow-lg shadow-slate-900 backdrop-blur-lg">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
