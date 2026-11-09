// Data dummy halaman detail kuisioner (status Sedang Berjalan & Sudah Selesai)
// Struktur mengikuti frame Figma: detail_kuisioner (1105:23054) & detail_kuisioner_selesai (1144:24145)
export const QUESTIONNAIRE_DETAIL_DATA = {
  3: {
    id: 3,
    title: "Survei Karier Alumni 2022",
    status: "Sedang Berjalan",
    statusLabel: "Sedang Berjalan (Aktif)",
    banner:
      "Kuisioner sedang berjalan, Untuk mode edit struktur pertanyaan dinonaktifkan secara otomatis untuk menjaga integritas data.",
    headerActions: ["Salin Tautan", "Kirim Pengingat Kuisioner", "Tutup Kuisioner"],
    totalResponden: { filled: 120, target: 150 },
    averageTime: "40 Menit",
    remainingTime: { value: "14 Hari Lagi", caption: "Batas 12 Nov 2026" },
    jobStatus: [
      { label: "Bekerja", total: 81 },
      { label: "Belum Bekerja", total: 26 },
      { label: "Wiraswasta", total: 72 },
      { label: "Lanjut Pendidikan", total: 27 },
      { label: "Mencari Kerja", total: 5 },
    ],
    jobLocation: [
      { label: "Lokal", total: 60 },
      { label: "Nasional", total: 12 },
      { label: "Internasional", total: 8 },
    ],
    alumni: [
      {
        id: 1,
        nim: "E3122042",
        name: "Kevin Ardiansyah",
        dateLabel: "10-Mar-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 10 Mar 2026 14.20",
        answers: [
          {
            id: "a1",
            question: "Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?",
            value: "3 Bulan",
          },
          {
            id: "a2",
            question: "Berapa gaji bulanan Anda saat ini?",
            value: "Rp. 7.000.000",
          },
          {
            id: "a3",
            question: "Bagaimana Anda menemukan pekerjaan pertama setelah lulus?",
            value: "Pameran kerja / job fair",
          },
          {
            id: "a4",
            question: "Seberapa baik kompetensi berikut Anda kuasai saat lulus?",
            value: "Etika Profesi: 4 (Tinggi), Keahlian Berbasis Ilmu: 3 (Cukup)",
          },
        ],
      },
      {
        id: 2,
        nim: "E3122001",
        name: "Ahmad Nur Fauzi",
        dateLabel: "08-Mar-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 08 Mar 2026 09.05",
        answers: [
          {
            id: "b1",
            question: "Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?",
            value: "1 Bulan",
          },
          {
            id: "b2",
            question: "Berapa gaji bulanan Anda saat ini?",
            value: "Rp. 5.500.000",
          },
          {
            id: "b3",
            question: "Bagaimana Anda menemukan pekerjaan pertama setelah lulus?",
            value: "Relasi / jaringan pribadi",
          },
        ],
      },
      {
        id: 3,
        nim: "E3122245",
        name: "Siti Aminah Safitri",
        dateLabel: "25-Feb-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 25 Feb 2026 20.11",
        answers: [
          {
            id: "c1",
            question: "Berapa lama waktu Anda mencari pekerjaan pertama setelah lulus?",
            value: "6 Bulan",
          },
          {
            id: "c2",
            question: "Berapa gaji bulanan Anda saat ini?",
            value: "Rp. 6.200.000",
          },
          {
            id: "c3",
            question: "Bagaimana Anda menemukan pekerjaan pertama setelah lulus?",
            value: "Portal lowongan kerja",
          },
        ],
      },
      {
        id: 4,
        nim: "E3122089",
        name: "Laila Maharani",
        dateLabel: "28-Feb-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 28 Feb 2026 11.45",
        answers: [
          {
            id: "d1",
            question: "Bagaimana penilaian Anda terhadap layanan akademik?",
            value: "4 dari 5 - Baik",
          },
          {
            id: "d2",
            question: "Apakah kurikulum sesuai kebutuhan dunia kerja?",
            value: "Ya, sangat sesuai",
          },
        ],
      },
      {
        id: 5,
        nim: "E3122156",
        name: "Dwi Cahyo Nugroho",
        dateLabel: "05-Mar-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 05 Mar 2026 16.30",
        answers: [
          {
            id: "e1",
            question: "Bagaimana penilaian Anda terhadap layanan akademik?",
            value: "5 dari 5 - Sangat Baik",
          },
          {
            id: "e2",
            question: "Apakah kurikulum sesuai kebutuhan dunia kerja?",
            value: "Cukup sesuai",
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "Survei Karier Alumni 2022",
    status: "Sudah Selesai",
    statusLabel: "Sudah Selesai",
    banner:
      "Pengisian telah resmi ditutup pada 12 Nov 2026. Data di bawah ini bersifat final dan terlindungi dari perubahan struktur.",
    headerActions: [],
    totalResponden: { filled: 150, target: 150 },
    averageTime: "38 Menit",
    remainingTime: { value: "Sudah ditutup", caption: "Ditutup 12 Nov 2026" },
    jobStatus: [
      { label: "Bekerja", total: 90 },
      { label: "Belum Bekerja", total: 20 },
      { label: "Wiraswasta", total: 76 },
      { label: "Lanjut Pendidikan", total: 30 },
      { label: "Mencari Kerja", total: 8 },
    ],
    jobLocation: [
      { label: "Lokal", total: 72 },
      { label: "Nasional", total: 15 },
      { label: "Internasional", total: 10 },
    ],
    alumni: [
      {
        id: 1,
        nim: "E3122089",
        name: "Laila Maharani",
        dateLabel: "28-Feb-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 28 Feb 2026 11.45",
        answers: [
          {
            id: "d1",
            question: "Bagaimana penilaian Anda terhadap layanan akademik?",
            value: "4 dari 5 - Baik",
          },
          {
            id: "d2",
            question: "Apakah kurikulum sesuai kebutuhan dunia kerja?",
            value: "Ya, sangat sesuai",
          },
        ],
      },
      {
        id: 2,
        nim: "E3122156",
        name: "Dwi Cahyo Nugroho",
        dateLabel: "05-Mar-26",
        program: "D4 Teknik Informatika Kab. Nganjuk",
        finishedAt: "Selesai mengisi di tanggal 05 Mar 2026 16.30",
        answers: [
          {
            id: "e1",
            question: "Bagaimana penilaian Anda terhadap layanan akademik?",
            value: "5 dari 5 - Sangat Baik",
          },
          {
            id: "e2",
            question: "Apakah kurikulum sesuai kebutuhan dunia kerja?",
            value: "Cukup sesuai",
          },
        ],
      },
    ],
  },
};
