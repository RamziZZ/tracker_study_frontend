"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/alumni") || pathname.startsWith("/admin")) {
    return null;
  }

  return <Navbar />;
}
