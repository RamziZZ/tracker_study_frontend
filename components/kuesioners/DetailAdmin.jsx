"use client";

import { useState } from "react";
import { User, Briefcase, ClipboardList } from "lucide-react";

// ── Step Indicator ──────────────────────────────────────────────────────────
function StepIndicator({ currentStep }) {
  const steps = [
    { label: "Identitas",            icon: User },
    { label: "Status Karir",         icon: Briefcase },
    { label: "Kompetensi &\nProses", icon: ClipboardList },
  ];

  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const isActive  = idx === currentStep;
        const isDone    = idx < currentStep;

        return (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center w-24">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 transition-all ${
                isActive || isDone
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-200 text-slate-400"
              }`}>
                <Icon size={24} />
              </div>
              <p className={`text-xs text-center whitespace-pre-line ${
                isActive || isDone ? "text-slate-300" : "text-slate-500"
              }`}>
                {step.label}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div className={`w-32 h-px mb-6 ${
                idx < currentStep ? "bg-blue-400" : "bg-slate-500"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Input Field ─────────────────────────────────────────────────────────────
function InputField({ label, placeholder, value, onChange, name, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <label className="text-sm text-slate-800">{label}</label>
        {required && <span className="text-red-500 text-sm">*</span>}
        <span className="text-slate-400 text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center leading-none cursor-help" title="Wajib diisi">?</span>
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
      />
    </div>
  );
}

// ── Select Field ─────────────────────────────────────────────────────────────
function SelectField({ label, placeholder, value, onChange, name, required, options = [] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <label className="text-sm text-slate-800">{label}</label>
        {required && <span className="text-red-500 text-sm">*</span>}
        <span className="text-slate-400 text-xs border border-slate-300 rounded-full w-4 h-4 flex items-center justify-center leading-none cursor-help" title="Wajib diisi">?</span>
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

// ── Step 1: Identitas ────────────────────────────────────────────────────────
function StepIdentitas({ form, onChange }) {
  const tahunOptions = Array.from({ length: 10 }, (_, i) => {
    const y = 2025 - i;
    return { value: String(y), label: String(y) };
  });

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Namamu"
          name="nama"
          placeholder="misal: Software Developer"
          value={form.nama}
          onChange={onChange}
          required
        />
        <InputField
          label="NIM"
          name="nim"
          placeholder="misal: Software Developer"
          value={form.nim}
          onChange={onChange}
          required
        />
        <SelectField
          label="Tahun Lulus"
          name="tahunLulus"
          placeholder="misal: instansi pemerintahan"
          value={form.tahunLulus}
          onChange={onChange}
          required
          options={tahunOptions}
        />
        <InputField
          label="Alamat Email"
          name="email"
          placeholder="misal: Software Developer"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

// ── Step 2: Status Karir ─────────────────────────────────────────────────────
const statusOptions = [
  { value: "bekerja",       label: "Bekerja" },
  { value: "wirausaha",     label: "Wirausaha" },
  { value: "studi_lanjut",  label: "Studi Lanjut" },
  { value: "belum_bekerja", label: "Belum Bekerja" },
];
const lokasiOptions = [
  { value: "jawa_timur", label: "Jawa Timur" },
  { value: "jawa_barat", label: "Jawa Barat" },
  { value: "jakarta",    label: "Jakarta" },
];

function StepStatusKarir({ form, onChange }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          label="Status Kerja"
          name="statusKerja"
          placeholder="Pilih status kerja"
          value={form.statusKerja}
          onChange={onChange}
          required
          options={statusOptions}
        />
        {(form.statusKerja === "bekerja" || form.statusKerja === "wirausaha") && (
          <>
            <InputField label="Nama Perusahaan / Usaha" name="namaPerusahaan" placeholder="misal: PT ABC" value={form.namaPerusahaan} onChange={onChange} required />
            <InputField label="Posisi / Jabatan"         name="posisi"         placeholder="misal: Software Developer" value={form.posisi} onChange={onChange} required />
            <InputField label="Pendapatan per Bulan"     name="pendapatan"     placeholder="misal: 5000000" value={form.pendapatan} onChange={onChange} required />
            <SelectField label="Lokasi"                  name="lokasi"         placeholder="Pilih lokasi" value={form.lokasi} onChange={onChange} required options={lokasiOptions} />
            <InputField label="Berapa bulan setelah lulus?" name="durasi"      placeholder="misal: 3" value={form.durasi} onChange={onChange} required />
          </>
        )}
        {form.statusKerja === "studi_lanjut" && (
          <>
            <InputField label="Perguruan Tinggi" name="perguruanTinggi" placeholder="misal: Universitas Brawijaya" value={form.perguruanTinggi} onChange={onChange} required />
            <InputField label="Program Studi"    name="programStudi"    placeholder="misal: Teknik Informatika"    value={form.programStudi}    onChange={onChange} required />
          </>
        )}
      </div>
    </div>
  );
}

// ── Step 3: Kompetensi ───────────────────────────────────────────────────────
const kompetensiList = [
  { name: "etika",               label: "Etika" },
  { name: "bahasaInggris",       label: "Bahasa Inggris" },
  { name: "komunikasi",          label: "Komunikasi" },
  { name: "pengorganisasian",    label: "Pengorganisasian" },
  { name: "bisnis",              label: "Keanekaragaman Bisnis" },
  { name: "teknologi",           label: "Penguasaan Teknologi Informasi" },
  { name: "kerjasamaTim",        label: "Kerjasama Tim" },
  { name: "pengambilanKeputusan",label: "Pengambilan Keputusan" },
];

function StepKompetensi({ form, onRate }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {kompetensiList.map((k) => (
        <div key={k.name} className="space-y-2">
          <p className="text-sm font-medium text-slate-800">{k.label}</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => onRate(k.name, String(num))}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  form[k.name] === String(num)
                    ? "bg-blue-700 text-white"
                    : "border border-slate-300 text-slate-600 hover:border-blue-400"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function DetailAdmin({ alumni, onBack }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    nama: alumni?.nama ?? "",
    nim:  alumni?.nim  ?? "",
    tahunLulus: "",
    email: "",
    statusKerja: "",
    namaPerusahaan: "",
    posisi: "",
    pendapatan: "",
    lokasi: "",
    durasi: "",
    perguruanTinggi: "",
    programStudi: "",
    etika: "", bahasaInggris: "", komunikasi: "", pengorganisasian: "",
    bisnis: "", teknologi: "", kerjasamaTim: "", pengambilanKeputusan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRate = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-8 py-5 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 border border-slate-300 rounded-full px-4 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
        >
          ← Kembali
        </button>
        <h1 className="text-2xl font-bold text-slate-900">Detail Kuisioner</h1>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Profile + Tanggal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 border border-slate-200 rounded-xl p-5">
            <div className="w-14 h-14 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center text-white text-xl font-bold shrink-0">
              {alumni?.nama?.[0] ?? "?"}
            </div>
            <div>
              <p className="text-lg font-bold text-blue-800">{alumni?.nama ?? "Nama Alumni"}</p>
              <p className="text-sm text-blue-600">{alumni?.nim ?? "NIM"}</p>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Mengisi Tanggal:</p>
            <p className="text-xl font-bold text-blue-800 mt-1">{alumni?.tanggal ?? "-"}</p>
          </div>
        </div>

        {/* Step Indicator — dark background sesuai desain */}
        <div className="bg-slate-900 rounded-2xl py-8 px-4">
          <StepIndicator currentStep={currentStep} />
        </div>

        {/* Catatan */}
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4">
          <p className="text-sm font-semibold text-red-600">Catatan:</p>
          <p className="text-sm text-red-500 mt-1 leading-relaxed">
            Masukkan biodata dengan benar dan jika sudah terisi lihat kembali apakah sudah benar isinya,
            Semua field wajib diisi terutama bagian status kerja untuk validasi pengisian{" "}
            <span className="font-semibold">Status Kerja</span>
          </p>
        </div>

        {/* Form Steps */}
        <div className="space-y-5">
          {currentStep === 0 && <StepIdentitas   form={form} onChange={handleChange} />}
          {currentStep === 1 && <StepStatusKarir form={form} onChange={handleChange} />}
          {currentStep === 2 && <StepKompetensi  form={form} onRate={handleRate} />}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep === 0}
            className="border border-slate-300 rounded-lg px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Sebelumnya
          </button>
          {currentStep < 2 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => Math.min(2, s + 1))}
              className="bg-blue-900 hover:bg-blue-800 text-white rounded-lg px-8 py-2.5 text-sm font-medium transition-colors"
            >
              Lanjutkan
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-900 hover:bg-blue-800 text-white rounded-lg px-8 py-2.5 text-sm font-medium transition-colors"
            >
              Simpan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}