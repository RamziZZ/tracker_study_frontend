import NavbarAlumni from "@/components/shared/navbar-alumni";
import SidebarAlumni from "@/components/shared/sidebar-alumni";

export default function AlumniLayout({ children }) {
  return (
    <div className="flex flex-col bg-slate-50 h-screen overflow-hidden">
      <NavbarAlumni />
      <div className="flex flex-1 px-5 py-5 gap-5 overflow-hidden">
        <SidebarAlumni className="hidden lg:flex" />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
