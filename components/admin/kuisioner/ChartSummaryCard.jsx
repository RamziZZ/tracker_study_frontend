"use client";

// Kartu ringkasan grafik: "Status Alumni" (donut) & "Berdasarkan Wilayah Kerja" (bar)
export function ChartSummaryCard({ title, caption, children }) {
  return (
    <div className="flex w-full flex-col gap-[12px] [border-radius:18px] bg-figma-white p-[24px]">
      <div className="flex w-full items-center justify-between gap-[10px]">
        <p className="text-sm leading-5 font-medium text-figma-gray-500">{title}</p>
        {caption && <p className="text-xs leading-4 text-figma-gray-400">{caption}</p>}
      </div>
      {children}
    </div>
  );
}

const DONUT_COLORS = [
  "var(--color-figma-blue-800)",
  "var(--color-figma-blue-500)",
  "var(--color-figma-blue-400)",
  "var(--color-figma-blue-300)",
  "var(--color-figma-blue-200)",
];

// Donut sederhana dengan conic-gradient supaya tidak perlu library chart
export function DonutBreakdown({ items }) {
  const total = items.reduce((sum, item) => sum + item.total, 0) || 1;

  // Hitung offset kumulatif tanpa mutasi variabel (aturan react-hooks/immutability)
  const segments = items.map((item, index) => {
    const previous = items.slice(0, index).reduce((sum, entry) => sum + entry.total, 0);
    const start = (previous / total) * 100;
    const end = ((previous + item.total) / total) * 100;
    return `${DONUT_COLORS[index % DONUT_COLORS.length]} ${start}% ${end}%`;
  });

  return (
    <div className="flex w-full flex-col items-center gap-[16px] sm:flex-row sm:items-center">
      <div
        className="relative flex size-[140px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundImage: `conic-gradient(${segments.join(", ")})` }}
        role="img"
        aria-label={`Total ${total} responden`}
      >
        <div className="flex size-[92px] flex-col items-center justify-center rounded-full bg-figma-white">
          <span className="text-2xl leading-8 font-bold text-figma-gray-900">{total}</span>
          <span className="text-xs leading-4 text-figma-gray-500">Total</span>
        </div>
      </div>

      <ul className="flex w-full min-w-0 flex-col gap-[6px]">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-[8px]">
            <span
              className="size-[10px] shrink-0 rounded-full"
              style={{ backgroundColor: DONUT_COLORS[index % DONUT_COLORS.length] }}
            />
            <span className="min-w-0 flex-1 truncate text-xs leading-4 text-figma-gray-500">
              {item.label}
            </span>
            <span className="text-xs leading-4 font-semibold text-figma-gray-900">
              {Math.round((item.total / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BarBreakdown({ items }) {
  const max = Math.max(...items.map((item) => item.total), 1);

  return (
    <ul className="flex w-full flex-col gap-[12px]">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-[12px]">
          <span className="w-[92px] shrink-0 text-xs leading-4 text-figma-gray-500">
            {item.label}
          </span>
          <span className="flex h-[10px] min-w-0 flex-1 items-start overflow-hidden [border-radius:1000px] bg-figma-blue-100">
            <span
              className="h-[10px] [border-radius:1000px] bg-figma-blue-500"
              style={{ width: `${(item.total / max) * 100}%` }}
            />
          </span>
          <span className="w-[32px] shrink-0 text-right text-xs leading-4 font-semibold text-figma-gray-900">
            {item.total}
          </span>
        </li>
      ))}
    </ul>
  );
}
