import React from "react";
import { Timeline } from "@/components/ui/timelineThird";

export default function UiuxTimeline() {
  const data = [
    {
      title: "Setting Design Goals",
      content: (
        <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
          The initial phase involves defining the objectives of the design based
          on user needs and project requirements. This helps in aligning the UI
          and UX design services and solutions with user expectations and
          business goals.
        </p>
      ),
    },
    {
      title: "User Research & Analysis",
      content: (
        <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
          Conducting research to understand user behavior, expectations, and
          pain points for data-driven decisions.
        </p>
      ),
    },
    {
      title: "Wireframing & Prototyping",
      content: (
        <p className=" text-sm md:text-lg lg:text-xl   mb-6">
          Creating interactive wireframes and prototypes to refine functionality
          before development.
        </p>
      ),
    },
    {
      title: "Usability Testing",
      content: (
        <p className=" text-sm md:text-lg lg:text-xl   mb-6">
          Identifying areas for improvement through testing and optimizing the
          user experience.
        </p>
      ),
    },
  ];

  const data2 = [
    {
      title: "Visual Design & Branding",
      content: (
        <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
          Crafting visually appealing designs that align with brand identity.
        </p>
      ),
    },
    {
      title: "Interaction & Motion Design",
      content: (
        <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-6">
          Enhancing user engagement with seamless interactions and animations.
        </p>
      ),
    },
    {
      title: "Responsive & Adaptive Design",
      content: (
        <p className=" text-sm md:text-lg lg:text-xl   mb-6">
          Ensuring optimal performance across different devices and screen
          sizes.
        </p>
      ),
    },
    {
      title: "Design Handoff & Implementation",
      content: (
        <p className=" text-sm md:text-lg lg:text-xl   mb-6">
          Delivering high-quality, developer-friendly design assets for a smooth
          transition to development.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} data2={data2} />
    </div>
  );
}
