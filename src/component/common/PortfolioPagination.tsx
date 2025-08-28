/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  filteredProjects: any[];
}
const PortfolioPagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  filteredProjects,
}: Props) => {
  const perPage = 5;
  return (
    <>
      {" "}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            &lt;
            {/* Prev */}
          </button>

          <span>
            Showing {(currentPage - 1) * perPage + 1} to{" "}
            {Math.min(currentPage * perPage, filteredProjects.length)} of{" "}
            {filteredProjects.length}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            &gt;
            {/* Next */}
          </button>
        </div>
      )}
    </>
  );
};

export default PortfolioPagination;
