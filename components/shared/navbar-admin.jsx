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
    <div className="w-full h-fit pt-5">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur rounded-xl border border-slate-200">
        <div className="flex items-center justify-between pr-2 pl-4 h-fit py-2 ">
          <div className="flex items-center gap-3">
            <Image
              src="/icon-web/logo_tracer_study_1.webp"
              alt="Tracker Study Logo"
              width={180}
              height={72}
              className="object-contain"
            />
          </div>

          {/* Profile Section */}
          <Menu as="div" className="relative flex items-center">
            <MenuButton
              className="flex items-center gap-3 bg-transparent px-1.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Open profile menu"
            >
              <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 relative ring-2 ring-slate-100">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-semibold text-slate-900 line-clamp-1 max-w-[120px]">
                  {displayName}
                </p>
                <p className="text-xs text-slate-500 tracking-wider">
                  {userData?.role || "Admin"}
                </p>
              </div>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <MenuItems className="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-blue-100 ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-red-100 text-red-700" : "text-red-600"
                        } w-full text-left px-4 py-4 text-sm flex flex-row gap-2 justify-center items-center`}
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
