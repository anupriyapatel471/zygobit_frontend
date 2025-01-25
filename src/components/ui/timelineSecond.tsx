"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans lg:px-10"
      ref={containerRef}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 sm:text-center mb-0">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
          Our Proven Web App Development Process
        </h2>
        <p className="sm:font-medium  text-base sm:text-xl my-3">
          We have meticulously crafted a strategic roadmap, guiding you through
          each step with precision, to maximize the potential of your project
          and ensure its success.
        </p>
      </div>

      <div
        ref={ref}
        className="relative  w-full px-4 lg:px-[41px] mx-auto pb-20"
      >
        {data.map((item, index) => (
            <>
          <div className="flex justify-end">
            <div
              key={index}
              className="flex lg:w-1/2 justify-start pt-8 sm:pt-20 md:pt-20 md:gap-2"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute -left-[3px] sm:left-3  lg:-left-5 w-10 rounded-full bg-white flex items-center justify-center">
                  {/* <div className="h-4 w-4 rounded-fullbg-neutral-800 border border-neutral-700 p-2" /> */}
                </div>
                <h3 className="hidden md:block text-xl md:pl-[6rem] lg:pl-12 md:text-3xl lg:text-4xl font-bold text-white ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 sm:pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold ">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start">
            <div
              key={index}
              className="flex lg:w-1/2 justify-start pt-8 sm:pt-20 md:pt-20 md:gap-2"
            >
              <div className="order-2 lg:order-none relative pl-20 sm:pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold ">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
              <div className="order-1 lg:order-none sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <h3 className="hidden md:block text-xl pl-[6rem] lg:pl-[7rem] md:text-3xl lg:text-4xl font-bold text-white ">
                  {item.title}
                </h3>
                <div className="h-10 absolute -left-[3px] sm:left-3  lg:left-[94%] w-10 rounded-full bg-white flex items-center justify-center">
                  {/* <div className="h-4 w-4 rounded-fullbg-neutral-800 border border-neutral-700 p-2" /> */}
                </div>
              </div>
            </div>
          </div>
          </>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-12 lg:left-1/2 -translate-x-1/2 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-900 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
