"use client";

import { use } from "react";
import Link from "next/link";
import { QuestionnaireDetailPage } from "@/components/admin/kuisioner/QuestionnaireDetailPage";
import { QUESTIONNAIRE_DETAIL_DATA } from "@/utils/questionnaireDetailData";

export default function AdminKuesionerDetailRoute({ params }) {
  const { id } = use(params);
  const data = QUESTIONNAIRE_DETAIL_DATA[id];

  if (!data) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-[12px] [border-radius:12px] bg-figma-white p-[40px]">
        <p className="text-lg leading-7 font-semibold text-figma-gray-900">
          Detail kuisioner belum tersedia
        </p>
        <p className="max-w-[420px] text-center text-sm leading-5 text-figma-gray-500">
          Halaman detail hanya tersedia untuk kuisioner berstatus Sedang Berjalan dan Sudah Selesai.
        </p>
        <Link
          href="/admin/kuesioner"
          className="[border-radius:10px] border border-figma-blue-800 px-[20px] py-[10px] text-xs leading-4 text-figma-blue-800"
        >
          Kembali ke Daftar Kuisioner
        </Link>
      </div>
    );
  }

  return <QuestionnaireDetailPage data={data} />;
}
