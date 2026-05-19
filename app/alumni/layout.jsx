import NavbarAlumni from "@/components/shared/navbar-alumni";
import SidebarAlumni from "@/components/shared/sidebar-alumni";

export default function AlumniLayout({ children }) {
  return (
    <div className="flex flex-col bg-slate-50 max-h-screen overflow-x-hidden">
      <NavbarAlumni />
      <div className="flex h-full px-5 py-5 gap-5 overflow-x-hidden">
        <SidebarAlumni className="h-full" />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
