import { KuesionerCard } from "../../../components/forms/form_Kuesioner";

export default function AlumniKuesionerPage() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Kuesioner Alumni</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Form Kuesioner Alumni</h1>
        <p className="mt-2 text-sm text-slate-600">
          Silakan isi kuesioner ini sesuai status kerja atau studi lanjut Anda.
        </p>
      </div>
      <KuesionerCard />
    </main>
  );
}
