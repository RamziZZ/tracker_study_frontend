"use client";

import { useCallback } from "react";
import { X } from "lucide-react";

// Pilihan tipe pertanyaan di popup Tambah Pertanyaan.
// Sumber desain: Figma popup_add_pertanyaan 1031:24437 (5 kartu card_pilihan_add_pertanyaan).
// `value` = tipe yang dipakai QUESTION_TYPES di hooks/useQuestionnaireBuilder,
// `key`   = identitas unik opsi (Pilihan Ganda & Pilihan Hanya Satu memakai
//           komponen kartu pilihan ganda yang sama).
export const QUESTION_TYPE_OPTIONS = [
  {
    key: "angka",
    value: "angka",
    title: "Pertanyaan Input Dasar",
    description:
      "Pertanyan tunggal untuk teks bebas maupun angka spesifik dengan Min/Max",
    image: "/question-type/angka.png",
    imageAlt: "Contoh tampilan pertanyaan input teks bebas",
  },
  {
    key: "pilihan-ganda",
    value: "pilihan-ganda",
    title: "Pilihan Ganda",
    description:
      "Menambah beberapa opsi jawaban dinamis dengan fitur input ‘lainnya’",
    image: "/question-type/pilihan-ganda.png",
    imageAlt: "Contoh tampilan pertanyaan pilihan ganda",
  },
  {
    key: "pilihan-hanya-satu",
    value: "pilihan-ganda",
    title: "Pilihan Hanya Satu",
    description:
      "Menambah beberapa opsi jawaban dinamis dengan fitur input ‘lainnya’ dan hanya bisa memilih salah satu opsi",
    image: "/question-type/hanya-satu.png",
    imageAlt: "Contoh tampilan pertanyaan pilihan hanya satu",
  },
  {
    key: "matriks",
    value: "matriks",
    title: "Matrix Evaluasi",
    description: "Smart Builder otomatis untuk matrix skala ganda 1-5",
    image: "/question-type/matriks.png",
    imageAlt: "Contoh tampilan matrix evaluasi skala 1-5",
  },
  {
    key: "grup",
    value: "grup",
    title: "Grup Custom (Advance)",
    description:
      "Jaring pengaman fungsional untuk membangun relasi wadah dan isi secara manual",
    image: "/question-type/grup.png",
    imageAlt: "Contoh tampilan grup pertanyaan custom",
  },
];

// Popup pemilihan tipe pertanyaan (Figma: popup_add_pertanyaan 1031:24437).
// Ukuran & spacing mengikuti node desain apa adanya:
//   dialog  : border blue-300, radius 25, bg white, overflow-clip
//   header  : bg blue-100, border, p-15, gap-10, judul 18/28 bold blue-800
//   body    : p-10, gap-10
//   kartu   : border blue-100, radius 20, p-15, gap-10, thumbnail 160x100 radius 10
export function AddQuestionPopup({ open, onClose, onSelect }) {
  const handleSelect = useCallback(
    (option) => {
      onSelect(option.value, option.key);
      onClose();
    },
    [onClose, onSelect],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-question-popup-title"
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[calc(100vh-32px)] w-full max-w-[640px] flex-col overflow-clip rounded-[25px] border border-solid border-figma-blue-300 bg-figma-white"
      >
        <div className="flex w-full shrink-0 items-center gap-[10px] border border-solid border-figma-blue-300 bg-figma-blue-100 p-[15px]">
          <p
            id="add-question-popup-title"
            className="min-w-0 flex-1 text-[18px] leading-[28px] font-bold text-figma-blue-800"
          >
            Tambah Pertanyaan
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup popup tambah pertanyaan"
            className="flex size-[24px] shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
          >
            <X className="size-[24px]" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-[10px] overflow-y-auto p-[10px]">
          {QUESTION_TYPE_OPTIONS.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => handleSelect(option)}
              className="flex w-full cursor-pointer items-start gap-[10px] rounded-[20px] border border-solid border-figma-blue-100 p-[15px] text-left transition-colors hover:bg-figma-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-figma-blue-500"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-[5px]">
                <span className="block w-full text-[18px] leading-[28px] font-semibold text-figma-gray-900">
                  {option.title}
                </span>
                <span className="block w-full text-[12px] leading-[16px] font-normal text-figma-gray-500">
                  {option.description}
                </span>
              </span>
              <span className="h-[100px] w-[160px] shrink-0 overflow-hidden rounded-[10px]">
                <img
                  src={option.image}
                  alt={option.imageAlt}
                  className="size-full object-cover object-center"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
