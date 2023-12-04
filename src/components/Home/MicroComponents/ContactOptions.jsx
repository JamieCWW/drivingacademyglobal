import {
  faEnvelope,
  faPhone,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const iconVariant = {
  NUMBER: faPhone,
  EMAIL: faEnvelope,
  LOCATION: faMapLocationDot,
};

export function ContactOptions({ label, children }) {
  return (
    <li className="my-2 flex h-1/3 w-full list-none flex-col justify-evenly border-b-8 border-b-teal-600 bg-white px-6 py-2 text-center text-[#CCCCCC]">
      <FontAwesomeIcon icon={iconVariant[label]} className="text-3xl" />
      {children}
    </li>
  );
}
