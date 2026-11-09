"use client";

import { useRouter } from "next/navigation";
import { QuestionnaireCard } from "@/components/admin/kuisioner/QuestionnaireCard";
import { QuestionnaireFilterBar } from "@/components/admin/kuisioner/QuestionnaireFilterBar";
import { QuestionnaireHeader } from "@/components/admin/kuisioner/QuestionnaireHeader";
import { QuestionnairePagination } from "@/components/admin/kuisioner/QuestionnairePagination";
import { useQuestionnaire } from "@/hooks/useQuestionnaire";
import { formatQuestionnaireData } from "@/utils/formatQuestionnaire";

const DUMMY_QUESTIONNAIRES = [
  {
    id: 4,
    title: "Survei Karier Alumni 2022",
    status: "Sedang Dibuat",
    batch: "Untuk Angkatan 2022",
    period: "01 Sep 2026 - 30 Nov 2026",
    progress: "0/400 Sudah mengisi",
  },
  {
    id: 3,
    title: "Survei Alumni Magang",
    status: "Sedang Berjalan",
    batch: "Untuk Angkatan 2023",
    period: "01 Sep 2026 - 30 Nov 2026",
    progress: "280/400 Sudah mengisi",
  },
  {
    id: 2,
    title: "Kepuasan Pengguna Lulusan",
    status: "Sudah Selesai",
    batch: "Untuk Angkatan 2021",
    period: "01 Sep 2026 - 30 Nov 2026",
    progress: "400/400 Sudah mengisi",
  },
  {
    id: 1,
    title: "Survei Kinerja Dosen",
    status: "Sedang Berjalan",
    batch: "Untuk Angkatan 2022",
    period: "01 Sep 2026 - 30 Nov 2026",
    progress: "180/400 Sudah mengisi",
  },
];

export default function QuestionnairePage() {
  const router = useRouter();
  const {
    questionnaireList,
    filters,
    page,
    pageSize,
    totalItems,
    handleSearchChange,
    handleSortChange,
    handleFilterChange,
    handlePageChange,
    handleDelete,
  } = useQuestionnaire(DUMMY_QUESTIONNAIRES);

  // Konfigurasi kuisioner ada di halaman /tambah, bukan popup
  const handleAdd = () => router.push("/admin/kuesioner/tambah");

  const handleBulkAdd = () => {
    const generated = formatQuestionnaireData({
      id: Date.now(),
      title: "Kuisioner Baru (Masal)",
      status: "Sedang Dibuat",
      batchYear: 2024,
      startDate: "2026-09-01",
      endDate: "2026-11-30",
      filled: 0,
      total: 400,
    });
    console.info("Kuisioner masal dibuat:", generated);
  };

  return (
    <div className="flex h-full w-full flex-col gap-[16px]">
      <section className="flex w-full shrink-0 flex-col gap-[16px] [border-radius:12px] bg-figma-white p-[20px]">
        <QuestionnaireHeader onAdd={handleAdd} onBulkAdd={handleBulkAdd} />
        <QuestionnaireFilterBar
          search={filters.search}
          onSearchChange={handleSearchChange}
          sortBy={filters.sortBy}
          onSortChange={handleSortChange}
          filterData={filters.filterData}
          onFilterChange={handleFilterChange}
        />
      </section>

      {/* Area scroll hanya di bagian list card; header & filter tetap diam */}
      <div className="min-h-0 flex-1 overflow-y-auto pr-[4px]">
        {questionnaireList.length === 0 ? (
          <p className="[border-radius:12px] bg-figma-white p-[20px] text-center text-sm text-figma-gray-500">
            Belum ada kuisioner yang cocok dengan filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-[16px] pb-[16px] xl:grid-cols-2">
            {questionnaireList.map((item) => (
              <QuestionnaireCard
                key={item.id}
                data={item}
                onDelete={(data) => handleDelete(data.id)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0">
        <QuestionnairePagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>

    </div>
  );
}
