import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col bg-slate-50 h-screen overflow-hidden">
      <div className="px-5 pt-5 shrink-0">
        <Navbar />
      </div>
      <div className="flex flex-1 px-5 py-5 gap-5 overflow-hidden">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
