"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavbarAlumni() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-fit px-5 pt-5">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur rounded-xl border border-slate-200">
        <div className="flex items-center justify-between pr-2 pl-4 h-fit py-2 ">
          <div className="flex items-center gap-3">
            <Image
              src="/logotracer.png"
              alt="Tracker Study Logo"
              width={180}
              height={72}
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-3 bg-transparent px-1.5 py-1.5">
            <div className="h-10 w-10 rounded-full bg-slate-300" />
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">Tan Malaka</p>
              <p className="text-xs text-slate-500">Alumni</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-slate-500 pr-2 hover:text-slate-700"
              aria-label="Open profile menu"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6">
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
    </div>
  );
}
