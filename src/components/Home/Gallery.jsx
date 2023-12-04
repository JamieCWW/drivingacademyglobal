import React from "react";

import Image from "next/image";

import { ScrollSection } from "../ScrollSection";

import imageOne from "../../../public/images/imageOne.jpeg";
import imageTwo from "../../../public/images/imageTwo.jpeg";
import imageThree from "../../../public/images/imageThree.jpeg";

export function Gallery() {
  return (
    <ScrollSection className=" flex flex-col items-center justify-center gap-3 bg-gray-100 p-4">
      <div className="flex items-center justify-center overflow-x-auto overflow-y-hidden">
        <Image
          src={imageOne}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageTwo}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageThree}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageOne}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageTwo}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageThree}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageOne}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageTwo}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageThree}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageOne}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageTwo}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
        <Image
          src={imageThree}
          alt="Gallery Image"
          className="h-auto w-1/4 shrink-0"
        />
      </div>
    </ScrollSection>
  );
}
