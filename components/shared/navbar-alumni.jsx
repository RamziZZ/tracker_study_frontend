"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { navItems, bottomItems } from "./sidebar-alumni";
import { alumniService } from "@/services/alumni_service";

// Headless UI
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01FreeIcons,
  Cancel01FreeIcons,
  Login01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function NavbarAlumni() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        try {
          const result = await alumniService.getProfileMe();
          setUserData({ ...user, alumni: result.data || result });
        } catch (error) {
          console.error("Failed to sync profile:", error);
          setUserData(user);
        }
      }
    };
    fetchProfile();
  }, []);

  // Menentukan nama dan gambar profile berdasarkan data dari backend
  const displayName = userData?.alumni?.name || userData?.username || "Alumni";
  const profileImage = userData?.alumni?.img_profile
    ? `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")}/storage/${
        userData.alumni.img_profile
      }`
    : "/avatar_default.png";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };

  const isActive = (href) =>
    pathname === href || (href !== "/alumni" && pathname.startsWith(href));

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

          {/* Desktop Profile Section - Hidden on Mobile/Tablet */}
          <Menu as="div" className="relative hidden lg:flex items-center">
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
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900 line-clamp-1 max-w-[120px]">
                  {displayName}
                </p>
                <p className="text-xs text-slate-500 tracking-wider">
                  {userData?.role || "Alumni"}
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
                <div className="">
                  {/* <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/alumni/pengaturan"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                      >
                        Pengaturan
                      </Link>
                    )}
                  </MenuItem> */}
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-red-100 text-red-700" : "text-red-600"
                        } w-full text-left px-4 py-4 text-sm flex flex-row gap-2 justify-center`}
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
              <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 relative shrink-0">
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <p className="text-base font-bold text-slate-900 truncate">
                  {displayName}
                </p>
                <p className="text-sm text-slate-500">
                  {userData?.role || "Alumni"}
                </p>
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

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-5 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all mt-4 w-full cursor-pointer"
              >
                <HugeiconsIcon icon={Login01FreeIcons} className="w-5 h-5" />
                <span className="font-medium">Keluar Akun</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
