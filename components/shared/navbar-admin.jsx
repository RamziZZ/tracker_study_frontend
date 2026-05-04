"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NavbarAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white rounded-lg shadow-sm px-6 h-[60px] flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/icons/logo_tracer_study.png"
          alt="Tracker Study"
          width={160}
          height={40}
          className="object-contain"
        />
      </div>

      {/* User Profile */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 ring-2 ring-gray-100">
            
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
      </div>
    </header>
  );
}