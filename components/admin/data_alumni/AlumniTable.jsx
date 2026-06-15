"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete01FreeIcons,
  ViewFreeIcons,
  PencilEdit01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function AlumniTable({
  users,
  loading,
  onShowDetail,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-50 text-blue-900 font-semibold">
            <tr>
              <th className="px-6 py-4">No</th>
              <th className="px-6 py-4">NIM</th>
              <th className="px-6 py-4">Nama Lengkap</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Tahun Lulus</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  Memuat data...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  Tidak ada data alumni ditemukan.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.alumni?.nim || "-"}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {user.alumni?.name || user.username}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600 text-center">
                    {user.alumni?.tahun_lulus || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize 
                              ${
                                !user.alumni?.status?.replace("_", " ") ||
                                user.alumni?.status.replace("_", " ") ===
                                  "belum diisi"
                                  ? "bg-red-100 text-red-700"
                                  : user.alumni?.status.replace("_", " ") ===
                                      "belum bekerja"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-100 text-green-700"
                              }`}
                    >
                      {user.alumni?.status
                        ? user.alumni.status.replace("_", " ")
                        : "Belum Mengisi"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => onShowDetail(user)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <HugeiconsIcon icon={ViewFreeIcons} size={20} />
                      </button>
                      <button
                        onClick={() => onEdit(user)}
                        className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <HugeiconsIcon icon={PencilEdit01FreeIcons} size={20} />
                      </button>
                      <button
                        onClick={() => onDelete(user.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <HugeiconsIcon icon={Delete01FreeIcons} size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
