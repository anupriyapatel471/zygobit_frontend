"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { useEffect, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/react_cta.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/tailwind_cta.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/figma.svg",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/react_cta.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/tailwind_cta.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/figma.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full h-full cursor-pointer overflow-hidden rounded-xl"
      )}
    >
      <div className="w-full  grid grid-cols-1 sm:grid-cols-3 lg:flex  justify-between">
        <div className=" relative flex justify-center lg:justify-normal  items-center  lg:h-[300px]">
          <span className="absolute  -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              className="h-[200px] hidden sm:inline sm:h-auto lg:h-[200px]"
              src="/images/line.png"
              alt=""
            />
          </span>
          <div className=" hover:mt-14 transition-all duration-500 w-20 h-20 sm:w-[100px] sm:h-[100px]  shadow-[inset_0_0_15px_2px_#C5C5C552] flex items-center justify-center rounded-full">
            <img
              className="w-8 h-8 sm:w-12 sm:h-12 brightness-0 invert"
              src="/images/react.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default function TechnologySlider() {
  const [vertical, setVertical] = useState(true);

  useEffect(() => {
    const checkMobileScreen = () => {
      setVertical(!window.matchMedia("(max-width: 300px)").matches);
    };
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);

    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  return (
    <div className="relative grid grid-cols-3 sm:grid-cols-4 lg:flex lg:grid-cols-7 h-[290px] sm:h-[370px] w-full  items-center justify-between overflow-hidden ">
      <Marquee
        reverse
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center "
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center"
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center hidden sm:inline "
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center hidden lg:inline"
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center hidden lg:inline"
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical={vertical}
        className="[--duration:10s] justify-center items-center hidden lg:inline"
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
