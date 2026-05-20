import DonutChart from "@/components/shared/progress-kuisioner-chart";
import JobCard from "@/components/shared/jobCard";

const jobCards = [
  {
    id: 1,
    label: "Frontend Developer",
    company: "PT. Global Inovasi Digital",
    comp_image: "/icon-web/logo-tracer-study_1.webp",
    periode: "Diposting 2 hari yang lalu",
    type: "Onsite",
    time: "Full-time",
  },
  {
    id: 2,
    label: "UI/UX Designer",
    company: "Creative Studio Indonesia",
    comp_image: "/icon-web/logo-tracer-study_1.webp",
    periode: "Diposting 5 hari yang lalu",
    type: "Remote",
    time: "Contract",
  },
  {
    id: 3,
    label: "Fullstack Engineer",
    company: "Tech Solutions Corp",
    comp_image: "/icon-web/logo-tracer-study_1.webp",
    periode: "Diposting 1 minggu yang lalu",
    type: "Hybrid",
    time: "Full-time",
  },
  {
    id: 4,
    label: "Fullstack Engineer",
    company: "Tech Solutions Corp",
    comp_image: "/icon-web/logo-tracer-study_1.webp",
    periode: "Diposting 1 minggu yang lalu",
    type: "Hybrid",
    time: "Full-time",
  },
  {
    id: 5,
    label: "Fullstack Engineer",
    company: "Tech Solutions Corp",
    comp_image: "/icon-web/logo-tracer-study_1.webp",
    periode: "Diposting 1 minggu yang lalu",
    type: "Hybrid",
    time: "Full-time",
  },
];

export default function AlumniDashboardPage() {
  return (
    <div className="pb-5">
      <div className="mb-8">
        {/* <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Beranda
        </p> */}
        <h1 className="mt-3 text-3xl font-semibold text-gray-900">
          Dashboard Alumni
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Selamat datang di portal alumni. Kelola data dan informasi karir Anda.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col">
          <div className="rounded-[32px] h-full bg-white p-6 shadow-md">
            <div className="flex h-full flex-col gap-4 items-start md:justify-between">
              <div>
                <p className="text-sm tracking-[0.24em] text-slate-500">
                  Statusmu
                </p>
                <p className="mt-2 text-2xl font-semibold text-red-500">
                  Belum kerja
                </p>
              </div>
              <div className="rounded-xl w-full flex h-full bg-red-50 px-4 py-3 text-md text-red-500 border border-red-300">
                Cari loker/update status. Update ke studi lanjut bila anda
                melanjutkan studi sekarang.
              </div>
              <button className="mt-6 w-full rounded-full bg-red-500 py-4 text-sm font-semibold text-white hover:bg-red-400 cursor-pointer transition duration-300">
                Update Status Kerjamu
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                  Status Kuisioner
                </h2>
              </div>
              <div className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-semibold text-gray-500">
                7/10
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col md:flex-row gap-8 items-center justify-center">
              <div className="w-48 h-48 shrink-0">
                <DonutChart value={70} />
              </div>

              <div className="rounded-xl w-full h-fit border border-blue-300 bg-blue-50 p-6 ">
                <div className="flex flex-col gap-6 items-start justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Kuesionermu Belum Selesai
                    </p>
                    <p className="mt-2 text-md text-blue-500">
                      Segera selesaikan pengisian kuisioner untuk membantu
                      akreditasi kampus sebelum 12-12-2025.
                    </p>
                  </div>
                  <button className="rounded-full w-full md:w-fit bg-blue-500 px-12 py-4 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer transition duration-300">
                    Lanjutkan Pengisian
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] bg-white p-6 shadow-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm tracking-[0.24em] text-slate-500">
                  Statusmu
                </p>
                <p className="mt-2 text-2xl font-semibold text-red-500">
                  Belum kerja
                </p>
              </div>
              <div className="rounded-xl flex h-full bg-red-50 px-4 py-3 text-sm text-red-500 border border-red-300">
                Cari loker/update status. Update ke studi lanjut bila anda
                melanjutkan studi sekarang.
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white hover:bg-red-400 cursor-pointer transition duration-300">
              Update Status Kerjamu
            </button>
          </div>

          <div className="rounded-[32px] border border-blue-300 bg-blue-50 p-6 shadow-md shadow-blue-200/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Kuesionermu Belum Selesai
                </p>
                <p className="mt-2 text-sm text-blue-500">
                  Segera selesaikan sebelum 12-12-2025.
                </p>
              </div>
              <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer transition duration-300">
                Lanjutkan Pengisian
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                Status Kuisioner
              </h2>
            </div>
            <div className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-semibold text-gray-500">
              7/10
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <DonutChart value={70} />
          </div>
        </div>
      </div> */}

      <section className="mt-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {/* <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Informasi Loker Terbaru
            </p> */}
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Informasi Loker Terbaru
            </h2>
          </div>
          <button className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-transparent px-6 py-4 text-sm font-normal text-gray-900 hover:bg-gray-900 hover:text-gray-50 cursor-pointer transition duration-300">
            Lihat Loker Lainnya
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobCards.map((job) => (
            <JobCard
              key={job.id}
              label={job.label}
              company={job.company}
              comp_image={job.comp_image}
              periode={job.periode}
              type={job.type}
              time={job.time}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
