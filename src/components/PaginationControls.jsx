"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@heroui/react";

const PaginationControls = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const numericCurrentPage = Number(currentPage) || 1;
  const numericTotalPages = Number(totalPages) || 1;

  const safeCurrentPage = isNaN(numericCurrentPage) ? 1 : numericCurrentPage;
  const safeTotalPages = isNaN(numericTotalPages) ? 1 : numericTotalPages;

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`/ebooks?${params.toString()}`);
  };

  const pages = Array.from({ length: safeTotalPages }, (_, i) => i + 1);

  return (
    <Pagination size="sm">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={safeCurrentPage === 1}
            onPress={() => handlePageChange(Math.max(1, safeCurrentPage - 1))}
          >
            <Pagination.PreviousIcon />
            Prev
          </Pagination.Previous>
        </Pagination.Item>

        {pages.map((p) => (
          <Pagination.Item key={p}>
            <Pagination.Link
              isActive={p === safeCurrentPage}
              onPress={() => handlePageChange(p)}
            >
              {p}
            </Pagination.Link>
          </Pagination.Item>
        ))}

        <Pagination.Item>
          <Pagination.Next
            isDisabled={safeCurrentPage === safeTotalPages}
            onPress={() =>
              handlePageChange(Math.min(safeTotalPages, safeCurrentPage + 1))
            }
          >
            Next
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
};

export default PaginationControls;
