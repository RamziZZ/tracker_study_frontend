import SidebarPengaturanAdmin from "@/components/shared/sidebar-pengaturan-admin";

export default function PengaturanLayout({ children }) {
  return (
    <div className="flex-1 bg-transparent p-1">
      <h1 className="text-3xl font-semibold text-black mb-3">Pengaturan</h1>
      <div className="flex gap-4">
        <SidebarPengaturanAdmin />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}