import { Search, ChevronDown } from "lucide-react";

export default function EventFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari judul event atau konten..."
          className="w-full pl-13 pr-6 py-4 rounded-[20px] border border-gray-100 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
        />
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-6 py-4 bg-white border border-gray-100 rounded-[20px] text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all shadow-sm cursor-pointer">
          Terbaru
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}