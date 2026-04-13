"use client";

import { useState } from "react";
import HeroTracking from "@/components/landing/Hero_Tracking";
import SearchResultList from "@/components/landing/SearchResultList";
import Footer from "@/components/landing/Footer";

export default function Page() {
  const [keyword, setKeyword] = useState("");

  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      
      {/* HERO */}
      <HeroTracking onSearch={setKeyword} />

      {/* RESULT */}
      <SearchResultList keyword={keyword} />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}