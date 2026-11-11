"use client";

// Kartu tipe "Grup Pertanyaan" — Figma question_add_card 1086:23485 (794x699.5).
//
// Editor:
//   Nama Grup Pertanyaan → field (teks placeholder abu-biru #60A5FA di desain)
//   Daftar Pertanyaan    → field "a. / b. / c." dengan ikon berjenis:
//                          teks → X, select → chevron, radio → X (sesuai desain)
//                          + tombol "Tambah Opsi Pertanyaan"
// Pratinjau:
//   card pertanyaan_group_custom: judul grup bernomor, lalu tiap child_question_dropdown_group:
//   label "a. <pertanyaan>" semibold 14/20 #111827 + field jawaban sesuai jenis:
//     text   → field placeholder "Sebutkan contoh kasusnya..."
//     select → field placeholder "Pilih pendekatan solusi" + chevron
//     radio  → 3 radio_button_card (bg #EFF6FF, border #93C5FD, radius 10, px-20 py-15)
//              judul 14/20 semibold #1E437E + deskripsi 12/16 #60A5FA

import { ChevronDown, X } from "lucide-react";

import {
  LabeledField,
  PreviewCard,
  QuestionCardShell,
  TextField,
  labelClass,
  softButtonClass,
} from "./questionCardParts";

const RADIO_CHOICES = [
  ["Perlu bimbingan", "Masih membutuhkan arahan."],
  ["Cukup mandiri", "Sesekali membutuhkan masukan."],
  ["Mandiri", "Mampu memutuskan sendiri."],
];

const KIND_CYCLE = ["text", "select", "radio"];
const KIND_HINT = { text: "Teks", select: "Dropdown", radio: "Pilihan" };

export function QuestionCardGrup({ question, patch, onRemove }) {
  const items = question.groupItems || [];

  const updateItem = (id, changes) =>
    patch({ groupItems: items.map((item) => (item.id === id ? { ...item, ...changes } : item)) });

  const addItem = () =>
    patch({
      groupItems: [...items, { id: `item-${Date.now()}`, label: "Pertanyaan baru", kind: "text" }],
    });

  const removeItem = (id) => patch({ groupItems: items.filter((item) => item.id !== id) });

  return (
    <QuestionCardShell
      title="Grup Pertanyaan"
      onRemove={onRemove}
      editor={
        <>
          <LabeledField label="Nama Grup Pertanyaan">
            <TextField
              value={question.groupName}
              onChange={(groupName) => patch({ groupName })}
              placeholder="Kemampuan Berpikir Kritis & Pemecahan Masalah"
            />
          </LabeledField>

          <div className="flex w-full flex-col items-end gap-1">
            <p className={labelClass}>Daftar Pertanyaan</p>
            <div className="flex w-full flex-col gap-1">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex h-10 w-full items-center justify-between gap-2.5 rounded-xl border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-2.5"
                >
                  <span className="w-4 shrink-0 text-xs leading-4 text-figma-blue-800">
                    {String.fromCharCode(97 + index)}.
                  </span>
                  <input
                    value={item.label}
                    onChange={(event) => updateItem(item.id, { label: event.target.value })}
                    placeholder="Tulis pertanyaan"
                    className="min-w-0 flex-1 bg-transparent text-xs leading-4 text-figma-blue-800 outline-none placeholder:text-figma-blue-400"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const next = KIND_CYCLE[(KIND_CYCLE.indexOf(item.kind) + 1) % KIND_CYCLE.length];
                      updateItem(item.id, { kind: next });
                    }}
                    aria-label={`Ubah jenis jawaban (sekarang: ${KIND_HINT[item.kind] || "Teks"})`}
                    className="flex shrink-0 cursor-pointer items-center gap-1 text-xs leading-4 text-figma-blue-800"
                  >
                    {KIND_HINT[item.kind] || "Teks"}
                    <ChevronDown className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label="Hapus pertanyaan"
                    className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
                  >
                    <X className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
            <button type="button" onClick={addItem} className={softButtonClass}>
              Tambah Opsi Pertanyaan
            </button>
          </div>
        </>
      }
      preview={
        <PreviewCard>
          <div className="flex w-full flex-col">
            <div className="p-2.5">
              <ol className="w-full list-decimal pl-7 text-lg leading-7 font-bold text-figma-blue-800">
                <li>
                  {question.groupName || "Kemampuan Berpikir Kritis & Pemecahan Masalah"}
                </li>
              </ol>
            </div>

            {items.map((item, index) => (
              <div key={item.id} className="flex w-full flex-col gap-2.5 p-4">
                <p className="w-full text-sm leading-5 font-semibold text-figma-gray-900">
                  {String.fromCharCode(97 + index)}. {item.label}
                </p>

                {item.kind === "radio" ? (
                  <div className="flex w-full flex-col gap-2.5">
                    {RADIO_CHOICES.map(([title, description]) => (
                      <div
                        key={title}
                        className="flex w-full items-center gap-5 rounded-xl border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-4"
                      >
                        <span className="size-6 shrink-0 rounded-full border-2 border-solid border-figma-blue-200" />
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <p className="w-full text-sm leading-5 font-semibold text-figma-blue-800">
                            {title}
                          </p>
                          <p className="w-full text-xs leading-4 font-normal text-figma-blue-400">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-10 w-full items-center justify-between gap-2.5 rounded-xl border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-2.5">
                    <span className="text-xs leading-4 text-figma-blue-400">
                      {item.kind === "select"
                        ? "Pilih pendekatan solusi"
                        : "Sebutkan contoh kasusnya..."}
                    </span>
                    {item.kind === "select" ? (
                      <ChevronDown
                        className="size-6 shrink-0"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </PreviewCard>
      }
    />
  );
}

export default QuestionCardGrup;
