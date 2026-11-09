"use client";

// Popup ini HANYA untuk melihat jawaban satu alumni.
// Muncul dari halaman detail kuisioner (status Berjalan & Selesai) saat baris alumni di tabel diklik.
export function AlumniAnswerModal({ alumni, onClose }) {
  if (!alumni) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-figma-gray-900/40 p-[16px]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detail jawaban ${alumni.name}`}
        onClick={(event) => event.stopPropagation()}
        className="flex h-[640px] max-h-full w-full max-w-[920px] flex-col overflow-hidden [border-radius:20px] border border-figma-blue-300 bg-figma-blue-50 shadow-[0_4px_4px_0_rgba(30,66,126,0.15)]"
      >
        {/* Header putih, judul + tombol close biru (50.545px r10 di Figma) */}
        <div className="flex w-full shrink-0 items-center justify-between border-b border-figma-gray-300 bg-figma-white p-[20px]">
          <h2 className="min-w-0 flex-1 text-lg leading-7 font-medium text-figma-gray-900">
            Detail Jawaban Alumni
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail jawaban alumni"
            className="flex h-[50.545px] w-[50.545px] shrink-0 cursor-pointer items-center justify-center [border-radius:10px] bg-figma-blue-500 text-figma-blue-50 transition-opacity hover:opacity-80"
          >
            <span aria-hidden className="text-xl leading-none">
              &times;
            </span>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          {/* Kiri: identitas alumni + label status pengisian */}
          <div className="flex w-full shrink-0 flex-col gap-[10px] border-b border-figma-gray-200 bg-figma-white p-[20px] md:w-[320px] md:border-r md:border-b-0">
            <div className="flex flex-col text-figma-gray-900">
              <p className="text-2xl leading-8 font-bold">{alumni.name}</p>
              <p className="text-sm leading-5">NIM. {alumni.nim}</p>
              <p className="text-sm leading-5">{alumni.program}</p>
            </div>
            <div className="flex w-full items-center gap-[10px] [border-radius:1000px] border border-figma-green-300 bg-figma-green-50 px-[10px] py-[9px]">
              <span className="size-[10px] shrink-0 rounded-full bg-figma-green-500" />
              <p className="min-w-0 flex-1 text-xs leading-4 text-figma-green-500">
                {alumni.finishedAt}
              </p>
            </div>
          </div>

          {/* Kanan: daftar kartu jawaban */}
          <div className="flex min-h-0 w-full flex-1 flex-col gap-[10px] overflow-y-auto p-[20px]">
            {alumni.answers.map((answer, index) => (
              <div
                key={answer.id}
                className="flex w-full shrink-0 flex-col [border-radius:25px] border border-figma-blue-300 bg-figma-white p-[10px]"
              >
                <div className="flex flex-col gap-[10px] p-[10px]">
                  <p className="text-lg leading-7 font-bold text-figma-blue-800">
                    {index + 1}. {answer.question}
                  </p>
                  <p className="pl-[15px] text-sm leading-5 text-figma-gray-900">{answer.value}</p>
                </div>
              </div>
            ))}

            {alumni.answers.length === 0 && (
              <p className="text-sm leading-5 text-figma-gray-500">
                Alumni ini belum memiliki jawaban tersimpan.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
