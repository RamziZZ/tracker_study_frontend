"use client";

// Bagian-bagian kartu yang dipakai bersama oleh semua tipe pertanyaan.
// Semua nilai diambil dari Figma component `question_add_card` (1086:22592 children).
//
// Token yang dipakai berulang:
//   header kartu : bg #DBEAFE, border #93C5FD, p-16, gap-10, judul 18/28 bold #1E437E
//   label        : 14/20 medium #1E437E
//   field        : h-40, radius 10, border #93C5FD, bg #EFF6FF, px-20 py-10, 12/16
//   kolom editor : flex-1, p-20, gap-20, items-end
//   kolom preview: flex-1, p-20, gap-10, bg gradient blue-100→blue-50, border-l #BFDBFE
//   tombol simpan: h-40, rounded-full, px-40 py-10, bg #3B82F6, 12/16 #EFF6FF
//   tombol opsi  : bg #DBEAFE, rounded-full, px-30 py-12, 12/16 #1E437E

import { X } from "lucide-react";

export const labelClass = "w-full text-sm leading-5 font-medium text-figma-blue-800";

export const fieldClass =
  "flex h-10 w-full items-center justify-between gap-2.5 rounded-lg border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-2.5 text-xs leading-4 font-normal text-figma-blue-800";

export const placeholderTextClass = "text-figma-blue-400";

export const softButtonClass =
  "flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-figma-blue-100 px-7.5 py-3 text-xs leading-4 font-normal whitespace-nowrap text-figma-blue-800 transition-colors hover:bg-figma-blue-200";

export const primaryButtonClass =
  "flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-figma-blue-500 px-10 py-2.5 text-xs leading-4 font-normal whitespace-nowrap text-figma-blue-50 transition-opacity hover:opacity-90";

// Header kartu: judul biru + tombol hapus (ikon X lucide)
export function CardHeader({ title, onRemove }) {
  return (
    <div className="flex w-full shrink-0 items-center gap-2.5 border border-solid border-figma-blue-300 bg-figma-blue-100 p-4">
      <p className="min-w-0 flex-1 text-lg leading-7 font-bold text-figma-blue-800">{title}</p>
      <button
        type="button"
        onClick={onRemove}
        aria-label="Hapus pertanyaan"
        className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
      >
        <X className="size-6" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}

// Satu field berlabel
export function LabeledField({ label, children, hint }) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <p className={labelClass}>{label}</p>
      {children}
      {hint ? (
        <p className="w-full text-xs leading-4 font-normal text-figma-blue-800 italic">{hint}</p>
      ) : null}
    </div>
  );
}

// Field teks yang bisa diketik
export function TextField({ value, onChange, placeholder, readOnly = false }) {
  return (
    <div className={fieldClass}>
      <input
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="min-w-0 flex-1 bg-transparent text-xs leading-4 text-figma-blue-800 outline-none placeholder:text-figma-blue-400"
      />
    </div>
  );
}

// Tombol hapus opsi di dalam field
export function RemoveItemButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Hapus opsi"
      className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
    >
      <X className="size-6" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

// Kerangka kartu: header + 2 kolom (editor & pratinjau) + tombol simpan
export function QuestionCardShell({ title, onRemove, editor, preview }) {
  return (
    <article className="flex w-full flex-col overflow-clip rounded-4xl border border-solid border-figma-blue-300 bg-figma-white">
      <CardHeader title={title} onRemove={onRemove} />
      <div className="flex w-full flex-col items-start xl:flex-row">
        <div className="flex min-w-0 flex-1 flex-col items-end gap-5 p-5">
          <div className="flex w-full flex-col gap-2.5">{editor}</div>
          <button type="button" className={primaryButtonClass}>
            Simpan Pertanyaan
          </button>
        </div>
        <div className="flex w-full flex-col gap-2.5 self-stretch border-t border-solid border-figma-blue-200 bg-linear-to-t from-figma-blue-100 to-figma-blue-50 p-5 xl:min-w-0 xl:flex-1 xl:border-t-0 xl:border-l">
          <p className="w-full text-sm leading-5 font-semibold text-figma-blue-800">
            Tampilan Pertanyaan yang Alumni Lihat
          </p>
          {preview}
        </div>
      </div>
    </article>
  );
}

// Kartu pratinjau alumni (card pertanyaan_* di Figma)
export function PreviewCard({ children }) {
  return (
    <div className="flex w-full flex-col overflow-clip rounded-4xl border border-solid border-figma-blue-300 bg-figma-white p-2.5">
      {children}
    </div>
  );
}
