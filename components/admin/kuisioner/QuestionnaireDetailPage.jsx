"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, CalendarDays, Users, ChevronDown } from "lucide-react";
import { AlumniAnswerModal } from "@/components/admin/kuisioner/AlumniAnswerModal";
import { AlumniAnswerTable } from "@/components/admin/kuisioner/AlumniAnswerTable";
import { BarBreakdown, ChartSummaryCard, DonutBreakdown } from "@/components/admin/kuisioner/ChartSummaryCard";
import { StatHighlightCard, StatPlainCard } from "@/components/admin/kuisioner/StatCard";
import { statusTheme } from "@/components/admin/kuisioner/StatusBadge";

const PAGE_SIZE = 5;

const headerButtonClass =
  "flex h-[46px] cursor-pointer items-center justify-center [border-radius:10px] border border-solid px-[20px] text-xs leading-4 transition-opacity hover:opacity-80";

// Halaman detail kuisioner
// Figma: detail_kuisioner (1105:23054) & detail_kuisioner_selesai (1144:24145)
export function QuestionnaireDetailPage({ data }) {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const lastTriggerRef = useRef(null);

  const theme = statusTheme[data.status] ?? statusTheme["Sedang Berjalan"];
  const isSelesai = data.status === "Sudah Selesai";

  const handleOpenAnswer = (alumni) => {
    lastTriggerRef.current = document.activeElement;
    setSelectedAlumni(alumni);
  };

  const handleCloseAnswer = () => {
    setSelectedAlumni(null);
    lastTriggerRef.current?.focus?.();
  };

  useEffect(() => {
    if (!selectedAlumni) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleCloseAnswer();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAlumni]);

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredAlumni = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return data.alumni.filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(keyword) || alumni.nim.toLowerCase().includes(keyword),
    );
  }, [data.alumni, search]);

  const totalPages = Math.max(1, Math.ceil(filteredAlumni.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedAlumni = filteredAlumni.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const filledPercent = Math.round(
    (data.totalResponden.filled / (data.totalResponden.target || 1)) * 100,
  );

  const startData = filteredAlumni.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const endData = Math.min(currentPage * PAGE_SIZE, filteredAlumni.length);

  return (
    <div className="flex h-full w-full flex-col gap-[16px]">
      {/* Frame 414 — header */}
      <section className="flex w-full shrink-0 flex-col gap-[16px] [border-radius:12px] bg-figma-white p-[20px]">
        <div className="flex w-full flex-wrap items-center justify-between gap-[16px]">
          <Link
            href="/admin/kuesioner"
            className="flex h-[44px] items-center gap-[10px] [border-radius:10px] border border-figma-blue-800 px-[20px] text-xs leading-4 text-figma-blue-800 transition-opacity hover:opacity-80"
          >
            <ChevronLeft className="size-[16px]" strokeWidth={1.8} />
            Kembali ke Daftar Kuisioner
          </Link>

          <div className="flex flex-wrap items-center gap-[12px]">
            {data.headerActions.map((action) => {
              const isDanger = action === "Tutup Kuisioner";
              const variantClass = isDanger
                ? "border-figma-red-300 bg-figma-red-100 text-figma-red-500"
                : action === "Kirim Pengingat Kuisioner"
                  ? "border-figma-blue-500 bg-figma-blue-100 text-figma-blue-800"
                  : "border-figma-blue-800 text-figma-blue-800";

              return (
                <button key={action} type="button" className={`${headerButtonClass} ${variantClass}`}>
                  {action}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center gap-[10px]">
          <h1 className="min-w-0 text-3xl leading-9 font-semibold text-figma-gray-900">
            {data.title}
          </h1>
          <span
            className={`[border-radius:1000px] border px-[15px] py-[5px] text-xs leading-4 ${theme.shell} ${theme.text}`}
          >
            {data.statusLabel}
          </span>
        </div>

        <p className="[border-radius:10px] bg-figma-blue-50 px-[15px] py-[10px] text-xs leading-4 text-figma-blue-800">
          {data.banner}
        </p>

        <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-4">
          <label className="flex h-[46px] items-center [border-radius:1000px] border border-figma-blue-800 px-[20px] md:col-span-2">
            <input
              value={search}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Cari nama atau NIM alumni..."
              className="w-full bg-transparent text-xs leading-4 text-figma-gray-900 outline-none placeholder:text-figma-gray-500"
            />
          </label>
          <button
            type="button"
            className="flex h-[46px] items-center justify-center gap-[10px] [border-radius:1000px] border border-figma-blue-800 px-[20px] text-xs leading-4 text-figma-blue-800"
          >
            Terbaru
            <ChevronDown className="size-[16px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            className="flex h-[46px] items-center justify-center gap-[10px] [border-radius:1000px] border border-figma-blue-800 px-[20px] text-xs leading-4 text-figma-blue-800"
          >
            Filter Data
            <ChevronDown className="size-[16px]" strokeWidth={1.8} />
          </button>
        </div>
      </section>

      <div className="flex min-h-0 flex-1 flex-col gap-[16px] overflow-y-auto pr-[4px]">
        {/* Frame 421 — kartu statistik & grafik */}
        <div className="grid w-full grid-cols-1 gap-[16px] lg:grid-cols-2">
          <StatHighlightCard
            label="Total Responden Sementara"
            value={`${data.totalResponden.filled}/${data.totalResponden.target} Alumni`}
            suffix={`(${filledPercent}%)`}
            progressPercent={filledPercent}
            icon={Users}
          />
          <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2">
            <StatPlainCard label="Rata-rata Waktu isi" value={data.averageTime} icon={Clock} />
            <StatPlainCard
              label="Sisa Waktu Tayang"
              value={data.remainingTime.value}
              caption={data.remainingTime.caption}
              icon={CalendarDays}
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-[16px] lg:grid-cols-2">
          <ChartSummaryCard title="Status Alumni" caption="Berdasarkan jawaban responden">
            <DonutBreakdown items={data.jobStatus} />
          </ChartSummaryCard>
          <ChartSummaryCard title="Berdasarkan Wilayah Kerja" caption="Sebaran lokasi kerja alumni">
            <BarBreakdown items={data.jobLocation} />
          </ChartSummaryCard>
        </div>

        {/* Frame 429 — tabel alumni */}
        <section className="flex w-full flex-col gap-[16px] [border-radius:16px] bg-figma-white p-[20px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-[12px]">
            <h2 className="text-lg leading-7 font-semibold text-figma-gray-900">
              Daftar Alumni yang Telah Selesai Mengisi
            </h2>
            <div className="flex flex-wrap items-center gap-[10px]">
              <button
                type="button"
                disabled={selectedIds.length === 0}
                className={`${headerButtonClass} border-figma-blue-300 bg-figma-blue-100 text-figma-blue-800 disabled:cursor-not-allowed disabled:opacity-40`}
              >
                Unduh Jawaban yang Dipilih
              </button>
              <button
                type="button"
                className={`${headerButtonClass} border-figma-blue-500 bg-figma-blue-500 text-figma-blue-50`}
              >
                Unduh Semua Jawaban Alumni
              </button>
            </div>
          </div>

          <AlumniAnswerTable
            alumniList={pagedAlumni}
            selectedIds={selectedIds}
            onToggleSelect={handleToggleSelect}
            onOpenAnswer={handleOpenAnswer}
          />

          <div className="flex w-full flex-wrap items-center justify-between gap-[12px]">
            <p className="text-xs leading-4 text-figma-gray-500">
              {filteredAlumni.length === 0
                ? "0 data"
                : `${startData}-${endData} dari ${filteredAlumni.length} data`}
              {selectedIds.length > 0 && ` · ${selectedIds.length} dipilih`}
            </p>

            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                aria-label="Halaman sebelumnya"
                disabled={currentPage <= 1}
                onClick={() => setPage(currentPage - 1)}
                className={`flex size-[40.545px] items-center justify-center [border-radius:1000px] transition-opacity ${
                  currentPage <= 1
                    ? "cursor-not-allowed bg-figma-gray-200 text-figma-gray-500"
                    : "cursor-pointer bg-figma-blue-500 text-figma-white hover:opacity-80"
                }`}
              >
                <ChevronLeft className="size-[20px]" strokeWidth={2} />
              </button>
              <button
                type="button"
                aria-label="Halaman berikutnya"
                disabled={currentPage >= totalPages}
                onClick={() => setPage(currentPage + 1)}
                className={`flex size-[40.545px] items-center justify-center [border-radius:1000px] transition-opacity ${
                  currentPage >= totalPages
                    ? "cursor-not-allowed bg-figma-gray-200 text-figma-gray-500"
                    : "cursor-pointer bg-figma-blue-500 text-figma-white hover:opacity-80"
                }`}
              >
                <ChevronRight className="size-[20px]" strokeWidth={2} />
              </button>
            </div>
          </div>
        </section>

        {isSelesai && (
          <p className="pb-[8px] text-xs leading-4 text-figma-gray-500">
            Kuisioner ini sudah ditutup. Data bersifat final dan tidak dapat diubah.
          </p>
        )}
      </div>

      {/* Popup jawaban satu alumni — inilah satu-satunya popup di alur ini */}
      <AlumniAnswerModal alumni={selectedAlumni} onClose={handleCloseAnswer} />
    </div>
  );
}
