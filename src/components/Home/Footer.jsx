import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Footer() {
  return (
    <footer className=" bg-[#333333]  text-gray-300">
      <div className="flex w-full justify-evenly gap-3 p-3 px-4 py-10">
        <div className="flex w-72 shrink-0 grow-0 flex-col gap-2">
          <h2 className="font-bold text-white underline">About Us: </h2>
          <p className="text-xs">
            Driving Academy Global: Elevating your skills with interactive
            training designed to meet customer needs and exceed quality
            objectives through our dynamic quality management system.
          </p>
        </div>
        <div className="flex w-60 list-none flex-col gap-2">
          <h2 className="font-bold text-white underline">Contact:</h2>

          <li className="flex shrink-0 grow-0 items-center justify-start gap-2 text-xs">
            <FontAwesomeIcon icon={faPhone} className="h-4" />
            +44(0)7469 700926
          </li>
          <li className="flex shrink-0 grow-0 items-center justify-start gap-2 text-xs">
            <FontAwesomeIcon icon={faEnvelope} className="h-4" />
            info@drivingacademyglobal.com
          </li>
        </div>
        <div className="flex w-60 list-none flex-col items-start justify-start gap-2">
          <h2 className="font-bold text-white underline">Opening Hours: </h2>

          <li className="flex w-full shrink-0 grow-0 items-start justify-between gap-2 text-xs">
            <span className="w-1/2">Monday-Friday:</span>
            <span>9:00 - 17:00</span>
          </li>
          <li className="flex w-full shrink-0 grow-0 items-start justify-between gap-2 text-xs">
            <span className="w-1/2 text-start">Saturday:</span>
            <span>10:00 - 14:00</span>
          </li>
          <li className="flex w-full shrink-0 grow-0 items-start justify-between gap-2 text-xs">
            <span className="w-1/2">Sunday:</span>
            <span>Closed</span>
          </li>
        </div>
      </div>
      <div className="bg-[#0D5E8A] px-2 py-4 text-xs italic">
        Copyright © 2023 Driving Academy Global - Website by Condor Web Works
        Ltd.
      </div>
    </footer>
  );
}
