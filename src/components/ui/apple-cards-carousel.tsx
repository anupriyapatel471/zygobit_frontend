/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
// import { SliderHoverCards } from "@/component/sevices/MobileAppDevelopment/SliderHoverCards";
// import { EvervaultCards } from "@/component/common/EvervaultCards/EvervaultCards";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  title: string;
  category: string;
  icon: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto  scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "flex flex-row justify-start gap-4 ",
              " mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[1%] md:last:pr-[4%]  rounded-2xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-5 mr-0 sm:mr-0 lg:mr-[7rem] 2xl:mr-[12rem] mt-5 lg:mt-9 lg:px-5 ">
          <button
            className="relative z-40 w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-transparent border border-orange-600 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-orange-600" />
          </button>
          <button
            className="relative z-40 w-10 h-10 sm:h-12 sm:w-12 rounded-full bg-transparent border border-orange-600 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-orange-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  appleClass,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  appleClass?: string;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="hidden fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              {/* <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className=" font-semibold text-2xl text-black"
              >
                {card.category}
              </motion.p> */}
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-base text-black"
              >
                {card.title}
              </motion.p>
              {/* <div className="py-10">{card.content}</div> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-2xl bg-white bg-opacity-5  w-[18rem]  md:w-80 xl:w-[330px] overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute hidden h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div
          className={`w-full relative rounded-2xl z-40 p-4 2xl:p-5 border border-[#C4C4C4] bg-white/5 text-left ${
            appleClass ?? "h-[275px]"
          } sm:h-auto lg:h-[300px] 2xl:h-[349px] cursor-default`}
        >
          {card.icon.length > 0 && (
            <div className="relative -left-6">
              <Image width={30} height={50} className="w-auto h-auto" src={card.icon} alt="card icon" />
            </div>
          )}
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="font-semibold relative z-[1111] text-base sm:text-lg cursor-text tracking-tighter text-black"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-3 lg:mt-4 text-[#6B6B6B] relative z-[1111] cursor-text text-sm sm:text-base"
          >
            {card.title}
          </motion.p>
          {/* <EvervaultCards /> */}
          {/* <SliderHoverCards /> */}
        </div>
        {/* <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover hidden absolute z-10 inset-0"
        /> */}
      </motion.button>
    </>
  );
};

// export const BlurImage = ({
//   height,
//   width,
//   src,
//   className,
//   alt,
//   ...rest
// }: ImageProps) => {
//   const [isLoading, setLoading] = useState(true);
//   return (
//     <Image
//       className={cn(
//         "transition duration-300",
//         isLoading ? "blur-sm" : "blur-0",
//         className
//       )}
//       onLoad={() => setLoading(false)}
//       src={src}
//       width={width}
//       height={height}
//       loading="lazy"
//       decoding="async"
//       blurDataURL={typeof src === "string" ? src : undefined}
//       alt={alt ? alt : "Background of a beautiful view"}
//       {...rest}
//     />
//   );
// };
