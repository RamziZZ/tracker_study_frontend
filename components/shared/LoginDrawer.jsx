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

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Login Button (Desktop) */}
          <Link
            href="/login"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Login
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/">Home</Link>
          <Link href="/cari-alumni">Tracking Alumni</Link>
          <Link href="/loker">Loker</Link>
          <Link href="/tentang">Tentang</Link>

          {/* Login Mobile */}
          <Link
            href="/login"
            className="bg-blue-600 text-white py-2 text-center rounded"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}