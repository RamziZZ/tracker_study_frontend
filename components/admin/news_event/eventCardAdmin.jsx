import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03FreeIcons,
  ArrowRight02FreeIcons,
  Delete02FreeIcons,
  PencilEdit02FreeIcons, // Import ikon edit
} from "@hugeicons/core-free-icons";

const EventCardAdmin = ({
  id,
  slug,
  label,
  comp_image,
  type,
  calender,
  onDeleteClick, // Gunakan ini untuk memicu dialog di EventList
}) => {
  return (
    <div className="bg-white w-full flex flex-col gap-5 p-4 rounded-[25px] shadow-sm border border-gray-50">
      {/* Thumbnail */}
      <Link
        href={`/admin/event/${id}`}
        className="group overflow-hidden rounded-xl shrink-0"
      >
        <img
          alt={label}
          src={comp_image}
          className="w-full aspect-video rounded-xl group-hover:scale-105 transition-transform duration-500 object-cover"
        />
      </Link>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2.5">
          {/* Badge Kategori */}
          <div className="w-fit flex justify-center items-center py-1.5 px-2.5 bg-blue-100 text-blue-700 rounded-md text-xs">
            <p className="text-xs">{type}</p>
          </div>

          {/* Judul */}
          <Link href={`/admin/event/${id}`}>
            <h3 className="text-base font-semibold line-clamp-2 transition-colors cursor-pointer">
              {label}
            </h3>
          </Link>
          
          {/* Tanggal */}
          <div className="w-full h-fit flex flex-row items-center gap-2 text-xs text-gray-500 mt-1">
            <HugeiconsIcon
              icon={Calendar03FreeIcons}
              size={18}
              className="shrink-0"
              color="currentColor"
              strokeWidth={1.5}
            />
            <p className="w-full">{calender}</p>
          </div>
        </div>

        {/* Baris Tombol Aksi */}
        <div className="w-full flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
          {/* Tombol Edit (Paling Kiri) */}
          <Link
            href={`/admin/event/edit/${slug}`}
            className="flex items-center justify-center p-2.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300 cursor-pointer"
            title="Edit Event"
          >
            <HugeiconsIcon icon={PencilEdit02FreeIcons} size={18} />
          </Link>

          {/* Tombol Hapus Cuma Ikon (Paling Kanan) */}
          <button
            type="button"
            onClick={() => onDeleteClick(id, label)}
            className="flex items-center justify-center p-2.5 bg-red-50 text-red-500 rounded-full hover:bg-red-100 active:bg-red-200 duration-300 cursor-pointer"
            title="Hapus Event"
          >
            <HugeiconsIcon icon={Delete02FreeIcons} size={18} />
          </button>

          {/* Tombol Lihat Detail (Tengah - Mengisi Ruang Sisa) */}
          <Link
            href={`/admin/event/${slug}`}
            className="flex-1 flex flex-row items-center justify-center gap-1 px-4 bg-blue-500 text-blue-50 text-xs font-normal py-2.5 rounded-full hover:bg-blue-400 active:bg-blue-600 duration-300 cursor-pointer"
          >
            <HugeiconsIcon icon={ArrowRight02FreeIcons} size={16} />
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCardAdmin;