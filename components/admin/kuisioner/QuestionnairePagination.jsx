"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActionButton } from "./ActionButton";

export function QuestionnairePagination({ page, pageSize, totalItems, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  return (
    <div className="flex w-full shrink-0 items-center justify-end gap-[20px] py-[20px]">
      <ActionButton
        variant={isPrevDisabled ? "muted" : "primary"}
        shape="chip"
        label="Halaman sebelumnya"
        disabled={isPrevDisabled}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="size-[20px]" strokeWidth={2} />
      </ActionButton>
      <p className="whitespace-nowrap px-[10px] text-lg leading-7 font-normal text-figma-gray-900">
        {start}-{end} of {totalItems} Card
      </p>
      <ActionButton
        variant={isNextDisabled ? "muted" : "primary"}
        shape="chip"
        label="Halaman berikutnya"
        disabled={isNextDisabled}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight className="size-[20px]" strokeWidth={2} />
      </ActionButton>
    </div>
  );
}
