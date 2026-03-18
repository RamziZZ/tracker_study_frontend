import ComponentGallery from "../components/ui/ComponentGallery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Sistem Tracer Study Alumni</h1>
          <p className="text-sm text-slate-300">
            Selamat datang di sistem tracer study kampus. Di halaman ini kamu bisa mencoba komponen UI dasar.
          </p>
        </header>

        <div className="mt-8">
          <ComponentGallery />
        </div>
      </div>
    </main>
  );
}
