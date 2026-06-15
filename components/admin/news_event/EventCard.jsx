"use client";
import Image from "next/image";
import { Calendar, User, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

export default function EventCard({ event }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
      {/* Thumbnail Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={event.thumbnail}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-5 left-5">
          <span
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
              event.is_published
                ? "bg-green-500 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {event.is_published ? "Published" : "Draft"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-bold text-gray-900 line-clamp-2 text-lg leading-tight h-12">
            {event.title}
          </h3>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
            >
              <MoreVertical size={20} className="text-gray-400" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-200">
                <button className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-3">
                  <Edit2 size={16} /> Edit Event
                </button>
                <div className="h-px bg-gray-50 my-1" />
                <button className="w-full text-left px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3">
                  <Trash2 size={16} /> Hapus
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
          {event.content}
        </p>

        <div className="flex flex-wrap gap-4 pt-5 border-t border-gray-50">
          <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
            <Calendar size={14} className="text-blue-500" />
            {event.created_at}
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
            <User size={14} className="text-blue-500" />
            By {event.author.name}
          </div>
        </div>
      </div>
    </div>
  );
}
