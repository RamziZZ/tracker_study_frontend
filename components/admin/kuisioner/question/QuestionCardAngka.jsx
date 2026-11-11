"use client";

// Kartu tipe "Input Dasar" — Figma question_add_card 1086:22856 (794x408.8).
//
// Editor (kolom kiri):
//   Teks Pertanyaan   → field (placeholder contoh dari desain)
//   Format Jawaban    → field + chevron (mis. "Angka (bulan)")
//   Min | Max         → dua field sejajar gap-10; Max punya hint italic
//   Simpan Pertanyaan → tombol biru kanan bawah
// Pratinjau (kolom kanan):
//   card pertanyaan_number_tunggal: soal bernomor + field dengan prefiks "Bln"
//   + teks bantuan "Isi 0 jika langsung bekerja setelah lulus."

import { ChevronDown } from "lucide-react";

import {
  LabeledField,
  PreviewCard,
  QuestionCardShell,
  TextField,
  fieldClass,
  placeholderTextClass,
} from "./questionCardParts";

export function QuestionCardAngka({ question, patch, onRemove }) {
  const format = question.format === "paragraf" ? "Paragraf" : "Angka (bulan)";

  return (
    <QuestionCardShell
      title="Input Dasar"
      onRemove={onRemove}
      editor={
        <>
          <LabeledField label="Teks Pertanyaan">
            <TextField
              value={question.text}
              onChange={(text) => patch({ text })}
              placeholder="Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?"
            />
          </LabeledField>

          <LabeledField label="Format Jawaban">
            <button
              type="button"
              onClick={() => patch({ format: format === "Paragraf" ? "angka" : "paragraf" })}
              className={`${fieldClass} cursor-pointer text-left`}
            >
              <span className="min-w-0 flex-1 truncate">{format}</span>
              <ChevronDown className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </LabeledField>

          <div className="flex w-full items-start gap-2.5">
            <div className="flex min-w-0 flex-1 flex-col gap-1.25">
              <LabeledField label="Min">
                <TextField
                  value={question.minValue}
                  onChange={(minValue) => patch({ minValue })}
                  placeholder="0"
                />
              </LabeledField>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.25">
              <LabeledField label="Max" hint="Kosongkan untuk tanpa batas maksimum.">
                <TextField
                  value={question.maxValue}
                  onChange={(maxValue) => patch({ maxValue })}
                  placeholder="Tidak ada batasan"
                />
              </LabeledField>
            </div>
          </div>
        </>
      }
      preview={
        <PreviewCard>
          <div className="flex w-full flex-col gap-3.75 p-2.5">
            <ol className="w-full list-decimal pl-7 text-[18px] leading-7 font-bold text-figma-blue-800">
              <li>{question.text || "Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?"}</li>
            </ol>

            <div className="flex w-full flex-col gap-1.25">
              {/* components_field_number: prefiks satuan + field */}
              <div className="flex w-full items-center gap-2.5 rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-200 pl-3.75">
                <span className="shrink-0 text-[12px] leading-4 whitespace-nowrap text-figma-gray-900">
                  Bln
                </span>
                <div className="flex h-[38.75px] min-w-0 flex-1 items-start rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-2.5">
                  <span className={`text-[12px] leading-4 ${placeholderTextClass}`}>
                    Masukkan jumlah bulan...
                  </span>
                </div>
              </div>
              <p className="w-full text-[12px] leading-4 font-normal text-figma-blue-800">
                Isi 0 jika langsung bekerja setelah lulus.
              </p>
            </div>
          </div>
        </PreviewCard>
      }
    />
  );
}

export default QuestionCardAngka;
