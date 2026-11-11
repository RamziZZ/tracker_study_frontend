"use client";

import { useCallback, useMemo, useState } from "react";

import { DUMMY_QUESTIONS } from "@/hooks/dummyQuestions";

// Saklar dummy: true = halaman langsung terisi 4 contoh pertanyaan (1 per tipe)
// untuk memeriksa tampilan tiap kartu. Matikan saat data asli sudah tersedia.
const SHOW_DUMMY_QUESTIONS = true;

export const QUESTION_TYPES = [
  { value: "angka", label: "Angka (bulan)" },
  { value: "paragraf", label: "Paragraf" },
  { value: "pilihan-ganda", label: "Pilihan Ganda" },
  { value: "matriks", label: "Matriks Evaluasi" },
  { value: "grup", label: "Grup Pertanyaan" },
];

const createId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `q-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

// Template isi pertanyaan per tipe. Nilai awal mengikuti contoh pada desain
// Figma question_add_card (1086:22856 Input Dasar, 1086:22949 Matrix,
// 1086:23485 Grup, 1086:23197 Pilihan Ganda).
const createQuestion = (type, variant) => {
  const base = {
    id: createId(),
    type,
    variant,
    text: "",
    rows: [],
    options: [],
    otherOption: false,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    minValue: "0",
    maxValue: "",
    helpText: "",
    groupName: "",
    groupItems: [],
  };

  if (type === "angka") {
    return { ...base, minValue: "0", maxValue: "" };
  }

  if (type === "pilihan-ganda") {
    return {
      ...base,
      otherOption: true,
      options: [
        "Pameran kerja / job fair",
        "Mencari di internet",
        "Melalui relasi",
        "Melalui penempatan magang",
        "Diundang perusahaan",
        "Lainnya",
        "",
      ],
    };
  }

  if (type === "matriks") {
    return { ...base, rows: ["Etika Profesi", "Keahlian Berbasis Ilmu", ""] };
  }

  if (type === "grup") {
    return {
      ...base,
      groupName: "Kemampuan Berpikir Kritis & Pemecahan Masalah",
      groupItems: [
        { id: createId(), label: "Menganalisis masalah", kind: "text" },
        { id: createId(), label: "Menentukan solusi", kind: "select" },
        { id: createId(), label: "Mengambil keputusan", kind: "radio" },
      ],
    };
  }

  return base;
};

export function useQuestionnaireBuilder(initialQuestions) {
  // Jumlah pertanyaan = turunan dari state, BUKAN field yang diketik manual
  const [questions, setQuestions] = useState(() => {
    if (initialQuestions) return initialQuestions;
    // Preview UI: setiap tipe question_add_card diwakili satu contoh
    return SHOW_DUMMY_QUESTIONS ? DUMMY_QUESTIONS : [];
  });
  const [questionType, setQuestionType] = useState("angka");
  const [dataType, setDataType] = useState("Ringkasan Karier Alumni");
  const [closureType, setClosureType] = useState("Buka (dapat diisi sampai batas waktu)");

  const questionCount = questions.length;

  // typeOverride dipakai saat tipe dipilih dari popup Tambah Pertanyaan
  const handleAddQuestion = useCallback(
    (typeOverride, variantOverride) => {
      setQuestions((prev) => [
        ...prev,
        createQuestion(typeOverride ?? questionType, variantOverride),
      ]);
    },
    [questionType],
  );

  const handleUpdateQuestion = useCallback((id, patch) => {
    setQuestions((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }, []);

  const handleRemoveQuestion = useCallback((id) => {
    setQuestions((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const moveQuestion = useCallback((id, direction) => {
    setQuestions((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      const target = index + direction;
      if (index === -1 || target < 0 || target >= prev.length) return prev;

      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }, []);

  const handleMoveUp = useCallback((id) => moveQuestion(id, -1), [moveQuestion]);
  const handleMoveDown = useCallback((id) => moveQuestion(id, 1), [moveQuestion]);

  const typeBreakdown = useMemo(() => {
    return QUESTION_TYPES.map((type) => ({
      ...type,
      total: questions.filter((question) => question.type === type.value).length,
    })).filter((type) => type.total > 0);
  }, [questions]);

  return {
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
  };
}
