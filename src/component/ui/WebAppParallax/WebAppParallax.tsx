"use client";

import { ChevronRight } from "lucide-react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div className="p-11 bg-transparent" ref={ref}>
        {/* <img src={`/photos/cityscape/${id}.jpg`} alt="A London skyscraper" /> */}

        <Image
          src={`/photos/cityscape/${id}.jpg`}
          alt="A London skyscraper"
          width={300}
          height={400}
          className="object-cover"
          priority
        />
        
        <h3 className="text-4xl font-semibold">Education Web App Development</h3>
        <p className="text-xl my-12 max-w-3xl">
          Our web app developers offer educational web app development services
          that provide interactive e-learning platforms and communication
          systems for educational institutions
        </p>
        <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
          Education Web App Development{" "}
          <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
        </button>
      </div>
      {/* <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}</motion.h2> */}
    </section>
  );
}

export default function WebAppParallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
         html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 100%;
            height: 400px;
            margin:0;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #4ff0b7;
            margin: 0;
            font-family: JetBrains Mono, monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
