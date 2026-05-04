import { LokerAdminCard } from "@/components/forms/form_loker_admin";

export default function LokerPage() {
  return (
    <div className="px-5 pt-2 pb-11">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Informasi Lowongan Kerja</h1>
        <p className="mt-2 text-sm text-gray-600">
          Kelola semua lowongan kerja yang telah dibuat
        </p>
      </div>
      <LokerAdminCard />
    </div>
  );
}
