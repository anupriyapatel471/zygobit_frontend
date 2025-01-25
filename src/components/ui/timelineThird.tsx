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
    <div className="w-full bg-black font-sans lg:px-10" ref={containerRef}>
      <div className="w-full px-4 sm:px-8 lg:px-16 sm:text-center mb-0">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
          We Follow a Comprehensive UI UX Design Process
        </h2>
        <p className="sm:font-medium  text-base sm:text-xl my-3">
          As a leading mobile UI UX design services company we meticulously
          follow the steps to fine-tune every aspect of your project, ensuring
          that the user experience is finely crafted to meet your business goals
          and exceed expectations.
        </p>
      </div>

      <div className="w-full mt-10 sm:mt-14 lg:mt-20  mb-0 flex justify-between px-4 sm:px-10 lg:px-12 ">
        <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl">
          UX Design Process
        </h3>
        <h3 className="font-semibold hidden lg:inline-block text-lg sm:text-xl lg:text-2xl">
          UI Design Process
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div
          ref={ref}
          className="relative  w-full px-4 lg:px-[41px] mx-auto pb-20"
        >
          {data.map((item, index) => (
            <>
              <div className="flex justify-start">
                <div
                  key={index}
                  className="flex lg:w-full justify-start pt-8 sm:pt-20 md:pt-20 md:gap-2">
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-40 self-start">
                    <h3 className="hidden md:block text-base sm:pl-16 lg:pl-auto lg:pr-20 md:text-lg lg:text-xl font-semibold w-[253px] text-white ">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 sm:h-10 absolute left-0 sm:left-3  lg:left-[180px] sm:w-10 rounded-full bg-primaryBg border border-white flex items-center justify-center">
                      {/* <div className="h-4 w-4 rounded-fullbg-neutral-800 border border-neutral-700 p-2" /> */}
                    </div>
                  </div>
                  <div className="relative pl-11 sm:pl-0 pr-0 sm:pr-5 lg:pr-8 w-full">
                    <h3 className="md:hidden block text-xl mb-4 text-left font-semibold ">
                      {item.title}
                    </h3>
                    {item.content}{" "}
                  </div>
                </div>
              </div>
            </>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute sm:left-12 lg:left-[240px]  left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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

        <div className="w-full mt-0  inline-block lg:hidden mb-0  justify-between px-4 sm:px-10 lg:px-12 ">
          <h3 className="font-semibold  text-lg sm:text-xl lg:text-2xl">
            UI Design Process
          </h3>
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
                  className="flex lg:w-full justify-start pt-8 sm:pt-20 md:pt-20 md:gap-2"
                >
                  <div className="relative order-2 lg:order-none pl-11 sm:pl-0 pr-0 sm:pr-5 lg:pr-14 w-full">
                    <h3 className="md:hidden block text-xl mb-4 text-left font-semibold ">
                      {item.title}
                    </h3>
                    {item.content}{" "}
                  </div>
                  <div className="sticky order-1 lg:order-none flex flex-col md:flex-row z-40 items-center top-24 sm:top-40 self-start">
                    <div className="w-8 h-8 sm:h-10 absolute left-0 sm:left-3  lg:-left-[50px] sm:w-10 rounded-full bg-primaryBg border border-white flex items-center justify-center">
                      {/* <div className="h-4 w-4 rounded-fullbg-neutral-800 border border-neutral-700 p-2" /> */}
                    </div>
                    <h3 className="hidden md:block text-base md:pl-16 lg:pl-12 md:text-lg lg:text-xl font-semibold w-[253px] lg:w-[200px] text-white ">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 sm:left-12 lg:left-auto lg:right-[270px]  right-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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
    </div>
  );
};
