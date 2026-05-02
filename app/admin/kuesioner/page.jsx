"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderAdmin from "@/components/kuesioners/HeaderAdmin";
import FilterAdmin from "@/components/kuesioners/FilterAdmin";
import TableAdmin from "@/components/kuesioners/TableAdmin";

export default function KuesionersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("terbaru");
  const [filterData, setFilterData] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 px-12 py-6 font-sans">
      <HeaderAdmin />
      <FilterAdmin
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterData={filterData}
        setFilterData={setFilterData}
      />
      <TableAdmin
        search={search}
        sortBy={sortBy}
        filterData={filterData}
        onView={(item) => router.push(`/admin/kuesioner/${item.id}`)}
      />
    </div>
  );
}