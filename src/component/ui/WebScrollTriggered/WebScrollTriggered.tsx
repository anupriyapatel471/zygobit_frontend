import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import  "./WebScrollTriggered.css";

export default function ScrollTriggered() {
  return (
    <div  className="container">
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

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`cardContainer card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <img className="w-full" src="/images/rectangle.png" alt="" />
      </div>
      <motion.div  variants={cardVariants} className="card z-10">
        <div className="w-full relative overflow-hidden rounded-lg">
          <img
            className="w-full h-[20rem] sm:h-[26rem] object-cover "
            src="/images/code.png"
            alt=""
          />
          <div className="w-full  absolute bottom-0 left-0 p-6">
            <h3 className="font-semibold text-xl">Web App Consulting Services</h3>
            <p className="text-base mt-4">
              At Zygobit, our web app consults offer comprehensive web app
              consulting services to help businesses navigate the complexities
              of web application development
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div  variants={cardVariants} className="card z-10">
        <div className="w-full hidden sm:inline-block relative overflow-hidden rounded-lg">
          <img
            className="w-full h-[26rem] object-cover "
            src="/images/code.png"
            alt=""
          />
          <div className="w-full  absolute bottom-0 left-0 p-6">
            <h3 className="font-semibold text-xl">Web App Consulting Services</h3>
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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */


const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};



/**
 * ==============   Data   ================
 */

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
