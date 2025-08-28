"use client";
import Image from "next/image";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages.map((page, i) =>
      typeof page === "number" ? (
        <button
          key={i}
          onClick={() => onPageChange(page)}
          className={`w-[25px] h-[22px] sm:w-auto sm:h-auto sm:px-3 sm:text-base text-sm sm:py-1 rounded ${
            currentPage === page
              ? "bg-[#EA580C] text-white"
              : "border border-white text-white"
          }`}
        >
          {page}
        </button>
      ) : (
        <span
          key={i}
          className="w-[25px] h-[22px] sm:w-auto sm:h-auto sm:px-3 sm:text-base text-sm sm:py-1 rounded border border-white text-white flex items-center justify-center"
        >
          {page}
        </span>
      )
    );
  };

  return (
    <div className="mt-4 flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border border-white text-white rounded disabled:opacity-50 text-lg flex items-center justify-center w-[25px] h-[22px] sm:w-[35px] sm:h-[33px]"
      >
        <Image
          src="/images/left_icon.svg"
          alt="icon"
          width={18}
          height={18}
          className="w-[5px] h-2 sm:w-[7px] sm:h-3 "
        />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border border-white text-white rounded disabled:opacity-50 flex items-center justify-center w-[25px] h-[22px] sm:w-[35px] sm:h-[33px]"
      >
        <Image
          src="/images/right_icon.svg"
          alt="icon"
          width={18}
          height={18}
          className="w-[5px] h-2 sm:w-[7px] sm:h-3 "
        />
      </button>
    </div>
  );
};
