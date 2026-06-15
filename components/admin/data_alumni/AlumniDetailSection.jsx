"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02FreeIcons,
  UserCircleFreeIcons,
  Mail01FreeIcons,
  Calendar03FreeIcons,
  SmartPhone01FreeIcons,
  IdentityCardFreeIcons,
} from "@hugeicons/core-free-icons";

export default function AlumniDetailSection({ user, onBack }) {
  if (!user) return null;
  const alumni = user.alumni || {};

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium cursor-pointer"
        >
          <HugeiconsIcon icon={ArrowLeft02FreeIcons} size={20} />
          Kembali ke Daftar
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Profil */}
        <div className="bg-blue-00 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 border-4 border-blue-500/50 overflow-hidden">
              <Image
                src={alumni.img_profile || "/avatar_default.png"}
                alt={alumni.name || user.username}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">
                {alumni.name || user.username}
              </h2>
              <p className="opacity-80">NIM: {alumni.nim || "-"}</p>
              <span
                className={`mt-3 inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  alumni.status === "bekerja"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-white"
                }`}
              >
                {alumni.status === "belumbekerja"
                  ? "Belum Bekerja"
                  : alumni.status || "Belum Mengisi"}
              </span>
            </div>
          </div>
        </div>

        {/* Body Detail */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">
                Informasi Pribadi & Kontak
              </h3>
              <div className="space-y-4">
                <DetailItem
                  icon={Mail01FreeIcons}
                  label="Email"
                  value={user.email}
                />
                <DetailItem
                  icon={SmartPhone01FreeIcons}
                  label="No. Telepon"
                  value={alumni.phone_number}
                />
                <div className="grid grid-cols-2 gap-4">
                  <DetailItem
                    icon={IdentityCardFreeIcons}
                    label="NIK"
                    value={alumni.nik}
                  />
                  <DetailItem
                    icon={IdentityCardFreeIcons}
                    label="NPWP"
                    value={alumni.npwp}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5">
                Data Akademik
              </h3>
              <div className="space-y-4">
                <DetailItem
                  icon={UserCircleFreeIcons}
                  label="NIM"
                  value={alumni.nim}
                />
                <DetailItem
                  icon={Calendar03FreeIcons}
                  label="Tahun Lulus"
                  value={alumni.tahun_lulus}
                />
                <DetailItem
                  icon={UserCircleFreeIcons}
                  label="Kode Prodi"
                  value={alumni.kdpstmsmh}
                />
              </div>
            </section>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 p-6 flex justify-end gap-3 border-t border-gray-100">
          <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-white transition-all text-red-600 hover:border-red-200">
            Hapus Akun
          </button>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Verifikasi Data
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <HugeiconsIcon icon={icon} size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
          {label}
        </p>
        <p className="text-gray-700 font-medium">{value || "-"}</p>
      </div>
    </div>
  );
}
