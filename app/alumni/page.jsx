const jobCards = [
  { id: 1, title: "Front End Developer", company: "X Platform", period: "7 Maret - 7 Mei 2026" },
  { id: 2, title: "Front End Developer", company: "Figma", period: "7 Maret - 7 Mei 2026" },
  { id: 3, title: "Front End Developer", company: "Adobe", period: "7 Maret - 7 Mei 2026" },
  { id: 4, title: "Front End Developer", company: "Canva", period: "7 Maret - 7 Mei 2026" },
  { id: 5, title: "Front End Developer", company: "Ferrari", period: "7 Maret - 7 Mei 2026" },
  { id: 6, title: "Front End Developer", company: "Nike", period: "7 Maret - 7 Mei 2026" },
];

function DonutChart({ value = 70 }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg width="128" height="128" viewBox="0 0 128 128">
        <circle
          cx="64"
          cy="64"
          r={radius}
          className="stroke-slate-100"
          strokeWidth="16"
          fill="none"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          className="stroke-orange-400"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 64 64)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold text-slate-900">7</p>
        <p className="text-sm text-slate-500">/10</p>
      </div>
    </div>
  );
}

export default function AlumniDashboardPage() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Beranda</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Dashboard Alumni</h1>
        <p className="mt-2 text-sm text-slate-600">
          Selamat datang di portal alumni. Kelola data dan informasi karir Anda.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Statusmu:</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Pengangguran</p>
              </div>
              <div className="rounded-3xl bg-pink-50 px-4 py-3 text-sm text-pink-700 shadow-sm">
                Cari loker/update status. Update ke studi lanjut bila anda melanjutkan studi sekarang.
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition">
              Update Status Kerjamu
            </button>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">Kuesionermu Belum Selesai</p>
                <p className="mt-2 text-sm text-slate-500">Segera selesaikan sebelum 12-12-2025.</p>
              </div>
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition">
                Lanjutkan Pengisian
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Skor</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Status Keseluruhan</h2>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              7/10
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <DonutChart value={70} />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Informasi Loker Terbaru</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Lowongan Kerja</h2>
          </div>
          <button className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
            Lihat Loker Lainnya
          </button>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {jobCards.map((job) => (
            <div key={job.id} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-900">{job.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.company}</p>
                </div>
                <div className="h-11 w-11 rounded-3xl bg-slate-100 flex items-center justify-center text-lg text-slate-600">
                  {job.company.charAt(0)}
                </div>
              </div>
              <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                <p>{job.period}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">Onsite</span>
                <span className="rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">FullTime</span>
              </div>
              <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition">
                Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
