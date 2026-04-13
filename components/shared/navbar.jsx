"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-blue-700">Tracer Study</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink href="/home" label="Home" pathname={pathname} />
          <NavLink href="/home/cari-alumni" label="Tracking Alumni" pathname={pathname} />
          <NavLink href="/home/loker" label="Informasi Loker" pathname={pathname} />
          <NavLink href="/home/tentang" label="Tentang" pathname={pathname} />

          <button className="bg-blue-700 text-white px-4 py-2 rounded-full">
            Login
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLink href="/home" label="Home" pathname={pathname} />
          <NavLink href="/home/cari-alumni" label="Tracking Alumni" pathname={pathname} />
          <NavLink href="/home/loker" label="Informasi Loker" pathname={pathname} />
          <NavLink href="/home/tentang" label="Tentang" pathname={pathname} />

          <button className="bg-blue-700 text-white px-4 py-2 rounded-full w-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

/* 🔹 Reusable NavLink */
function NavLink({ href, label, pathname }) {
  return (
    <Link
      href={href}
      className={
        pathname === href
          ? "text-blue-700 font-semibold"
          : "text-gray-700 hover:text-blue-500"
      }
    >
      {label}
    </Link>
  );
}