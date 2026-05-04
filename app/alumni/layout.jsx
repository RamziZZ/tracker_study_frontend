import NavbarAlumni from "@/components/shared/navbar-alumni";
import SidebarAlumni from "@/components/shared/sidebar-alumni";

export default function AlumniLayout({ children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <NavbarAlumni />
      <div className="flex px-4 pb-4 gap-4">
        <SidebarAlumni />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
