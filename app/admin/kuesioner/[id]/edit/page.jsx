"use client";

import { use } from "react";
import QuestionnaireAddPage from "@/components/admin/kuisioner/QuestionnaireAddPage";

// Draft kuisioner dibuka di halaman add/edit (konfigurasi ada di halaman ini, bukan popup)
export default function AdminKuesionerEditRoute({ params }) {
  const { id } = use(params);
  return <QuestionnaireAddPage questionnaireId={id} />;
}
