"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Calendar03FreeIcons,
  Money03FreeIcons,
  Chair02FreeIcons,
} from "@hugeicons/core-free-icons";

import { events } from "@/data/events";

export default function DetailEventPage() {

  const params = useParams();
  const id = params.id;

  const event = events.find(
    (item) => item.id === Number(id)
  );

  if (!event) {
    return (
      <div className="p-6">
        Event tidak ditemukan
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">

        <Link
          href="/admin/event"
          className="px-5 py-2 border border-blue-800 rounded-full text-blue-800 hover:bg-blue-100 duration-300"
        >
          ← Kembali
        </Link>

        <h1 className="text-4xl font-bold">
          Detail Event
        </h1>

      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl p-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Image */}
          <div>

            <Image
              src={event.comp_image}
              alt={event.label}
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />

          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">

            {/* Title */}
            <div>

              <h1 className="text-5xl font-bold text-blue-900 leading-tight">
                {event.label}
              </h1>

            </div>

            {/* Badge */}
            <div className="flex flex-wrap gap-3">

              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm">
                {event.category}
              </div>

              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm flex items-center gap-2">

                <HugeiconsIcon
                  icon={Money03FreeIcons}
                  size={18}
                  color="currentColor"
                />

                Rp. {event.cost}

              </div>

              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm flex items-center gap-2">

                <HugeiconsIcon
                  icon={Chair02FreeIcons}
                  size={18}
                  color="currentColor"
                />

                {event.quota}

              </div>

            </div>

            {/* Uploader */}
            <p className="text-gray-500 italic">
              Diupload oleh {event.uploader}
            </p>

            {/* Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Tanggal Pendaftaran
                </h3>

                <p className="text-gray-700">
                  {event.register_date}
                </p>

              </div>

              <div>

                <h3 className="text-xl font-semibold mb-2">
                  Tanggal Event
                </h3>

                <div className="flex items-center gap-2 text-gray-700">

                  <HugeiconsIcon
                    icon={Calendar03FreeIcons}
                    size={20}
                    color="currentColor"
                  />

                  {event.event_date}

                </div>

              </div>

            </div>

            {/* Button */}
            <div className="flex flex-wrap gap-4 pt-10">

              <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 duration-300">
                Link Pendaftaran
              </button>

              <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 duration-300">
                Verifikasi Event
              </button>

            </div>

          </div>

        </div>

        {/* Description */}
        <div className="mt-10">

          <h2 className="text-3xl font-semibold mb-4">
            Tentang Event ini
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>

        </div>

      </div>

    </div>
  );
}