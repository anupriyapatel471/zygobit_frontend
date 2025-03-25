"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrowLeft from "../../../public/images/arrow_left.svg";
import arrowRight from "../../../public/images/arrow_right.svg";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className=" mx-auto antialiased mt-10 sm:mt-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-20">
        <div>
          <div className="relative h-96 lg:h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-top"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tighter">
              {testimonials[active].name}
            </h3>
            <p className="text-sm sm:text-base text-[#CCCCCC]">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base sm:text-xl lg:text-2xl my-3 sm:my-5 lg:my-14">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-3 sm:pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-gray-100  flex items-center justify-center group/button"
            >
              <Image
                src={arrowLeft}
                width={20}
                height={20}
                className="text-themetext  transition-transform duration-300"
                alt="Icon"
              />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-gray-100  flex items-center justify-center group/button"
            >
               <Image
                src={arrowRight}
                width={20}
                height={20}
                className="text-themetext  transition-transform duration-300"
                alt="Icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
