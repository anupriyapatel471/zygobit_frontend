/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  filteredProjects: any[];
  perPage?: number;
}

const PortfolioPagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  filteredProjects,
  perPage = 5,
}: Props) => {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, filteredProjects.length);

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "opacity-50 bg-transparent cursor-not-allowed border border-white"
            : "bg-[#EA580C] text-white"
        }`}
      >
        &lt;
      </button>

      <span>
        Showing {start} to {end} of {filteredProjects.length}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "opacity-50 bg-transparent cursor-not-allowed border border-white"
            : "bg-[#EA580C] text-white"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default PortfolioPagination;
