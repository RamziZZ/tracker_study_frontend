"use client";

import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = ["Terbaru", "Terlama"];
const FILTER_OPTIONS = ["Semua", "Sedang Berjalan", "Sedang Dibuat", "Sudah Selesai"];

// Dropdown berlabel statis (button_components di Figma): teks + chevron terlihat,
// <select> native transparan menumpuk di atasnya agar tetap aksesibel & bisa diklik.
function PillSelect({ label, value, options, onChange }) {
  return (
    <label className="relative flex h-[46px] items-center justify-center [border-radius:1000px] border border-solid border-figma-blue-800 px-[20px] py-[15px]">
      <span className="flex items-center gap-[10px] text-xs leading-4 font-normal whitespace-nowrap text-figma-blue-800">
        {label}
        <ChevronDown className="size-[16px]" strokeWidth={1.8} />
      </span>
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="absolute inset-0 size-full cursor-pointer appearance-none bg-transparent text-transparent opacity-0"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function QuestionnaireFilterBar({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  filterData,
  onFilterChange,
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-4">
      {/* field_components Figma: col 1-2, h46, r1000, border blue-800 */}
      <label className="flex h-[46px] items-center [border-radius:1000px] border border-solid border-figma-blue-800 px-[20px] py-[15px] md:col-span-2">
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="masukkan Judul Kuisioner disini..."
          className="w-full bg-transparent text-xs leading-4 font-normal text-figma-gray-900 outline-none placeholder:text-figma-gray-500"
        />
      </label>

      <PillSelect label={sortBy} value={sortBy} options={SORT_OPTIONS} onChange={onSortChange} />
      <PillSelect
        label={filterData}
        value={filterData}
        options={FILTER_OPTIONS}
        onChange={onFilterChange}
      />
    </div>
  );
}
