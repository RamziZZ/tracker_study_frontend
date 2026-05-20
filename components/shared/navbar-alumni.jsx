"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, bottomItems } from "./sidebar-alumni";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01FreeIcons, Cancel01FreeIcons } from "@hugeicons/core-free-icons";

export default function NavbarAlumni() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || (href !== "/alumni" && pathname.startsWith(href));

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

          {/* Desktop Profile Section - Hidden on Mobile/Tablet */}
          <div className="hidden lg:flex items-center gap-3 bg-transparent px-1.5 py-1.5">
            <div className="h-10 w-10 rounded-full bg-slate-300" />
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">Tan Malaka</p>
              <p className="text-xs text-slate-500">Alumni</p>
            </div>
            <button
              type="button"
              className="text-slate-500 pr-2 hover:text-slate-700"
              aria-label="Profile settings"
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

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden pr-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <HugeiconsIcon
                icon={isMobileMenuOpen ? Cancel01FreeIcons : Menu01FreeIcons}
                size={24}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed right-0 top-0 h-full w-70 bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-slate-900">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-500 cursor-pointer hover:bg-blue-50 p-2 rounded-md duration-300"
              >
                <HugeiconsIcon icon={Cancel01FreeIcons} size={24} />
              </button>
            </div>

            {/* Mobile Profile Section */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl mb-6">
              <div className="h-12 w-12 rounded-full bg-slate-300 shrink-0" />
              <div className="overflow-hidden">
                <p className="text-base font-bold text-slate-900 truncate">
                  Tan Malaka
                </p>
                <p className="text-sm text-slate-500">Alumni</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 flex-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all ${
                      active
                        ? "bg-blue-100 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}

              <div className="border-t border-slate-100 my-4" />

              {bottomItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
