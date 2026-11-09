"use client";

import { Plus, PlusCircle } from "lucide-react";
import { ActionButton } from "./ActionButton";

export function QuestionnaireHeader({ onAdd, onBulkAdd }) {
  return (
    <div className="flex w-full flex-wrap items-start justify-between gap-[24px]">
      <h1 className="text-3xl leading-9 font-semibold whitespace-nowrap text-figma-gray-900">
        Daftar Kuisioner
      </h1>
      <div className="flex flex-wrap items-start justify-end gap-[40px]">
        <ActionButton label="Tambah Kuisioner" shape="button" onClick={onAdd}>
          <Plus className="size-[24px]" strokeWidth={1.8} />
          <span>Tambah Kuisioner</span>
        </ActionButton>
        <ActionButton
          label="Tambah Kuisioner Masal"
          shape="button"
          variant="primary"
          onClick={onBulkAdd}
        >
          <PlusCircle className="size-[24px]" strokeWidth={1.8} />
          <span>Tambah Kuisioner Masal</span>
        </ActionButton>
      </div>
    </div>
  );
}
