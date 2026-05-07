"use client";

import EventCard from "@/components/ui/event_card";

export default function EventPage() {

  const events = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Event ${i + 1}`,
    image: `/images/event${(i % 4) + 1}.jpg`,
    date: `2024-07-${(i % 30) + 1}`,
    location: `Location ${i + 1}`,
  }));

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Event</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          + Tambah Event
        </button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3">
        
        <input
          type="text"
          placeholder="masukkan nama event disini..."
          className="flex-1 min-w-[200px] border border-blue-500 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />

        <select className="border border-blue-500 text-blue-500 rounded-full px-4 py-2">
          <option>Terbaru</option>
          <option>Terlama</option>
        </select>

        <select className="border border-blue-500 text-blue-500 rounded-full px-4 py-2">
          <option>Type: Semua</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onDetail={() => console.log("Detail:", event.id)}
            onDelete={() => console.log("Delete:", event.id)}
          />
        ))}
      </div>

    </div>
  );
}