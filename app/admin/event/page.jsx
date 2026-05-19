"use client";

import EventCardAdmin from "@/components/shared/eventCardAdmin";
import Link from "next/link";
import { events } from "@/data/events";

export default function EventPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <h1 className="text-2xl font-semibold">
          Event
        </h1>

        <Link href="/admin/event/create">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 duration-300">
            + Tambah Event
          </button>
        </Link>

      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3">

        <input
          type="text"
          placeholder="masukkan nama event disini..."
          className="flex-1 min-w-[200px] border border-blue-500 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select className="border border-blue-500 text-blue-500 rounded-full px-4 py-2">
          <option>Terbaru</option>
          <option>Terlama</option>
        </select>

        <select className="border border-blue-500 text-blue-500 rounded-full px-4 py-2">
          <option>Semua</option>
          <option>Gak Semua</option>
        </select>

      </div>

      {/* Event Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">

        {events.map((event) => (
          <EventCardAdmin
            key={event.id}
            id={event.id}
            label={event.label}
            comp_image={event.comp_image}
            location={event.location}
            type={event.type}
            calender={event.calender}
            cost={event.cost}
            quota={event.quota}
          />
        ))}

      </div>

    </div>
  );
}