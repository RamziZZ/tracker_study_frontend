"use client";

import Link from "next/link";

export default function CreateEventPage() {

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
          Tambah Event
        </h1>

      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl p-6">

        {/* Alert */}
        <div className="bg-red-100 text-red-500 p-4 rounded-xl text-sm mb-6">

          <p className="font-semibold mb-1">
            Catatan:
          </p>

          <p>
            Masukkan biodata dengan benar dan jika sudah terisi lihat kembali apakah sudah benar isinya.
          </p>

        </div>

        <form className="flex flex-col gap-6">

          {/* Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Upload */}
            <div>

              <label className="font-medium">
                Pamflet Event
              </label>

              <div className="border-2 border-dashed rounded-2xl h-[250px] flex items-center justify-center mt-2 bg-slate-50">

                <input type="file" />

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">

              <div>
                <label className="font-medium">
                  Nama Event
                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama event"
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="font-medium">
                  Link Pendaftaran
                </label>

                <input
                  type="text"
                  placeholder="Masukkan link website"
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="font-medium">
                  Kategori Event
                </label>

                <select className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500">

                  <option>Pilih Kategori</option>
                  <option>Bootcamp</option>
                  <option>Workshop</option>
                  <option>Seminar</option>
                  <option>Job Fair</option>

                </select>
              </div>

              <div>
                <label className="font-medium">
                  Lokasi Event
                </label>

                <input
                  type="text"
                  placeholder="Masukkan lokasi event"
                  className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

          </div>

          {/* Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div>
              <label className="font-medium">
                Biaya Pendaftaran
              </label>

              <input
                type="text"
                placeholder="Contoh: Gratis / 100.000"
                className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">
                Tanggal Mulai Pendaftaran
              </label>

              <input
                type="date"
                className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-medium">
                Tanggal Event
              </label>

              <input
                type="date"
                className="w-full border rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Description */}
          <div>

            <label className="font-medium">
              Deskripsi Event
            </label>

            <textarea
              rows={8}
              placeholder="Masukkan deskripsi event..."
              className="w-full border rounded-2xl px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Button */}
          <div className="flex justify-end">

            <button
              type="submit"
              className="bg-blue-800 text-white px-10 py-3 rounded-full hover:bg-blue-700 duration-300"
            >
              Tambah Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}