import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-figma-gray-50">
      {/* Navbar: hanya jarak 16px ke tepi, bukan 24px */}
      <div className="shrink-0 px-[16px] pt-[16px]">
        <Navbar />
      </div>
      {/* Sidebar & main mulai tepat di bawah navbar, tanpa jarak atas tambahan */}
      <div className="flex min-h-0 flex-1 gap-[16px] overflow-hidden px-[16px] pb-[16px]">
        <Sidebar className="hidden lg:flex" />
        <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
