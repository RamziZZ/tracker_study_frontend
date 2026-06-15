// components/admin/loker/DetailJob.jsx
import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02FreeIcons,
  PinLocation01FreeIcons,
  Calendar03FreeIcons,
  Briefcase01FreeIcons,
  Link02FreeIcons,
  TickDouble02FreeIcons,
} from "@hugeicons/core-free-icons";

export default function DetailJob({ job, onBack }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Jika data job belum selesai di-fetch, tampilkan loading/skeleton halus
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f5fa]">
        <p className="text-gray-500 animate-pulse font-medium">
          Memuat data lowongan...
        </p>
      </div>
    );
  }

  // Destrukturisasi data sesuai dengan field yang dikirim API Laravel kamu
  const {
    title,
    company,
    description,
    location,
    category,
    poster_image,
    expired_at,
  } = job;

  const imgBaseUrl = process.env.NEXT_PUBLIC_IMG_URL;
  const posterPath = poster_image
    ? `${imgBaseUrl}${poster_image}`
    : "/icon-web/logo-tracer-study_1.webp";

  const formatExpiredDate = (dateString) => {
    if (!dateString) return "Selamanya";
    try {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="bg-[#f0f5fa] rounded-[32px] overflow-hidden font-sans antialiased text-[#1a253c] animate-in fade-in zoom-in-95 duration-300 shadow-sm border border-slate-200">
      <div className="w-full mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#f8fbfe]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1e4620] bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
          >
            <HugeiconsIcon
              icon={ArrowLeft02FreeIcons}
              size={18}
              strokeWidth={2}
            />
            Kembali
          </button>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#0f172a]">
            Detail Loker
          </h1>
          <div className="w-24 hidden sm:block"></div>
        </div>

        {/* Konten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
          {/* Poster (Rasio 3:4) */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div
              onClick={() => setIsZoomed(!isZoomed)}
              className={`relative w-full max-w-[320px] aspect-3/4 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 cursor-zoom-in transition-transform duration-300 shadow-sm group ${
                isZoomed
                  ? "fixed inset-4 md:inset-20 z-50 max-w-none w-auto h-auto object-contain cursor-zoom-out bg-black/80 shadow-2xl scale-100"
                  : "hover:scale-[1.02]"
              }`}
            >
              <Image
                src={posterPath}
                alt={title}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                priority
                unoptimized
                className={`transition-opacity duration-300 ${isZoomed ? "object-contain" : "object-cover"}`}
              />
            </div>
          </div>

          {/* Detail Info */}
          <div className="md:col-span-8 w-full flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-lg font-medium text-[#2563eb] tracking-wide">
                  {company}
                </h2>
                {/* <div className="flex items-center gap-2.5">
                  <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1d4ed8] text-white text-sm font-medium rounded-xl hover:bg-[#1e40af] transition-colors shadow-sm">
                    <HugeiconsIcon
                      icon={Link02FreeIcons}
                      size={18}
                      strokeWidth={2}
                    />
                    Link Pendaftaran
                  </button>
                  <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#10b981] text-white text-sm font-medium rounded-xl hover:bg-[#059669] transition-colors shadow-sm">
                    <HugeiconsIcon
                      icon={TickDouble02FreeIcons}
                      size={18}
                      strokeWidth={2}
                    />
                    Verifikasi Loker
                  </button>
                </div> */}
              </div>

              <h3 className="text-3xl font-bold text-[#0f172a] mt-2 tracking-tight">
                {title}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 mt-4">
                <div className="flex items-center gap-1.5 px-4 py-2 bg-[#f0f7ff] border border-[#dbeafe] text-[#1e40af] text-sm font-medium rounded-xl">
                  <HugeiconsIcon
                    icon={PinLocation01FreeIcons}
                    size={16}
                    strokeWidth={2}
                    className="text-[#3b82f6]"
                  />
                  {location || "No Location"}
                </div>
                <div className="flex items-center gap-1.5 px-4 py-2 bg-[#fff7ed] border border-[#ffedd5] text-[#9a3412] text-sm font-medium rounded-xl">
                  <HugeiconsIcon
                    icon={Calendar03FreeIcons}
                    size={16}
                    strokeWidth={2}
                    className="text-[#f97316]"
                  />
                  <span>Batas Akhir: </span>
                  <span className="font-semibold">
                    {formatExpiredDate(expired_at)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-2 bg-[#f0fdf4] border border-[#dcfce7] text-[#166534] text-sm font-medium rounded-xl">
                  <HugeiconsIcon
                    icon={Briefcase01FreeIcons}
                    size={16}
                    strokeWidth={2}
                    className="text-[#22c55e]"
                  />
                  {category || "Full Time"}
                </div>
              </div>

              <hr className="my-6 border-gray-100" />

              <div className="prose prose-slate max-w-none">
                <h4 className="text-lg font-bold text-[#0f172a] mb-2">
                  Tentang Pekerjaan ini
                </h4>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
