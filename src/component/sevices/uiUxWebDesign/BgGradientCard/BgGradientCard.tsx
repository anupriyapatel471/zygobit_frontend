"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const cardData = [
  {
    imgSrc: "/images/responsive.svg",
    alt: "Responsive Design",
    title: "UI/UX Consulting",
    description:
      "We guide you through the entire UI/UX design process, from research to implementation, ensuring a strategic and user-friendly experience tailored to your needs.",
  },
  {
    imgSrc: "/images/prototyping.svg",
    alt: "User Research & Analysis",
    title: "User Research & Analysis",
    description:
      "We conduct in-depth research to understand user behavior, pain points, and expectations, enabling data-driven design decisions for optimal engagement.",
  },
  {
    imgSrc: "/images/figma_two.svg",
    alt: "Wireframing & Prototyping",
    title: "Wireframing & Prototyping",
    description:
      "Our team crafts interactive wireframes and prototypes to visualize user journeys and refine functionality before development.",
  },
  {
    imgSrc: "/images/mobile_app_two.svg",
    alt: "Mobile & Web UI/UX Design",
    title: "Mobile & Web UI/UX Design",
    description:
      "We design responsive, engaging, and conversion-driven UI/UX solutions for websites and mobile applications, enhancing accessibility and usability.",
  },
  {
    imgSrc: "/images/wireframe.svg",
    alt: "Interaction & Motion Design",
    title: "Interaction & Motion Design",
    description:
      "We create dynamic, intuitive animations and interactions that improve engagement and provide a seamless, enjoyable user experience.",
  },
  {
    imgSrc: "/images/service.svg",
    alt: "Usability Testing & Optimization",
    title: "Usability Testing & Optimization",
    description:
      "Our usability testing ensures that your product delivers an intuitive and frictionless experience, identifying and refining areas for improvement.",
  },
];

export function BackgroundGradientCard() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 px-4 lg:px-0">
      {cardData.map((card, index) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900"
        >
          <span>
            <Image
              src={card.imgSrc}
              alt={card.alt}
              // layout="intrinsic"
              width={70}
              height={70}
              className="object-contain" // Ensures no distortion
            />
            {/* <img src={card.imgSrc} alt={card.alt} /> */}
          </span>
          <div className="w-full px-4 sm:px-6">
            <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base">{card.description}</p>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
}
