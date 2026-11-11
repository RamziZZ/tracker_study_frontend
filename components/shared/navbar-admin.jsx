"use client";

import { Fragment, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Login01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDown } from "lucide-react";

// Header admin — Figma node 1162:26391 "Header_alumni_components" (1536x144).
//
// Nilai persis dari design context:
//   wrapper : flex items-center justify-center p-24 (tinggi total 144)
//   kartu   : bg white, radius 32, p-24, flex-1, justify-between (tinggi 96)
//   logo    : 192x24 object-cover
//   profil  : gap-10, radius 100, items-center
//     avatar  : size-48, radius 1000
//     nama    : 14/20 semibold #1E437E
//     role    : 12/16 regular #9CA3AF
//     chevron : size-24, dengan pr-10
// Ikon memakai lucide-react.
export default function NavbarAdmin() {
  // Data user hanya ada di browser; render nilai netral saat SSR lalu
  // lengkapi setelah mount untuk menghindari hydration mismatch.
  const [userData] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = window.localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };

  const displayName = userData?.username || "Admin";
  const roleLabel = userData?.role || "Admin";
  const profileImage = "/avatar_default.png";

  return (
    <header className="flex w-full shrink-0 items-center justify-center p-[24px]">
      <nav className="flex min-w-0 flex-1 items-center justify-between rounded-[32px] bg-figma-white p-[24px]">
        {/* Logo 192x24 */}
        <div className="relative h-[24px] w-[192px] shrink-0">
          <Image
            src="/icon-web/logo_tracer_study_1.webp"
            alt="Tracker Study"
            fill
            priority
            sizes="192px"
            className="object-contain object-left"
          />
        </div>

        {/* Profil */}
        <Menu as="div" className="relative flex shrink-0 items-center rounded-[100px]">
          <MenuButton
            className="flex cursor-pointer items-center gap-[10px] rounded-[100px] transition-opacity hover:opacity-80"
            aria-label="Buka menu profil"
          >
            <div className="relative size-[48px] shrink-0 overflow-hidden rounded-[1000px] bg-figma-gray-300">
              <Image src={profileImage} alt="Foto profil" fill sizes="48px" className="object-cover" />
            </div>

            <div className="flex h-full flex-col items-start justify-center whitespace-nowrap text-left">
              <p className="text-[14px] leading-[20px] font-semibold text-figma-blue-800">
                {displayName}
              </p>
              <p className="text-[12px] leading-[16px] font-normal text-figma-gray-400">
                {roleLabel}
              </p>
            </div>

            <span className="flex shrink-0 items-center pr-[10px] text-figma-gray-500">
              <ChevronDown className="size-[24px]" strokeWidth={1.5} aria-hidden="true" />
            </span>
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute top-full right-0 z-50 mt-2 w-48 origin-top-right rounded-[12px] bg-figma-white shadow-lg ring-1 ring-figma-blue-100 focus:outline-none">
              <div className="p-[8px]">
                <MenuItem>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className={`flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-[10px] px-[16px] py-[12px] text-[14px] leading-[20px] font-normal ${
                        active ? "bg-figma-red-100 text-figma-red-500" : "text-figma-red-500"
                      }`}
                    >
                      Keluar Akun
                      <HugeiconsIcon icon={Login01FreeIcons} size={20} />
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
}
