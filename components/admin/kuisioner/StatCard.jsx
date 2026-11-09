"use client";

import { Clock, CalendarDays } from "lucide-react";

// Kartu gelap: card _display_total varian gradient biru (Fig. 1105:23644)
export function StatHighlightCard({ label, value, suffix, progressPercent, icon: Icon }) {
  return (
    <div className="flex w-full flex-col gap-[12px] [border-radius:18px] bg-gradient-to-b from-figma-blue-400 to-figma-blue-700 p-[24px]">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm leading-5 font-medium text-figma-blue-300">{label}</p>
        {Icon && <Icon className="size-[24px] shrink-0 text-figma-blue-300" strokeWidth={1.6} />}
      </div>
      <div className="flex w-full items-center gap-[8px] whitespace-nowrap">
        <p className="text-2xl leading-8 font-semibold text-figma-white">{value}</p>
        {suffix && <p className="text-sm leading-5 text-figma-blue-300">{suffix}</p>}
      </div>
      <div className="flex h-[8px] w-full items-start overflow-hidden [border-radius:1000px] bg-figma-blue-300">
        <div
          className="h-[8px] [border-radius:1000px] bg-figma-white"
          style={{ width: `${Math.min(Math.max(progressPercent ?? 0, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}

// Kartu putih: card _display_total varian putih (Fig. 1105:23751)
export function StatPlainCard({ label, value, caption, icon: Icon }) {
  return (
    <div className="flex w-full flex-col gap-[12px] [border-radius:18px] bg-figma-white p-[24px]">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm leading-5 font-medium text-figma-gray-500">{label}</p>
        {Icon && <Icon className="size-[24px] shrink-0 text-figma-gray-500" strokeWidth={1.6} />}
      </div>
      <p className="text-2xl leading-8 font-semibold text-figma-gray-900">{value}</p>
      {caption && <p className="text-xs leading-4 text-figma-gray-500">{caption}</p>}
    </div>
  );
}

export const StatIcons = { Clock, CalendarDays };
