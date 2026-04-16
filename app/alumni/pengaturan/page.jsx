export default function AlumniPengaturanPage() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pengaturan</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Pengaturan Akun</h1>
        <p className="mt-2 text-sm text-slate-600">
          Kelola preferensi dan informasi akun Anda.
        </p>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
        <div className="space-y-6">
          {/* Profile Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Profil Pribadi</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama lengkap" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="Masukkan email" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Nomor Telepon</label>
                <input type="tel" placeholder="Masukkan nomor telepon" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
          </div>

          <hr className="my-6 border-slate-200" />

          {/* Preferences Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Preferensi</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span className="text-sm text-slate-700">Terima notifikasi lowongan kerja baru</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                <span className="text-sm text-slate-700">Terima notifikasi dari admin</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded border-slate-300" />
                <span className="text-sm text-slate-700">Bagikan profil ke publik</span>
              </label>
            </div>
          </div>

          <hr className="my-6 border-slate-200" />

          {/* Danger Zone */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Keamanan</h3>
            <div className="space-y-3">
              <button className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                Ubah Password
              </button>
              <button className="w-full rounded-lg border border-red-300 px-4 py-2.5 text-left text-sm font-medium text-red-700 hover:bg-red-50 transition">
                Hapus Akun
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition">
              Simpan Perubahan
            </button>
            <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              Batal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
