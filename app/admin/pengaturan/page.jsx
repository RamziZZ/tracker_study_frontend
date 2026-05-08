"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function AkunmuPage() {
  
  const [email, setEmail] = useState("admin@gmail.com"); // Dummy data 

  return (
    <div className="flex-1 bg-transparent flex">
      
      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        
        {/* Informasi Akunmu */}
        <section className="flex flex-col items-center mb-10">
          <h2 className="text-lg font-medium text-black mb-6">
            Informasi Akunmu
          </h2>

          <div className="flex flex-col items-center">
            {/* Placeholder Foto Profil */}
            <div className="w-32 h-32 rounded-full bg-gray-300 shadow-md mb-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Foto Profil</span>
            </div>

            <button className="text-sm text-blue-700 hover:underline">
              Ubah Foto Profil
            </button>
          </div>
        </section>

        {/* Email & Password */}
        <section className="bg-white/70 rounded-2xl p-6 shadow-sm mb-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ===== EMAIL ===== */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>

                <div className="flex items-center gap-1">
                  <span className="text-red-500 text-sm">*</span>
                  <svg viewBox="0 0 14 14" className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor">
                    <path fillRule="evenodd"clipRule="evenodd"d="M6.99935 2.33366C4.42202 2.33366 2.33268 4.423 2.33268 7.00033C2.33268 9.57765 4.42202 11.667 6.99935 11.667C9.57668 11.667 11.666 9.57765 11.666 7.00033C11.666 4.423 9.57668 2.33366 6.99935 2.33366ZM1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033ZM7.04971 5.00694C6.81753 4.99807 6.59134 5.0818 6.42089 5.2397C6.25045 5.3976 6.14971 5.61675 6.14084 5.84893C6.12854 6.17086 5.8576 6.42187 5.53567 6.40957C5.21373 6.39727 4.96273 6.12632 4.97502 5.80439C4.9957 5.26302 5.2306 4.75204 5.62803 4.38385C6.02546 4.01567 6.55287 3.82045 7.09424 3.84113C7.63561 3.86181 8.1466 4.0967 8.51478 4.49413C8.88138 4.88985 9.0765 5.41443 9.05776 5.95334C9.0531 6.21822 8.99602 6.47957 8.8898 6.72231C8.78263 6.9672 8.6276 7.1882 8.43382 7.37233C8.24003 7.55646 8.0114 7.70001 7.76135 7.79453C7.70263 7.81673 7.64301 7.83612 7.58268 7.85267V8.16699C7.58268 8.48916 7.32152 8.75033 6.99935 8.75033C6.67718 8.75033 6.41602 8.48916 6.41602 8.16699V7.33983C6.41602 7.18137 6.48048 7.02974 6.59457 6.91979C6.70867 6.80983 6.86259 6.75103 7.02093 6.75689C7.13271 6.76103 7.24419 6.74279 7.34881 6.70324C7.45344 6.66368 7.54911 6.60362 7.6302 6.52657C7.71128 6.44953 7.77615 6.35705 7.82099 6.25458C7.86584 6.15211 7.88975 6.04171 7.89132 5.92987L7.89169 5.91581C7.90056 5.68363 7.81683 5.45744 7.65893 5.28699C7.50103 5.11655 7.28188 5.01581 7.04971 5.00694ZM6.41018 9.92155C6.41018 9.59938 6.67134 9.33822 6.99351 9.33822H6.99934C7.32151 9.33822 7.58268 9.59938 7.58268 9.92155C7.58268 10.2437 7.32151 10.5049 6.99934 10.5049H6.99351C6.67134 10.5049 6.41018 10.2437 6.41018 9.92155Z"/>
                  </svg>
                </div>
              </div>

              <input
                type="email"
                value={email} //ini nyoba manggil email dummy. dari line 10
                readOnly
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-blue-900 outline-none"
              />
            </div>

            {/* ===== PASSWORD ===== */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center gap-1">
                  <span className="text-red-500 text-sm">*</span>
                  <svg viewBox="0 0 14 14" className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor">
                    <path fillRule="evenodd"clipRule="evenodd"d="M6.99935 2.33366C4.42202 2.33366 2.33268 4.423 2.33268 7.00033C2.33268 9.57765 4.42202 11.667 6.99935 11.667C9.57668 11.667 11.666 9.57765 11.666 7.00033C11.666 4.423 9.57668 2.33366 6.99935 2.33366ZM1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033ZM7.04971 5.00694C6.81753 4.99807 6.59134 5.0818 6.42089 5.2397C6.25045 5.3976 6.14971 5.61675 6.14084 5.84893C6.12854 6.17086 5.8576 6.42187 5.53567 6.40957C5.21373 6.39727 4.96273 6.12632 4.97502 5.80439C4.9957 5.26302 5.2306 4.75204 5.62803 4.38385C6.02546 4.01567 6.55287 3.82045 7.09424 3.84113C7.63561 3.86181 8.1466 4.0967 8.51478 4.49413C8.88138 4.88985 9.0765 5.41443 9.05776 5.95334C9.0531 6.21822 8.99602 6.47957 8.8898 6.72231C8.78263 6.9672 8.6276 7.1882 8.43382 7.37233C8.24003 7.55646 8.0114 7.70001 7.76135 7.79453C7.70263 7.81673 7.64301 7.83612 7.58268 7.85267V8.16699C7.58268 8.48916 7.32152 8.75033 6.99935 8.75033C6.67718 8.75033 6.41602 8.48916 6.41602 8.16699V7.33983C6.41602 7.18137 6.48048 7.02974 6.59457 6.91979C6.70867 6.80983 6.86259 6.75103 7.02093 6.75689C7.13271 6.76103 7.24419 6.74279 7.34881 6.70324C7.45344 6.66368 7.54911 6.60362 7.6302 6.52657C7.71128 6.44953 7.77615 6.35705 7.82099 6.25458C7.86584 6.15211 7.88975 6.04171 7.89132 5.92987L7.89169 5.91581C7.90056 5.68363 7.81683 5.45744 7.65893 5.28699C7.50103 5.11655 7.28188 5.01581 7.04971 5.00694ZM6.41018 9.92155C6.41018 9.59938 6.67134 9.33822 6.99351 9.33822H6.99934C7.32151 9.33822 7.58268 9.59938 7.58268 9.92155C7.58268 10.2437 7.32151 10.5049 6.99934 10.5049H6.99351C6.67134 10.5049 6.41018 10.2437 6.41018 9.92155Z"/>
                  </svg>
                </div>
              </div>

              <input
                type="email"
                value={email} //ini nyoba manggil email dummy. di line 9
                readOnly
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-blue-900 outline-none"
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-[#214c93] text-white px-6 py-2 rounded-full text-sm hover:opacity-90">
              Ubah Password
            </button>

            <button className="bg-[#214c93] text-white px-6 py-2 rounded-full text-sm hover:opacity-90">
              Logout
            </button>
          </div>
        </section>

        {/* Informasi Data Diri */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-lg font-medium text-black mb-4">
            Informasi Data Diri
          </h2>

          <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
            <div className="space-y-5">

              {/* ===== NAMA ===== */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    Nama
                  </label>

                  <div className="flex items-center gap-1">
                    <span className="text-red-500 text-sm">*</span>
                    <svg viewBox="0 0 14 14" className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor">
                      <path fillRule="evenodd"clipRule="evenodd"d="M6.99935 2.33366C4.42202 2.33366 2.33268 4.423 2.33268 7.00033C2.33268 9.57765 4.42202 11.667 6.99935 11.667C9.57668 11.667 11.666 9.57765 11.666 7.00033C11.666 4.423 9.57668 2.33366 6.99935 2.33366ZM1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033ZM7.04971 5.00694C6.81753 4.99807 6.59134 5.0818 6.42089 5.2397C6.25045 5.3976 6.14971 5.61675 6.14084 5.84893C6.12854 6.17086 5.8576 6.42187 5.53567 6.40957C5.21373 6.39727 4.96273 6.12632 4.97502 5.80439C4.9957 5.26302 5.2306 4.75204 5.62803 4.38385C6.02546 4.01567 6.55287 3.82045 7.09424 3.84113C7.63561 3.86181 8.1466 4.0967 8.51478 4.49413C8.88138 4.88985 9.0765 5.41443 9.05776 5.95334C9.0531 6.21822 8.99602 6.47957 8.8898 6.72231C8.78263 6.9672 8.6276 7.1882 8.43382 7.37233C8.24003 7.55646 8.0114 7.70001 7.76135 7.79453C7.70263 7.81673 7.64301 7.83612 7.58268 7.85267V8.16699C7.58268 8.48916 7.32152 8.75033 6.99935 8.75033C6.67718 8.75033 6.41602 8.48916 6.41602 8.16699V7.33983C6.41602 7.18137 6.48048 7.02974 6.59457 6.91979C6.70867 6.80983 6.86259 6.75103 7.02093 6.75689C7.13271 6.76103 7.24419 6.74279 7.34881 6.70324C7.45344 6.66368 7.54911 6.60362 7.6302 6.52657C7.71128 6.44953 7.77615 6.35705 7.82099 6.25458C7.86584 6.15211 7.88975 6.04171 7.89132 5.92987L7.89169 5.91581C7.90056 5.68363 7.81683 5.45744 7.65893 5.28699C7.50103 5.11655 7.28188 5.01581 7.04971 5.00694ZM6.41018 9.92155C6.41018 9.59938 6.67134 9.33822 6.99351 9.33822H6.99934C7.32151 9.33822 7.58268 9.59938 7.58268 9.92155C7.58268 10.2437 7.32151 10.5049 6.99934 10.5049H6.99351C6.67134 10.5049 6.41018 10.2437 6.41018 9.92155Z"/>
                    </svg>
                  </div>
                </div>

                <input
                type="email"
                value={email} //ini nyoba manggil email dummy. di line 9
                readOnly
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-blue-900 outline-none"
                />
              </div>

              {/* ===== NIDN ===== */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    NIDN
                  </label>

                  <div className="flex items-center gap-1">
                    <span className="text-red-500 text-sm">*</span>
                    <svg viewBox="0 0 14 14" className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor">
                      <path fillRule="evenodd"clipRule="evenodd"d="M6.99935 2.33366C4.42202 2.33366 2.33268 4.423 2.33268 7.00033C2.33268 9.57765 4.42202 11.667 6.99935 11.667C9.57668 11.667 11.666 9.57765 11.666 7.00033C11.666 4.423 9.57668 2.33366 6.99935 2.33366ZM1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033ZM7.04971 5.00694C6.81753 4.99807 6.59134 5.0818 6.42089 5.2397C6.25045 5.3976 6.14971 5.61675 6.14084 5.84893C6.12854 6.17086 5.8576 6.42187 5.53567 6.40957C5.21373 6.39727 4.96273 6.12632 4.97502 5.80439C4.9957 5.26302 5.2306 4.75204 5.62803 4.38385C6.02546 4.01567 6.55287 3.82045 7.09424 3.84113C7.63561 3.86181 8.1466 4.0967 8.51478 4.49413C8.88138 4.88985 9.0765 5.41443 9.05776 5.95334C9.0531 6.21822 8.99602 6.47957 8.8898 6.72231C8.78263 6.9672 8.6276 7.1882 8.43382 7.37233C8.24003 7.55646 8.0114 7.70001 7.76135 7.79453C7.70263 7.81673 7.64301 7.83612 7.58268 7.85267V8.16699C7.58268 8.48916 7.32152 8.75033 6.99935 8.75033C6.67718 8.75033 6.41602 8.48916 6.41602 8.16699V7.33983C6.41602 7.18137 6.48048 7.02974 6.59457 6.91979C6.70867 6.80983 6.86259 6.75103 7.02093 6.75689C7.13271 6.76103 7.24419 6.74279 7.34881 6.70324C7.45344 6.66368 7.54911 6.60362 7.6302 6.52657C7.71128 6.44953 7.77615 6.35705 7.82099 6.25458C7.86584 6.15211 7.88975 6.04171 7.89132 5.92987L7.89169 5.91581C7.90056 5.68363 7.81683 5.45744 7.65893 5.28699C7.50103 5.11655 7.28188 5.01581 7.04971 5.00694ZM6.41018 9.92155C6.41018 9.59938 6.67134 9.33822 6.99351 9.33822H6.99934C7.32151 9.33822 7.58268 9.59938 7.58268 9.92155C7.58268 10.2437 7.32151 10.5049 6.99934 10.5049H6.99351C6.67134 10.5049 6.41018 10.2437 6.41018 9.92155Z"/>
                    </svg>
                  </div>
                </div>

                <input
                type="email"
                value={email} //ini nyoba manggil email dummy. di line 9
                readOnly
                className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-blue-900 outline-none"
                />
              </div>

            </div>

            {/* BUTTON */}
            <div className="flex justify-end mt-6">
              <button className="bg-[#214c93] text-white px-8 py-2 rounded-full text-sm hover:opacity-90">
                Ubah Data Diri
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}