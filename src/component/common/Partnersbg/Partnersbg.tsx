"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "../../../components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=""
      >
        <div className="w-full text-center relative z-20 mt-8 sm:mt-16 px-4 lg:px-0">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            Our Partners
          </h2>
          <p className="font-light sm:font-medium max-w-6xl mx-auto text-sm sm:text-xl my-2 sm:my-3">
            Using the latest technology and industry expertise, we built top-end
            Android and iOS-based applications that add value to the business
            and user experience.
          </p>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
