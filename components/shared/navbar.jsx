"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="font-bold text-blue-700">
          🎓 Tracer Study
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/cari-alumni">Tracking Alumni</Link>
          <Link href="/loker">Loker</Link>
          <Link href="/tentang">Tentang</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/">Home</Link>
          <Link href="/cari-alumni">Tracking Alumni</Link>
          <Link href="/loker">Loker</Link>
          <Link href="/tentang">Tentang</Link>
        </div>
      )}
    </header>
  );
}