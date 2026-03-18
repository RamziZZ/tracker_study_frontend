import ComponentGallery from "../../components/ui/ComponentGallery";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Test: Component Gallery</h1>
        <p className="mt-2 text-sm text-slate-300">
          Halaman ini digunakan untuk mencoba komponen UI seperti tombol, badge, dan input.
        </p>
        <div className="mt-8">
          <ComponentGallery />
        </div>
      </div>
    </main>
  );
}
