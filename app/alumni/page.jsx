"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import DonutChart from "@/components/shared/progress-kuisioner-chart";
import JobCard from "@/components/shared/jobCard";
import { KuesionerCard } from "@/components/forms/form_Kuesioner";
import { alumniService } from "@/services/alumni_service";

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
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAlumniData = async () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const user = JSON.parse(storedUser);
        try {
          const result = await alumniService.getProfileMe();
          // Simpan gabungan data user dan detail alumni (termasuk status)
          setUserData({ ...user, alumni: result.data || result });
        } catch (error) {
          console.error("Error fetching alumni data:", error);
          setUserData(user);
        }
      }
    };

    fetchAlumniData();
  }, []);

  // Logika penentuan status berdasarkan data alumni (asumsi field: status_kerja)
  // Jika di BE belum ada field ini, kamu bisa menambahkannya di tabel 'alumnis'
  const workingStatus = userData?.alumni?.status;

  const statusConfig = {
    belum_diisi: {
      label: "Belum Diisi",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      btnColor: "bg-yellow-500 hover:bg-yellow-700",
      description:
        "Data status pekerjaan Anda masih kosong. Silakan update statusmu dengan klik tombol dibawah untuk memperbarui informasi karir Anda.",
    },
    bekerja: {
      label: "Bekerja",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      btnColor: "bg-green-500 hover:bg-green-400",
      description:
        "Selamat! Data karirmu membantu meningkatkan akreditasi kampus. Terus perbarui jika ada perubahan.",
    },
    wirausaha: {
      label: "Wirausaha",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      btnColor: "bg-blue-600 hover:bg-blue-500",
      description:
        "Luar biasa! Usahamu berkontribusi pada ekonomi bangsa. Jangan lupa update perkembangan bisnismu.",
    },
    studi_lanjut: {
      label: "Studi Lanjut",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      btnColor: "bg-purple-600 hover:bg-purple-500",
      description:
        "Semangat kuliahnya! Data studi lanjutmu sangat berharga bagi pemetaan kualitas lulusan.",
    },
    belum_bekerja: {
      label: "Belum kerja",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      btnColor: "bg-red-500 hover:bg-red-400",
      description:
        "Jangan menyerah! Cari loker di bawah atau update ke 'Studi Lanjut' jika kamu melanjutkan kuliah.",
    },
  };

  // Fallback jika status tidak dikenal atau data belum load
  const currentStatus = statusConfig[workingStatus] || statusConfig.belum_diisi;

  // Logika Gaya Tombol
  const isPriorityAction =
    !workingStatus ||
    workingStatus === "belum_bekerja" ||
    workingStatus === "belum_diisi";
  const buttonLabel = isPriorityAction
    ? "Perbarui Status Sekarang"
    : "Update Perubahan Karir";
  const buttonStyles = isPriorityAction
    ? `${currentStatus.btnColor} text-white shadow-lg`
    : "bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50";

  const displayName = userData?.alumni?.name || userData?.username || "Alumni";

  return (
    <div className="pb-5">
      <div className="mb-8">
        {/* <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Beranda
        </p> */}
        <h1 className="mt-3 text-3xl font-semibold text-gray-900">
          Halo, {displayName}!
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
                <p
                  className={`mt-2 text-2xl font-semibold ${currentStatus.color}`}
                >
                  {currentStatus.label}
                </p>
              </div>
              <div
                className={`rounded-xl w-full flex h-full ${currentStatus.bgColor} px-4 py-3 text-md ${currentStatus.color} border ${currentStatus.borderColor}`}
              >
                {currentStatus.description}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className={`mt-6 w-full rounded-full py-4 text-sm font-semibold cursor-pointer transition duration-300 ${buttonStyles}`}
              >
                {buttonLabel}
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

      {/* Modal Popup Update Status */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                Update Status Karir
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <KuesionerCard />
          </div>
        </div>
      )}
    </div>
  );
}
