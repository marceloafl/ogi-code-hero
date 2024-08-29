"use client";

import { useEffect, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [displayedOptions, setDisplayedOptions] = useState([1, 2, 3, 4, 5]);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function setPagesToDisplay() {
    if (totalPages <= 5) {
      setDisplayedOptions(pages);
    } else if (currentPage <= 3) {
      setDisplayedOptions(pages.slice(0, 5));
    } else if (currentPage > totalPages - 3) {
      setDisplayedOptions(pages.slice(totalPages - 5));
    } else {
      setDisplayedOptions(pages.slice(currentPage - 3, currentPage + 2));
    }
  }

  useEffect(() => {
    setPagesToDisplay();
  }, [currentPage, totalPages]);

  return (
    <div className="flex items-center justify-between mt-4 w-fit m-auto">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1
            ? "hidden"
            : "p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        }`}
      >
        <p className="h-5 w-5">{"<<"}</p>
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1
            ? "hidden"
            : "p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        }`}
      >
        <p className="h-5 w-5">{"<"}</p>
      </button>

      <div className="flex space-x-2">
        {displayedOptions.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages || totalPages === 0
            ? "hidden"
            : "p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        }`}
      >
        <p className="h-5 w-5">{">"}</p>
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`${
          currentPage === totalPages || totalPages === 0
            ? "hidden"
            : "p-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        }`}
      >
        <p className="h-5 w-5">{">>"} </p>
      </button>
    </div>
  );
}
