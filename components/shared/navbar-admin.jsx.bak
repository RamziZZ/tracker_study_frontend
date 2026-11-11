"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

// Headless UI
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Login01FreeIcons } from "@hugeicons/core-free-icons";

export default function NavbarAdmin() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };

  const displayName = userData?.username || "Admin";
  const profileImage = "/avatar_default.png"; // Default image for admin

  return (
    <div className="w-full shrink-0">
      <nav className="rounded-[20px] bg-figma-white border border-figma-gray-200">
        <div className="flex items-center justify-between px-[20px] py-[12px]">
          <div className="flex items-center gap-[12px]">
            <Image
              src="/icon-web/logo_tracer_study_1.webp"
              alt="Tracker Study Logo"
              width={160}
              height={20}
              className="h-[20px] w-[160px] object-contain"
            />
          </div>

          {/* Profile Section */}
          <Menu as="div" className="relative flex items-center">
            <MenuButton
              className="flex items-center gap-[8px] rounded-[100px] px-[6px] py-[4px] transition-colors hover:bg-figma-gray-50"
              aria-label="Open profile menu"
            >
              <div className="relative size-[36px] overflow-hidden rounded-full bg-slate-200">
                <Image src={profileImage} alt="Profile" fill className="object-cover" />
              </div>
              <div className="hidden flex-col items-start justify-center text-left sm:flex">
                <p className="text-sm leading-5 font-semibold whitespace-nowrap text-figma-blue-800">
                  {displayName}
                </p>
                <p className="text-xs leading-4 font-normal whitespace-nowrap text-figma-gray-400">
                  {userData?.role || "Admin"}
                </p>
              </div>
              <span className="flex items-center text-figma-gray-500">
                <svg viewBox="0 0 20 20" fill="none" className="size-[20px]">
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
              <MenuItems className="absolute right-0 top-full mt-2 z-50 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-figma-blue-100 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-figma-red-100 text-figma-red-500" : "text-figma-red-500"
                        } flex w-full flex-row items-center justify-center gap-2 px-4 py-4 text-left text-sm`}
                      >
                        Keluar Akun
                        <HugeiconsIcon icon={Login01FreeIcons} />
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
