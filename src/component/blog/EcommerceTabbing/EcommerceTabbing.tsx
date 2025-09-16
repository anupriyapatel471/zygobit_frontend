"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
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
  const scrollTargetRef = useRef<HTMLDivElement>(null);

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
    const allTabs = [allTab, ...categoryTabs];

    setTabs(allTabs);

    const tabFromHistory = history.state?.tab;
    const foundTab = allTabs.find((tab) => tab.label === tabFromHistory);

    setSelectedTab(foundTab ?? allTab);

    const onPopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state?.tab) {
        const restoredTab = allTabs.find((tab) => tab.label === state.tab);
        if (restoredTab) {
          setSelectedTab(restoredTab);
          if (typeof state.scroll === "number") {
            setTimeout(() => window.scrollTo(0, state.scroll), 50);
          }
        }
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [blogs]);

  useEffect(() => {
    const restoreScroll = () => {
      const state = history.state;

      if (scrollTargetRef?.current && typeof state?.scroll === "number") {
        window.scrollTo({
          top: scrollTargetRef.current.offsetTop - 120,
          behavior: "smooth",
        });
      } else if (typeof state?.scroll === "number") {
        window.scrollTo(0, state.scroll);
      }
    };
    setTimeout(restoreScroll, 50);
    const onPopState = () => {
      setTimeout(restoreScroll, 50);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [scrollTargetRef]);

  const handleTabClick = (tab: TabItem) => {
    setSelectedTab(tab);

    // const scrollY = window.scrollY;
    const newState = {
      ...history.state,
      tab: tab.label,
      page: 1,
      // scroll: scrollY,
    };

    history.pushState(newState, "", window.location.pathname);
  };

  return loading ? (
    <BlogGridSkeleton />
  ) : selectedTab ? (
    <div className="container remove-bg" ref={scrollTargetRef}>
      <nav className="nav">
        <ul className="tabsContainer gap-8">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              className={`tab ${
                item.label === selectedTab.label ? "active" : ""
              }`}
              onClick={() => handleTabClick(item)}
              layout
            >
              {`${item.icon} ${item.label}`}
              {item.label === selectedTab.label && (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  id="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="iconContainer">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full mb-0 sm:mb-12 lg:mb-0">
              <MovingBorders
                selectedCategory={selectedTab.label}
                scrollTargetRef={scrollTargetRef}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  ) : null;
}
