"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ================= ICONS =================
// Akunmu
const AkunMuIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M20.6673 10.6667C20.6673 6.98477 17.6825 4 14.0007 4C10.3188 4 7.33398 6.98477 7.33398 10.6667C7.33398 14.3485 10.3188 17.3333 14.0007 17.3333C17.6825 17.3333 20.6673 14.3485 20.6673 10.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66602 26.6663C4.66602 21.5117 8.8447 17.333 13.9993 17.333C15.6993 17.333 17.2932 17.7875 18.666 18.5817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26.9183 19.9122L26.0881 19.0821C25.5347 18.5286 24.6373 18.5286 24.0839 19.0821L19.6188 23.5472C19.0253 24.1406 18.6208 24.8966 18.4561 25.7197L18 28.0004L20.2807 27.5442C21.1037 27.3796 21.8597 26.975 22.4532 26.3816L26.9183 21.9165C27.4717 21.363 27.4717 20.4657 26.9183 19.9122Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Manajemen akun
const ManajemenAkunIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M20.6673 14.6667C20.6673 12.0893 18.578 10 16.0007 10C13.4233 10 11.334 12.0893 11.334 14.6667C11.334 17.244 13.4233 19.3333 16.0007 19.3333C18.578 19.3333 20.6673 17.244 20.6673 14.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.6427 15.1332C21.072 15.2633 21.5273 15.3333 21.9991 15.3333C24.5764 15.3333 26.6657 13.244 26.6657 10.6667C26.6657 8.08933 24.5764 6 21.9991 6C19.5792 6 17.5895 7.84187 17.3555 10.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6443 10.2002C14.4103 7.84187 12.4205 6 10.0007 6C7.42332 6 5.33398 8.08933 5.33398 10.6667C5.33398 13.244 7.42332 15.3333 10.0007 15.3333C10.4724 15.3333 10.9278 15.2633 11.357 15.1332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.3333 21.9997C29.3333 18.3178 26.0501 15.333 22 15.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.3327 25.9997C23.3327 22.3178 20.0495 19.333 15.9993 19.333C11.9493 19.333 8.66602 22.3178 8.66602 25.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99935 15.333C5.94926 15.333 2.66602 18.3178 2.66602 21.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Kuesioner
const KuesionerIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M7.11046 4.00001C10.3911 3.99543 13.5573 5.18279 15.9993 7.33333V28C13.5573 25.8495 10.3911 24.6621 7.11046 24.6667C5.02778 24.6667 3.98644 24.6667 3.52636 24.3723C3.25015 24.1955 3.1373 24.0825 2.9605 23.8063C2.66602 23.3463 2.66602 22.5255 2.66602 20.8839V8.53763C2.66602 6.63391 2.66602 5.68205 3.39767 4.91048C4.12932 4.13891 4.87832 4.09909 6.37631 4.01947C6.61935 4.00655 6.86412 4.00001 7.11046 4.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28V7.33333C18.442 5.18279 21.6083 3.99543 24.8889 4.00001C25.1352 4.00001 25.38 4.00655 25.6231 4.01947C27.1211 4.09909 27.87 4.13891 28.6017 4.91048C29.3333 5.68205 29.3333 6.63391 29.3333 8.53763V15.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28.9183 19.9122L28.0881 19.0821C27.5347 18.5286 26.6373 18.5286 26.0839 19.0821L21.6188 23.5472C21.0253 24.1406 20.6208 24.8966 20.4561 25.7197L20 28.0004L22.2807 27.5442C23.1037 27.3796 23.8597 26.975 24.4532 26.3816L28.9183 21.9165C29.4717 21.363 29.4717 20.4657 28.9183 19.9122Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Pengingat
const PengingatIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M2.66602 7.33301L11.8834 12.5556C15.2815 14.481 16.7172 14.481 20.1153 12.5556L29.3327 7.33301" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M29.3264 13.3711C29.2392 9.28152 29.1956 7.23665 27.6867 5.72188C26.1776 4.20709 24.0775 4.15432 19.8771 4.04879C17.2884 3.98375 14.7251 3.98373 12.1364 4.04877C7.93605 4.15431 5.83589 4.20707 4.32687 5.72185C2.81787 7.23664 2.77426 9.28151 2.68705 13.3711C2.65901 14.6862 2.65901 15.9934 2.68705 17.3085C2.77427 21.3982 2.81787 23.443 4.32689 24.9578C5.83589 26.4726 7.93605 26.5254 12.1364 26.6309C12.7607 26.6466 13.3836 26.6585 14.0056 26.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.803 17.9188L28.7262 18.842C29.5072 19.6229 29.5072 20.8893 28.7262 21.6704L23.8896 26.5979C23.5092 26.9784 23.0226 27.2349 22.4936 27.3336L19.496 27.9844C19.0228 28.0871 18.6014 27.6669 18.7027 27.1933L19.3408 24.2129C19.4395 23.684 19.696 23.1973 20.0766 22.8168L24.9746 17.9188C25.7556 17.1377 27.022 17.1377 27.803 17.9188Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Informasi Instansi
const InformasiInstansiIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M9.33398 29.3332V16.5307C9.33398 15.1064 9.33398 14.3943 9.66009 13.7969C9.98618 13.1997 10.5852 12.8146 11.7833 12.0444L14.5587 10.2602C15.2589 9.81005 15.6091 9.58496 16.0007 9.58496C16.3923 9.58496 16.7424 9.81005 17.4427 10.2602L20.218 12.0444C21.4161 12.8146 22.015 13.1997 22.3412 13.7969C22.6673 14.3943 22.6673 15.1064 22.6673 16.5307V29.3332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17.333H16.012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.9993 29.333V21.5494C27.9993 18.4939 26.3204 18.2466 22.666 17.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 29.333V21.5494C4 18.4939 5.67888 18.2466 9.33333 17.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66602 29.333H29.3327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 29.3333V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 9.33366V6.64328M16 6.64328V3.9608C16 3.32853 16 3.0124 16.1952 2.81597C16.8081 2.19952 19.3333 3.6577 20.2937 4.24904C21.1047 4.7484 21.3333 5.74585 21.3333 6.64328H16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Tentang Website
const TentangWebsiteIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M3.33398 15.9997C3.33398 10.0286 3.33398 7.04299 5.18897 5.18799C7.04397 3.33301 10.0295 3.33301 16.0007 3.33301C21.9717 3.33301 24.9573 3.33301 26.8124 5.18799C28.6673 7.04299 28.6673 10.0286 28.6673 15.9997C28.6673 21.9707 28.6673 24.9563 26.8124 26.8114C24.9573 28.6663 21.9717 28.6663 16.0007 28.6663C10.0295 28.6663 7.04397 28.6663 5.18897 26.8114C3.33398 24.9563 3.33398 21.9707 3.33398 15.9997Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3.33398 12H28.6673" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9.33398 8H9.34596" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.666 8H14.678" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Batasan Admin
const BatasanAdminIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M19.3333 9.99967C19.3333 6.31778 16.3485 3.33301 12.6667 3.33301C8.98477 3.33301 6 6.31778 6 9.99967C6 13.6815 8.98477 16.6663 12.6667 16.6663C16.3485 16.6663 19.3333 13.6815 19.3333 9.99967Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33398 26.0003C3.33398 20.8457 7.51266 16.667 12.6673 16.667C14.0988 16.667 15.4549 16.9893 16.6673 17.5651" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.0007 26.6667C25.2397 26.6667 26.3209 25.9907 26.8953 24.9872M24.0007 26.6667C22.7616 26.6667 21.6804 25.9907 21.106 24.9872M24.0007 26.6667V28.6667M26.8953 24.9872L28.6673 25.9997M26.8953 24.9872C27.1745 24.4999 27.334 23.9352 27.334 23.3333C27.334 22.7313 27.1744 22.1665 26.8952 21.6791M21.106 24.9872L19.334 25.9997M21.106 24.9872C20.8268 24.4999 20.6673 23.9352 20.6673 23.3333C20.6673 22.7313 20.8269 22.1665 21.1061 21.6791M24.0007 20C25.2396 20 26.3207 20.6759 26.8952 21.6791M24.0007 20C22.7617 20 21.6807 20.6759 21.1061 21.6791M24.0007 20V18M26.8952 21.6791L28.6673 20.6664M21.1061 21.6791L19.334 20.6664" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Backup Data
const BackupDataIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M4 16C4 18.2092 8.77563 20 14.6667 20C15.1183 20 15.5632 19.9895 16 19.9691" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M25.3333 6.66699V15.3337M4 6.66699V25.3337C4 27.5429 8.77563 29.3337 14.6667 29.3337C15.1183 29.3337 15.5632 29.3231 16 29.3027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14.6667 10.667C20.5577 10.667 25.3333 8.87613 25.3333 6.66699C25.3333 4.45785 20.5577 2.66699 14.6667 2.66699C8.77563 2.66699 4 4.45785 4 6.66699C4 8.87613 8.77563 10.667 14.6667 10.667Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9.33398 10.667V13.3337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9.33398 20V22.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26.6484 18.667L27.3141 21.4462L26.2081 20.7551C25.4203 20.1567 24.4411 19.8019 23.3799 19.8019C20.7764 19.8019 18.666 21.9357 18.666 24.5678C18.666 27.1999 20.7764 29.3337 23.3799 29.3337C25.6603 29.3337 27.5625 27.6963 27.9993 25.521" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ================= SIDEBAR =================
export default function SidebarPengaturanAdmin() {
  const pathname = usePathname();

  const section = [
    {
      title: "Pengaturan Akun",
      items: [
        { label: "Akunmu", href: "/admin/pengaturan", icon: AkunMuIcon },
        { label: "Manajemen Akun", href: "/admin/pengaturan/manajemen-akun", icon: ManajemenAkunIcon },
      ],
    },
    // {
    //   title: "Konten Manajemen",
    //   items: [
    //     { label: "Kuesioner", href: "/admin/pengaturan/kuesioner", icon: KuesionerIcon },
    //     { label: "Template Pengingat", href: "/admin/pengaturan/template-pengingat", icon: PengingatIcon },
    //     { label: "Informasi Instansi", href: "/admin/pengaturan/informasi-instansi", icon: InformasiInstansiIcon },
    //     { label: "Tentang Website", href: "/admin/pengaturan/tentang-website", icon: TentangWebsiteIcon },
    //   ],
    // },
    // {
    //   title: "Keamanan & Backup Data",
    //   items: [
    // { label: "Batasan Admin", href: "/admin/pengaturan/batasan-admin", icon: BatasanAdminIcon },
    // { label: "Backup Data", href: "/admin/pengaturan/backup-data", icon: BackupDataIcon },
    // ],
    // },
  ];

  const isActive = (href) => {
    // khusus default halaman pengaturan (Akunmu)
    if (href === "/admin/pengaturan") {
      return pathname === "/admin/pengaturan";
    }

    // selain itu pakai startsWith
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-[220px] min-h-screen bg-white rounded-lg shadow-sm flex flex-col pt-3 pb-5 px-3">
      <nav className="flex flex-col flex-1 mt-2">
        {section.map((group) => (
          <div key={group.title} className="mb-2">
            {/* Judul Section */}
            <h3 className="text-[14px] font-semibold text-black px-2 mb-1 tracking-normal">
              {group.title}
            </h3>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-5 py-2 rounded-lg text-[13px] transition-all duration-200 ${
                      active
                        ? "bg-blue-200 text-blue-500"
                        : "text-gray-500 hover:bg-blue-200 hover:text-blue-500"
                    }`}
                  >
                    <Icon
                      className={`w-[20px] h-[20px] ${
                        active ? "text-blue-500" : "text-gray-500"
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}