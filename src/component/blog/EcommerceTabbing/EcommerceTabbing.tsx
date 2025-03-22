"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import "./EcommerceTabStyle.css";
import { MovingBorders } from "../../ui/MovingBorder/MovingBorder";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import { Schema } from "../../../../../zygobit_website_backend/amplify/data/resource";

interface TabItem {
  label: string;
  icon: string;
}

export default function EcommerceTabbing() {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [selectedTab, setSelectedTab] = useState<TabItem | null>(null);
  const client = generateClient<Schema>();
  useAmplifyConfig();

  const fetchCategories = async () => {
    try {
      const res = await client.models.Blog.list();
      const blogs = res.data;
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
      const allTabs = [allTab, ...categoryTabs];
      setTabs(allTabs);
      setSelectedTab(allTab);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
                <h2 className="font-bold text-2xl sm:text-4xl mt-7 text-white text-center">
                  {selectedTab.label}
                </h2>
                <div className="w-full px-4 xl:px-24 mt-8 lg:mt-10 mb-10 sm:mb-12 lg:mb-20">
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
