"use client";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { jobService } from "@/services/job_service";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01FreeIcons,
  Search01FreeIcons,
  Upload01FreeIcons,
} from "@hugeicons/core-free-icons";

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
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-[100px]"
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

export default function EditJob({
  job,
  onCancel,
  onSuccess,
  categoryOptions,
  locationOptions,
  setPopup,
}) {
  const [formData, setFormData] = useState({
    title: job.title,
    company: job.company,
    location: job.location,
    category: job.category,
    description: job.description,
    expired_at: job.expired_at,
  });

  const imgBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "");
  const [posterImage, setPosterImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(
    job.poster_image ? `${imgBaseUrl}${job.poster_image}` : null,
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPosterImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key] || "");
      });
      if (posterImage) {
        data.append("poster_image", posterImage);
      }
      // Jika backend Laravel, biasanya memerlukan spoofing method untuk multipart PUT
      // data.append("_method", "PUT");

      await jobService.updateJob(job.id, data);
      setPopup({
        open: true,
        variant: "success",
        message: "Loker berhasil diperbarui",
      });
      onSuccess();
    } catch (error) {
      console.error("Error updating job:", error);
      setPopup({
        open: true,
        variant: "error",
        message: "Gagal memperbarui data loker",
      });
    }
  };

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 animate-in fade-in zoom-in-95 duration-300">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          Edit Lowongan Kerja
        </h2>
        <button
          onClick={onCancel}
          className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          <HugeiconsIcon icon={Cancel01FreeIcons} size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Poster Lowongan Kerja
            </span>
            <div className="flex flex-col items-center justify-center w-full">
              <label className="group flex flex-row items-center w-full min-h-48 border-2 border-dashed border-slate-300 rounded-3xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors overflow-hidden relative p-4 gap-6">
                {previewUrl ? (
                  <>
                    <div className="relative h-40 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        fill
                        className="object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-bold text-blue-600">
                        Pamflet Terpilih
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Klik di area ini untuk mengganti atau mengunggah ulang
                        pamflet lowongan kerja Anda.
                      </p>
                      <span className="text-xs font-medium text-blue-900 bg-blue-50 w-fit py-1 rounded-full mt-2 uppercase tracking-wider">
                        Klik untuk mengubah
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-40 aspect-[3/4] shrink-0 rounded-2xl border-2 border-dashed border-slate-200 bg-white flex items-center justify-center group-hover:border-blue-300 transition-colors">
                      <HugeiconsIcon
                        icon={Upload01FreeIcons}
                        size={40}
                        className="text-slate-300 group-hover:text-blue-400 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-bold text-slate-700">
                        Unggah Pamflet Baru
                      </p>
                      <p className="text-sm text-slate-500">
                        Klik atau seret file ke area ini
                      </p>
                      <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-medium">
                        PNG, JPG atau WEBP (Maks. 2MB)
                      </p>
                    </div>
                  </>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              {posterImage && (
                <button
                  type="button"
                  onClick={() => {
                    setPosterImage(null);
                    setPreviewUrl(
                      job.poster_image
                        ? `${imgBaseUrl}${job.poster_image}`
                        : null,
                    );
                  }}
                  className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium cursor-pointer"
                >
                  Batalkan Perubahan Gambar
                </button>
              )}
            </div>
          </div>
          <InputField
            label="Judul Posisi"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Nama Perusahaan"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
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
            label="Kategori"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            options={categoryOptions}
            required
          />
          <div className="sm:col-span-2">
            <InputField
              label="Deskripsi Pekerjaan"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              isTextArea
            />
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Tanggal Berakhir"
              name="expired_at"
              type="date"
              value={formData.expired_at}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            className="flex-1 h-full rounded-full bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
          >
            Perbarui Loker
          </Button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-full border-2 border-slate-200 px-6 py-4 text-slate-600 font-semibold hover:bg-slate-50 transition cursor-pointer"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
