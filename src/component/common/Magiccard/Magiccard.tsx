/* eslint-disable @next/next/no-img-element */
"use client";
import MagicCard from "@/components/ui/magic-card";
import Image from "next/image";
import arrowRight from "../../../../public/images/arrow_right.svg";

const cardData = [
  {
    title: "Custom Solution Architects",
    description:
      "Experts in building tailor-made technologies that align with your business objectives.",
    aos: "fade-right",
  },
  {
    title: "Application Innovators",
    description:
      "Skilled developers creating seamless, scalable software for modern challenges.",
    aos: undefined,
  },
  {
    title: "Performance Optimization Experts",
    description:
      "Specialists ensuring your digital solutions run smoothly, securely, and efficiently.",
    aos: "fade-left",
  },
];

export function MagicCardDemo() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3  w-full flex-col gap-4  lg:flex-row">
      {cardData.map(({ title, description, aos }, idx) => (
        <MagicCard
          key={idx}
          {...(aos ? { "data-aos": aos } : {})}
          className="bg-primaryBg p-4 lg:py-9 lg:px-6 border border-[#FFFFFF26] rounded-lg"
        >
          <div className="flex flex-wrap sm:flex-nowrap gap-y-3 items-center justify-between">
            <h3 className="w-full order-2 sm:order-none sm:w-[calc(100%-65px)] 2xl:w-[calc(100%-65px)] text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold tracking-tighter">
              {title}
            </h3>

            <button className="hidden sm:inline order-1 sm:order-none mb-0 w-[52px] text-white btn-primary bg-gradient-custom">
              <Image
                className="brightness-0 invert"
                width={20}
                height={10}
                src={arrowRight}
                alt="Arrow right"
              />
            </button>
          </div>
          <p className="font-[300] sm:font-normal text-sm sm:text-base mt-1.5 sm:mt-3">
            {description}
          </p>
        </MagicCard>
      ))}
    </div>
  );
}
