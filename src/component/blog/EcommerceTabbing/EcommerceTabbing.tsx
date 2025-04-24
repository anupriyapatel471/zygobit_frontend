"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import "./EcommerceTabStyle.css";
import { MovingBorders } from "../../ui/MovingBorder/MovingBorder";
import { useBlog } from "@/hooks/dynamoDb/useBlog";
import BlogGridSkeleton from "@/component/Loader/BlogGridSkelton";

interface TabItem {
  label: string;
  icon: string;
}

export default function EcommerceTabbing() {
  const { blogs, loading } = useBlog();

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
      {loading ? (
        <BlogGridSkeleton />
      ) : (
        selectedTab && (
          <div className="container remove-bg">
            <nav className="nav">
              <ul className="tabsContainer gap-8">
                {tabs.map((item) => (
                  <motion.li
                    key={item.label}
                    initial={false}
                    className={`tab ${item.label === selectedTab.label ? "active" : ""}`}
                    onClick={() => setSelectedTab(item)}
                    layout
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
                  <div className="w-full mb-0 sm:mb-12 lg:mb-0">
                    <MovingBorders selectedCategory={selectedTab.label} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        )
      )}
    </>
  );
}
