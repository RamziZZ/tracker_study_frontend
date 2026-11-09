"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, CirclePlus } from "lucide-react";
import {
  QuestionEditorCard,
  QuestionTypePicker,
} from "@/components/admin/kuisioner/QuestionEditorCard";
import { QuestionnaireConfigPanel } from "@/components/admin/kuisioner/QuestionnaireConfigPanel";
import { QUESTION_TYPES, useQuestionnaireBuilder } from "@/hooks/useQuestionnaireBuilder";

const actionButtonClass =
  "flex h-[36px] cursor-pointer items-center justify-center gap-[10px] [border-radius:10px] border border-solid px-[20px] text-xs leading-4 transition-opacity hover:opacity-80";

export default function QuestionnaireAddPage({ questionnaireId }) {
  const router = useRouter();
  const {
    questions,
    questionCount,
    questionType,
    setQuestionType,
    dataType,
    setDataType,
    closureType,
    setClosureType,
    typeBreakdown,
    handleAddQuestion,
    handleUpdateQuestion,
    handleRemoveQuestion,
    handleMoveUp,
    handleMoveDown,
  } = useQuestionnaireBuilder([]);

  const isEditMode = Boolean(questionnaireId);

  const handleSaveDraft = () => {
    console.info("Draft kuisioner disimpan:", {
      title: "Survei Karier alumni 2022",
      questionCount,
      questions,
    });
    router.push("/admin/kuesioner");
  };

  const handlePublish = () => {
    console.info("Kuisioner dipublish:", { questionCount, questions });
    router.push("/admin/kuesioner");
  };

  return (
    <div className="flex h-full w-full flex-col gap-[16px]">
      {/* Header: kembali + judul + aksi, semua di halaman ini (tanpa popup) */}
      <section className="flex w-full shrink-0 flex-col gap-[16px] [border-radius:12px] bg-figma-white p-[20px]">
        <div className="flex w-full flex-wrap items-center justify-between gap-[16px]">
          <Link
            href="/admin/kuesioner"
            className="flex h-[36px] items-center gap-[10px] [border-radius:10px] border border-figma-blue-800 px-[20px] text-xs leading-4 text-figma-blue-800 transition-opacity hover:opacity-80"
          >
            <ChevronLeft className="size-[16px]" strokeWidth={1.8} />
            Kembali ke Daftar Kuisioner
          </Link>

          <div className="flex flex-wrap items-center gap-[12px]">
            <button
              type="button"
              onClick={handleSaveDraft}
              className={`${actionButtonClass} border-figma-blue-300 bg-figma-blue-100 text-figma-blue-800`}
            >
              Simpan Draft
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className={`${actionButtonClass} border-figma-blue-500 bg-figma-blue-500 text-figma-blue-50`}
            >
              Publish Kuisioner
            </button>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-end gap-[12px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
            <label
              htmlFor="questionnaire-title"
              className="text-sm leading-5 font-medium text-figma-blue-800"
            >
              Judul Kuisioner
            </label>
            <input
              id="questionnaire-title"
              defaultValue={isEditMode ? "Survei Karier alumni 2022" : ""}
              placeholder="Masukkan judul kuisioner..."
              className="h-[38.75px] w-full [border-radius:10px] border border-figma-blue-300 bg-figma-blue-50 px-[20px] text-xl leading-7 font-semibold text-figma-blue-800 outline-none placeholder:text-base placeholder:font-normal placeholder:text-figma-blue-400 focus:border-figma-blue-500"
            />
          </div>

          <span className="[border-radius:1000px] border border-figma-blue-300 bg-figma-blue-100 px-[15px] py-[9px] text-xs leading-4 text-figma-blue-800">
            Status: Draft
          </span>
        </div>
      </section>

      <div className="flex min-h-0 flex-1 flex-col gap-[16px] overflow-y-auto pr-[4px] lg:flex-row lg:items-start">
        {/* Kiri: daftar pertanyaan + tombol tambah */}
        <section className="flex w-full min-w-0 flex-1 flex-col gap-[16px]">
          <div className="flex w-full flex-col gap-[10px] [border-radius:20px] border border-figma-blue-300 bg-figma-white p-[20px]">
            <p className="text-sm leading-5 font-semibold text-figma-blue-800">
              Tambah Pertanyaan Baru
            </p>
            <QuestionTypePicker value={questionType} onChange={setQuestionType} />
            <p className="text-xs leading-4 text-figma-gray-500">
              Pilih tipe, lalu klik Tambah Pertanyaan.{" "}
              {QUESTION_TYPES.find((type) => type.value === questionType)?.label} bisa diedit
              teksnya, opsinya, dan pratinjaunya langsung.
            </p>
          </div>

          {questions.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center gap-[10px] [border-radius:20px] border border-dashed border-figma-blue-300 bg-figma-white p-[40px] text-center">
              <p className="text-lg leading-7 font-semibold text-figma-blue-800">
                Daftar Pertanyaan Kosong
              </p>
              <p className="max-w-[420px] text-xs leading-4 text-figma-gray-500">
                Pilih tipe pertanyaan di atas, lalu tambahkan. Setiap pertanyaan punya form
                pengaturan dan pratinjau tampilan alumni.
              </p>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-[16px]">
              {questions.map((question, index) => (
                <QuestionEditorCard
                  key={question.id}
                  question={question}
                  index={index}
                  total={questions.length}
                  onUpdate={handleUpdateQuestion}
                  onRemove={handleRemoveQuestion}
                  onMoveUp={handleMoveUp}
                  onMoveDown={handleMoveDown}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={handleAddQuestion}
            className="flex h-[40.545px] w-full cursor-pointer items-center justify-center gap-[10px] [border-radius:10px] border border-dashed border-figma-blue-800 px-[30px] text-xs leading-4 text-figma-blue-800 transition-opacity hover:opacity-80"
          >
            <CirclePlus className="size-[24px]" strokeWidth={1.8} />
            Tambah Pertanyaan
          </button>
        </section>

        {/* Kanan: konfigurasi (tipe data, sifat, jumlah pertanyaan sebagai label dinamis) */}
        <QuestionnaireConfigPanel
          dataType={dataType}
          onDataTypeChange={setDataType}
          closureType={closureType}
          onClosureTypeChange={setClosureType}
          questionCount={questionCount}
          typeBreakdown={typeBreakdown}
        />
      </div>
    </div>
  );
}
