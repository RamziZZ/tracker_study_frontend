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

function InputField({ label, value, onChange, placeholder, name, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
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

function SelectField({ label, value, onChange, name, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
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

function SectionBox({ title, children }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/40">
      <div className="mb-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
        {title}
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export function KuesionerCard() {
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
  });
  const [popup, setPopup] = useState({ open: false, variant: "success", message: "" });

  const handleSectionChange = (field) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const validateForm = () => {
    if (!status) {
      return { valid: false, variant: "error", message: "Pilih status kerja Anda terlebih dahulu." };
    }

    if (status === "belum_bekerja") {
      return { valid: true, variant: "success", message: "Kuesioner berhasil disimpan." };
    }

    const requiredFields = {
      bekerja: [
        "durasiBekerja",
        "pendapatanBekerja",
        "lokasiBekerja",
        "jenisPerusahaanBekerja",
        "posisiBekerja",
        "namaPerusahaanBekerja",
      ],
      wirausaha: [
        "durasiWirausaha",
        "pendapatanWirausaha",
        "lokasiWirausaha",
        "jenisUsaha",
        "posisiWirausaha",
        "namaUsaha",
      ],
      studi_lanjut: ["sumberBiaya", "perguruanTinggi", "tanggalMasuk", "programStudi"],
    };

    const section = requiredFields[status] || [];
    const missing = section.filter((field) => !form[field]);

    if (missing.length > 0) {
      return {
        valid: false,
        variant: "error",
        message: "Lengkapi semua pertanyaan di bagian ini sebelum melanjutkan.",
      };
    }

    return { valid: true, variant: "success", message: "Kuesioner berhasil disimpan." };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = validateForm();
    setPopup({ open: true, variant: result.variant, message: result.message });
  };

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
        <div className="rounded-[28px] border border-rose-200 bg-rose-50 p-6 text-slate-700 shadow-sm shadow-rose-100">
          <p className="text-sm font-semibold text-rose-800">Catatan:</p>
          <p className="mt-2 text-sm leading-6">
            Pilih status kerja anda untuk melanjutkan pengisian informasi pekerjaan/studi lanjut atau boleh diisi belum bekerja. Jika anda memilih belum bekerja, pertanyaan di bawah status anda tidak wajib diisi.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <SelectField
              label="Status anda saat ini? *"
              name="status"
              value={status}
              onChange={handleStatusChange}
              options={statusOptions}
            />
          </div>
        </div>

        {status === "bekerja" && (
          <SectionBox title="Isi Bagian ini saja jika anda Bekerja">
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField
                label="Dalam berapa bulan anda mendapatkan pekerjaan pertama?"
                name="durasiBekerja"
                value={form.durasiBekerja}
                onChange={handleSectionChange("durasiBekerja")}
                placeholder="misal: 3"
                type="number"
              />
              <InputField
                label="Berapa rata-rata pendapatanmu per bulan?"
                name="pendapatanBekerja"
                value={form.pendapatanBekerja}
                onChange={handleSectionChange("pendapatanBekerja")}
                placeholder="satuan dalam rupiah"
              />
              <SelectField
                label="Dimana anda bekerja? *"
                name="lokasiBekerja"
                value={form.lokasiBekerja}
                onChange={handleSectionChange("lokasiBekerja")}
                options={[{ value: "", label: "Pilih lokasi" }, ...locationOptions]}
              />
              <InputField
                label="Apa jenis perusahaan atau instansi tempat anda bekerja? *"
                name="jenisPerusahaanBekerja"
                value={form.jenisPerusahaanBekerja}
                onChange={handleSectionChange("jenisPerusahaanBekerja")}
                placeholder="misal: instansi pemerintahan"
              />
              <InputField
                label="Posisi anda di perusahaan atau instansi? *"
                name="posisiBekerja"
                value={form.posisiBekerja}
                onChange={handleSectionChange("posisiBekerja")}
                placeholder="misal: Software Developer"
              />
              <InputField
                label="Apa nama perusahaan atau instansi tempat anda bekerja? *"
                name="namaPerusahaanBekerja"
                value={form.namaPerusahaanBekerja}
                onChange={handleSectionChange("namaPerusahaanBekerja")}
                placeholder="misal: Kominfo"
              />
            </div>
          </SectionBox>
        )}

        {status === "wirausaha" && (
          <SectionBox title="Isi Bagian ini saja jika anda Wirausaha">
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField
                label="Dalam berapa bulan setelah lulus anda memulai wirausaha?"
                name="durasiWirausaha"
                value={form.durasiWirausaha}
                onChange={handleSectionChange("durasiWirausaha")}
                placeholder="misal: 3"
                type="number"
              />
              <InputField
                label="Berapa rata-rata pendapatan Anda per bulan?"
                name="pendapatanWirausaha"
                value={form.pendapatanWirausaha}
                onChange={handleSectionChange("pendapatanWirausaha")}
                placeholder="satuan dalam rupiah"
              />
              <SelectField
                label="Dimana lokasi anda bekerja? *"
                name="lokasiWirausaha"
                value={form.lokasiWirausaha}
                onChange={handleSectionChange("lokasiWirausaha")}
                options={[{ value: "", label: "Pilih lokasi" }, ...locationOptions]}
              />
              <InputField
                label="Apa jenis perusahaan atau instansi tempat anda bekerja? *"
                name="jenisUsaha"
                value={form.jenisUsaha}
                onChange={handleSectionChange("jenisUsaha")}
                placeholder="misal: instansi pemerintahan"
              />
              <InputField
                label="Bila berwirausaha, apa posisi/jabatan anda saat ini? *"
                name="posisiWirausaha"
                value={form.posisiWirausaha}
                onChange={handleSectionChange("posisiWirausaha")}
                placeholder="misal: Founder / Pemilik"
              />
              <InputField
                label="Apa nama perusahaan atau instansi tempat anda bekerja? *"
                name="namaUsaha"
                value={form.namaUsaha}
                onChange={handleSectionChange("namaUsaha")}
                placeholder="misal: Kominfo"
              />
            </div>
          </SectionBox>
        )}

        {status === "studi_lanjut" && (
          <SectionBox title="Isi Bagian ini saja jika anda studi lanjut">
            <div className="grid gap-6 sm:grid-cols-2">
              <SelectField
                label="Sumber biaya studi lanjut? *"
                name="sumberBiaya"
                value={form.sumberBiaya}
                onChange={handleSectionChange("sumberBiaya")}
                options={[{ value: "", label: "Pilih sumber biaya" }, ...studySources]}
              />
              <SelectField
                label="Perguruan Tinggi studi lanjut? *"
                name="perguruanTinggi"
                value={form.perguruanTinggi}
                onChange={handleSectionChange("perguruanTinggi")}
                options={[{ value: "", label: "Pilih perguruan tinggi" }, ...campusOptions]}
              />
              <div className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Tanggal Masuk *</span>
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  type="date"
                  name="tanggalMasuk"
                  value={form.tanggalMasuk}
                  onChange={handleSectionChange("tanggalMasuk")}
                />
              </div>
              <SelectField
                label="Program Studi? *"
                name="programStudi"
                value={form.programStudi}
                onChange={handleSectionChange("programStudi")}
                options={[{ value: "", label: "Pilih program studi" }, ...programOptions]}
              />
            </div>
          </SectionBox>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button type="button" variant="outline" size="md" className="rounded-full px-8">
            Sebelumnya
          </Button>
          <Button type="submit" variant="primary" size="md" className="rounded-full px-8">
            Selanjutnya
          </Button>
        </div>
      </form>

      <KuesionerPopup open={popup.open} variant={popup.variant} message={popup.message} onClose={closePopup} />
    </>
  );
}
