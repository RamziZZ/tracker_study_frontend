"use client";

// Registry kartu pertanyaan: satu tempat untuk memetakan `type` → komponen.
// Menambah tipe baru cukup menambah entri di sini, tanpa menyentuh layout daftar.
//
// Sumber desain: Figma component `question_add_card`, varian:
//   1086:22856 Input Dasar      → QuestionCardAngka
//   1086:23197 Pilihan Ganda    → QuestionCardPilihanGanda
//   1086:22949 Matriks Evaluasi → QuestionCardMatriks
//   1086:23485 Grup Pertanyaan  → QuestionCardGrup

import { QuestionCardAngka } from "./QuestionCardAngka";
import { QuestionCardGrup } from "./QuestionCardGrup";
import { QuestionCardMatriks } from "./QuestionCardMatriks";
import { QuestionCardPilihanGanda } from "./QuestionCardPilihanGanda";

export const QUESTION_CARD_REGISTRY = {
  angka: {
    label: "Input Dasar",
    Component: QuestionCardAngka,
  },
  paragraf: {
    label: "Input Dasar",
    Component: QuestionCardAngka,
  },
  "pilihan-ganda": {
    label: "Pilihan Ganda",
    Component: QuestionCardPilihanGanda,
  },
  matriks: {
    label: "Matriks Evaluasi",
    Component: QuestionCardMatriks,
  },
  grup: {
    label: "Grup Pertanyaan",
    Component: QuestionCardGrup,
  },
};

const FALLBACK = QUESTION_CARD_REGISTRY.angka;

// Mengembalikan komponen kartu untuk tipe tertentu (fallback: Input Dasar)
export function getQuestionCard(type) {
  return QUESTION_CARD_REGISTRY[type] ?? FALLBACK;
}
