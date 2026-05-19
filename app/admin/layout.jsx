import Navbar from "@/components/shared/navbar-admin";
import Sidebar from "@/components/shared/sidebar-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col bg-blue-50 max-h-screen overflow-x-hidden">
      <div className="px-5 pt-5">
        <Navbar />
      </div>
      <div className="flex h-full overflow-x-hidden px-4 py-4 gap-4">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}