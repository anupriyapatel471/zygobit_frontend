"use client";
import { TypewriterEffectSmooth } from "../../../../components/ui/typewriter-effect";
export default function TypewriterEffect() {
  const words = [
    {
      text: "Shape",
    },
    {
      text: "the",
    },
    {
      text: "Future",
    },
    {
      text: "of",
    },
    {
      text: "Technology",
      className: "text-themetext",
    },
    {
      text: "with",
    },
    {
      text: "Us",
    },
  ];
  return (
    <div className="text-2xl sm:text-3xl lg:text-4xl  text-white font-bold ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
