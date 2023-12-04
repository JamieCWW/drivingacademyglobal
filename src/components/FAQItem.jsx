"use client";

import React from "react";

import * as Accordion from "@radix-ui/react-accordion";

export function FAQItem({ question, answer, index }) {
  return (
    <Accordion.Item value={`item-${index}`} className="w-full">
      <Accordion.Trigger className="w-full border-t-2 px-2 py-4 text-start text-xl text-[#0D5E8A]">
        {question}
      </Accordion.Trigger>
      <Accordion.Content className="border-t-2 bg-gray-50 px-4 py-2">
        {answer}
      </Accordion.Content>
    </Accordion.Item>
  );
}
