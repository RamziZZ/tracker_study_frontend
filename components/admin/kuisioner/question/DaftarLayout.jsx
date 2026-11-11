"use client";

// Komponen `daftar_layout` — Figma component 1086:22593 dengan 2 varian:
//
//   Property 1=Default      (1086:22592, 834x2326)
//     - daftar kartu question_add_card (gap-8 antar kartu, padding 20)
//     - tombol "Tambah Pertanyaan" di bagian PALING BAWAH (y=2265)
//
//   Property 1=no_question  (1086:22594, 834x297.5)
//     - bg white, radius 20, p-20, gap-40, items-center justify-center
//     - ikon 64 + "Daftar Pertanyaan Kosong" 18/28 semibold #1E437E
//       + "Yah, pertanyaan di kuisioner ini belum diisi" 14/20 #6B7280
//     - tombol dashed "Tambah Pertanyaan" selebar container
//
// Pemilihan varian dilakukan otomatis dari `questions.length`.

import { Plus } from "lucide-react";
import Image from "next/image";

import { getQuestionCard } from "./index";

const ICON_EMPTY = "/question-type/empty-question.svg";

// Tombol tambah: border dashed #1E437E, h-40.545, radius 10, px-30 py-10, gap-10, w-full
export function AddQuestionButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[40.545px] w-full shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-[10px] border border-dashed border-figma-blue-800 px-7.5 py-2.5 transition-colors hover:bg-figma-blue-50"
    >
      <Plus className="size-6 shrink-0 text-figma-blue-800" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-[12px] leading-4 font-normal whitespace-nowrap text-figma-blue-800">
        Tambah Pertanyaan
      </span>
    </button>
  );
}

// Varian no_question
export function DaftarLayoutEmpty({ onAdd }) {
  return (
    <div className="flex min-h-73.75 w-full flex-1 flex-col items-center justify-center gap-10 rounded-[20px] bg-figma-white p-5">
      <div className="flex shrink-0 flex-col items-center gap-5 pt-10">
        {/* ikon asli Figma 64x64 */}
        <Image src={ICON_EMPTY} alt="" aria-hidden="true" width={64} height={64} className="size-16 shrink-0" />
        <div className="flex w-full max-w-100 flex-col items-start gap-1.25 text-center">
          <p className="w-full text-[18px] leading-7 font-semibold text-figma-blue-800">
            Daftar Pertanyaan Kosong
          </p>
          <p className="w-full text-[14px] leading-5 font-normal text-figma-gray-500">
            Yah, pertanyaan di kuisioner ini belum diisi
          </p>
        </div>
      </div>
      <AddQuestionButton onClick={onAdd} />
    </div>
  );
}

// Varian default: daftar kartu + tombol tambah di bawah
export function DaftarLayoutList({ questions, onAdd, onUpdate, onRemove }) {
  return (
    <div className="flex w-full flex-col gap-6 p-6">
      {questions.map((question) => {
        const { Component } = getQuestionCard(question.type);
        return (
          <Component
            key={question.id}
            question={question}
            patch={(changes) => onUpdate(question.id, changes)}
            onRemove={() => onRemove(question.id)}
          />
        );
      })}
      <div className="w-full pt-3">
        <AddQuestionButton onClick={onAdd} />
      </div>
    </div>
  );
}

// Entry point: otomatis memilih varian berdasarkan ada/tidaknya pertanyaan
export function DaftarLayout({ questions = [], onAdd, onUpdate, onRemove }) {
  const hasQuestion = questions.length > 0;

  return (
    // Area scroll: hanya daftar pertanyaan yang bergulir;
    // header kuisioner & panel config tetap di tempat.
    <section
      data-variant={hasQuestion ? "default" : "no_question"}
      className="flex max-h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-y-auto rounded-[20px] bg-figma-white"
    >
      {hasQuestion ? (
        <DaftarLayoutList
          questions={questions}
          onAdd={onAdd}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      ) : (
        <DaftarLayoutEmpty onAdd={onAdd} />
      )}
    </section>
  );
}

export default DaftarLayout;
