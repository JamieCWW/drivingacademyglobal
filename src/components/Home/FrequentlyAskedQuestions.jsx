"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";

import * as Accordion from "@radix-ui/react-accordion";

import { SectionHeader } from "../SectionHeader";
import { FAQItem } from "../FAQItem";
import { ScrollSection } from "../ScrollSection";

export function FrequentlyAskedQuestions() {
  return (
    <ScrollSection className="flex min-h-[75vh] items-center justify-center">
      <div className="flex h-full w-full gap-2">
        <div className="flex w-1/2 flex-col items-center justify-center text-start">
          <div className="w-full px-10 text-start">
            <SectionHeader>Frequently Asked Questions</SectionHeader>
            Find answers to common questions about our driving courses,
            licensing procedures, and academy policies.
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-col items-start justify-start py-4">
          <Accordion.Root
            type="single"
            collapsible
            className="flex w-full flex-col"
          >
            <FAQItem
              question="Who supplies the vehicles?"
              answer="All training will take place in customer vehicles. Insurance must cover Driving Academy global Instructors, who may, as part of their role, be required to give short driving demonstration periods."
              index={0}
            />
            <FAQItem
              question="Can you provide female instructors?"
              answer="Yes – we can provide both male and female instructors to locations throughout the UK and the world. You can rest assured that all our instructors hold all the necessary formal qualifications, as well as being highly experienced communicators."
              index={1}
            />
            <FAQItem
              question="Whats your cancellation policy?"
              answer="Once confirmation of the booking has been received, Driving Academy Global reserves the right to implement the following cancellation policy.
              Confirmation of a booking will be deemed as acceptance by the client of the following cancellation terms:
              All costs incurred by Driving Academy Global, on behalf of the client, to any third party shall be paid in full subject to any cancellation agreements which will be agreed on at time of booking. Only costs authorized by the client will be actioned by Driving Academy Global.
              Regarding goods/services provided directly by Driving Academy Global, the following cancellation terms will apply. Within 14 days of booking date, no charge applies after 14 days, but within 14 days of course date, 50% of course fee will be charged. Cancellation of course within 14 days of the course date will incur a 75% charge. Cancellation on the day of the course or non-attendance will incur the full cost as though the course has taken place."
              index={2}
            />
            <FAQItem
              question="What are your payment terms?"
              answer="You will be invoiced after the training has taken place and payment will be expected within 30 days."
              index={3}
            />
          </Accordion.Root>
        </div>
      </div>
    </ScrollSection>
  );
}
