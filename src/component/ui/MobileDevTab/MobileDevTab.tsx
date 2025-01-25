"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import './mobiledevstyle.css'

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div  className="container" >
      <nav  className="nav">
        <ul className="tabsContainer">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#E4550B" : "#eee0",
              }}
              className="tab"
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                className="underline"
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="iconContainer">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
            <div className="w-full px-4 lg:px-0 mt-12 lg:mt-36 mb-12 lg:mb-20 max-w-5xl mx-auto flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 lg:gap-16">
              <div className="w-full sm:w-2/5">
                <img
                  className="w-full h-full max-h-72 object-cover rounded-2xl"
                  src="/images/plan.png"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-3/5">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  Planning Phase
                </h3>
                <p className="text-sm sm:text-lg lg:text-xl mt-2 sm:mt-5 lg:mt-10">
                  In The phase, we collaborate to understand your business goals
                  target audience, and app requirements. By conducting market
                  research and feasibility analysis, we lay a strong foundation
                  for your custom mobile app development.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */




const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 600,
  fontSize: 20,
};



/**
 * ==============   Data   ================
 */

const allIngredients = [
  { icon: "", label: "Step 1" },
  { icon: "", label: "Step 2" },
  { icon: "", label: "Step 3" },
  { icon: "", label: "Step 4" },
  { icon: "", label: "Step 5" },
];

const [First, Second, Three, Four, Five] = allIngredients;
const tabs = [First, Second, Three, Four, Five];
