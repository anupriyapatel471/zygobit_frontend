"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import './EcommerceTabStyle.css';
import { MovingBorders } from "../MovingBorder/MovingBorder";

export default function EcommerceTabbing() {
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
            <h2 className="font-bold text-2xl sm:text-4xl mt-7 text-white text-center">All</h2>
            <div className="w-full px-4 xl:px-24 mt-8 lg:mt-10 mb-10 sm:mb-12 lg:mb-20">
                <MovingBorders/>
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
  { icon: "", label: "All" },
  { icon: "", label: "Business Models" },
  { icon: "", label: "Cost Estimation" },
  { icon: "", label: "Technology" },
  { icon: "", label: "Learn from Failure" },
  { icon: "", label: "Business Punch" },
  { icon: "", label: "News" },
  { icon: "", label: "App Development Guide" },
  { icon: "", label: "e-Guide" },
];

const [First, Second, Three, Four, Five ,Six, Seven, Eight, Nine] = allIngredients;
const tabs = [First, Second, Three, Four, Five,Six, Seven, Eight, Nine];
