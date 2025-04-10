/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

type Review = {
  name: string;
  username: string;
  body: string;
  img: string;
};

type ShowAt = "always" | "sm" | "lg";

interface MarqueeConfig {
  row: Review[];
  reverse: boolean;
  showAt: ShowAt;
}

const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/react.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/flutter_new.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/white_css3.png",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/white_js.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/white_html5.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/white_java.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/white_angulalr.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/white_nodejs.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const marqueeConfigs: MarqueeConfig[] = [
  { row: firstRow, reverse: true, showAt: "always" },
  { row: secondRow, reverse: false, showAt: "always" },
  { row: firstRow, reverse: true, showAt: "always" },
  { row: secondRow, reverse: false, showAt: "sm" },
  { row: firstRow, reverse: true, showAt: "lg" },
  { row: secondRow, reverse: false, showAt: "lg" },
  { row: firstRow, reverse: true, showAt: "lg" },
];

const showClass: Record<ShowAt, string> = {
  always: "",
  sm: "hidden sm:inline",
  lg: "hidden lg:inline",
};

const ReviewCard: React.FC<Pick<Review, "img">> = ({ img }) => (
  <figure
    className={cn(
      "relative w-full h-full cursor-pointer overflow-hidden rounded-xl"
    )}
  >
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:flex justify-between">
      <div className="relative flex justify-center lg:justify-normal items-center lg:h-[300px]">
        <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/line.png"
            alt=""
            className="h-[200px] hidden sm:inline lg:h-[200px]"
          />
        </span>
        <div className="hover:mt-14 transition-all duration-500 w-20 h-20 sm:w-[100px] sm:h-[100px] shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
          <img
            src={img}
            alt=""
            className="w-8 h-8 sm:w-12 sm:h-12 brightness-0 invert"
          />
        </div>
      </div>
    </div>
  </figure>
);

export default function TechnologySlider() {
  const [vertical, setVertical] = useState(true);

  useEffect(() => {
    const checkMobileScreen = () => {
      setVertical(!window.matchMedia("(max-width: 300px)").matches);
    };
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  return (
    <div className="relative grid grid-cols-3 sm:grid-cols-4 lg:flex lg:grid-cols-7 h-[290px] sm:h-[370px] w-full items-center justify-between overflow-hidden">
      {marqueeConfigs.map((cfg, idx) => (
        <Marquee
          key={idx}
          reverse={cfg.reverse}
          pauseOnHover
          vertical={vertical}
          className={cn(
            "[--duration:10s] justify-center items-center",
            showClass[cfg.showAt]
          )}
        >
          {cfg.row.map((review, i) => (
            <ReviewCard key={`${idx}-${i}`} img={review.img} />
          ))}
        </Marquee>
      ))}
    </div>
  );
}
