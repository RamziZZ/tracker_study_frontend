"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { KuesionerPopup } from "../ui/kuesioner-popup";

const statusOptions = [
  { value: "", label: "Pilih status kerja Anda" },
  { value: "belum_bekerja", label: "Belum Bekerja" },
  { value: "bekerja", label: "Bekerja" },
  { value: "wirausaha", label: "Wirausaha" },
  { value: "studi_lanjut", label: "Studi Lanjut" },
];

const locationOptions = [
  { value: "jawa_timur_nganjuk", label: "Jawa Timur / Nganjuk" },
  { value: "jawa_timur_surabaya", label: "Jawa Timur / Surabaya" },
  { value: "jawa_barat_bandung", label: "Jawa Barat / Bandung" },
];

const studySources = [
  { value: "instansi_pemerintahan", label: "Instansi Pemerintahan" },
  { value: "beasiswa", label: "Beasiswa" },
  { value: "pribadi", label: "Pribadi" },
  { value: "orang_tua", label: "Orang Tua" },
];

const campusOptions = [
  { value: "polije", label: "Politeknik Negeri Jember" },
  { value: "ub", label: "Universitas Brawijaya" },
  { value: "its", label: "Institut Teknologi Sepuluh Nopember" },
];

const programOptions = [
  { value: "teknik_informatika", label: "Teknik Informatika" },
  { value: "sistem_informasi", label: "Sistem Informasi" },
  { value: "manajemen", label: "Manajemen" },
];

