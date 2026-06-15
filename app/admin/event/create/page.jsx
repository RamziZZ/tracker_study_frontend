"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { newsService } from "@/services/news_service";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ImageAdd01FreeIcons,
  AlertCircleFreeIcons,
  CheckmarkCircle03FreeIcons,
} from "@hugeicons/core-free-icons";

// Shadcn UI Alert
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "event",
    content: "",
    is_published: true,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // State untuk alert status
  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efek untuk mengelola animasi masuk dan keluar alert
  useEffect(() => {
    if (status) {
      setIsVisible(true);
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      const removeTimer = setTimeout(() => setStatus(null), 3500);

      return () => {
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("content", formData.content);
      data.append("is_published", formData.is_published ? "1" : "0");

      if (imageFile) {
        data.append("thumbnail", imageFile);
      }

      await newsService.createNews(data);

      setStatus({
        type: "success",
        message: "Event berhasil ditambahkan!",
      });

      // Redirect setelah sukses
      setTimeout(() => router.push("/admin/event"), 2000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Terjadi kesalahan saat menyimpan data.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

        <h1 className="text-4xl font-bold">Tambah Event</h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl p-6">
        {/* Alert Container */}
        {status && (
          <div
            className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 px-5 w-full max-w-md duration-500 ease-out
            ${
              isVisible
                ? "animate-in fade-in slide-in-from-top-2"
                : "animate-out fade-out slide-out-to-top-2"
            }`}
          >
            <Alert
              variant={status.type === "error" ? "destructive" : "default"}
              className={
                status.type === "error"
                  ? "border-red-300 bg-red-50 shadow-xl text-red-700"
                  : "border-green-300 bg-green-50 shadow-xl text-green-700"
              }
            >
              {status.type === "error" ? (
                <HugeiconsIcon icon={AlertCircleFreeIcons} />
              ) : (
                <HugeiconsIcon icon={CheckmarkCircle03FreeIcons} />
              )}

              <AlertTitle className="font-bold">
                {status.type === "error" ? "Gagal" : "Berhasil"}
              </AlertTitle>
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          </div>
        )}

        {/* Alert */}
        <div className="bg-blue-50 text-blue-600 border border-blue-100 p-4 rounded-xl text-sm mb-6">
          <p className="font-semibold mb-1">Catatan:</p>

          <p>
            Isi data event/berita sesuai dengan kategori yang dipilih. Pastikan
            konten deskripsi lengkap agar mudah dipahami oleh alumni.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upload */}
            <div>
              <label className="font-medium">Pamflet Event</label>

              <div className="relative border-2 border-dashed border-gray-300 rounded-2xl h-[300px] flex flex-col items-center justify-center mt-2 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group overflow-hidden">
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <p className="text-white font-medium">Ubah Gambar</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <HugeiconsIcon
                      icon={ImageAdd01FreeIcons}
                      size={48}
                      className="text-gray-400 mb-2"
                    />
                    <p className="text-gray-500 text-sm font-medium">
                      Pilih File Pamflet
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Format: JPG, PNG (Max 2MB)
                    </p>
                  </>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <div>
                <label className="font-medium">Judul (Title)</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Contoh: Webinar Karir Alumni"
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="font-medium">Kategori (Category)</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="event">Event</option>
                  <option value="news">News</option>
                  <option value="announcement">Announcement</option>
                </select>
              </div>

              <div>
                <label className="font-medium">Status Publikasi</label>

                <select
                  name="is_published"
                  value={formData.is_published}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      is_published: e.target.value === "true",
                    }))
                  }
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="true">Published</option>
                  <option value="false">Draft / Hidden</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium">Isi Konten (Content)</label>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              placeholder="Tuliskan detail berita atau event di sini..."
              className="w-full border rounded-2xl px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-800 text-white px-10 py-3 rounded-full hover:bg-blue-700 duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Menyimpan..." : "Tambah Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
