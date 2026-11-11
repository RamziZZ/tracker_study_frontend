"use client";

// Kartu editor pertanyaan — Figma component `question_add_card`
// (instance per tipe: 1086:22856 Input Dasar, 1086:23197 Pilihan Ganda,
//  1086:22949 Matriks, 1086:23485 Grup).
//
// Struktur persis desain:
//   kartu   : bg white, border blue-300, radius 25, overflow-clip
//   header  : bg blue-100, border blue-300, p-15, gap-10, judul 18/28 bold blue-800 + ikon close 24
//   body    : 2 kolom — kiri editor (p-20, gap-20, items-end), kanan pratinjau
//             (gradient blue-100→blue-50, border-l blue-200, p-20, gap-10)
//   label   : 14/20 medium blue-800, gap 5 ke field
//   field   : h-38.75, radius 10, border blue-300, bg blue-50, px-20 py-10, 12/16 blue-800
//   tombol sekunder : bg blue-100, radius 1000, px-30 py-11, 12/16 blue-800
//   tombol simpan   : bg blue-500, h-40.545, radius 1000, px-40 py-10, 12/16 blue-50

import { useCallback } from "react";

import { ChevronDown, X } from "lucide-react";

const CARD_HEADER_TITLE = {
  angka: "Input Dasar",
  "pilihan-ganda": "Pilihan Ganda",
  matriks: "Matriks Evaluasi",
  grup: "Grup Pertanyaan",
};

const labelClass = "w-full text-[14px] leading-[20px] font-medium text-figma-blue-800";
const fieldClass =
  "flex h-[38.75px] w-full items-center justify-between gap-[10px] rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-50 px-[20px] py-[10px] text-[12px] leading-[16px] font-normal text-figma-blue-800";
const softButtonClass =
  "flex cursor-pointer items-center justify-center rounded-[1000px] bg-figma-blue-100 px-[30px] py-[11px] text-[12px] leading-[16px] font-normal whitespace-nowrap text-figma-blue-800 transition-colors hover:bg-figma-blue-200";
const primaryButtonClass =
  "flex h-[40.545px] cursor-pointer items-center justify-center rounded-[1000px] bg-figma-blue-500 px-[40px] py-[10px] text-[12px] leading-[16px] font-normal whitespace-nowrap text-figma-blue-50 transition-opacity hover:opacity-90";
const previewTitleClass = "w-full text-[14px] leading-[20px] font-semibold text-figma-blue-800";
const previewSubTitleClass = "w-full text-[14px] leading-[20px] font-semibold text-figma-gray-900";

function Field({ label, value, placeholder, chevron, children }) {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      <p className={labelClass}>{label}</p>
      {children || (
        <div className={fieldClass}>
          <span className={`min-w-0 flex-1 truncate ${placeholder ? "text-figma-blue-400" : ""}`}>
            {value}
          </span>
          {chevron ? (
            <ChevronDown className="size-[24px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
          ) : null}
        </div>
      )}
    </div>
  );
}

function RemoveButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Hapus opsi"
      className="flex size-[24px] shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
    >
      <X className="size-[24px]" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

