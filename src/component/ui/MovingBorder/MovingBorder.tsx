"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/moving-border";
import Image from "next/image";
import calendarIcon from "../../../../public/images/calendar_icon.svg";
import { truncateText } from "@/lib/utils";
import Loader from "@/component/common/Loader/Loader";
import { useBlog } from "@/hooks/dynamoDb/useBlog";
import { Pagination } from "@/component/common/Pagination/Pagination";
import Link from "next/link";

interface MovingBordersProps {
  selectedCategory: string;
  scrollTargetRef?: React.RefObject<HTMLDivElement>;
}

export function MovingBorders({
  selectedCategory,
  scrollTargetRef,
}: MovingBordersProps) {
  const filter =
    selectedCategory === "All" ? {} : { category: { eq: selectedCategory } };
  const { blogs, loading } = useBlog(filter);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Set page from history.state on first render
  useEffect(() => {
    const pageFromHistory = history.state?.page;
    if (pageFromHistory) {
      setCurrentPage(pageFromHistory);
    }

    // Scroll to saved scroll position on back/forward
    const onPopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state?.page) setCurrentPage(state.page);
      if (typeof state?.scroll === "number") {
        setTimeout(() => window.scrollTo(0, state.scroll), 50);
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    // const scrollY = window.scrollY;
    setCurrentPage(page);

    const newState = {
      ...history.state,
      page,
      // scroll: scrollY,
    };

    history.pushState(newState, "", window.location.pathname);
    if (scrollTargetRef?.current) {
      window.scrollTo({
        top: scrollTargetRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
        {currentBlogs.map((card) => (
          <Link key={card.id} href={`/blogs/${card.slug}`}>
            <Button className="bg-white/5 cursor-pointer rounded-2xl overflow-hidden backdrop-blur-lg text-white border-2 border-[#444444] custom-radius">
              <div className="w-full overflow-hidden relative h-[184px]">
                <Image
                  src={card.image}
                  className="object-cover"
                  alt="BlogCard"
                  fill
                />
              </div>
              <div className="w-full text-left p-4 sm:px-4 sm:py-5">
                <div className="w-full flex justify-between">
                  <span className="block w-fit py-1 px-2 rounded-sm bg-white text-[#431407] font-medium text-[10px]">
                    {card.category}
                  </span>
                  <span className="flex items-center gap-2 text-xs">
                    <Image
                      src={calendarIcon}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    {card.publishedDate}
                  </span>
                </div>
                <h3 className="sm:font-bold text-base mt-2 sm:mt-3 mb-2 sm:mb-4">
                  {truncateText(card.title, 70)}
                </h3>
                <p className="text-sm line-clamp-2">
                  {truncateText(card.description, 100)}
                </p>
              </div>
            </Button>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
