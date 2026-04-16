"use client";

import { useEffect } from "react";

export function KuesionerPopup({ open, variant, message, onClose }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  const bgColor = variant === "success" ? "bg-green-50" : "bg-red-50";
  const borderColor = variant === "success" ? "border-green-200" : "border-red-200";
  const textColor = variant === "success" ? "text-green-800" : "text-red-800";
  const titleColor = variant === "success" ? "text-green-900" : "text-red-900";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className={`relative rounded-2xl border ${borderColor} ${bgColor} p-6 shadow-lg max-w-sm w-full`}>
        <div className="flex items-start gap-3">
          <div>
            <h3 className={`${titleColor} font-semibold text-lg`}>
              {variant === "success" ? "Berhasil" : "Error"}
            </h3>
            <p className={`${textColor} text-sm mt-2`}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
