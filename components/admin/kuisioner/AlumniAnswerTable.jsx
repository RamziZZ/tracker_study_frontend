"use client";

// Tabel pengisi kuisioner — Figma 1112:23329
// Kolom: seleksi (radio bulat), NIM, Nama Alumni, Tanggal Isi, Action
export function AlumniAnswerTable({ alumniList, selectedIds, onToggleSelect, onOpenAnswer }) {
  const isSelected = (id) => selectedIds.includes(id);

  return (
    <div className="w-full overflow-x-auto [border-radius:8px]">
      <div className="min-w-[760px]">
        {/* Header */}
        <div className="grid grid-cols-[60px_140px_minmax(0,1fr)_140px_130px] items-stretch">
          <div className="flex items-center bg-figma-gray-200 px-[20px] py-[10px]">
            <span className="flex size-[20px] items-center justify-center rounded-full border border-figma-gray-50 bg-figma-gray-200" />
          </div>
          <div className="flex items-center justify-center bg-figma-gray-200 p-[10px]">
            <p className="text-lg leading-7 font-semibold whitespace-nowrap text-figma-gray-900">
              NIM
            </p>
          </div>
          <div className="flex items-center bg-figma-gray-200 p-[10px]">
            <p className="text-lg leading-7 font-semibold whitespace-nowrap text-figma-gray-900">
              Nama Alumni
            </p>
          </div>
          <div className="flex items-center bg-figma-gray-200 p-[10px]">
            <p className="text-lg leading-7 font-semibold whitespace-nowrap text-figma-gray-900">
              Tanggal Isi
            </p>
          </div>
          <div className="flex items-center justify-center bg-figma-gray-200 p-[10px]">
            <p className="text-lg leading-7 font-semibold whitespace-nowrap text-figma-gray-900">
              Action
            </p>
          </div>
        </div>

        {alumniList.length === 0 && (
          <p className="bg-figma-white py-[24px] text-center text-sm leading-5 text-figma-gray-500">
            Belum ada alumni yang cocok dengan pencarian.
          </p>
        )}

        {alumniList.map((alumni) => {
          const active = isSelected(alumni.id);
          const rowBg = active ? "bg-figma-blue-100" : "bg-figma-white";

          return (
            <div
              key={alumni.id}
              className="grid grid-cols-[60px_140px_minmax(0,1fr)_140px_130px] items-stretch"
            >
              <div className={`flex items-center px-[20px] py-[10px] ${rowBg}`}>
                <button
                  type="button"
                  onClick={() => onToggleSelect(alumni.id)}
                  aria-pressed={active}
                  aria-label={`Pilih ${alumni.name}`}
                  className={`flex size-[20px] cursor-pointer items-center justify-center rounded-full border ${
                    active
                      ? "border-figma-blue-300 bg-figma-blue-500"
                      : "border-figma-gray-300 bg-figma-gray-500"
                  }`}
                >
                  {active && <span className="size-[8px] rounded-full bg-figma-white" />}
                </button>
              </div>

              <div className={`flex items-center justify-center p-[10px] ${rowBg}`}>
                <p className="text-sm leading-5 whitespace-nowrap text-figma-gray-900">
                  {alumni.nim}
                </p>
              </div>

              <div className={`flex min-w-0 items-center p-[10px] ${rowBg}`}>
                <p className="truncate text-sm leading-5 text-figma-gray-900">{alumni.name}</p>
              </div>

              <div className={`flex items-center p-[10px] ${rowBg}`}>
                <p className="text-sm leading-5 whitespace-nowrap text-figma-gray-900">
                  {alumni.dateLabel}
                </p>
              </div>

              <div className={`flex items-center justify-center p-[10px] ${rowBg}`}>
                <button
                  type="button"
                  onClick={() => onOpenAnswer(alumni)}
                  className="flex h-[36px] cursor-pointer items-center justify-center [border-radius:1000px] border border-figma-blue-800 px-[40px] py-[10px] text-xs leading-4 whitespace-nowrap text-figma-blue-800 transition-opacity hover:opacity-80"
                >
                  Lihat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
