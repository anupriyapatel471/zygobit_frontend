"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import "./EcommerceTabStyle.css";
import { MovingBorders } from "../../ui/MovingBorder/MovingBorder";
import { useBlog } from "@/hooks/dynamoDb/useBlog";

interface TabItem {
  label: string;
  icon: string;
}

export default function EcommerceTabbing() {
  const { blogs } = useBlog();

  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [selectedTab, setSelectedTab] = useState<TabItem | null>(null);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(
        blogs
          .map((blog) => blog.category)
          .filter((category): category is string => category !== null)
      )
    );
    const categoryTabs = uniqueCategories.map((category) => ({
      label: category,
      icon: "",
    }));
    const allTab: TabItem = { label: "All", icon: "" };
    setTabs([allTab, ...categoryTabs]);
    setSelectedTab(allTab);
  }, [blogs]);

  return (
    <>
      {selectedTab && (
        <div className="container">
          <nav className="nav">
            <ul className="tabsContainer">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  initial={false}
                  animate={{
                    backgroundColor:
                      item.label === selectedTab.label ? "#E4550B" : "#eee0",
                  }}
                  className="tab"
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.icon} ${item.label}`}
                  {item.label === selectedTab.label ? (
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
                <div className="w-full   mb-10 sm:mb-12 lg:mb-20">
                  <MovingBorders selectedCategory={selectedTab.label} />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      )}
    </>
  );
}

// const allIngredients = [
//   { icon: "", label: "All" },
//   { icon: "", label: "Business Models" },
//   { icon: "", label: "Cost Estimation" },
//   { icon: "", label: "Technology" },
//   { icon: "", label: "Learn from Failure" },
//   { icon: "", label: "Business Punch" },
//   { icon: "", label: "News" },
//   { icon: "", label: "App Development Guide" },
//   { icon: "", label: "e-Guide" },
// ];
