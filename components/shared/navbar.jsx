"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cari-alumni", label: "Tracking Alumni" },
    { href: "/loker", label: "Informasi Loker" },
    { href: "/tentang", label: "Tentang" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-blue-50">
      <div className="sticky flex justify-between items-center px-6 py-4">
        <Image alt="" src={'/icon-web/logo-tracer-study_1.webp'} width={180} height={24}/>

        <div className="flex gap-6 text-gray-500">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active text-blue-500 hover:text-blue-300 duration-300" : "hover:text-blue-300 duration-300"}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="bg-blue-500 text-blue-50 px-10 py-2 rounded-full hover:bg-blue-400 hover:shadow-md shadow-blue-200 hover:text-white duration-300 cursor-pointer">
          Login
        </button>
      </div>
      
    </nav>
  );
}