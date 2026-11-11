"use client";

// Kartu tipe "Matriks Evaluasi" — Figma question_add_card 1086:22949 (794x498).
//
// Editor:
//   Teks Pertanyaan         → field
//   Kompetensi yang Dinilai → daftar field (masing-masing punya X 24px) + "Tambah Opsi"
// Pratinjau:
//   card pertanyaan_matrix: soal bernomor, lalu per baris child_question_likert:
//   judul "a. <kompetensi>" semibold 14/20 #111827, label "Sangat Rendah"/"Sangat Tinggi"
//   (12/16), dan likert_comp 1-5: h-36, border #60A5FA, radius 10, tiap sel px-15 py-10,
//   sel terpilih bg #3B82F6 teks #EFF6FF.

import { X } from "lucide-react";

import {
  LabeledField,
  PreviewCard,
  QuestionCardShell,
  TextField,
  labelClass,
  softButtonClass,
} from "./questionCardParts";

const LIKERT_LABELS = ["1", "2", "3", "4", "5"];
const SELECTED_INDEX = 1; // desain menandai angka 2

function LikertScale() {
  return (
    <div className="flex w-full items-start overflow-clip rounded-lg border border-solid border-figma-blue-400">
      {LIKERT_LABELS.map((label, index) => {
        const active = index === SELECTED_INDEX;
        return (
          <div
            key={label}
            className={`flex h-9 min-w-0 flex-1 items-center justify-center px-3.75 py-2.5 ${
              index < LIKERT_LABELS.length - 1
                ? "border-r border-solid border-figma-blue-400"
                : ""
            } ${active ? "bg-figma-blue-500" : "bg-figma-white"}`}
          >
            <span
              className={`text-xs leading-4 whitespace-nowrap ${
                active ? "text-figma-blue-50" : "text-figma-blue-800"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function QuestionCardMatriks({ question, patch, onRemove }) {
  const rows = question.rows || [];

  const updateRow = (index, value) => {
    const next = [...rows];
    next[index] = value;
    patch({ rows: next });
  };
  const addRow = () => patch({ rows: [...rows, ""] });
  const removeRow = (index) => patch({ rows: rows.filter((_, i) => i !== index) });

  return (
    <QuestionCardShell
      title="Matriks Evaluasi"
      onRemove={onRemove}
      editor={
        <>
          <LabeledField label="Teks Pertanyaan">
            <TextField
              value={question.text}
              onChange={(text) => patch({ text })}
              placeholder="Seberapa baik kompetensi berikut Anda kuasai saat lulus?"
            />
          </LabeledField>

          <div className="flex w-full flex-col items-end gap-1.25">
            <p className={labelClass}>Kompetensi yang Dinilai</p>
            <div className="flex w-full flex-col gap-1.25">
              {rows.map((row, index) => (
                <div
                  key={`row-${index}`}
                  className="flex h-9.6875 w-full items-center justify-between gap-2.5 rounded-lg border border-solid border-figma-blue-300 bg-figma-blue-50 px-5 py-2.5"
                >
                  <input
                    value={row}
                    onChange={(event) => updateRow(index, event.target.value)}
                    placeholder="Tulis kompetensi"
                    className="min-w-0 flex-1 bg-transparent text-xs leading-4 text-figma-blue-800 outline-none placeholder:text-figma-blue-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    aria-label="Hapus kompetensi"
                    className="flex size-6 shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
                  >
                    <X className="size-6" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
            <button type="button" onClick={addRow} className={softButtonClass}>
              Tambah Opsi
            </button>
          </div>
        </>
      }
      preview={
        <PreviewCard>
          <div className="flex w-full flex-col gap-2.5 p-2.5">
            <ol className="w-full list-decimal pl-7 text-lg leading-7 font-bold text-figma-blue-800">
              <li>
                {question.text || "Seberapa baik kompetensi berikut Anda kuasai saat lulus?"}
              </li>
            </ol>

            {rows.filter(Boolean).map((row, index) => (
              <div key={`likert-${index}`} className="flex w-full flex-col gap-2.5 p-3.75">
                <p className="w-full text-sm leading-5 font-semibold text-figma-gray-900">
                  {String.fromCharCode(97 + index)}. {row}
                </p>
                <div className="flex w-full items-center justify-between text-xs leading-4 whitespace-nowrap text-figma-gray-900">
                  <span className="text-center">
                    Sangat
                    <br />
                    Rendah
                  </span>
                  <span className="text-center">
                    Sangat
                    <br />
                    Tinggi
                  </span>
                </div>
                <LikertScale />
              </div>
            ))}
          </div>
        </PreviewCard>
      }
    />
  );
}

export default QuestionCardMatriks;
