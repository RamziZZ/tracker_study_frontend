"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavbarAlumni() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logotracer.png"
            alt="Tracker Study Logo"
            width={180}
            height={72}
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
          <div className="h-12 w-12 rounded-full bg-slate-300" />
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">Tan Malaka</p>
            <p className="text-xs text-slate-500">Alumni</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-slate-500 hover:text-slate-700"
            aria-label="Open profile menu"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
