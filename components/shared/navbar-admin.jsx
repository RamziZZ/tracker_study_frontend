"use client";

import Image from "next/image";
// import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NavbarAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white rounded-lg border border-gray-200 pr-2 pl-4 h-fit py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/icon-web/logo_tracer_study_1.webp"
          alt="Tracker Study"
          width={160}
          height={40}
          className="object-contain"
        />
      </div>

      {/* User Profile */}
      {/* <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0 ring-2 ring-gray-100">
            
          </div>
          <div className="text-left hidden sm:block">
            
          </div>
          <ChevronDown
            size={15}
            className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50">
            <a href="/admin/pengaturan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pengaturan</a>
            <hr className="my-1 border-gray-100" />
            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">Keluar</button>
          </div>
        )}
      </div> */}
      <div className="flex items-center gap-3 bg-transparent py-1.5">
        <div className="h-10 w-10 rounded-full bg-slate-300" />
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900">Soekarno</p>
          <p className="text-xs text-slate-500">Admin 1</p>
        </div>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
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
    </header>
  );
}
