import { LokerAlumniCard } from "../../../components/forms/form_loker_alumni";

export default function AlumniLokerPage() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Info Loker</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Informasi Lowongan Kerja</h1>
        <p className="mt-2 text-sm text-slate-600">
          Daftar lowongan kerja terbaru dari perusahaan-perusahaan terkemuka.
        </p>
      </div>
      <LokerAlumniCard />
    </main>
  );
}
