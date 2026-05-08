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
    { href: "/", name: "Home", },
    { href: "/cari-alumni", name: "Tracking Alumni", },
    { href: "/loker", name: "Informasi Loker", },
    { href: "/event", name: "Event", },
    { href: "/tentang", name: "Tentang", },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (    
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-blue-50/75 backdrop-blur-sm border-b border-blue-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="sticky mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="sticky flex h-16 items-center justify-between">
          <div className="w-full flex flex-1 items-center justify-between sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <Image alt="" src={'/icon-web/logo-tracer-study_1.webp'} width={180} height={24}/>
            </div>
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      pathname === item.href ? ' text-blue-500' : 'text-gray-500  hover:text-blue-300',
                      'rounded-md px-3 py-2 text-sm font-normal duration-300',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <a href='/auth/login/' className="bg-blue-500 text-blue-50 px-10 py-2 hidden lg:block rounded-full hover:bg-blue-400 hover:shadow-md shadow-blue-200 hover:text-white duration-300 cursor-pointer">
              Login
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full p-1 text-gray-500 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              {link.name}
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