// Pratinjau skala likert 1-5 (komponen likert_comp di Figma)
function LikertScale() {
  return (
    <div className="w-full overflow-clip rounded-[10px] border border-solid border-figma-blue-400">
      <div className="flex w-full items-start">
        {[1, 2, 3, 4, 5].map((value) => {
          const active = value === 2;
          return (
            <div
              key={value}
              className={`flex h-[36px] flex-1 items-center justify-center px-[15px] py-[10px] ${
                value < 5 ? "border-r border-solid border-figma-blue-400" : ""
              } ${active ? "bg-figma-blue-500" : "bg-figma-white"}`}
            >
              <span
                className={`text-[12px] leading-[16px] whitespace-nowrap ${
                  active ? "text-figma-blue-50" : "text-figma-blue-800"
                }`}
              >
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LikertRow({ title }) {
  return (
    <div className="flex w-full flex-col gap-[10px] p-[15px]">
      <p className={previewSubTitleClass}>{title}</p>
      <div className="flex w-full items-center justify-between text-[12px] leading-[16px] text-figma-gray-900">
        <span className="text-center whitespace-nowrap">
          Sangat
          <br />
          Rendah
        </span>
        <span className="text-center whitespace-nowrap">
          Sangat
          <br />
          Tinggi
        </span>
      </div>
      <LikertScale />
    </div>
  );
}

function PreviewCard({ title, children }) {
  return (
    <div className="flex w-full flex-col overflow-clip rounded-[25px] border border-solid border-figma-blue-300 bg-figma-white">
      <div className="flex w-full items-center border border-solid border-figma-blue-300 bg-figma-blue-100 p-[15px]">
        <p className="w-full text-[18px] leading-[28px] font-bold text-figma-blue-800">{title}</p>
      </div>
      {children}
    </div>
  );
}

function RadioRow({ title, description }) {
  return (
    <div className="flex w-full items-center gap-[20px] rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-50 px-[20px] py-[15px]">
      <span className="size-[24px] shrink-0 rounded-[1000px] border-2 border-solid border-figma-blue-200" />
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <p className="w-full text-[14px] leading-[20px] font-semibold text-figma-blue-800">{title}</p>
        <p className="w-full text-[12px] leading-[16px] font-normal text-figma-blue-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function QuestionEditorCard({ question, onUpdate, onRemove }) {
  const type = question?.type || "angka";
  const headerTitle = CARD_HEADER_TITLE[type] || "Input Dasar";

  const patch = useCallback((changes) => onUpdate(question.id, changes), [onUpdate, question.id]);

  const options = question?.options || [];
  const rows = question?.rows || [];
  const items = question?.items || [];

  const updateOption = (index, value) => {
    const next = [...options];
    next[index] = value;
    patch({ options: next });
  };
  const addOption = () => patch({ options: [...options, ""] });
  const removeOption = (index) => patch({ options: options.filter((_, i) => i !== index) });

  const updateRow = (index, value) => {
    const next = [...rows];
    next[index] = value;
    patch({ rows: next });
  };
  const addRow = () => patch({ rows: [...rows, ""] });
  const removeRow = (index) => patch({ rows: rows.filter((_, i) => i !== index) });

  return (
    <article className="flex w-full flex-col overflow-clip rounded-[25px] border border-solid border-figma-blue-300 bg-figma-white">
      {/* header kartu */}
      <div className="flex w-full shrink-0 items-center gap-[10px] border border-solid border-figma-blue-300 bg-figma-blue-100 p-[15px]">
        <p className="min-w-0 flex-1 text-[18px] leading-[28px] font-bold text-figma-blue-800">
          {headerTitle}
        </p>
        <button
          type="button"
          onClick={() => onRemove(question.id)}
          aria-label="Hapus pertanyaan"
          className="flex size-[24px] shrink-0 cursor-pointer items-center justify-center text-figma-blue-500 transition-opacity hover:opacity-70"
        >
          <X className="size-[24px]" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <div className="flex w-full flex-col items-start xl:flex-row">
        {/* kolom editor */}
        <div className="flex min-w-0 flex-1 flex-col items-end gap-[20px] p-[20px]">
          <div className="flex w-full flex-col gap-[10px]">
            {type === "angka" ? (
              <>
                <Field label="Teks Pertanyaan" value={question.question || "Berapa lama masa tunggu kerja Anda?"} />
                <Field label="Format Jawaban">
                  <div className={fieldClass}>
                    <span className="min-w-0 flex-1 truncate">
                      {question.format === "paragraf" ? "Paragraf" : "Angka (bulan)"}
                    </span>
                    <ChevronDown className="size-[24px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </Field>
                <Field label="Batas Minimal">
                  <div className={fieldClass}>
                    <span className="min-w-0 flex-1 truncate">{question.minValue || "0"}</span>
                  </div>
                </Field>
                <Field label="Batas Maksimal">
                  <div className={fieldClass}>
                    <span className="min-w-0 flex-1 truncate text-figma-blue-400">
                      {question.maxValue || "Tanpa batas"}
                    </span>
                  </div>
                </Field>
              </>
            ) : null}

            {type === "pilihan-ganda" ? (
              <>
                <Field
                  label="Teks Pertanyaan"
                  value={question.question || "Bagaimana Anda mendapatkan pekerjaan saat ini?"}
                />
                <div className="flex w-full flex-col gap-[5px]">
                  <p className={labelClass}>Pilihan Jawaban</p>
                  <div className="flex w-full flex-col gap-[5px]">
                    {options.map((option, index) => (
                      <div key={`option-${index}`} className={fieldClass}>
                        <input
                          value={option}
                          onChange={(event) => updateOption(index, event.target.value)}
                          placeholder="Tulis opsi jawaban"
                          className="min-w-0 flex-1 bg-transparent text-[12px] leading-[16px] text-figma-blue-800 outline-none placeholder:text-figma-blue-400"
                        />
                        <RemoveButton onClick={() => removeOption(index)} />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addOption} className={softButtonClass}>
                    Tambah Opsi
                  </button>
                </div>
                <div className="flex w-full items-center gap-[20px] rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-50 px-[20px] py-[15px]">
                  <span className="size-[24px] shrink-0 rounded-[4px] border-2 border-solid border-figma-blue-200" />
                  <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                    <p className="w-full text-[14px] leading-[20px] font-semibold text-figma-blue-800">
                      Pilihan Lainnya
                    </p>
                    <p className="w-full text-[12px] leading-[16px] font-normal text-figma-blue-400">
                      Izinkan alumni menulis jawaban sendiri
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => patch({ otherOption: !question.otherOption })}
                    aria-pressed={Boolean(question.otherOption)}
                    aria-label="Aktifkan pilihan lainnya"
                    className={`flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-[1000px] px-[3px] transition-colors ${
                      question.otherOption ? "bg-figma-blue-500" : "bg-figma-blue-200"
                    }`}
                  >
                    <span
                      className={`size-[18px] rounded-[1000px] bg-figma-white transition-transform ${
                        question.otherOption ? "translate-x-[20px]" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </>
            ) : null}

            {type === "matriks" ? (
              <>
                <Field
                  label="Teks Pertanyaan"
                  value={question.question || "Seberapa baik kompetensi berikut Anda kuasai saat lulus?"}
                />
                <div className="flex w-full flex-col gap-[5px]">
                  <p className={labelClass}>Kompetensi yang Dinilai</p>
                  <div className="flex w-full flex-col items-end gap-[5px]">
                    {rows.map((row, index) => (
                      <div key={`row-${index}`} className={fieldClass}>
                        <input
                          value={row}
                          onChange={(event) => updateRow(index, event.target.value)}
                          placeholder="Tulis kompetensi"
                          className="min-w-0 flex-1 bg-transparent text-[12px] leading-[16px] text-figma-blue-800 outline-none placeholder:text-figma-blue-400"
                        />
                        <RemoveButton onClick={() => removeRow(index)} />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addRow} className={softButtonClass}>
                    Tambah Opsi
                  </button>
                </div>
              </>
            ) : null}

            {type === "grup" ? (
              <>
                <Field
                  label="Nama Grup Pertanyaan"
                  value={question.groupName || "Kemampuan Berpikir Kritis & Pemecahan Masalah"}
                  placeholder={!question.groupName}
                />
                <div className="flex w-full flex-col gap-[5px]">
                  <p className={labelClass}>Daftar Pertanyaan</p>
                  <div className="flex w-full flex-col items-end gap-[5px]">
                    {items.map((item, index) => (
                      <div key={item.id || `item-${index}`} className={fieldClass}>
                        <span className="min-w-0 flex-1 truncate">
                          {String.fromCharCode(97 + index)}. {item.label}
                        </span>
                        {item.kind === "radio" ? (
                          <ChevronDown className="size-[24px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
                        ) : (
                          <RemoveButton
                            onClick={() =>
                              patch({ items: items.filter((_, i) => i !== index) })
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      patch({
                        items: [
                          ...items,
                          { id: `item-${Date.now()}`, label: "Pertanyaan baru", kind: "text" },
                        ],
                      })
                    }
                    className={softButtonClass}
                  >
                    Tambah Opsi Pertanyaan
                  </button>
                </div>
              </>
            ) : null}
          </div>

          <button type="button" className={primaryButtonClass}>
            Simpan Pertanyaan
          </button>
        </div>

        {/* kolom pratinjau alumni */}
        <div className="flex w-full flex-col gap-[10px] self-stretch border-t border-solid border-figma-blue-200 bg-gradient-to-t from-figma-blue-100 to-figma-blue-50 p-[20px] xl:min-w-0 xl:flex-1 xl:border-t-0 xl:border-l">
          <p className={previewTitleClass}>Tampilan Pertanyaan yang Alumni Lihat</p>

          {type === "angka" ? (
            <PreviewCard title="1. Berapa lama masa tunggu kerja Anda?">
              <div className="flex w-full flex-col gap-[10px] p-[15px]">
                <div className="flex h-[38.75px] w-full items-center rounded-[10px] border border-solid border-figma-blue-300 bg-figma-blue-50 px-[20px] py-[10px]">
                  <span className="text-[12px] leading-[16px] text-figma-blue-400">0</span>
                </div>
                <p className="text-[12px] leading-[16px] text-figma-gray-900">
                  Masukkan jumlah bulan dalam angka.
                </p>
              </div>
            </PreviewCard>
          ) : null}

          {type === "pilihan-ganda" ? (
            <PreviewCard title="1. Bagaimana Anda mendapatkan pekerjaan saat ini?">
              <div className="flex w-full flex-col gap-[10px] p-[15px]">
                {options
                  .filter(Boolean)
                  .filter((option) => !(question.otherOption && option.toLowerCase() === "lainnya"))
                  .map((option, index) => (
                    <RadioRow
                      key={`preview-${index}`}
                      title={option}
                      description="Pilih salah satu jawaban."
                    />
                  ))}
                {question.otherOption ? (
                  <RadioRow title="Lainnya" description="Tuliskan jawaban Anda sendiri." />
                ) : null}
              </div>
            </PreviewCard>
          ) : null}

          {type === "matriks" ? (
            <PreviewCard title="1. Seberapa baik kompetensi berikut Anda kuasai saat lulus?">
              {rows
                .filter(Boolean)
                .map((row, index) => (
                  <div key={`likert-${index}`} className="w-full border-t border-solid border-figma-blue-300">
                    <LikertRow title={`${String.fromCharCode(97 + index)}. ${row}`} />
                  </div>
                ))}
            </PreviewCard>
          ) : null}

          {type === "grup" ? (
            <PreviewCard title="1. Kemampuan Berpikir Kritis & Pemecahan Masalah">
              {items.map((item, index) => (
                <div
                  key={item.id || `group-${index}`}
                  className="flex w-full flex-col gap-[10px] border-t border-solid border-figma-blue-300 p-[15px]"
                >
                  <p className={previewSubTitleClass}>
                    {String.fromCharCode(97 + index)}. {item.label}
                  </p>
                  {item.kind === "radio" ? (
                    <div className="flex w-full flex-col gap-[10px]">
                      {[
                        ["Perlu bimbingan", "Masih membutuhkan arahan."],
                        ["Cukup mandiri", "Sesekali membutuhkan masukan."],
                        ["Mandiri", "Mampu memutuskan sendiri."],
                      ].map(([title, description]) => (
                        <RadioRow key={title} title={title} description={description} />
                      ))}
                    </div>
                  ) : (
                    <div className={fieldClass}>
                      <span className="text-figma-blue-400">
                        {item.kind === "select" ? "Pilih pendekatan solusi" : "Sebutkan contoh kasusnya..."}
                      </span>
                      {item.kind === "select" ? (
                        <ChevronDown className="size-[24px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
            </PreviewCard>
          ) : null}
        </div>
      </div>
    </article>
  );
}
