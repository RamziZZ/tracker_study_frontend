"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { KuesionerPopup } from "../ui/kuesioner-popup";

// Dummy data
const initialJobs = [
  {
    id: 1,
    title: "Front End Developer",
    company: "X Platform",
    location: "Jakarta",
    type: "Full Time",
    period: "7 Maret - 7 Mei 2026",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Figma",
    location: "Bandung",
    type: "Full Time",
    period: "1 April - 30 Juni 2026",
  },
];

function InputField({ label, value, onChange, placeholder, name, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, name, options, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <select
        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.value === ""}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

const jobTypeOptions = [
  { value: "", label: "Pilih Tipe Pekerjaan" },
  { value: "full_time", label: "Full Time" },
  { value: "part_time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
];

const locationOptions = [
  { value: "", label: "Pilih Lokasi" },
  { value: "jakarta", label: "Jakarta" },
  { value: "bandung", label: "Bandung" },
  { value: "surabaya", label: "Surabaya" },
  { value: "medan", label: "Medan" },
  { value: "makassar", label: "Makassar" },
];

export function LokerAdminCard() {
  const [jobs, setJobs] = useState(initialJobs);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    period: "",
  });
  const [popup, setPopup] = useState({ open: false, variant: "success", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.title || !formData.company || !formData.location || !formData.type || !formData.period) {
      return { valid: false, message: "Lengkapi semua field yang diperlukan" };
    }
    return { valid: true, message: "" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm();

    if (!validation.valid) {
      setPopup({ open: true, variant: "error", message: validation.message });
      return;
    }

    if (editingId) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingId ? { ...job, ...formData } : job
        )
      );
      setPopup({ open: true, variant: "success", message: "Loker berhasil diperbarui" });
      setEditingId(null);
    } else {
      const newJob = {
        id: Math.max(...jobs.map((j) => j.id), 0) + 1,
        ...formData,
      };
      setJobs((prev) => [...prev, newJob]);
      setPopup({ open: true, variant: "success", message: "Loker berhasil ditambahkan" });
    }

    setFormData({ title: "", company: "", location: "", type: "", period: "" });
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setEditingId(job.id);
    setFormData(job);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
    setPopup({ open: true, variant: "success", message: "Loker berhasil dihapus" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", company: "", location: "", type: "", period: "" });
  };

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  return (
    <>
      <div className="space-y-6">
        {/* Form Section */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              {editingId ? "Edit Lowongan Kerja" : "Tambah Lowongan Kerja Baru"}
            </h2>
            {showForm && (
              <button
                onClick={handleCancel}
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                ✕ Batal
              </button>
            )}
          </div>

          {showForm ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <InputField
                  label="Judul Posisi"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="misal: Front End Developer"
                  required
                />
                <InputField
                  label="Nama Perusahaan"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="misal: PT Teknologi Indonesia"
                  required
                />
                <SelectField
                  label="Lokasi"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  options={locationOptions}
                  required
                />
                <SelectField
                  label="Tipe Pekerjaan"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  options={jobTypeOptions}
                  required
                />
                <div className="sm:col-span-2">
                  <InputField
                    label="Periode Pembukaan"
                    name="period"
                    value={formData.period}
                    onChange={handleInputChange}
                    placeholder="misal: 7 Maret - 7 Mei 2026"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 rounded-3xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  {editingId ? "Perbarui Loker" : "Tambah Loker"}
                </Button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 rounded-3xl border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition"
                >
                  Batal
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="w-full rounded-3xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              + Tambah Loker Baru
            </button>
          )}
        </div>

        {/* Table Section */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 overflow-x-auto">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Daftar Lowongan Kerja</h2>

          <table className="w-full text-left text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 font-semibold text-slate-900">Posisi</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Perusahaan</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Lokasi</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Tipe</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Periode</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{job.title}</td>
                  <td className="px-4 py-3">{job.company}</td>
                  <td className="px-4 py-3">{job.location}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs">{job.period}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(job)}
                        className="rounded-lg bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-200 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-200 transition"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {jobs.length === 0 && (
            <div className="py-8 text-center text-slate-500">
              Belum ada loker. Tambahkan loker baru dengan klik tombol di atas.
            </div>
          )}
        </div>
      </div>

      <KuesionerPopup
        open={popup.open}
        variant={popup.variant}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
}
