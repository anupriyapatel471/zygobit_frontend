import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import "./WebScrollTriggered.css";
import Image from "next/image";
import rectangle from "../../../../../public/images/rectangle.png";
import code from "../../../../../public/images/code.png";

export default function ScrollTriggered() {
  return (
    <div className="container">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ i }: CardProps) {
  return (
    <motion.div
      className={`cardContainer card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          className="w-full"
          src={rectangle}
          alt="Background"
          width={1200}
          height={800}
        />
      </div>
      <motion.div variants={cardVariants} className="card z-10">
        <div className="w-full relative overflow-hidden rounded-lg">
          <Image
            className="w-full h-[20rem] sm:h-[26rem] object-cover"
            src={code}
            alt="Code"
            width={1200}
            height={800}
          />
          <div className="w-full  absolute bottom-0 left-0 p-6">
            <h3 className="font-semibold text-xl">
              Web App Consulting Services
            </h3>
            <p className="text-base mt-4">
              At Zygobit, our web app consults offer comprehensive web app
              consulting services to help businesses navigate the complexities
              of web application development
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={cardVariants} className="card z-10">
        <div className="w-full hidden sm:inline-block relative overflow-hidden rounded-lg">
          <Image
            className="w-full h-[26rem] object-cover"
            src={code}
            alt="Code"
            width={1200}
            height={800}
          />
          <div className="w-full  absolute bottom-0 left-0 p-6">
            <h3 className="font-semibold text-xl">
              Web App Consulting Services
            </h3>
            <p className="text-base mt-4">
              At Zygobit, our web app consults offer comprehensive web app
              consulting services to help businesses navigate the complexities
              of web application development
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];
