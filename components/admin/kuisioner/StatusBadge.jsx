"use client";

// Varian card di Figma: Default (Sedang Berjalan), Variant2 (Sedang Dibuat), Variant3 (Sudah Selesai)
export const statusTheme = {
  "Sedang Berjalan": {
    shell: "bg-figma-green-100 border-figma-green-300",
    inner: "border-figma-green-300",
    text: "text-figma-green-500",
    hasThirdAction: true,
  },
  "Sedang Dibuat": {
    shell: "bg-figma-gray-50 border-figma-gray-300",
    inner: "border-figma-gray-300",
    text: "text-figma-gray-500",
    hasThirdAction: false,
  },
  "Sudah Selesai": {
    shell: "bg-figma-blue-100 border-figma-blue-300",
    inner: "border-figma-blue-300",
    text: "text-figma-blue-800",
    hasThirdAction: true,
  },
};

const fallbackTheme = statusTheme["Sedang Berjalan"];

export function StatusBadge({ status }) {
  const theme = statusTheme[status] ?? fallbackTheme;

  return <p className={`w-full text-[18px] leading-[28px] font-semibold ${theme.text}`}>Status: {status}</p>;
}
