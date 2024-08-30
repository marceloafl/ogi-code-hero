"use client";

import { useEffect, useState } from "react";
import PaginationControlButton from "../button/pagination-control-button/PaginationControlButton";

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
    <div className="flex items-center justify-between mt-4 m-auto text-sm">
      <PaginationControlButton
        label="<<"
        disable={currentPage === 1}
        onPageChange={() => onPageChange(1)}
      />

      <PaginationControlButton
        label="<"
        disable={currentPage === 1}
        onPageChange={() => onPageChange(currentPage - 1)}
      />

      <div className="flex space-x-2">
        {displayedOptions.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md border border-solid ${
              page === currentPage
                ? "bg-dark-blue text-white border-dark-blue"
                : "bg-snow hover:bg-blue text-dark-smoke border-dark-snow hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <PaginationControlButton
        label=">"
        disable={currentPage === totalPages}
        onPageChange={() => onPageChange(currentPage + 1)}
      />

      <PaginationControlButton
        label=">>"
        disable={currentPage === totalPages}
        onPageChange={() => onPageChange(totalPages)}
      />
    </div>
  );
}
