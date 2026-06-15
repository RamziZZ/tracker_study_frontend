"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import JobCard from "@/components/shared/jobCard";
import JobCardSkeleton from "@/components/shared/JobCardSkeleton";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyJobs = Array(5).fill({
    id: "dummy-id",
    label: "UI/UX Designer",
    company: "Creative Studio",
    comp_image: "/test_company.png", // sesuaikan dengan path lokasimu
    periode: "Jan 2026 - Present",
    time: "Fulltime",
    type: "Remote"
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // TODO: Hubungkan dengan service API pekerjaan Anda jika sudah tersedia
        // Contoh: const result = await jobService.getAllJobs();
        // if (result.success) setJobs(result.data.slice(0, 6));

        // Simulasi delay fetching data
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Untuk sementara kita set kosong untuk melihat tampilan "Data Tidak Ditemukan"
        // Jika ingin melihat data, isi array di bawah ini atau hubungkan ke API.
        setJobs([]);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="py-16 px-10 w-full mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
          Temukan Langkah Selanjutnya
          <br /> dalam Karier Anda
        </h2>
        <p className="text-sm md:text-lg text-center text-gray-600">
          Akses terbuka untuk publik. Menghubungkan telanta terbaik dengan
          perusahaan
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        {loading ? (
          // Menampilkan skeleton loader sederhana selama proses fetching
          Array.from({ length: 6 }).map((_, index) => (
            <JobCardSkeleton key={index} />
          ))
        ) : jobs.length > 0 ? (
          jobs.map((item, index) => (
            <JobCard
              key={item.id || index}
              label={item.label || "Job Title"}
              company={item.company || "Company Name"}
              comp_image={item.comp_image || "/test_company.png"}
              periode={item.periode || "Periode"}
              time={item.time || "Fulltime"}
              type={item.type || "Onsite"}
            />
          ))
        ) : (
          /* Bagian Kondisi Data Kosong (Sesuai dengan EventList) */
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
            <div className="w-full max-w-sm aspect-video mb-8 flex items-center justify-center">
              <Image
                src="/ilustration/undraw_void_wez2.svg"
                alt="Lowongan tidak ditemukan"
                width={300}
                height={200}
                className="w-auto h-full opacity-75 grayscale"
              />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-gray-500 mb-3">
                Lowongan Tidak Ditemukan
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Maaf, saat ini belum ada lowongan pekerjaan yang tersedia untuk
                ditampilkan. Silakan kembali lagi nanti untuk informasi terbaru.
              </p>
            </div>
          </div>
        )}
        {/* {dummyJobs.map((item, index) => (
          <JobCard
            key={index} // Menggunakan index karena datanya sama persis
            label={item.label}
            company={item.company}
            comp_image={item.comp_image}
            periode={item.periode}
            time={item.time}
            type={item.type}
          />
        ))} */}
      </div>
    </section>
  );
}
