"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { jobService } from "@/services/job_service";

import { KuesionerPopup } from "@/components/ui/kuesioner-popup";
import JobCard from "@/components/admin/loker/jobCard_admin";
import EditJob from "@/components/admin/loker/editJob";
import AddJob from "@/components/admin/loker/addJob";
import DetailJob from "@/components/admin/loker/detailJob";

import { locationOptions } from "@/constants/location.js";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01FreeIcons,
  Add01FreeIcons,
  Cancel01FreeIcons,
} from "@hugeicons/core-free-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function InputField({
  label,
  value,
  onChange,
  placeholder,
  name,
  type = "text",
  required = false,
  isTextArea = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {isTextArea ? (
        <textarea
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-25"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  name,
  options,
  required = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition-colors flex justify-between items-center hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200"
      >
        <span className={!selectedOption?.value ? "text-slate-400" : ""}>
          {selectedOption?.label || "Pilih Opsi"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform text-slate-500 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="relative mb-2">
            <HugeiconsIcon
              icon={Search01FreeIcons}
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Cari..."
              autoFocus
              className="w-full rounded-xl border border-slate-100 bg-slate-50 py-2 pl-9 pr-4 text-xs outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={`cursor-pointer rounded-lg px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600 ${value === option.value ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-600"}`}
                  onClick={() => {
                    onChange({ target: { name, value: option.value } });
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-slate-400">
                Tidak ditemukan
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const categoryOptions = [
  { value: "", label: "Pilih Kategori" },
  { value: "Full Time-Remote", label: "Full Time-Remote" },
  { value: "Full Time-Hybrid", label: "Full Time-Hybrid" },
  { value: "Full Time-Onsite", label: "Full Time-Onsite" },
  { value: "Part Time-Remote", label: "Part Time-Remote" },
  { value: "Part Time-Hybrid", label: "Part Time-Hybrid" },
  { value: "Part Time-Onsite", label: "Part Time-Onsite" },
  { value: "Internship-Remote", label: "Internship-Remote" },
  { value: "Internship-Hybrid", label: "Internship-Hybrid" },
  { value: "Internship-Onsite", label: "Internship-Onsite" },
];

// const locationOptions = [
//   { value: "", label: "Pilih Lokasi" },
//   { value: "jakarta", label: "Jakarta" },
//   { value: "bandung", label: "Bandung" },
//   { value: "surabaya", label: "Surabaya" },
//   { value: "medan", label: "Medan" },
//   { value: "makassar", label: "Makassar" },
// ];

export function LokerAdminCard() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedJobDetail, setSelectedJobDetail] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(null);
  const [popup, setPopup] = useState({
    open: false,
    variant: "success",
    message: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const result = await jobService.getAllJobs();
      setJobs(result.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setPopup({
        open: true,
        variant: "error",
        message: "Gagal mengambil data loker",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (job) => {
    setEditingId(job.id);
    setShowForm(false); // Pastikan form tambah tertutup saat edit
    setSelectedJobDetail(null);
  };

  const handleDelete = (id) => {
    setJobIdToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleShowDetail = (job) => {
    setSelectedJobDetail(job);
    setShowForm(false);
  };

  const confirmDelete = async () => {
    if (!jobIdToDelete) return;

    try {
      await jobService.deleteJob(jobIdToDelete);
      setPopup({
        open: true,
        variant: "success",
        message: "Loker berhasil dihapus",
      });
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
      setPopup({
        open: true,
        variant: "error",
        message: "Gagal menghapus loker",
      });
    } finally {
      setIsDeleteDialogOpen(false);
      setJobIdToDelete(null);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setSelectedJobDetail(null);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [jobs, searchTerm]);

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  return (
    <>
      <div className="space-y-6">
        {selectedJobDetail ? (
          <DetailJob job={selectedJobDetail} onBack={handleCancel} />
        ) : editingId ? (
          <EditJob
            job={jobs.find((j) => j.id === editingId)}
            onCancel={handleCancel}
            onSuccess={() => {
              handleCancel();
              fetchJobs();
            }}
            categoryOptions={categoryOptions}
            locationOptions={locationOptions}
            setPopup={setPopup}
          />
        ) : showForm ? (
          <AddJob
            onCancel={handleCancel}
            onSuccess={() => {
              handleCancel();
              fetchJobs();
            }}
            categoryOptions={categoryOptions}
            locationOptions={locationOptions}
            setPopup={setPopup}
          />
        ) : (
          <>
            {/* Search Section */}
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                    <HugeiconsIcon icon={Search01FreeIcons} size={20} />
                  </span>
                  <input
                    type="text"
                    placeholder="Cari posisi atau nama perusahaan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-full border border-slate-200 bg-white pl-12 pr-6 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
                >
                  <HugeiconsIcon icon={Add01FreeIcons} size={20} />
                  Tambah Loker Baru
                </button>
              </div>
            </div>

            {/* List Section */}
            <div className="space-y-6 animate-in fade-in duration-500">
              <h2 className="mb-6 text-xl font-semibold text-slate-900">
                Daftar Lowongan Kerja
              </h2>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="h-64 bg-slate-100 animate-pulse rounded-4xl"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job) => {
                    const imgBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(
                      "/api",
                      "",
                    );
                    const posterPath = job.poster_image
                      ? `${imgBaseUrl}${job.poster_image}`
                      : "/icon-web/logo-tracer-study_1.webp";

                    return (
                      <JobCard
                        key={job.id}
                        label={job.title}
                        company={job.company}
                        comp_image={posterPath}
                        periode={`Hingga: ${job.expired_at}`}
                        type={job.location}
                        time={job.category}
                        onEdit={() => handleEdit(job)}
                        onDelete={() => handleDelete(job.id)}
                        onDetail={() => handleShowDetail(job)}
                      />
                    );
                  })}
                </div>
              )}

              {!isLoading && filteredJobs.length === 0 && (
                <div className="py-8 text-center text-slate-500">
                  {searchTerm
                    ? "Tidak ada loker yang cocok dengan pencarian Anda."
                    : "Belum ada loker. Tambahkan loker baru dengan klik tombol di atas."}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="rounded-[32px] bg-white p-8 border-none shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-slate-900">
              Apakah Anda yakin?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-500 text-base">
              Tindakan ini tidak dapat dibatalkan. Menghapus lowongan ini akan
              menghilangkannya secara permanen dari daftar publik dan sistem.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8 flex gap-3">
            <AlertDialogCancel className="flex-1 rounded-full border-2 border-slate-200 px-6 py-4 font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="flex-1 rounded-full bg-red-600 px-6 py-4 font-semibold text-white hover:bg-red-700 shadow-lg shadow-red-200 transition cursor-pointer"
            >
              Hapus Loker
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <KuesionerPopup
        open={popup.open}
        variant={popup.variant}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
}
