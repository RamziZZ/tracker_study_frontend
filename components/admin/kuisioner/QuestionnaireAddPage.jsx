"use client";

// Halaman "Tambah Kuisioner" — Figma page component `kuisioner`,
// variabel `add_kuisioner` (node 1105:23051, frame 1204x954).
//
// Nilai persis dari design context:
//   root        : flex-col, gap-24, bg halaman
//   kartu header: bg white, radius 32, pt-24 px-24 pb-42, gap-32
//     baris 1   : tombol kembali (gap-10, px-30 py-10, radius 10, teks 14/20 medium #6B7280)
//                 + grup tombol kanan gap-20:
//                   "Simpan Draft"    bg #DBEAFE, px-30 py-15, radius 10, 12/16 #1E437E, w-196
//                   "Publish Kuisioner" bg #3B82F6, px-40 py-15, radius 10, 12/16 #EFF6FF
//     baris 2   : judul 30/36 semibold #111827 + label status h-36 (bg white, border #93C5FD,
//                 radius 1000, px-20 py-10, 12/16 #1E437E) "Kuisioner Sedang Dibuat"
//   baris konten: gap-20
//     daftar_layout (1103:22473): bg white, radius 18, p-24, gap-18, flex-1
//       - no_question : ikon 64 + judul 18/28 semibold #1E437E + deskripsi 14/20 #6B7280
//                       + tombol dashed border #1E437E h-40.545 radius 10 w-full
//       - default     : daftar kartu pertanyaan + tombol tambah di bawahnya
//     section subheader (1103:22474): panel Konfigurasi, w-350

import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import { AddQuestionPopup } from "@/components/admin/kuisioner/AddQuestionPopup";
import { QuestionnaireConfigPanel } from "@/components/admin/kuisioner/QuestionnaireConfigPanel";
import { DaftarLayout } from "@/components/admin/kuisioner/question/DaftarLayout";
import { useQuestionnaireBuilder } from "@/hooks/useQuestionnaireBuilder";

const QUESTIONNAIRE_TITLE = "Survei Karier alumni 2022";
const STATUS_LABEL = "Kuisioner Sedang Dibuat";

// Tombol aksi kanan header (button_components 1103:22463 / 1103:22464)
const headerButtonBase =
  "flex cursor-pointer items-center justify-center rounded-[10px] py-[15px] text-[12px] leading-[16px] font-normal whitespace-nowrap transition-opacity hover:opacity-90";

function PageHeader() {
  return (
    <div className="flex w-full shrink-0 flex-col gap-8 rounded-[32px] bg-figma-white px-6 pt-6 pb-10.5">
      <div className="flex w-full items-start justify-between gap-6">
        <Link
          href="/admin/kuesioner"
          className="flex shrink-0 items-center gap-2.5 rounded-[10px] px-7.5 py-2.5 text-figma-gray-500 transition-opacity hover:opacity-70"
        >
          <ChevronLeft className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-[14px] leading-5 font-medium whitespace-nowrap">
            Kembali ke Daftar Kuisioner
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-5">
          <button
            type="button"
            className={`${headerButtonBase} w-49 bg-figma-blue-100 px-7.5 text-figma-blue-800`}
          >
            Simpan Draft
          </button>
          <button
            type="button"
            className={`${headerButtonBase} bg-figma-blue-500 px-10 text-figma-blue-50`}
          >
            Publish Kuisioner
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-5">
        <p className="text-[30px] leading-9 font-semibold whitespace-nowrap text-figma-gray-900">
          {QUESTIONNAIRE_TITLE}
        </p>
        <span className="flex h-9 shrink-0 items-center justify-center rounded-[1000px] border border-solid border-figma-blue-300 bg-figma-white px-5 py-2.5 text-[12px] leading-4 font-normal whitespace-nowrap text-figma-blue-800">
          {STATUS_LABEL}
        </span>
      </div>
    </div>
  );
}

export function QuestionnaireAddPage() {
  const { questions, handleAddQuestion, handleUpdateQuestion, handleRemoveQuestion } =
    useQuestionnaireBuilder();

  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const openAddPopup = useCallback(() => setIsAddPopupOpen(true), []);
  const closeAddPopup = useCallback(() => setIsAddPopupOpen(false), []);

  // Esc hanya aktif saat popup terbuka
  useEffect(() => {
    if (!isAddPopupOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsAddPopupOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isAddPopupOpen]);

  // Popup mengirim (value, key); `key` dipakai sebagai variant instance kartu
  const handleSelectType = useCallback(
    (type, variant) => {
      handleAddQuestion(type, variant);
      setIsAddPopupOpen(false);
    },
    [handleAddQuestion],
  );

  return (
    // Root mengunci tinggi layar: header kuisioner tetap di atas, hanya area
    // daftar pertanyaan yang scroll (panel config ikut tinggi kartu daftar).
    // `h-full` diperlukan karena main punya overflow-y-auto sendiri.
    <div className="flex h-full min-h-0 w-full flex-col gap-6">
      <PageHeader />

      <div className="flex min-h-0 w-full flex-1 flex-col items-start gap-6 overflow-hidden xl:flex-row">
        {/* daftar_layout: varian ditentukan otomatis (no_question / default) */}
        <DaftarLayout
          questions={questions}
          onAdd={openAddPopup}
          onUpdate={handleUpdateQuestion}
          onRemove={handleRemoveQuestion}
        />

        <QuestionnaireConfigPanel questionCount={questions.length} />
      </div>

      <AddQuestionPopup
        open={isAddPopupOpen}
        onClose={closeAddPopup}
        onSelect={handleSelectType}
      />
    </div>
  );
}

export default QuestionnaireAddPage;