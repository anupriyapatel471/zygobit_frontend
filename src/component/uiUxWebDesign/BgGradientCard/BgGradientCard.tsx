"use client";
import React from "react";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import Image from "next/image";
// import Image from "next/image";

const cardData = [
  {
    imgSrc: "/images/responsive.svg",
    alt: "Responsive Design",
    title: "UI/UX Consulting",
    description:
      "We guide you through every step of the UI UX design process. Whether it's mobile app UI design or web design, our UI UX design consultants assist you with the best expertise.",
  },
  {
    imgSrc: "/images/prototyping.svg",
    alt: "Prototyping",
    title: "Prototyping",
    description:
      "Our UI UX design agency creates prototypes to ensure usability, where we meticulously optimize page layouts, strategically arranging elements for a responsive digital experience.",
  },
  {
    imgSrc: "/images/figma_two.svg",
    alt: "Figma Design",
    title: "Web UI/UX Design",
    description:
      "With our responsive web design services, we transform your online presence, ensuring that your web UI UX design is visually stunning, highly functional, and user-friendly.",
  },
  {
    imgSrc: "/images/mobile_app_two.svg",
    alt: "Mobile App Design",
    title: "Mobile App Design",
    description:
      "Our expertise extends to mobile UI UX design for both iOS and Android platforms, ensuring that your applications deliver exceptional usability to retain users.",
  },
  {
    imgSrc: "/images/wireframe.svg",
    alt: "Wireframing",
    title: "Wireframing",
    description:
      "Wireframing is a crucial element of UI UX design and development services, mapping out the structure and content of your applications, and providing a clear blueprint for development.",
  },
  {
    imgSrc: "/images/service.svg",
    alt: "UX/UI Design Services",
    title: "UX UI Design Services",
    description:
      "Zygobit specializes in UX UI design and UX UI services, making sure that the user interface and user experience of your applications are designed for an efficient and enjoyable user experience.",
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
              width={325} 
              height={381}
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
