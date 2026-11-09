"use client";

import { useMemo, useState } from "react";

const PAGE_SIZE = 4;

export function useQuestionnaire(initialData) {
  const [questionnaireList, setQuestionnaireList] = useState(initialData);
  const [filters, setFilters] = useState({
    search: "",
    sortBy: "Terbaru",
    filterData: "Semua",
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (search) => {
    setFilters((prev) => ({ ...prev, search }));
    setPage(1);
  };

  const handleSortChange = (sortBy) => {
    setFilters((prev) => ({ ...prev, sortBy }));
    setPage(1);
  };

  const handleFilterChange = (filterData) => {
    setFilters((prev) => ({ ...prev, filterData }));
    setPage(1);
  };

  const handleDelete = (id) => {
    setQuestionnaireList((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredList = useMemo(() => {
    const keyword = filters.search.trim().toLowerCase();

    const result = questionnaireList.filter((item) => {
      const matchKeyword = item.title.toLowerCase().includes(keyword);
      const matchStatus = filters.filterData === "Semua" || item.status === filters.filterData;
      return matchKeyword && matchStatus;
    });

    if (filters.sortBy === "Terlama") {
      return [...result].sort((a, b) => a.id - b.id);
    }

    return [...result].sort((a, b) => b.id - a.id);
  }, [questionnaireList, filters]);

  const totalItems = filteredList.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedList = filteredList.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return {
    questionnaireList: pagedList,
    filters,
    page: currentPage,
    pageSize: PAGE_SIZE,
    totalItems,
    isLoading,
    setIsLoading,
    handleSearchChange,
    handleSortChange,
    handleFilterChange,
    handlePageChange: setPage,
    handleDelete,
  };
}
