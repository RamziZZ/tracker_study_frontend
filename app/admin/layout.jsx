import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="p-4">
        <Navbar />
      </div>
      <div className="flex px-1 pb-4 gap-1">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}