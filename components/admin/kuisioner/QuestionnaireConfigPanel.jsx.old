"use client";

const fieldClass =
  "h-[38.75px] w-full [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 px-[20px] text-xs leading-4 text-figma-blue-800 outline-none";

const DATA_TYPE_OPTIONS = [
  "Ringkasan Karier Alumni",
  "Detail Pekerjaan Alumni",
  "Kepuasan Pengguna Lulusan",
  "Evaluasi Kompetensi Alumni",
];

const CLOSURE_OPTIONS = [
  "Buka (dapat diisi sampai batas waktu)",
  "Tutup otomatis setelah semua angkatan mengisi",
  "Tutup manual oleh admin",
];

export function QuestionnaireConfigPanel({
  dataType,
  onDataTypeChange,
  closureType,
  onClosureTypeChange,
  questionCount,
  typeBreakdown,
}) {
  return (
    <aside className="flex w-full shrink-0 flex-col gap-[20px] [border-radius:20px] border border-figma-blue-300 bg-figma-white p-[20px] lg:w-[300px]">
      <div className="flex flex-col gap-[5px]">
        <h2 className="text-xl leading-7 font-semibold text-figma-blue-800">Konfigurasi Kuisioner</h2>
        <p className="text-xs leading-4 text-figma-gray-500">
          Semua pengaturan kuisioner ada di halaman ini. Tidak ada popup konfigurasi terpisah.
        </p>
      </div>

      <div className="flex flex-col gap-[5px]">
        <span className="text-sm leading-5 font-medium text-figma-blue-800">Tipe Data</span>
        <div className="relative">
          <select
            value={dataType}
            onChange={(event) => onDataTypeChange(event.target.value)}
            aria-label="Tipe Data"
            className={`${fieldClass} appearance-none pr-[36px]`}
          >
            {DATA_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute top-1/2 right-[16px] -translate-y-1/2 text-xs text-figma-blue-800">
            ▾
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[5px]">
        <span className="text-sm leading-5 font-medium text-figma-blue-800">Sifat Kuisioner</span>
        <div className="relative">
          <select
            value={closureType}
            onChange={(event) => onClosureTypeChange(event.target.value)}
            aria-label="Sifat Kuisioner"
            className={`${fieldClass} appearance-none pr-[36px]`}
          >
            {CLOSURE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute top-1/2 right-[16px] -translate-y-1/2 text-xs text-figma-blue-800">
            ▾
          </span>
        </div>
      </div>

      {/* Jumlah pertanyaan: label yang ikut bertambah, bukan input manual */}
      <div className="flex flex-col gap-[10px] [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 p-[15px]">
        <div className="flex items-baseline justify-between gap-[10px]">
          <span className="text-sm leading-5 font-medium text-figma-blue-800">
            Jumlah Pertanyaan yang dibuat
          </span>
          <span
            aria-live="polite"
            className="text-2xl leading-8 font-bold text-figma-blue-800 tabular-nums"
          >
            {questionCount}
          </span>
        </div>

        {typeBreakdown.length === 0 ? (
          <p className="text-xs leading-4 text-figma-gray-500">
            Belum ada pertanyaan. Klik &quot;Tambah Pertanyaan&quot; untuk mulai menyusun.
          </p>
        ) : (
          <ul className="flex flex-wrap gap-[6px]">
            {typeBreakdown.map((type) => (
              <li
                key={type.value}
                className="[border-radius:1000px] border border-figma-blue-300 bg-figma-white px-[10px] py-[4px] text-xs leading-4 text-figma-blue-800"
              >
                {type.label}: {type.total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
