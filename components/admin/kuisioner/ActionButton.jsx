"use client";

// Token Figma (Default/*) -> utilitas Tailwind via @theme di app/globals.css
const variantClass = {
  default: "bg-figma-blue-100 border-figma-blue-300 text-figma-blue-800",
  primary: "bg-figma-blue-500 border-figma-blue-500 text-figma-blue-50",
  danger: "bg-figma-red-100 border-figma-red-300 text-figma-red-500",
  muted: "bg-figma-gray-200 border-figma-gray-200 text-figma-gray-500",
  outline: "bg-transparent border-figma-blue-800 text-figma-blue-800",
};

// chip (action card) r20 · button (header) r10 · pill (field/sort/filter) r1000
const shapeClass = {
  chip: "[border-radius:20px] p-[10px]",
  button: "[border-radius:10px] px-[20px] py-[10px]",
  pill: "h-[46px] [border-radius:1000px] px-[20px] py-[15px] justify-self-stretch",
};

export function ActionButton({
  children,
  onClick,
  variant = "default",
  shape = "chip",
  label,
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex cursor-pointer items-center justify-center gap-[10px] border border-solid text-xs leading-4 font-normal transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:hover:opacity-100 ${shapeClass[shape]} ${variantClass[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
