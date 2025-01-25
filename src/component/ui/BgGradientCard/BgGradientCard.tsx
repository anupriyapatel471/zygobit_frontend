"use client";
import React from "react";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientCard() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 px-4 lg:px-0">
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/responsive.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            UI/UX Consulting
          </h3>
          <p className="text-sm sm:text-base  ">
            We guide you through every step of the UI UX design process. Whether
            it's mobile app UI design or web design, our UI UX design
            consultants assist you with the best expertise.
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/prototyping.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            Prototyping
          </h3>
          <p className="text-sm sm:text-base  ">
            Our UI UX design agency creates prototypes to ensure usability,
            where we meticulously optimize page layouts, strategically arranging
            elements for a responsive digital experience.
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/figma_two.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            Web UI/UX Design
          </h3>
          <p className="text-sm sm:text-base  ">
            With our responsive web design services, we transform your online
            presence, ensuring that your web UI UX design is visually stunning,
            highly functional, and user-friendly.
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/mobile_app_two.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            Mobile App Design
          </h3>
          <p className="text-sm sm:text-base  ">
            Our expertise extends to mobile UI UX design for both iOS and
            Android platforms, ensuring that your applications deliver
            exceptional usability to retain users.
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/wireframe.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            Wireframing
          </h3>
          <p className="text-sm sm:text-base  ">
            Wireframing is a crucial element of UI UX design and development
            services, mapping out the structure and content of your
            applications, and providing a clear blueprint for development.
          </p>
        </div>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] size-full max-w-sm py-4 lg:py-16 border border-white hover:border-transparent bg-white/5 backdrop-blur-xl hover:bg-zinc-900">
        <span>
          <img src="/images/service.svg" alt="" />
        </span>
        <div className="w-full px-4 sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl my-3 sm:my-5 font-semibold ">
            UX UI Design Services
          </h3>
          <p className="text-sm sm:text-base  ">
            Zygobit specializes in UX UI design and UX UI services, making sure
            that the user interface and user experience of your applications are
            designed for an efficient and enjoyable user experience.
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}
