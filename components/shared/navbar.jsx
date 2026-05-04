"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01FreeIcons } from "@hugeicons/core-free-icons";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { href: "/", name: "Home" },
    { href: "/cari-alumni", name: "Tracking Alumni" },
    { href: "/loker", name: "Informasi Loker" },
    { href: "/tentang", name: "Tentang" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-blue-50"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            
            {/* Logo */}
            <Image
              alt="logo"
              src="/icon-web/logo-tracer-study_1.webp"
              width={180}
              height={24}
            />

            {/* Menu */}
            <div className="hidden lg:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "text-blue-500"
                      : "text-gray-500 hover:text-blue-300",
                    "px-3 py-2 text-sm"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Login */}
            <Link href="/login">
              <button className="hidden lg:block bg-blue-500 text-white px-6 py-2 rounded-full">
                Login
              </button>
            </Link>

            {/* Mobile Button */}
            <DisclosureButton className="lg:hidden">
              <HugeiconsIcon icon={Menu01FreeIcons} size={24} />
            </DisclosureButton>

          </div>
        </div>
      </div>
    </Disclosure>
  );
}