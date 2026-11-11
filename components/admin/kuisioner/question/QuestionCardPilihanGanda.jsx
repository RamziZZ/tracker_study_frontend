"use client";

// Kartu tipe "Pilihan Ganda" — Figma question_add_card 1086:23197 (794x559.3).
//
// Editor:
//   Teks Pertanyaan → field
//   Opsi Jawaban    → chip wrap gap-8; tiap chip bg white, border #D1D5DB,
//                     radius 1000, px-20 py-10, teks 12/16 #6B7280, dengan X 18px
//                     + chip "Tambah Opsi" (bg #DBEAFE, radius 1000, px-30 py-11)
//   Pilihan Lainnya → radio_button_card: bg #EFF6FF, border #93C5FD, radius 10,
//                     px-20 py-15, gap-20, radio 24 + judul 14/20 semibold + deskripsi 12/16 #60A5FA
// Pratinjau:
//   card pertanyaan_checkbox: soal bernomor + "* Pilih semua yang sesuai" +
//   chip opsi h-36 (terpilih: bg #BFDBFE, border #60A5FA) + field "Isi jawaban lainnya"

import { X } from "lucide-react";

import {
  LabeledField,
  PreviewCard,
  QuestionCardShell,
  TextField,
  labelClass,
  softButtonClass,
} from "./questionCardParts";

export function QuestionCardPilihanGanda({ question, patch, onRemove }) {
  const options = question.options || [];
  const selectedCount = 1;

  const updateOption = (index, value) => {
    const next = [...options];
    next[index] = value;
    patch({ options: next });
  };
  const addOption = () => patch({ options: [...options, ""] });
  const removeOption = (index) => patch({ options: options.filter((_, i) => i !== index) });

  return (
    <QuestionCardShell
      title="Pilihan Ganda"
      onRemove={onRemove}
      editor={
        <>
          <LabeledField label="Teks Pertanyaan">
            <TextField
              value={question.text}
              onChange={(text) => patch({ text })}
              placeholder="Bagaimana Anda menemukan pekerjaan pertama setelah lulus?"
            />
          </LabeledField>

          <div className="flex w-full flex-col gap-1.25">
            <p className={labelClass}>Opsi Jawaban</p>
            <div className="flex w-full flex-wrap items-center gap-2">
              {options.map((option, index) => (
                <div
                  key={`option-${index}`}
                  className="flex shrink-0 items-center justify-center gap-3.75 rounded-full border border-solid border-figma-gray-300 bg-figma-white px-5 py-2.5"
                >
                  <input
                    value={option}
                    onChange={(event) => updateOption(index, event.target.value)}
                    placeholder="Opsi"
                    className="min-w-0 max-w-50 bg-transparent text-xs leading-4 text-figma-gray-500 outline-none placeholder:text-figma-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    aria-label="Hapus opsi"
                    className="flex size-4.5 shrink-0 cursor-pointer items-center justify-center text-figma-gray-500 transition-opacity hover:opacity-70"
                  >
                    <X className="size-4.5" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>
              ))}

              <button type="button" onClick={addOption} className={softButtonClass}>
                Tambah Opsi
              </button>
            </div>
          </div>

          {/* radio_button_card: Pilihan Lainnya */}
          <div className="flex w-full items-center gap-5 rounded-lg border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-3.75">
            <button
              type="button"
              onClick={() => patch({ otherOption: !question.otherOption })}
              aria-pressed={Boolean(question.otherOption)}
              aria-label="Aktifkan pilihan lainnya"
              className="relative size-6 shrink-0 cursor-pointer rounded-full border-2 border-solid border-figma-blue-200"
            >
              {question.otherOption ? (
                <span className="absolute inset-1 rounded-full bg-figma-blue-500" />
              ) : null}
            </button>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="w-full text-sm leading-5 font-semibold text-figma-blue-800">
                Pilihan Lainnya
              </p>
              <p className="w-full text-xs leading-4 font-normal text-figma-blue-400">
                Aktifkan agar alumni dapat menulis sumber lain.
              </p>
            </div>
          </div>
        </>
      }
      preview={
        <PreviewCard>
          <div className="flex w-full flex-col gap-3.75 p-2.5">
            <div className="flex w-full flex-col gap-1.25">
              <ol className="w-full list-decimal pl-7 text-lg leading-7 font-bold text-figma-blue-800">
                <li>{question.text || "Bagaimana Anda menemukan pekerjaan pertama setelah lulus?"}</li>
              </ol>
              <p className="text-xs leading-4 font-normal whitespace-nowrap text-figma-blue-800">
                * Pilih semua yang sesuai
              </p>
            </div>

            <div className="flex w-full flex-wrap items-start gap-2.5">
              {options.filter(Boolean).map((option, index) => {
                const active = index < selectedCount;
                return (
                  <div
                    key={`preview-${index}`}
                    className={`flex h-9 shrink-0 items-center justify-center rounded-full border border-solid px-5 py-2.5 ${
                      active
                        ? "border-figma-blue-400 bg-figma-blue-200 shadow-tk-label"
                        : "border-figma-gray-300 bg-figma-white"
                    }`}
                  >
                    <span
                      className={`text-xs leading-4 whitespace-nowrap ${
                        active ? "text-figma-blue-800" : "text-figma-gray-500"
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                );
              })}
            </div>

            {question.otherOption ? (
              <div className="flex w-full flex-col gap-1.25">
                <p className="text-xs leading-4 font-medium whitespace-nowrap text-figma-blue-800">
                  Isi jawaban lainnya
                </p>
                <div className="flex h-9.6875 w-full items-start rounded-lg border border-solid border-figma-gray-200 bg-figma-gray-50 px-5 py-2.5">
                  <span className="text-xs leading-4 text-figma-gray-500">
                    {question.otherPlaceholder || "Sebutkan sumber lainnya..."}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </PreviewCard>
      }
    />
  );
}

export default QuestionCardPilihanGanda;
