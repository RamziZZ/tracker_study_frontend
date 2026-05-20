"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01FreeIcons } from "@hugeicons/core-free-icons"

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
    return classes.filter(Boolean).join(' ')
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
              <Image alt="" src={'/icon-web/logo_tracer_study_1.webp'} width={180} height={24}/>
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
            <a href='/login' className="bg-blue-500 text-blue-50 px-10 py-2 hidden lg:block rounded-full hover:bg-blue-400 hover:shadow-md shadow-blue-200 hover:text-white duration-300 cursor-pointer">
              Login
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full p-1 text-gray-500 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span> */}
              {/* <BellIcon aria-hidden="true" className="size-6" /> */}
            {/* </button> */}
            {/* <button className="bg-blue-500 text-blue-50 px-10 py-2 hidden lg:block rounded-full hover:bg-blue-400 hover:shadow-md shadow-blue-200 hover:text-white duration-300 cursor-pointer">
              Login
            </button> */}

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image alt="" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} width={24} height={24}/>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
                
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
          <div className="absolute inset-y-0 flex items-center lg:hidden right-0">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" /> */}
              <HugeiconsIcon icon={Menu01FreeIcons} size={24} color="black" strokeWidth={1.5} />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                pathname === item.href ? 'text-blue-500' : 'text-gray-500  hover:text-blue-300',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}