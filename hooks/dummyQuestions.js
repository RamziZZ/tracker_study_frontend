"use client";

// Dummy pertanyaan untuk keperluan preview UI — satu contoh untuk tiap tipe
// question_add_card di Figma, supaya semua varian kartu bisa dilihat sekaligus.
//
// Isi teks/opsi disalin dari contoh pada desain:
//   1086:22856 Input Dasar, 1086:23197 Pilihan Ganda,
//   1086:22949 Matriks Evaluasi, 1086:23485 Grup Pertanyaan.
//
// Nonaktifkan dummy dengan mengubah SHOW_DUMMY_QUESTIONS menjadi false
// di hooks/useQuestionnaireBuilder.js.

export const DUMMY_QUESTIONS = [
  {
    id: "dummy-angka",
    type: "angka",
    variant: "angka",
    text: "Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?",
    format: "angka",
    minValue: "0",
    maxValue: "",
    rows: [],
    options: [],
    otherOption: false,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    helpText: "Isi 0 jika langsung bekerja setelah lulus.",
    groupName: "",
    groupItems: [],
  },
  {
    id: "dummy-pilihan-ganda",
    type: "pilihan-ganda",
    variant: "pilihan-ganda",
    text: "Bagaimana Anda menemukan pekerjaan pertama setelah lulus?",
    format: null,
    minValue: "0",
    maxValue: "",
    rows: [],
    options: [
      "Pameran kerja / job fair",
      "Mencari di internet",
      "Melalui relasi",
      "Melalui penempatan magang",
      "Diundang perusahaan",
      "Lainnya",
    ],
    otherOption: true,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    helpText: "* Pilih semua yang sesuai",
    groupName: "",
    groupItems: [],
  },
  {
    id: "dummy-matriks",
    type: "matriks",
    variant: "matriks",
    text: "Seberapa baik kompetensi berikut Anda kuasai saat lulus?",
    format: null,
    minValue: "0",
    maxValue: "",
    rows: ["Etika Profesi", "Keahlian Berbasis Ilmu"],
    options: [],
    otherOption: false,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    helpText: "",
    groupName: "",
    groupItems: [],
  },
  {
    id: "dummy-grup",
    type: "grup",
    variant: "grup",
    text: "",
    format: null,
    minValue: "0",
    maxValue: "",
    rows: [],
    options: [],
    otherOption: false,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    helpText: "",
    groupName: "Kemampuan Berpikir Kritis & Pemecahan Masalah",
    groupItems: [
      { id: "dummy-grup-a", label: "Menganalisis masalah", kind: "text" },
      { id: "dummy-grup-b", label: "Menentukan solusi", kind: "select" },
      { id: "dummy-grup-c", label: "Mengambil keputusan", kind: "radio" },
    ],
  },
];

export default DUMMY_QUESTIONS;
