import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="p-4">
        <Navbar />
      </div>
      <div className="flex px-4 pb-4 gap-4">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}