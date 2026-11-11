"use client";

import { useState } from "react";
import { QUESTION_TYPES } from "@/hooks/useQuestionnaireBuilder";

export const typeLabel = (value) =>
  QUESTION_TYPES.find((type) => type.value === value)?.label ?? value;

// Field dasar yang dipakai semua tipe pertanyaan
const fieldClass =
  "h-[38.75px] w-full [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 px-[20px] text-xs leading-4 text-figma-blue-800 outline-none placeholder:text-figma-blue-400 focus:border-figma-blue-500";
const labelClass = "text-sm leading-5 font-medium text-figma-blue-800";
const helpClass = "text-xs leading-4 text-figma-blue-800";
const addButtonClass =
  "flex items-center justify-center gap-[10px] px-[30px] py-[11px] [border-radius:1000px] bg-figma-blue-100 text-xs leading-4 text-figma-blue-800  transition-opacity hover:opacity-80";

function Field({ label, children }) {
  return (
    <label className="flex w-full flex-col gap-[5px]">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export function QuestionTypePicker({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {QUESTION_TYPES.map((type) => {
        const isActive = type.value === value;
        return (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`h-[36px] [border-radius:1000px] border px-[20px] text-xs leading-4 transition-opacity hover:opacity-80 ${
              isActive
                ? "border-figma-blue-400 bg-figma-blue-200 text-figma-blue-800"
                : "border-figma-gray-300 bg-figma-white text-figma-gray-500"
            }`}
          >
            {type.label}
          </button>
        );
      })}
    </div>
  );
}

// Panel kanan: "Tampilan Pertanyaan yang Alumni Lihat"
export function QuestionPreview({ question, index }) {
  const questionNumber = index + 1;
  const questionText = question.text || "Pertanyaan belum diisi";

  if (question.type === "angka") {
    return (
      <div className="w-full [border-radius:25px] border border-figma-blue-300 bg-figma-white p-[10px]">
        <div className="flex flex-col gap-[15px] p-[10px]">
          <p className="text-lg leading-7 font-bold text-figma-blue-800">
            {questionNumber}. {questionText}
          </p>
          <div className="flex items-center gap-[10px] [border-radius:10px] bg-figma-blue-200 pl-[15px]">
            <span className="text-xs leading-4 text-figma-gray-900">Bln</span>
            <div className="flex h-[38.75px] flex-1 items-center px-[20px] [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50">
              <span className="text-xs leading-4 text-figma-blue-400">Masukkan jumlah bulan...</span>
            </div>
          </div>
          <p className="text-xs leading-4 text-figma-blue-800">
            {question.helpText || "Isi 0 jika langsung bekerja setelah lulus."}
          </p>
        </div>
      </div>
    );
  }

  if (question.type === "matriks") {
    return (
      <div className="w-full [border-radius:25px] border border-figma-blue-300 bg-figma-white">
        <div className="border-b border-figma-blue-300 bg-figma-blue-100 p-[15px]">
          <p className="text-lg leading-7 font-bold text-figma-blue-800">
            {questionNumber}. {questionText}
          </p>
        </div>
        <div className="flex flex-col gap-[10px] p-[15px]">
          {question.rows.length === 0 ? (
            <p className="text-xs leading-4 text-figma-gray-500">Belum ada opsi penilaian.</p>
          ) : (
            question.rows.map((row, rowIndex) => (
              <div key={`${row}-${rowIndex}`} className="flex items-center justify-between gap-[20px]">
                <p className="min-w-0 flex-1 text-sm leading-5 text-figma-gray-900">
                  {String.fromCharCode(97 + rowIndex)}. {row}
                </p>
                <div className="flex shrink-0 items-center gap-[5px]">
                  {[1, 2, 3, 4].map((scale) => (
                    <span
                      key={scale}
                      className="flex w-[24px] justify-center [border-radius:1000px] border border-figma-blue-300 bg-figma-blue-50 py-[3px] text-xs leading-4 text-figma-blue-800"
                    >
                      {scale}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  if (question.type === "grup") {
    return (
      <div className="w-full [border-radius:25px] border border-figma-blue-300 bg-figma-white">
        <div className="border-b border-figma-blue-300 bg-figma-blue-100 p-[15px]">
          <p className="text-lg leading-7 font-bold text-figma-blue-800">
            {questionNumber}. {question.text || "Nama grup belum diisi"}
          </p>
        </div>
        <div className="flex flex-col gap-[10px] p-[15px]">
          {question.rows.length === 0 ? (
            <p className="text-xs leading-4 text-figma-gray-500">Belum ada pertanyaan dalam grup.</p>
          ) : (
            question.rows.map((row, rowIndex) => (
              <p key={`${row}-${rowIndex}`} className="text-sm leading-5 font-semibold text-figma-gray-900">
                {String.fromCharCode(97 + rowIndex)}. {row}
              </p>
            ))
          )}
        </div>
      </div>
    );
  }

  if (question.type === "pilihan-ganda") {
    return (
      <div className="w-full [border-radius:25px] border border-figma-blue-300 bg-figma-white p-[10px]">
        <div className="flex flex-col gap-[15px] p-[10px]">
          <p className="text-lg leading-7 font-bold text-figma-blue-800">
            {questionNumber}. {questionText}
          </p>
          <p className="text-xs leading-4 text-figma-gray-500">* Pilih semua yang sesuai</p>
          <div className="flex flex-wrap gap-[8px]">
            {question.options.map((option, optionIndex) => (
              <span
                key={`${option}-${optionIndex}`}
                className="h-[36px] items-center [border-radius:1000px] border border-figma-gray-300 bg-figma-white px-[20px] text-xs leading-4 text-figma-gray-500"
              >
                <span className="flex h-full items-center">{option}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full [border-radius:25px] border border-figma-blue-300 bg-figma-white p-[10px]">
      <div className="flex flex-col gap-[15px] p-[10px]">
        <p className="text-lg leading-7 font-bold text-figma-blue-800">
          {questionNumber}. {questionText}
        </p>
        <div className="h-[38.75px] w-full [border-radius:10px] border border-figma-gray-200 bg-figma-gray-50 px-[20px]">
          <span className="flex h-full items-center text-xs leading-4 text-figma-gray-500">
            Alumni menulis jawaban di sini...
          </span>
        </div>
      </div>
    </div>
  );
}

// Editor satu pertanyaan: header tipe + form + panel preview
export function QuestionEditorCard({
  question,
  index,
  total,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);

  const updateField = (field, value) => onUpdate(question.id, { [field]: value });

  const updateRow = (rowIndex, value) => {
    const nextRows = [...question.rows];
    nextRows[rowIndex] = value;
    onUpdate(question.id, { rows: nextRows });
  };

  const addRow = () => onUpdate(question.id, { rows: [...question.rows, ""] });

  const removeRow = (rowIndex) =>
    onUpdate(question.id, { rows: question.rows.filter((_, i) => i !== rowIndex) });

  const updateOption = (optionIndex, value) => {
    const nextOptions = [...question.options];
    nextOptions[optionIndex] = value;
    onUpdate(question.id, { options: nextOptions });
  };

  const addOption = () => onUpdate(question.id, { options: [...question.options, ""] });

  const removeOption = (optionIndex) =>
    onUpdate(question.id, {
      options: question.options.filter((_, i) => i !== optionIndex),
    });

  const rowLabel =
    question.type === "matriks"
      ? "Kompetensi yang Dinilai"
      : question.type === "grup"
        ? "Daftar Pertanyaan"
        : "";

  return (
    <div className="w-full overflow-clip [border-radius:25px] border border-figma-blue-300 bg-figma-white">
      <div className="flex w-full items-center gap-[10px] border-b border-figma-blue-300 bg-figma-blue-100 p-[15px]">
        <p className="min-w-0 flex-1 text-lg leading-7 font-bold text-figma-blue-800">
          {index + 1}. {typeLabel(question.type)}
        </p>
        <div className="flex shrink-0 items-center gap-[6px]">
          <button
            type="button"
            aria-label="Naikkan urutan pertanyaan"
            onClick={() => onMoveUp(question.id)}
            disabled={index === 0}
            className="flex size-[28px] items-center justify-center [border-radius:8px] border border-figma-blue-300 bg-figma-white text-xs text-figma-blue-800 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↑
          </button>
          <button
            type="button"
            aria-label="Turunkan urutan pertanyaan"
            onClick={() => onMoveDown(question.id)}
            disabled={index === total - 1}
            className="flex size-[28px] items-center justify-center [border-radius:8px] border border-figma-blue-300 bg-figma-white text-xs text-figma-blue-800 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↓
          </button>
          <button
            type="button"
            aria-label="Hapus pertanyaan"
            onClick={() => onRemove(question.id)}
            className="flex size-[28px] items-center justify-center [border-radius:8px] border border-figma-red-300 bg-figma-red-100 text-xs text-figma-red-500 transition-opacity hover:opacity-80"
          >
            ×
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-end lg:flex-row">
        <div className="flex w-full flex-1 flex-col gap-[20px] p-[20px]">
          <div className="flex flex-col gap-[10px]">
            <Field label={question.type === "grup" ? "Nama Grup Pertanyaan" : "Teks Pertanyaan"}>
              <input
                value={question.text}
                onChange={(event) => updateField("text", event.target.value)}
                placeholder={
                  question.type === "grup"
                    ? "Contoh: Kemampuan Berpikir Kritis & Pemecahan Masalah"
                    : "Tulis pertanyaan yang akan dilihat alumni..."
                }
                className={fieldClass}
              />
            </Field>

            {(question.type === "angka" || question.type === "paragraf") && (
              <Field label="Format Jawaban">
                <div className="flex h-[38.75px] w-full items-center justify-between [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 px-[20px]">
                  <span className="text-xs leading-4 text-figma-blue-800">
                    {question.type === "angka" ? "Angka" : "Teks paragraf"}
                  </span>
                  <span className="text-xs text-figma-blue-800">▾</span>
                </div>
              </Field>
            )}

            {question.type === "angka" && (
              <div className="flex w-full gap-[10px]">
                <Field label="Min">
                  <input
                    value={question.minValue}
                    onChange={(event) => updateField("minValue", event.target.value)}
                    inputMode="numeric"
                    className={fieldClass}
                  />
                </Field>
                <Field label="Max">
                  <input
                    value={question.maxValue}
                    onChange={(event) => updateField("maxValue", event.target.value)}
                    inputMode="numeric"
                    placeholder="Tidak ada batasan"
                    className={fieldClass}
                  />
                </Field>
              </div>
            )}

            {question.type === "angka" && (
              <p className={`${helpClass} italic`}>Kosongkan untuk tanpa batas maksimum.</p>
            )}
          </div>

          {(question.type === "matriks" || question.type === "grup") && (
            <div className="flex flex-col gap-[5px]">
              <span className={labelClass}>{rowLabel}</span>
              <div className="flex flex-col gap-[5px]">
                {question.rows.map((row, rowIndex) => (
                  <div key={`row-${rowIndex}`} className="flex items-center gap-[6px]">
                    <input
                      value={row}
                      onChange={(event) => updateRow(rowIndex, event.target.value)}
                      placeholder="Isi opsi pertanyaan..."
                      className={fieldClass}
                    />
                    <button
                      type="button"
                      aria-label={`Hapus opsi baris ${rowIndex + 1}`}
                      onClick={() => removeRow(rowIndex)}
                      className="flex size-[30px] shrink-0 items-center justify-center [border-radius:8px] border border-figma-red-300 bg-figma-red-100 text-xs text-figma-red-500 transition-opacity hover:opacity-80"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addRow} className={`${addButtonClass} w-fit`}>
                {question.type === "matriks" ? "Tambah Opsi" : "Tambah Opsi Pertanyaan"}
              </button>
            </div>
          )}

          {question.type === "pilihan-ganda" && (
            <div className="flex flex-col gap-[5px]">
              <span className={labelClass}>Opsi Jawaban</span>
              <div className="flex flex-wrap gap-[8px]">
                {question.options.map((option, optionIndex) => (
                  <span
                    key={`option-${optionIndex}`}
                    className="flex h-[36px] items-center gap-[10px] [border-radius:1000px] border border-figma-gray-300 bg-figma-white pl-[20px] pr-[10px]"
                  >
                    <input
                      value={option}
                      onChange={(event) => updateOption(optionIndex, event.target.value)}
                      placeholder="Opsi jawaban..."
                      className="w-[130px] bg-transparent text-xs leading-4 text-figma-gray-500 outline-none"
                    />
                    <button
                      type="button"
                      aria-label={`Hapus opsi ${optionIndex + 1}`}
                      onClick={() => removeOption(optionIndex)}
                      className="size-[18px] shrink-0 text-xs text-figma-gray-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button type="button" onClick={addOption} className={`${addButtonClass} w-fit`}>
                Tambah Opsi
              </button>

              <label className="mt-[10px] flex cursor-pointer items-center gap-[20px] [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 px-[20px] py-[15px]">
                <input
                  type="checkbox"
                  checked={question.otherOption}
                  onChange={(event) => updateField("otherOption", event.target.checked)}
                  className="size-[20px] accent-figma-blue-500"
                />
                <span className="flex flex-col gap-[2px]">
                  <span className="text-sm leading-5 font-semibold text-figma-blue-800">
                    Pilihan Lainnya
                  </span>
                  <span className="text-xs leading-4 text-figma-blue-400">
                    Aktifkan agar alumni dapat menulis sumber lain.
                  </span>
                </span>
              </label>

              {question.otherOption && (
                <Field label="Isi jawaban lainnya">
                  <input
                    value={question.otherPlaceholder}
                    onChange={(event) => updateField("otherPlaceholder", event.target.value)}
                    placeholder="Sebutkan sumber lainnya..."
                    className="h-[38.75px] w-full [border-radius:10px] border border-figma-gray-200 bg-figma-gray-50 px-[20px] text-xs leading-4 text-figma-gray-500 outline-none"
                  />
                </Field>
              )}
            </div>
          )}
        </div>

        <div className="flex w-full flex-1 flex-col gap-[10px] border-t border-figma-blue-200 bg-gradient-to-t from-figma-blue-100 to-figma-blue-50 p-[20px] lg:border-t-0 lg:border-l">
          <div className="flex w-full items-center justify-between gap-[10px]">
            <p className="text-sm leading-5 font-semibold text-figma-blue-800">
              Tampilan Pertanyaan yang Alumni Lihat
            </p>
            <button
              type="button"
              aria-label={isPreviewOpen ? "Sembunyikan pratinjau" : "Tampilkan pratinjau"}
              aria-expanded={isPreviewOpen}
              onClick={() => setIsPreviewOpen((prev) => !prev)}
              className="shrink-0 cursor-pointer text-xs leading-4 text-figma-blue-800 underline-offset-2 hover:underline"
            >
              {isPreviewOpen ? "Sembunyikan" : "Tampilkan"}
            </button>
          </div>
          {isPreviewOpen && <QuestionPreview question={question} index={index} />}
        </div>
      </div>
    </div>
  );
}
