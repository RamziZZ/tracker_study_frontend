"use client";

export function CardMetaPill({ icon, label, compact = false }) {
  // Label pertama di Figma: px-[15px] py-[10px]; label kedua & ketiga: p-[10px]
  const padding = compact ? "p-[10px]" : "px-[15px] py-[10px]";

  return (
    <div
      className={`flex shrink-0 items-center gap-[15px] [border-radius:1000px] border border-figma-blue-300 bg-figma-blue-100 shadow-[0_3px_2.5px_#DBEAFE] ${padding}`}
    >
      <span className="flex size-[18px] shrink-0 items-center justify-center text-figma-blue-800">
        {icon}
      </span>
      <p className="whitespace-nowrap text-xs leading-4 font-normal text-figma-blue-800">{label}</p>
    </div>
  );
}
