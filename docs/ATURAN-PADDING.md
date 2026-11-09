# Aturan Padding & Spacing Layout Admin

Dokumen ini adalah acuan tetap untuk layout admin Tracker Study (Next.js + Tailwind v4).
Nilai di sini **menggantikan** padding desain Figma yang lebih besar, dengan tujuan agar UI
tetap lega di laptop 14" (1536×768 / 1366×768) tanpa terasa meluap di PC kantor.

Sumber desain: Figma `Tracker Study Design Website`, file key `tn6X4cvpePp3C4UjNtKrtM`,
frame manajemen kuesioner `1162:26387`.

---

## 1. Angka yang Dipakai

| Konteks | Nilai | Utility |
|---|---|---|
| Tepi shell layout (navbar, sidebar, main) | 16px | `px-[16px] pt-[16px] pb-[16px]` |
| Navbar — padding dalam | 20px kiri-kanan, 12px atas-bawah | `px-[20px] py-[12px]` |
| Navbar — radius | 20px | `[border-radius:20px]` |
| Sidebar — padding dalam | 16px semua sisi | `p-[16px]` |
| Sidebar — lebar | 232px | `w-[232px]` |
| Sidebar — radius | 16px | `[border-radius:16px]` |
| Item menu sidebar | 8px kiri-kanan & atas-bawah, tinggi 40px, ikon 24px, teks 14px | `px-[8px] py-[8px] text-sm` |
| Gap antar item sidebar | 6px | `gap-[6px]` |
| Section header halaman | 20px semua sisi | `p-[20px]` |
| Gap di dalam section header | 16px | `gap-[16px]` |
| Card kuisioner — padding dalam | 20px | `p-[20px]` |
| Card kuisioner — footer status | 20px kiri-kanan, 12px atas-bawah | `px-[20px] py-[12px]` |
| Gap antar card | 16px | `gap-[16px]` |
| Gap antar blok di main | 16px | `gap-[16px]` |
| Tombol header | 20px kiri-kanan, 10px atas-bawah, tinggi 36px | `px-[20px] py-[10px]` |
| Field search / pill dropdown | 20px kiri-kanan, 15px atas-bawah, tinggi 46px | `px-[20px] py-[15px]` |
| Label pill di card | 10px semua sisi | `p-[10px]` |

## 2. Perbandingan dengan Figma

| Elemen | Figma | Dipakai | Alasan |
|---|---|---|---|
| Padding tepi shell | 24px | 16px | hemat 16px vertikal & horizontal |
| Navbar tinggi | 98px | 70px | 144 frame dengan padding ganda 24 |
| Navbar radius | 32px | 20px | proporsional dengan tinggi 70 |
| Logo | 192×24 | 160×20 | menyesuaikan tinggi navbar |
| Avatar | 48px | 36px | menyesuaikan tinggi navbar |
| Padding sidebar | 24px | 16px | |
| Lebar sidebar | 270px | 232px | |
| Item sidebar | 52px, ikon 32, teks 18 | 40px, ikon 24, teks 14 | |
| Gap item sidebar | 20px | 6px | |
| Padding section | 24px | 20px | |
| Gap section | 32px | 16px | |
| Padding card | 24px | 20px | |
| Gap card | 24px | 16px | |
| Judul halaman | 36px | 30px (`text-3xl`) | |
| Label pill | 15px+10px | 10px | |

## 3. Struktur Layout yang Benar

```
div  h-screen flex flex-col                    (shell, bg figma-gray-50)
├── div  px-16 pt-16 shrink-0                  → Navbar (tinggi ±70)
└── div  flex-1 min-h-0 gap-16 px-16 pb-16     (baris kerja)
    ├── aside  w-232 p-16                      (sidebar)
    └── main   min-w-0 flex-1 overflow-y-auto  (konten)
```

Aturan wajib:
1. Navbar dan baris sidebar+main ada di kolom flex yang sama → sidebar **sejajar atas** dengan konten.
2. Baris kerja memakai `min-h-0 flex-1`; tanpa `min-h-0` tinggi sidebar/menu bisa melewati viewport dan menu paling bawah terpotong.
3. Sidebar pakai `max-h-full`, **jangan** `max-h-screen` — `max-h-screen` di dalam shell `h-screen` membuatnya meluap.
4. Scroll halaman daftar ditaruh di wrapper list card (`min-h-0 flex-1 overflow-y-auto`), bukan di `main`, agar header + filter tetap diam.
5. `main` diberi `min-w-0` supaya grid kartu tidak overflow horizontal.

## 4. Catatan Teknis Tailwind v4 di Proyek Ini

1. `--spacing-*` di `@theme` **tidak** menghasilkan utility. `p-card`, `gap-page`, `px-layout`
   tidak muncul di CSS output. Sudah diuji: 0 hit. Pakai arbitrary value `p-[20px]`.
2. `--radius-*` di `@theme` juga tidak ter-generate. `rounded-figma-card` tidak ada. Pakai
   `[border-radius:24px]`.
3. `--color-figma-*` **berhasil** (sudah terverifikasi ~76 hit di CSS chunk). Warna tetap lewat token:
   `bg-figma-blue-100`, `text-figma-blue-800`, dst.
4. Setelah mengubah `@theme`, kadang perlu `touch app/globals.css` agar hot reload Tailwind memicu
   regenerasi CSS.
5. Proyek memakai alias `@/*` → `./*` (root, tanpa folder `src/`) dan semua file FE ber-ekstensi
   `.jsx` (hook/util `.js`).

## 5. Titik Toleransi per Ukuran Layar

Angka di atas dikalibrasi untuk tinggi layar 768px. Kalau target utama pindah ke monitor besar:

| Layar | Padding tepi | Padding section | Padding card | Gap card |
|---|---|---|---|---|
| Laptop 14" (768px tinggi) | 16 | 20 | 20 | 16 |
| Laptop 15-16" (900px tinggi) | 20 | 24 | 24 | 20 |
| Monitor PC (1080px tinggi) | 24 | 24 | 24 | 24 |

Kalau tampilan di laptop masih terasa sempit, ubah dua ini lebih dulu: gap kartu `16 → 20`,
lalu padding kartu `20 → 24`. Keduanya paling berpengaruh tanpa mengubah struktur.

## 6. Pintasan Kustomisasi (opsional)

Kalau ingin satu titik ubah untuk padding, buat utility sendiri lewat `@utility`
(bukan `--spacing-*`) di `app/globals.css`:

```css
@utility p-card {
  padding: 20px;
}

@utility px-page {
  padding-inline: 16px;
}
```

Lalu pakai `p-card` / `px-page` di komponen. Perubahan nilai cukup di satu tempat.
