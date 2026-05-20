import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col bg-blue-50 h-screen overflow-hidden">
      <div className="px-5 pt-5 shrink-0">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden px-4 py-4 gap-4">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
