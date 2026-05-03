"use client";

import { useRouter, useParams } from "next/navigation";
import DetailAdmin from "@/components/kuesioners/DetailAdmin";
import { DUMMY_DATA } from "@/components/kuesioners/TableAdmin";

export default function DetailPage() {
  const router = useRouter();
  const params = useParams();
  const alumni = DUMMY_DATA.find((d) => d.id === Number(params.id));

  if (!alumni) {
    return (
      <div className="flex items-center justify-center min-h-screen text-slate-500">
        Data tidak ditemukan.
      </div>
    );
  }

  return <DetailAdmin alumni={alumni} onBack={() => router.back()} />;
}