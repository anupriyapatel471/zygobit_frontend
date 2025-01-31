import React from "react";
import { Timeline } from "@/components/ui/timelineThird";

export default function UiuxTimeline() {
  const data = [
    {
      title: "Setting Design Goals",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
            The initial phase involves defining the objectives of the design
            based on user needs and project requirements. This helps in aligning
            the UI and UX design services and solutions with user expectations
            and business goals.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 md:text-lg lg:text-xl">
            <li>Understanding User Preferences</li>
            <li>Market Trends Analysis</li>
            <li>Brand Alignment</li>
            <li>Mood Boards and Style Inspiration</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Setting Design Goals",
      content: (
        <div>
          <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
          The initial phase involves defining the objectives of the design based on user needs and project requirements. This helps in aligning the UI and UX design services and solutions with user expectations and business goals.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 md:text-lg lg:text-xl">
            <li>Understanding User Preferences</li>
            <li>Market Trends Analysis</li>
            <li>Brand Alignment</li>
            <li>Mood Boards and Style Inspiration</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Setting Design Goals",
      content: (
        <div>
          <p className=" text-sm md:text-lg lg:text-xl   mb-6">
          The initial phase involves defining the objectives of the design based on user needs and project requirements. This helps in aligning the UI and UX design services and solutions with user expectations and business goals.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 md:text-lg lg:text-xl">
            <li>Understanding User Preferences</li>
            <li>Market Trends Analysis</li>
            <li>Brand Alignment</li>
            <li>Mood Boards and Style Inspiration</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
