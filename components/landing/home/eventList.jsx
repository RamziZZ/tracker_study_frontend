"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import EventCard from "@/components/shared/eventCard";
import EventCardSkeleton from "@/components/shared/EventCardSkeleton";
import { newsService } from "../../../services/news_service";

export default function EventList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const result = await newsService.getAllNews();
        if (result.success) {
          // Mengambil maksimal 8 data terbaru (asumsi urutan dari API sudah yang terbaru)
          setNews(result.data.slice(0, 8));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="py-16 px-10 w-full mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
          Temukan Event Sekitar Kampus
        </h2>
        <p className="text-sm md:text-lg text-center text-gray-600">
          Temukan event yang akan meningkatkan kariermu di sekitar lingkungan
          dari kampus
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))
        ) : news.length > 0 ? (
          news.map((item, index) => (
            <EventCard
              key={item.id || index}
              label={item.title}
              location={"-"}
              calender={"-"}
              thumbnail={item.thumbnail}
              cost={"-"}
              quota={"-"}
              type={item.category}
            />
          ))
        ) : (
          /* Bagian Kondisi Data Kosong */
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
            <div className="w-full max-w-sm aspect-video mb-8 flex items-center justify-center">
              <Image
                src="/ilustration/undraw_void_wez2.svg"
                alt="Event tidak ditemukan"
                width={300}
                height={200}
                className="w-auto h-full opacity-75 grayscale"
              />
            </div>

            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-gray-500 mb-3">
                Event Tidak Ditemukan
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Maaf, saat ini belum ada event yang tersedia untuk ditampilkan.
                Silakan kembali lagi nanti untuk informasi terbaru.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
