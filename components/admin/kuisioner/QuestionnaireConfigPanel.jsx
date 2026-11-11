"use client";

// Panel "Konfigurasi Kuisioner" — Figma node 1103:22474 (`section subheader`)
// di dalam variabel page component `add_kuisioner` (1105:23051).
//
// Nilai persis dari design context:
//   kartu   : bg white, radius 18, p-24, gap-18, lebar tetap 350px
//   judul   : 24/32 medium, #111827
//   label   : 14/20 medium, #6B7280 (label counter #111827)
//   field   : h-46, radius 10, bg #F9FAFB, border #E5E7EB, px-20 py-15, teks 12/16 #6B7280
//   counter : border #1E437E, teks 24/32 semibold #1E437E, rata tengah

import { CalendarDays, ChevronDown } from "lucide-react";

const fieldClass =
  "flex h-[46px] w-full items-center justify-between gap-[10px] rounded-[10px] border border-solid border-figma-gray-200 bg-figma-gray-50 px-[20px] py-[15px] text-left text-[12px] leading-[16px] font-normal text-figma-gray-500";

const labelClass = "w-full text-[14px] leading-[20px] font-medium text-figma-gray-500";
const iconClass = "size-[24px] shrink-0 text-figma-gray-500";

export function QuestionnaireConfigPanel({ questionCount = 0 }) {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-[18px] self-start overflow-clip rounded-[18px] bg-figma-white p-[24px] xl:w-[350px]">
      <h2 className="w-full text-[24px] leading-[32px] font-medium whitespace-nowrap text-figma-gray-900">
        Konfigurasi Kuisioner
      </h2>

      <div className="flex w-full flex-col gap-[15px]">
        {/* Target Angkatan */}
        <div className="flex w-full flex-col gap-[5px]">
          <p className={labelClass}>Target Angkatan</p>
          <button type="button" className={`${fieldClass} cursor-pointer`}>
            <span className="min-w-0 flex-1 truncate">Semua</span>
            <ChevronDown className={iconClass} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Masa Berlaku Kuisioner */}
        <div className="flex w-full flex-col gap-[5px]">
          <p className={labelClass}>Masa Berlaku Kuisioner</p>
          <button type="button" className={`${fieldClass} cursor-pointer`}>
            <span className="min-w-0 flex-1 truncate">pilih tanggal deadlinenya</span>
            <CalendarDays className={iconClass} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Jumlah Pertanyaan yang dibuat */}
        <div className="flex w-full flex-col gap-[5px]">
          <p className="w-full text-[14px] leading-[20px] font-medium text-figma-gray-900">
            Jumlah Pertanyaan yang dibuat
          </p>
          <div className="flex w-full items-start justify-center rounded-[10px] border border-solid border-figma-blue-800 bg-figma-gray-50 px-[20px] py-[15px]">
            <p className="text-[24px] leading-[32px] font-semibold whitespace-nowrap text-figma-blue-800">
              {questionCount}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default QuestionnaireConfigPanel;
