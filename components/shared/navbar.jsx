"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="font-bold text-blue-700">Tracer Study</h1>

      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/home/cari-alumni">Tracking Alumni</Link>
        <Link href="/home/loker">Informasi Loker</Link>
        <Link href="/home/tentang">Tentang</Link>
      </div>

      <button className="bg-blue-700 text-white px-4 py-2 rounded-full">
        Login
      </button>
    </nav>
  );
}