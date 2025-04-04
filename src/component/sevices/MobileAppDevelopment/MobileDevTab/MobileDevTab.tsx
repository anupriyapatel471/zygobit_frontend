"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import "./mobiledevstyle.css";
import Image from "next/image";

export default function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="container px-0" style={{padding:"0"}}>
      <nav className="nav">
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
            <div className="w-full px-4 lg:px-0 mt-7 lg:mt-10 mb-7 lg:mb-10 max-w-5xl mx-auto flex flex-wrap sm:flex-nowrap gap-4 sm:gap-7 lg:gap-10">
              <div className="w-full sm:w-auto">
                <Image
                  className="w-[318px] h-auto object-contain rounded-2xl"
                  src={selectedTab.image}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full sm:w-3/5">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold">
                  {selectedTab.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg mt-2 sm:mt-4 lg:mt-5">
                  {selectedTab.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const tabs = [
  {
    id: 1,
    label: "Step 1",
    title: "Discovery Phase",
    description:
      "We begin by understanding your vision, business objectives, and target audience. This phase involves brainstorming, competitor analysis, and gathering key insights to lay a strategic roadmap for your app development journey.",
    icon: "",
    image: "/images/discovery_img.png",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Planning Phase",
    description:
      "In this phase, we define the app’s core functionality, wireframes, and technical requirements. Market research and feasibility analysis ensure that the development process aligns with your business goals.",
    icon: "",
    image: "/images/planning_img.png",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Design & Prototyping",
    description:
      "Our UI/UX experts craft intuitive, visually engaging designs that enhance user experience. Interactive prototypes allow stakeholders to visualize the app’s flow before development begins.",
    icon: "",
    image: "/images/design_img.png",
  },
  {
    id: 4,
    label: "Step 4",
    title: "Development & Testing",
    description:
      "Using the latest technologies, we build a robust, scalable application with seamless performance. Rigorous testing ensures smooth functionality, security, and an error-free user experience.",
    icon: "",
    image: "/images/devAndTesting_img.png",
  },
  {
    id: 5,
    label: "Step 5",
    title: "Deployment & Maintenance",
    description:
      "Once your app is live, we continue to optimize its performance with updates, security patches, and ongoing support. Our team ensures your app stays ahead with evolving market trends.",
    icon: "",
    image: "/images/devAndMaintainance.jpg",
  },
];
