import { NextResponse } from "next/server";

export function middleware(request) {
  // --- BYPASS UNTUK DEVELOPMENT ---
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Ambil token dari cookies (Anda perlu mengubah proses login untuk set cookie)
  const token = request.cookies.get("token")?.value;
  const userRole = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // Jika user sudah login (punya token & role) dan mencoba akses halaman login
  if (pathname === "/login" && token && userRole) {
    if (userRole === "admin")
      return NextResponse.redirect(new URL("/admin", request.url));
    if (userRole === "dosen")
      return NextResponse.redirect(new URL("/dosen", request.url));
    if (userRole === "alumni")
      return NextResponse.redirect(new URL("/alumni", request.url));
  }

  // Proteksi route Admin
  if (pathname.startsWith("/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Proteksi route Dosen
  if (pathname.startsWith("/dosen") && userRole !== "dosen") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Proteksi route Alumni
  if (pathname.startsWith("/alumni") && userRole !== "alumni") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*", "/dosen/:path*", "/alumni/:path*", "/auth/login"],
};
