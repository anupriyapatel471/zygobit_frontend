"use client";
import React, { SVGProps } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function BusinessCards() {
  return (
    <>
    <div className="w-full absolute top-3 sm:top-6 left-1/2 -translate-x-1/2 ">
          <div className="w-full px-4 sm:px-0 sm:text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-[45px] 2xl:text-5xl font-bold">
              Revolutionizing Businesses with Excellence & Expertise
            </h2>
          </div>
          <div className="w-full px-4 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-row items-center justify-center  w-full gap-4 mx-auto px-4 lg:px-0">
        <Card title="Strategic Business Solutions" data-aos="flip-left">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
         
        </Card>
        <Card title="Advanced Technological Integration" data-aos="flip-left">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Innovative Problem-Solving Approach" data-aos="flip-left">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
        </Card>
        <Card title="Agile, Collaborative Process" data-aos="flip-left">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-orange-900"
            colors={[[251, 146, 60]]}
          />
        </Card>
      </div>
      </div>
      </div>
    </>
  );
}

const Card = ({
  title,
  //   icon,
  children,
}: {
  title: string;
  //   icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#2D2E34] overflow-hidden  rounded-xl group/canvas-card flex items-center justify-center w-full lg:w-1/4 mx-auto relative h-[26rem] sm:h-[32rem]"
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        {/* <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div> */}
        <h2 className="dark:text-white text-xl  tracking-tighter px-12 text-center opacity-1 text-white group-hover/canvas-card:opacity-100 relative z-10  mt-4  sm:font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-300">
          {title}
        </h2>
        <ul className="mt-4 text-sm sm:text-base absolute group-hover/canvas-card:static opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 space-y-2 text-center pl-10 px-5 list-disc transition duration-300">
            <li>Comprehensive analysis of your unique business needs.</li>
            <li>Custom-built strategies designed to drive results.</li>
            <li>Scalable solutions adaptable to future growth.</li>
            <li>Focused on delivering measurable outcomes.</li>
          </ul>
      </div>
    </div>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

interface IconProps {
  className?: string;
  rest: SVGProps<SVGSVGElement>;
}

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
