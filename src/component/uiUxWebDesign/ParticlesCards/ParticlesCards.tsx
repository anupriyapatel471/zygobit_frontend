"use client";

import { useState } from "react";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";


const cardData = [
  {
    id: 1,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 2,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 3,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 4,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 5,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 6,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 7,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 8,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 9,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
];
export function ParticlesCards() {
  const [color, setColor] = useState("#fff"); // Default color
  
  return (
    <>
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative px-4 py-4 sm:px-11 sm:py-6 border border-white rounded-lg flex w-full flex-col items-center justify-center overflow-hidden"
          >
            <div className="z-10 whitespace-pre-wrap sm:text-center w-full">
              <span>
                {/* <img className="sm:mx-auto" src={card.imgSrc} alt="" /> */}
                <Image
                  className="sm:mx-auto"
                  src={card.imgSrc}
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-4">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base">{card.description}</p>
            </div>
            <Particles
              className="absolute size-full inset-0 z-0"
              quantity={100}
              ease={10}
              color={color}
              refresh
            />
          </div>
        ))}
      </div>
    </>
  );
}
