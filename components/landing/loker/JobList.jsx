"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import JobCard from "@/components/shared/jobCard";
import JobCardSkeleton from "@/components/shared/JobCardSkeleton";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Simulasi delay fetching data seperti di EventList
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Untuk sementara kita set kosong untuk melihat tampilan "Data Tidak Ditemukan"
        // Ganti dengan data dummy atau hasil API jika ingin melihat daftar kartu
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
    <section className="py-16 px-10 w-full mx-auto">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
          Hasil Pencarian Anda
        </h2>
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {loading ? (
              // Menampilkan skeleton loader
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
              /* Tampilan Saat Data Kosong */
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
                    Maaf, kami tidak dapat menemukan lowongan yang sesuai dengan
                    kriteria pencarian Anda. Silakan coba kata kunci lain.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
