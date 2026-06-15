"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { userService } from "@/services/user_service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleFreeIcons,
  CheckmarkCircle03FreeIcons,
  ViewFreeIcons,
  ViewOffSlashFreeIcons,
} from "@hugeicons/core-free-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AkunmuPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [status, setStatus] = useState(null); // { type: 'error' | 'success', message: string }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;

      const parsedUser = JSON.parse(storedUser);

      try {
        // Ambil data terbaru dari server untuk mendapatkan Email dll
        const response = await userService.getAllUsers();
        const allUsers = response.data || [];
        const me = allUsers.find((u) => u.id === parsedUser.id);

        if (me) {
          setUserData(me);
        } else {
          setUserData(parsedUser); // Fallback ke localstorage jika tidak ketemu
        }
      } catch (error) {
        console.error("Gagal mengambil data profil terbaru:", error);
        setUserData(parsedUser);
      }
    };

    fetchCurrentUserData();
  }, []);

  const showStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };

  const handleOpenModal = () => {
    setEditForm({
      username: userData?.username || "",
      email: userData?.email || "",
      password: "",
    });
    setIsModalOpen(true);
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        username: editForm.username,
        email: editForm.email,
        name: editForm.username, // Trick name fallback agar lolos validator BE
      };

      // Hanya kirim password jika diisi
      if (editForm.password) {
        if (editForm.password.length < 6) {
          showStatus("error", "Password minimal 6 karakter.");
          setIsLoading(false);
          return;
        }
        payload.password = editForm.password;
      }

      await userService.updateUser(userData.id, payload);

      // Perbarui state lokal
      const updatedUser = {
        ...userData,
        username: editForm.username,
        email: editForm.email,
      };
      setUserData(updatedUser);

      // Perbarui localStorage agar Navbar/Sidebar ikut berubah
      const localUser = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...localUser, username: editForm.username }),
      );

      showStatus("success", "Data akun berhasil diperbarui!");
      setIsModalOpen(false);
    } catch (error) {
      showStatus(
        "error",
        error.response?.data?.message || "Gagal memperbarui data akun.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-transparent flex relative">
      {/* Status Alert di Tengah Atas */}
      {status && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-full max-w-md px-4 pointer-events-none">
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

      {/* Main Content */}
      <main className="flex-1 px-8 py-6">
        {/* Informasi Akunmu */}
        <section className="flex flex-col items-center mb-10">
          <h2 className="text-lg font-medium text-black mb-6">
            Informasi Akunmu
          </h2>

          <div className="flex flex-col items-center">
            {/* Placeholder Foto Profil */}
            <div className="w-32 h-32 relative overflow-hidden rounded-full bg-gray-300 shadow-md mb-3 flex items-center justify-center">
              {/* <span className="text-gray-500 text-sm">Foto Profil</span> */}
              <Image
                src={"/avatar_default.png"}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Email & Username */}
        <section className="bg-white/70 rounded-2xl p-6 shadow-sm mb-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ===== USERNAME ===== */}
            <div>
              <Label className="text-sm font-medium text-gray-700 block mb-2">
                Username (NIP/NIDN)
              </Label>
              <Input
                value={userData?.username || ""}
                readOnly
                className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-6 text-sm text-slate-900 outline-none"
              />
            </div>

            {/* ===== EMAIL ===== */}
            <div>
              <Label className="text-sm font-medium text-gray-700 block mb-2">
                Email Address
              </Label>
              <Input
                value={userData?.email || ""}
                readOnly
                className="rounded-xl border border-gray-200 bg-slate-50 px-4 py-6 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={handleOpenModal}
              className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm hover:bg-blue-700 cursor-pointer transition-colors shadow-lg shadow-blue-100 font-medium"
            >
              Ubah Data Akun
            </button>

            <button
              onClick={handleLogout}
              className="bg-rose-100 text-rose-700 px-8 py-2.5 rounded-full text-sm hover:bg-rose-200 cursor-pointer transition-colors font-semibold"
            >
              Logout
            </button>
          </div>
        </section>
      </main>

      {/* Modal Ubah Data */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-lg rounded-[40px] p-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <CardHeader className="px-0 pt-0 text-center">
              <CardTitle className="text-2xl font-bold text-slate-900">
                Ubah Data Profil
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Perbarui informasi kredensial login Anda di bawah ini.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdateData}>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username (NIP/NIDN)</Label>
                  <Input
                    id="username"
                    required
                    value={editForm.username}
                    onChange={(e) =>
                      setEditForm({ ...editForm, username: e.target.value })
                    }
                    placeholder="Masukkan username baru"
                    className="px-5 py-6 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={editForm.email}
                    onChange={(e) =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    placeholder="admin@example.com"
                    className="px-5 py-6 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">
                    Password Baru (Kosongkan jika tidak diubah)
                  </Label>
                  <div className="relative">
                    <Input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      value={editForm.password}
                      onChange={(e) =>
                        setEditForm({ ...editForm, password: e.target.value })
                      }
                      placeholder="••••••••"
                      className="px-5 py-6 rounded-2xl pr-14"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      <HugeiconsIcon
                        icon={
                          showPassword ? ViewOffSlashFreeIcons : ViewFreeIcons
                        }
                        size={20}
                      />
                    </button>
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-col gap-3 pt-8 px-0">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 px-8 cursor-pointer shadow-lg shadow-blue-200 font-bold"
                >
                  {isLoading ? "Memproses..." : "Simpan Perubahan"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                  className="rounded-full py-6 px-8 cursor-pointer text-slate-500"
                >
                  Batalkan
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
