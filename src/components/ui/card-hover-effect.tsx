import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  sm:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-orange-300 block  rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-5 lg:p-10 overflow-hidden  border  border-white  relative z-20",
        className
      )}
    >
      <div className="relative z-50 overflow-hidden">
        <span>
          {/* <img src="/images/dollar_icon.svg" alt="" /> */}
        <Image
          src="/images/dollar_icon.svg"
          alt="Dollar Icon"
          width={50}  // Set the width of the image
          height={50} // Set the height of the image
        />
        </span>
        <div className="px-4">{children}</div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <img className="w-full h-full" src="/images/gray_stars_bg.png" alt="" /> */}
        <Image
          className="w-full h-full object-cover"
          src="/images/gray_stars_bg.png"
          alt="Stars Background"
          // height={}
          // width={}
        />
        </div>

    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-semibold text-base sm:text-lg lg:text-xl tracking-wide my-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-white tracking-wide leading-relaxed text-sm sm:text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
