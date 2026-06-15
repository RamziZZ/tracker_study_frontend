"use client";
import { useState, useEffect } from "react";

// User Service
import { userService } from "@/services/user_service";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleFreeIcons,
  CheckmarkCircle03FreeIcons,
  PencilEdit02FreeIcons,
  Delete02FreeIcons,
  UserAdd01FreeIcons,
  Search01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function ManajemenAkunPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState(null); // { type: 'error' | 'success', message: string }

  // State untuk Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" | "edit"
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  // State untuk Bulk Password Reset
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkPassword, setBulkPassword] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await userService.getAllUsers();
      const allUsers = response.data || [];
      // Filter hanya user dengan role admin
      const adminUsers = allUsers.filter((user) => user.role === "admin");
      setUsers(adminUsers);
    } catch (error) {
      console.error("Gagal memuat data admin:", error);
      showStatus("error", "Gagal mengambil data dari server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus(null), 3000);
  };

  const handleDelete = async (userId) => {
    if (confirm("Apakah Anda yakin ingin menghapus akun admin ini?")) {
      try {
        await userService.deleteUser(userId);
        showStatus("success", "Akun admin berhasil dihapus.");
        fetchData();
      } catch (error) {
        showStatus("error", "Gagal menghapus akun.");
      }
    }
  };

  const executeBulkReset = async (e) => {
    e.preventDefault();
    if (!bulkPassword || bulkPassword.trim() === "") {
      showStatus("error", "Password baru tidak boleh kosong.");
      return;
    }

    setIsBulkModalOpen(false);
    setLoading(true);
    try {
      let success = 0;
      let fail = 0;

      // Melakukan update satu per satu karena API backend bersifat single-update
      for (const user of users) {
        try {
          await userService.updateUser(user.id, {
            username: user.username,
            email: user.email,
            password: bulkPassword,
            name: user.username, // Menambahkan name agar lolos validator BE
          });
          success++;
        } catch (err) {
          fail++;
        }
      }
      showStatus(
        fail === 0 ? "success" : "error",
        `Update Massal Selesai: ${success} Berhasil, ${fail} Gagal.`,
      );
      fetchData();
    } catch (error) {
      showStatus("error", "Gagal melakukan reset password massal.");
    } finally {
      setLoading(false);
      setBulkPassword("");
    }
  };

  const openAddModal = () => {
    setModalMode("add");
    setFormData({ id: "", username: "", email: "", password: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setModalMode("edit");
    setFormData({
      id: user.id,
      username: user.username,
      email: user.email,
      password: "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === "add") {
        const payload = { ...formData, role: "admin" };
        // Jika password kosong, default ke username (NIP/NIDN)
        if (!payload.password) {
          payload.password = payload.username;
        }
        // Tambahkan name secara otomatis agar lolos validasi API backend
        // tanpa harus mengubah struktur Database atau menambah input di UI
        payload.name = payload.username;

        await userService.createUser(payload);
        showStatus("success", "Akun admin baru berhasil dibuat.");
      } else {
        const payload = { 
          username: formData.username, 
          email: formData.email,
          name: formData.username // Sinkronisasi name dengan username untuk update
        };
        
        if (formData.password) payload.password = formData.password;
        await userService.updateUser(formData.id, payload);
        showStatus("success", "Data akun berhasil diperbarui.");
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      showStatus(
        "error",
        error.response?.data?.message || "Terjadi kesalahan sistem.",
      );
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="px-6 py-4 space-y-8 relative">
      {/* Status Alert */}
      {status && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 pointer-events-none">
          <Alert
            className={`shadow-2xl border-2 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-500 ${
              status.type === "error"
                ? "border-red-200 bg-white text-red-800 shadow-red-200/50"
                : "border-green-200 bg-white text-green-800 shadow-green-200/50"
            }`}
          >
            <HugeiconsIcon
              icon={
                status.type === "error"
                  ? AlertCircleFreeIcons
                  : CheckmarkCircle03FreeIcons
              }
              className="w-5 h-5"
            />
            <AlertTitle className="font-bold">
              {status.type === "error" ? "Gagal" : "Berhasil"}
            </AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Manajemen Akun Admin
          </h1>
          <p className="text-slate-500 text-sm">
            Kelola hak akses pengguna dengan level Administrator
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setIsBulkModalOpen(true)}
            disabled={loading || users.length === 0}
            className="border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800 rounded-full px-6 py-6 cursor-pointer"
          >
            <HugeiconsIcon
              icon={PencilEdit02FreeIcons}
              className="mr-2 w-5 h-5"
            />
            Reset Password Massal
          </Button>
          <Button
            onClick={openAddModal}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 cursor-pointer shadow-lg shadow-blue-200"
          >
            <HugeiconsIcon icon={UserAdd01FreeIcons} className="mr-2 w-5 h-5" />
            Tambah Admin
          </Button>
        </div>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="pb-0">
          <div className="relative max-w-md">
            <HugeiconsIcon
              icon={Search01FreeIcons}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            />
            <Input
              placeholder="Cari username atau email..."
              className="pl-12 py-6 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-y border-slate-100">
                <tr>
                  <th className="px-6 py-5 font-semibold">Username</th>
                  <th className="px-6 py-5 font-semibold">Email Address</th>
                  <th className="px-6 py-5 font-semibold">Role</th>
                  <th className="px-6 py-5 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-10 text-center text-slate-400"
                    >
                      Memuat data...
                    </td>
                  </tr>
                ) : filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-5 font-medium text-slate-700">
                        {user.username}
                      </td>
                      <td className="px-6 py-5 text-slate-600">{user.email}</td>
                      <td className="px-6 py-5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-700 border border-amber-200">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right space-x-2">
                        <button
                          onClick={() => openEditModal(user)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <HugeiconsIcon
                            icon={PencilEdit02FreeIcons}
                            size={18}
                          />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          <HugeiconsIcon icon={Delete02FreeIcons} size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-4 py-10 text-center text-slate-400"
                    >
                      Tidak ada data admin ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modal Add/Edit (Simplified inline modal implementation) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-lg rounded-[40px] p-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold text-slate-900">
                {modalMode === "add" ? "Tambah Akun Admin" : "Edit Akun Admin"}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {modalMode === "add"
                  ? "Buat kredensial akses baru untuk administrator sistem."
                  : "Perbarui informasi akun admin yang sudah ada."}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username (NIP/NIDN)</Label>
                  <Input
                    id="username"
                    required
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    placeholder="Masukkan username/NIP/NIDN"
                    className="px-5 py-6 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="admin@example.com"
                    className="px-5 py-6 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    {modalMode === "add"
                      ? "Password (Opsional)"
                      : "Password Baru (Kosongkan jika tidak diubah)"}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required={false}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Kosongkan untuk gunakan NIP/NIDN"
                    className="px-5 py-6 rounded-2xl"
                  />
                  <p className="mt-2 text-xs text-slate-400 italic font-medium">
                    Default password disamakan dengan NIP/NIDN
                  </p>
                </div>
              </CardContent>
              <div className="flex justify-end gap-3 pt-8 px-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full py-6 px-8 cursor-pointer"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 px-8 cursor-pointer"
                >
                  {modalMode === "add" ? "Simpan Akun" : "Simpan Perubahan"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* Modal Bulk Reset Password */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-lg rounded-[40px] p-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl font-bold text-amber-600">
                Reset Password Massal
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Anda akan mengubah password untuk <strong>{users.length} akun admin</strong> sekaligus. 
                Pastikan password baru sudah dicatat dengan benar.
              </CardDescription>
            </CardHeader>
            <form onSubmit={executeBulkReset}>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bulk-password">Password Baru untuk Semua Admin</Label>
                  <Input
                    id="bulk-password"
                    type="password"
                    required
                    value={bulkPassword}
                    onChange={(e) => setBulkPassword(e.target.value)}
                    placeholder="Masukkan password baru"
                    className="px-5 py-6 rounded-2xl border-amber-200 focus:ring-amber-500"
                  />
                  <p className="mt-2 text-xs text-amber-600 italic font-medium">
                    * Tindakan ini akan memakan waktu tergantung jumlah akun.
                  </p>
                </div>
              </CardContent>
              <div className="flex justify-end gap-3 pt-8 px-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsBulkModalOpen(false);
                    setBulkPassword("");
                  }}
                  className="rounded-full py-6 px-8 cursor-pointer"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-full py-6 px-8 cursor-pointer shadow-lg shadow-amber-200"
                >
                  {loading ? "Memproses..." : "Ya, Update Semua Akun"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
