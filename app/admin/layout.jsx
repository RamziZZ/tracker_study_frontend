import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-figma-gray-50">
      {/* Navbar sudah punya padding 24px sendiri (Figma 1162:26391, tinggi total 144).
          Baris konten diberi padding tepi & bawah 24px; jarak ke header sudah
          disediakan oleh padding bawah header, tapi tambahkan 24px agar sama
          dengan jarak antar blok di Figma (konten y=144 → header bottom=144). */}
      <div className="shrink-0">
        <Navbar />
      </div>
      {/* Sidebar & main: jarak 24px dari navbar (Figma: navbar h144, konten y144 → gap 24)
          dan jarak 24px antar sidebar dan konten (Figma: sidebar right 294, konten x 318) */}
      <div className="flex min-h-0 flex-1 gap-[24px] overflow-hidden px-[24px] pb-[24px]">
        <Sidebar className="hidden lg:flex" />
        <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
