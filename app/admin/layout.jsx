import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-blue-50">
      <Navbar />
      <Sidebar />
      <main className="pt-[88px] pl-[232px] pr-6 pb-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}