// Progress Indicator Component
function ProgressIndicator({ currentStep }) {
  const steps = ["Identitas", "Status Kerja", "Kompetensi & Proses"];
  
  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-1 items-center">
          {/* Circle */}
          <div className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold text-white transition-all ${
            idx < currentStep ? "bg-green-500" : idx === currentStep ? "bg-green-400" : "bg-slate-300"
          }`}>
            {idx < currentStep ? "✓" : idx + 1}
          </div>
          
          {/* Label */}
          <div className="ml-3">
            <p className={`text-xs font-medium transition-all ${
              idx <= currentStep ? "text-slate-900" : "text-slate-500"
            }`}>
              {step}
            </p>
          </div>

          {/* Line */}
          {idx < steps.length - 1 && (
            <div className={`ml-4 h-1 flex-1 rounded-full transition-all ${
              idx < currentStep ? "bg-green-500" : "bg-slate-200"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, name, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, name, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <select
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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

function RatingField({ label, value, onChange, name, description }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
      </div>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => onChange(name, num.toString())}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-medium transition-all ${
              value === num.toString()
                ? "bg-blue-600 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:border-blue-400"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export function KuesionerCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    durasiBekerja: "",
    pendapatanBekerja: "",
    lokasiBekerja: "",
    jenisPerusahaanBekerja: "",
    namaPerusahaanBekerja: "",
    posisiBekerja: "",
    durasiWirausaha: "",
    pendapatanWirausaha: "",
    lokasiWirausaha: "",
    jenisUsaha: "",
    namaUsaha: "",
    posisiWirausaha: "",
    sumberBiaya: "",
    perguruanTinggi: "",
    tanggalMasuk: "",
    programStudi: "",
    etika: "",
    bahasaInggris: "",
    komunikasi: "",
    pengorganisasian: "",
    keanlihanBisnis: "",
    penguasaanTeknologi: "",
    kerjasamaTim: "",
    keputusan: "",
  });
  const [popup, setPopup] = useState({ open: false, variant: "success", message: "" });

  const handleSectionChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const validateCurrentStep = () => {
    if (currentStep === 1 && !status) {
      return { valid: false, message: "Pilih status kerja Anda terlebih dahulu." };
    }
    return { valid: true, message: "" };
  };

  const handleNext = () => {
    const validation = validateCurrentStep();
    if (!validation.valid) {
      setPopup({ open: true, variant: "error", message: validation.message });
      return;
    }
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPopup({ open: true, variant: "success", message: "Kuesioner berhasil disimpan." });
  };

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} />

        {/* Warning Banner */}
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
          <p className="text-sm font-semibold text-rose-800">Catatan:</p>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Pilih status kerja anda untuk melanjutkan pengisian informasi pekerjaan/studi lanjut atau boleh diisi belum bekerja. Jika anda memilih belum bekerja, pertanyaan di bawah status anda tidak wajib diisi.
          </p>
        </div>

        {/* Step 1: Identitas */}
        {currentStep === 0 && (
          <div className="space-y-6 rounded-lg bg-white p-6 border border-slate-200">
            <div>
              <p className="text-lg font-semibold text-slate-900 mb-4">Data Identitas</p>
              <div className="space-y-4">
                <InputField
                  label="Nama Lengkap"
                  name="namaLengkap"
                  placeholder="Masukkan nama lengkap"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email"
                />
                <InputField
                  label="Nomor Telepon"
                  name="telepon"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Status Kerja */}
        {currentStep === 1 && (
          <div className="space-y-6 rounded-lg bg-white p-6 border border-slate-200">
            <div>
              <p className="text-lg font-semibold text-slate-900 mb-4">Status Kerja/Studi</p>
              <SelectField
                label="Status anda saat ini? *"
                name="status"
                value={status}
                onChange={handleStatusChange}
                options={statusOptions}
              />
            </div>

            {status === "bekerja" && (
              <div className="space-y-4 mt-6 pt-6 border-t border-slate-200">
                <p className="font-medium text-slate-900">Informasi Pekerjaan</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Dalam berapa bulan mendapat pekerjaan pertama?"
                    name="durasiBekerja"
                    placeholder="misal: 3"
                    type="number"
                  />
                  <InputField
                    label="Rata-rata pendapatan per bulan"
                    name="pendapatanBekerja"
                    placeholder="satuan rupiah"
                  />
                  <SelectField
                    label="Dimana anda bekerja?"
                    name="lokasiBekerja"
                    options={[{ value: "", label: "Pilih lokasi" }, ...locationOptions]}
                  />
                  <InputField
                    label="Jenis perusahaan/instansi"
                    name="jenisPerusahaanBekerja"
                    placeholder="misal: teknologi"
                  />
                  <InputField
                    label="Posisi di perusahaan"
                    name="posisiBekerja"
                    placeholder="misal: Software Developer"
                  />
                  <InputField
                    label="Nama perusahaan/instansi"
                    name="namaPerusahaanBekerja"
                    placeholder="misal: PT ABC"
                  />
                </div>
              </div>
            )}

            {status === "wirausaha" && (
              <div className="space-y-4 mt-6 pt-6 border-t border-slate-200">
                <p className="font-medium text-slate-900">Informasi Wirausaha</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Berapa bulan setelah lulus mulai wirausaha?"
                    name="durasiWirausaha"
                    placeholder="misal: 3"
                    type="number"
                  />
                  <InputField
                    label="Rata-rata pendapatan bulanan"
                    name="pendapatanWirausaha"
                    placeholder="satuan rupiah"
                  />
                  <SelectField
                    label="Dimana lokasi usaha?"
                    name="lokasiWirausaha"
                    options={[{ value: "", label: "Pilih lokasi" }, ...locationOptions]}
                  />
                  <InputField
                    label="Jenis usaha"
                    name="jenisUsaha"
                    placeholder="misal: e-commerce"
                  />
                  <InputField
                    label="Posisi/jabatan anda"
                    name="posisiWirausaha"
                    placeholder="misal: Founder"
                  />
                  <InputField
                    label="Nama usaha/bisnis"
                    name="namaUsaha"
                    placeholder="misal: Toko Online ABC"
                  />
                </div>
              </div>
            )}

            {status === "studi_lanjut" && (
              <div className="space-y-4 mt-6 pt-6 border-t border-slate-200">
                <p className="font-medium text-slate-900">Informasi Studi Lanjut</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Sumber biaya studi lanjut?"
                    name="sumberBiaya"
                    options={[{ value: "", label: "Pilih sumber biaya" }, ...studySources]}
                  />
                  <SelectField
                    label="Perguruan tinggi tujuan"
                    name="perguruanTinggi"
                    options={[{ value: "", label: "Pilih perguruan tinggi" }, ...campusOptions]}
                  />
                  <InputField
                    label="Tanggal masuk"
                    name="tanggalMasuk"
                    type="date"
                  />
                  <SelectField
                    label="Program studi"
                    name="programStudi"
                    options={[{ value: "", label: "Pilih program studi" }, ...programOptions]}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Kompetensi & Proses */}
        {currentStep === 2 && (
          <div className="space-y-6 rounded-lg bg-white p-6 border border-slate-200">
            <div>
              <p className="text-lg font-semibold text-slate-900 mb-6">Penilaian Kompetensi</p>
              <div className="grid gap-8 sm:grid-cols-2">
                <RatingField
                  label="Etika"
                  value={form.etika}
                  onChange={handleSectionChange}
                  name="etika"
                />
                <RatingField
                  label="Bahasa Inggris"
                  value={form.bahasaInggris}
                  onChange={handleSectionChange}
                  name="bahasaInggris"
                />
                <RatingField
                  label="Komunikasi"
                  value={form.komunikasi}
                  onChange={handleSectionChange}
                  name="komunikasi"
                />
                <RatingField
                  label="Pengorganisasian"
                  value={form.pengorganisasian}
                  onChange={handleSectionChange}
                  name="pengorganisasian"
                />
                <RatingField
                  label="Keanekaragaman Bisnis"
                  value={form.keanlihanBisnis}
                  onChange={handleSectionChange}
                  name="keanlihanBisnis"
                />
                <RatingField
                  label="Penguasaan Teknologi Informasi"
                  value={form.penguasaanTeknologi}
                  onChange={handleSectionChange}
                  name="penguasaanTeknologi"
                />
                <RatingField
                  label="Kerjasama Tim"
                  value={form.kerjasamaTim}
                  onChange={handleSectionChange}
                  name="kerjasamaTim"
                />
                <RatingField
                  label="Pengambilan Keputusan"
                  value={form.keputusan}
                  onChange={handleSectionChange}
                  name="keputusan"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            size="md"
            className="rounded-lg px-6 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Sebelumnya
          </Button>
          
          {currentStep === 2 ? (
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="rounded-lg px-6 py-2.5 bg-blue-900 text-white hover:bg-blue-800"
            >
              Simpan Kuesioner
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              variant="primary"
              size="md"
              className="rounded-lg px-6 py-2.5 bg-blue-900 text-white hover:bg-blue-800"
            >
              Selanjutnya →
            </Button>
          )}
        </div>
      </form>

      <KuesionerPopup open={popup.open} variant={popup.variant} message={popup.message} onClose={closePopup} />
    </>
  );
}
