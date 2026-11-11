"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, ClipboardList, Link2, Pencil, PieChart, Trash2, Users } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { CardMetaPill } from "./CardMetaPill";
import { StatusBadge, statusTheme } from "./StatusBadge";

// Rute tujuan klik card, ditentukan oleh status:
// Sedang Dibuat -> halaman add/edit, Sedang Berjalan & Sudah Selesai -> halaman detail
export const getQuestionnaireHref = (data) =>
  data.status === "Sedang Dibuat"
    ? `/admin/kuesioner/${data.id}/edit`
    : `/admin/kuesioner/${data.id}`;

export function QuestionnaireCard({ data, onDelete }) {
  const router = useRouter();
  const theme = statusTheme[data.status] ?? statusTheme["Sedang Berjalan"];

  // Klik di mana pun pada card membuka halaman sesuai status; tombol aksi tidak ikut memicu.
  const handleOpen = () => router.push(getQuestionnaireHref(data));

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Buka detail ${data.title}`}
      onClick={handleOpen}
      onKeyDown={handleCardKeyDown}
      className={`flex w-full cursor-pointer flex-col items-start self-start overflow-clip [border-radius:24px] border border-solid transition-shadow hover:shadow-[0_4px_8px_rgba(30,66,126,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-figma-blue-500 ${theme.shell}`}
    >
      <div
        className={`flex w-full flex-col items-start gap-[12px] [border-radius:24px] border border-solid bg-figma-white p-[20px] ${theme.inner}`}
      >
        <div className="flex w-full items-center gap-[10px]">
          <div className="flex shrink-0 items-center [border-radius:20px] border border-figma-blue-300 bg-figma-blue-100 p-[10px]">
            <ClipboardList className="size-[18px] text-figma-blue-800" strokeWidth={1.8} />
          </div>
          <h3 className="min-w-0 flex-1 text-lg leading-7 font-bold text-figma-gray-900">
            {data.title}
          </h3>
        </div>

        <div className="flex w-full flex-wrap items-start gap-[12px]">
          <CardMetaPill icon={<Users className="size-[18px]" strokeWidth={1.8} />} label={data.batch} />
          <CardMetaPill
            compact
            icon={<CalendarDays className="size-[18px]" strokeWidth={1.8} />}
            label={data.period}
          />
          <CardMetaPill
            compact
            icon={<PieChart className="size-[18px]" strokeWidth={1.8} />}
            label={data.progress}
          />
        </div>

        <div className="flex w-full items-start justify-end gap-[12px]">
          <ActionButton
            label="Lihat kuisioner"
            onClick={(event) => {
              event.stopPropagation();
              handleOpen();
            }}
          >
            <Link2 className="size-[18px]" strokeWidth={1.8} />
          </ActionButton>
          <ActionButton
            label="Hapus kuisioner"
            variant={theme.hasThirdAction ? "default" : "danger"}
            onClick={(event) => {
              event.stopPropagation();
              onDelete?.(data);
            }}
          >
            <Trash2 className="size-[18px]" strokeWidth={1.8} />
          </ActionButton>
          {theme.hasThirdAction && (
            <ActionButton
              label="Edit kuisioner"
              onClick={(event) => {
                event.stopPropagation();
                onEdit?.(data);
              }}
            >
              <Pencil className="size-[18px]" strokeWidth={1.8} />
            </ActionButton>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col items-start px-[20px] py-[12px]">
        <StatusBadge status={data.status} />
      </div>
    </article>
  );
}
