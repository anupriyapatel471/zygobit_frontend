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
  // username,
  // body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-20 w-20 cursor-pointer overflow-hidden rounded-xl border-4 border-white/20",
      )}
    >
      <div className="flex w-full h-full flex-row items-center relative justify-center">
        <Image
          className="w-full h-full object-cover"
          src={img}
          alt={name}
          fill
        />
      </div>
    </figure>
  );
};

export default function MarqueeVertical() {

  const [vertical,setVertical] = useState(true)

  useEffect(() => {
    // Function to check if the screen width matches mobile screen sizes
    const checkMobileScreen = () => {
      setVertical(!window.matchMedia("(max-width: 768px)").matches);
    };
 
    // Initial check
    checkMobileScreen();
 
    // Add event listener for screen resizing
    window.addEventListener("resize", checkMobileScreen);
 
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  return (
    <div className="relative lg:flex h-[380px] w-full flex-row items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover vertical = {vertical} className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical = {vertical} className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical = {vertical} className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical = {vertical} className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
