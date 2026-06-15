"use client";

import { useState, useEffect, useRef } from "react";
import { userService } from "@/services/user_service";
import { alumniService } from "@/services/alumni_service";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FileImportFreeIcons,
} from "@hugeicons/core-free-icons";
import AlumniDetailSection from "@/components/admin/data_alumni/AlumniDetailSection";
import AlumniTable from "@/components/admin/data_alumni/AlumniTable";
import AlumniStatusAlert from "@/components/admin/data_alumni/AlumniStatusAlert";
import AddAlumniModal from "@/components/admin/data_alumni/AddAlumniModal";
import EditUserModal from "@/components/admin/data_alumni/EditUserModal";
import * as XLSX from "xlsx";

export default function AlumniPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [status, setStatus] = useState(null); // { type: 'error' | 'success', message: string }
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'detail'
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const fileInputRef = useRef(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Mengambil data dari kedua endpoint secara bersamaan
      const [usersRes, alumniProfilesRes] = await Promise.all([
        userService.getAllUsers(),
        alumniService.getAllAlumni(),
      ]);

      const allUsers = usersRes.data || [];
      const allProfiles = alumniProfilesRes.data || [];

      // 1. Filter hanya yang rolenya alumni
      // 2. Gabungkan data user dengan profile alumni berdasarkan email
      const combinedData = allUsers
        .filter((user) => user.role === "alumni")
        .map((user) => {
          const profile = allProfiles.find((p) => p.email === user.email);
          return { ...user, alumni: profile || null };
        });

      setUsers(combinedData);
    } catch (error) {
      console.error("Gagal memuat data alumni:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Efek untuk animasi masuk alert
  useEffect(() => {
    if (status) {
      setIsVisible(true);
    }
  }, [status]);

  const handleCloseAlert = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStatus(null);
    }, 500);
  };

  const handleShowDetail = (user) => {
    setSelectedAlumni(user);
    setViewMode("detail");
  };

  const handleBackToList = () => {
    setViewMode("list");
    setSelectedAlumni(null);
  };

  const handleDelete = async (userId) => {
    setStatus({
      type: "confirm",
      message:
        "Apakah Anda yakin ingin menghapus data alumni ini? Tindakan ini tidak dapat dibatalkan.",
      onConfirm: async () => {
        handleCloseAlert();
        try {
          await userService.deleteUser(userId);
          setStatus({
            type: "success",
            message: "Data alumni berhasil dihapus dari sistem.",
          });
          fetchData(); // Segarkan data tabel
        } catch (error) {
          console.error("Gagal menghapus alumni:", error);
          setStatus({
            type: "error",
            message: "Gagal menghapus data alumni. Silakan coba lagi.",
          });
        }
      },
    });
  };

  const handleEditClick = (user) => {
    setEditForm({
      id: user.id,
      username: user.username,
      email: user.email,
      password: "", // Reset field password agar kosong saat modal dibuka
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        username: editForm.username,
        email: editForm.email,
      };

      // Hanya kirim field password jika admin mengisinya
      if (editForm.password) {
        payload.password = editForm.password;
      }

      await userService.updateUser(editForm.id, payload);
      setIsEditModalOpen(false);
      setStatus({ type: "success", message: "Akses akun alumni berhasil diperbarui!" });
      fetchData(); // Segarkan data tabel
    } catch (error) {
      console.error("Gagal update alumni:", error);
      setStatus({ type: "error", message: error.response?.data?.message || "Gagal memperbarui data akun." });
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...addForm,
        role: "alumni",
      };

      // Jika password kosong, default ke username (NIM) seperti skema Excel
      if (!payload.password) {
        payload.password = payload.username;
      }

      await userService.createUser(payload);
      setIsAddModalOpen(false);
      setAddForm({ username: "", name: "", email: "", password: "" });
      setStatus({ type: "success", message: "Data alumni baru berhasil ditambahkan ke sistem!" });
      fetchData();
    } catch (error) {
      console.error("Gagal tambah alumni:", error);
      setStatus({ type: "error", message: error.response?.data?.message || "Gagal menambahkan data alumni." });
    }
  };

  const handleImportExcel = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImporting(true);
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        setProgress({ current: 0, total: jsonData.length });
        let successCount = 0;
        let duplicateCount = 0;
        let errorCount = 0;

        for (let i = 0; i < jsonData.length; i++) {
          const row = jsonData[i];

          // Mapping field Excel ke API Payload
          const payload = {
            username: row.NIM?.toString(),
            email: row.Email,
            password: row.NIM?.toString(), // Default password = NIM
            role: "alumni",
            name: row.Nama, // Pastikan BE menghandle 'name' untuk tabel alumnis
          };

          try {
            await userService.createUser(payload);
            successCount++;
          } catch (err) {
            if (err.response?.status === 422) {
              duplicateCount++;
            } else {
              errorCount++;
            }
            console.error(`Gagal import baris ${i + 1} (${row.NIM}):`, err);
          }

          setProgress((prev) => ({ ...prev, current: i + 1 }));
        }

        if (duplicateCount > 0 || errorCount > 0) {
          setStatus({
            type: "error",
            message: `Import selesai. ${successCount} sukses, ${duplicateCount} data sudah ada di sistem, ${errorCount} gagal lainnya.`,
          });
        } else {
          setStatus({
            type: "success",
            message: `Berhasil mengimpor ${successCount} data alumni baru secara massal!`,
          });
        }
        fetchData();
      } catch (error) {
        console.error("Error reading excel:", error);
        setStatus({
          type: "error",
          message: "Format file Excel tidak didukung atau file rusak.",
        });
      } finally {
        setImporting(false);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="px-5 pt-2 pb-11">
      <AlumniStatusAlert status={status} onClose={handleCloseAlert} />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleUpdateUser}
        formData={editForm}
        setFormData={setEditForm}
      />

      <AddAlumniModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setAddForm({ username: "", name: "", email: "", password: "" });
        }}
        onSubmit={handleAddUser}
        formData={addForm}
        setFormData={setAddForm}
      />

      {viewMode === "detail" ? (
        <AlumniDetailSection user={selectedAlumni} onBack={handleBackToList} />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Master Data Alumni
            </h1>
            <div className="flex gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImportExcel}
                accept=".xlsx, .xls"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current.click()}
                disabled={importing}
                className="flex items-center gap-2 bg-white border border-blue-500 text-blue-500 cursor-pointer hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-medium transition-all disabled:opacity-50"
              >
                <HugeiconsIcon icon={FileImportFreeIcons} size={18} />
                {importing
                  ? `Importing... (${progress.current}/${progress.total})`
                  : "Import Excel"}
              </button>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all"
              >
                Tambah Alumni
              </button>
            </div>
          </div>

          <AlumniTable
            users={users}
            loading={loading}
            onShowDetail={handleShowDetail}
            onEdit={handleEditClick}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}
