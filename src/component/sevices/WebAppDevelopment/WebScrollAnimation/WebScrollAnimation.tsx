/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import fire from "../../../../../public/images/fire.png";

export default function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const items = new Array(8).fill({
    title: "1. Time and Material Model",
    description:
      "Being a leading custom web development company, we clearly defined the scope. This model offers a set budget and timeline. It's the perfect fit for businesses that focus on small to mid-sized projects with minimal changes in requirements.",
    features: [
      "Best For Project With Fixed Features",
      "Clear timeline and cost upfront.",
      "Minimal risk of budget overruns",
    ],
  });
  return (
    <div id="example" className="no-scroll">
      <svg id="progress" width="90" height="90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul className="scroll-ul pl-40 no-scroll" ref={ref}>
        {/* Map through items array to generate list */}
        {items.map((item, index) => (
          <li key={index} style={{ background: "transparent" }}>
            <div className="w-full relative py-10 px-16 border border-white overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-full -z-10">
                {/* <img className="w-full h-full" src="/images/fire.png" alt="" /> */}
                <Image
                  src={fire}
                  alt="Fire Background"
                  height={30}
                  width={30}
                  // priority
                />
              </div>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text-base my-5">{item.description}</p>
              <ul className="list-disc h-auto inline-block overflow-x-hidden bg-transparent pl-5 text-base space-y-2">
                {item.features.map((feature: any, featureIndex: any) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
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
            #example {
              width: 100vw;
              max-width: 100vw;
              position: relative;
            }

            #example #progress {
                position: absolute;
                top: -105px;
                left: 100px;
                transform: rotate(-90deg);
            }

            #example .bg {
                stroke: var(--layer);
            }

            #example #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 5%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #example ul.scroll-ul {
                display: flex;
                list-style: none;
                overflow-x: scroll;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 50px;
                 scrollbar-width: none;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example li {
                flex: 0 0 845px;
            }

    `}</style>
  );
}
