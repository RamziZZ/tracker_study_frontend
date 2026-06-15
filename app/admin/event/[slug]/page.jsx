"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03FreeIcons,
  Money03FreeIcons,
  Chair02FreeIcons,
} from "@hugeicons/core-free-icons";

export default function DetailEventPage() {
  const params = useParams();
  const slug = params?.slug; // Menangkap [slug] sesuai nama folder

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ambil data riil dari API Laravel berdasarkan slug
  useEffect(() => {
    if (slug) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`)
        .then((res) => {
          const newsData = res.data.data || res.data;
          setEvent(newsData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal memuat detail event dari API:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Memuat detail data...</div>;
  }

  if (!event) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        Event tidak ditemukan di database.
      </div>
    );
  }

  // Siasati gambar jika path-nya dari backend Laravel
  const imageUrl = event.thumbnail
    ? `${process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")}${event.thumbnail}`
    : "/avatar_default.png";

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
        <h1 className="text-4xl font-bold">Detail Event</h1>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <Image
              src={imageUrl}
              alt={event.title || "Event Image"}
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
              <h1 className="text-2xl font-bold text-blue-900 leading-tight">
                {event.title}
              </h1>
            </div>

            {/* Badge */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm">
                {event.category || "Berita / Event"}
              </div>

              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                <HugeiconsIcon icon={Money03FreeIcons} size={18} color="currentColor" />
                {event.cost ? `Rp. ${event.cost}` : "Gratis / Berita"}
              </div>

              <div className="bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                <HugeiconsIcon icon={Chair02FreeIcons} size={18} color="currentColor" />
                Kuota: {event.quota || "-"}
              </div>
            </div>

            {/* Uploader */}
            <p className="text-gray-500 italic">
              Diupload pada {event.created_at}
            </p>

            {/* Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tanggal Pembuatan</h3>
                <p className="text-gray-700">{event.created_at}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Waktu Sistem</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <HugeiconsIcon icon={Calendar03FreeIcons} size={20} color="currentColor" />
                  {event.updated_at}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-wrap gap-4 pt-10">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 duration-300 cursor-pointer">
                Link Pendaftaran
              </button>
              <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 duration-300 cursor-pointer">
                Verifikasi Event
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Tentang Event ini</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {event.content}
          </p>
        </div>
      </div>
    </div>
  );
}