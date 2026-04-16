"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ================= ICONS =================
// Dashboard
const HomeIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 15.9858V19.333C4 23.7327 4 25.9326 5.36684 27.2995C6.73367 28.6663 8.93356 28.6663 13.3333 28.6663H18.6667C23.0664 28.6663 25.2663 28.6663 26.6332 27.2995C28 25.9326 28 23.7327 28 19.333V15.9858C28 13.7441 28 12.6233 27.5255 11.6531C27.0509 10.6828 26.1663 9.99471 24.3968 8.61849L21.7301 6.54441C18.9775 4.40347 17.6012 3.33301 16 3.33301C14.3988 3.33301 13.0225 4.40347 10.2699 6.54441L7.60321 8.61849C5.83377 9.99471 4.94905 10.6828 4.47453 11.6531C4 12.6233 4 13.7441 4 15.9858Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 22.667C18.934 23.4969 17.5336 24.0003 16 24.0003C14.4663 24.0003 13.066 23.4969 12 22.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Kuisioner
const BookIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M7.11046 4C10.3911 3.99543 13.5573 5.18279 16 7.33333V28C13.5573 25.8495 10.3911 24.6621 7.11046 24.6667C5.02778 24.6667 3.98644 24.6667 3.52636 24.3723C3.25015 24.1955 3.1373 24.0825 2.9605 23.8063C2.66602 23.3463 2.66602 22.5255 2.66602 20.8839V8.53763C2.66602 6.63391 2.66602 5.68205 3.39767 4.91048C4.12932 4.13891 4.87832 4.09909 6.37631 4.01947C6.61935 4.00655 6.86412 4 7.11046 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.8889 4C21.6083 3.99543 18.442 5.18279 16 7.33333V28C18.442 25.8495 21.6083 24.6621 24.8889 24.6667C26.9716 24.6667 28.0129 24.6667 28.4729 24.3723C28.7492 24.1955 28.862 24.0825 29.0388 23.8063C29.3333 23.3463 29.3333 22.5255 29.3333 20.8839V8.53763C29.3333 6.63391 29.3333 5.68205 28.6017 4.91048C27.87 4.13891 27.1211 4.09909 25.6231 4.01947C25.38 4.00655 25.1352 4 24.8889 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Info Loker
const WorkIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M2.66602 18.6663C2.66602 14.9211 2.66602 13.0485 3.56484 11.7033C3.95396 11.121 4.45396 10.621 5.03631 10.2318C6.3815 9.33301 8.25412 9.33301 11.9993 9.33301H19.9993C23.7445 9.33301 25.6172 9.33301 26.9624 10.2318C27.5447 10.621 28.0447 11.121 28.4339 11.7033C29.3327 13.0485 29.3327 14.9211 29.3327 18.6663C29.3327 22.4115 29.3327 24.2842 28.4339 25.6294C28.0447 26.2117 27.5447 26.7117 26.9624 27.1009C25.6172 27.9997 23.7445 27.9997 19.9993 27.9997H11.9993C8.25412 27.9997 6.3815 27.9997 5.03631 27.1009C4.45396 26.7117 3.95396 26.2117 3.56484 25.6294C2.66602 24.2842 2.66602 22.4115 2.66602 18.6663Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M21.3327 9.33333C21.3327 6.81917 21.3327 5.56209 20.5516 4.78105C19.7705 4 18.5135 4 15.9993 4C13.4852 4 12.2281 4 11.4471 4.78105C10.666 5.56209 10.666 6.81917 10.666 9.33333" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 14.667L8.86929 14.9363C13.4468 16.355 18.5532 16.355 23.1307 14.9363L24 14.667M16 16.0003V18.667" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Setting
const SettingIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M3.33398 15.9997C3.33398 10.0286 3.33398 7.04299 5.18897 5.18799C7.04397 3.33301 10.0295 3.33301 16.0007 3.33301C21.9717 3.33301 24.9573 3.33301 26.8124 5.18799C28.6673 7.04299 28.6673 10.0286 28.6673 15.9997C28.6673 21.9707 28.6673 24.9563 26.8124 26.8114C24.9573 28.6663 21.9717 28.6663 16.0007 28.6663C10.0295 28.6663 7.04397 28.6663 5.18897 26.8114C3.33398 24.9563 3.33398 21.9707 3.33398 15.9997Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11.334 13.333C10.2294 13.333 9.33398 12.4376 9.33398 11.333C9.33398 10.2284 10.2294 9.33301 11.334 9.33301C12.4386 9.33301 13.334 10.2284 13.334 11.333C13.334 12.4376 12.4386 13.333 11.334 13.333Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20.666 22.667C21.7705 22.667 22.666 21.7715 22.666 20.667C22.666 19.5625 21.7705 18.667 20.666 18.667C19.5615 18.667 18.666 19.5625 18.666 20.667C18.666 21.7715 19.5615 22.667 20.666 22.667Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13.334 11.333H22.6673" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18.6673 20.667H9.33398" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// ================= DATA =================
const navItems = [
  { label: "Dashboard", href: "/alumni", icon: HomeIcon },
  { label: "Kuesioner", href: "/alumni/kuesioner", icon: BookIcon },
  { label: "Info Loker", href: "/alumni/loker", icon: WorkIcon },
];

const bottomItems = [
  { label: "Pengaturan", href: "/alumni/pengaturan", icon: SettingIcon },
];

// ================= COMPONENT =================
export default function SidebarAlumni() {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || (href !== "/alumni" && pathname.startsWith(href));

  const linkClass = (href) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg text-[15px] transition-all duration-200 ${
      isActive(href)
        ? "bg-blue-200 text-blue-500"
        : "text-gray-500 hover:bg-blue-200 hover:text-blue-500"
    }`;

  const iconClass = (href) =>
    isActive(href) ? "text-blue-500" : "text-gray-500";

  return (
    <aside className="w-[220px] h-screen sticky top-0 bg-white rounded-lg shadow-sm flex flex-col pt-4 pb-5 px-3 overflow-y-auto">
      <div className="mb-5 flex items-center gap-3 px-3">
        <div className="h-12 w-12 rounded-2xl bg-slate-200" />
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              <Icon className={`w-[20px] h-[20px] ${iconClass(item.href)}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-100 my-4" />

      <nav className="flex flex-col gap-2">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              <Icon className={`w-[20px] h-[20px] ${iconClass(item.href)}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
