import Link from "next/link";
import { Plus } from "lucide-react";

export default function EventHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manajemen Event</h1>
        <p className="text-gray-500 mt-1">
          Kelola agenda, sosialisasi, dan webinar untuk alumni.
        </p>
      </div>
      <Link href="/admin/event/create">
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20 cursor-pointer">
          <Plus size={20} />
          Tambah Event Baru
        </button>
      </Link>
    </div>
  );
}
