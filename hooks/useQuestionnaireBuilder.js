"use client";

import { useCallback, useMemo, useState } from "react";

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

// Template isi pertanyaan per tipe
const createQuestion = (type) => {
  const base = {
    id: createId(),
    type,
    text: "",
    rows: [],
    options: [],
    otherOption: false,
    otherPlaceholder: "Sebutkan sumber lainnya...",
    minValue: "0",
    maxValue: "",
    helpText: "",
  };

  if (type === "pilihan-ganda") {
    return { ...base, options: ["Pameran kerja / job fair", ""] };
  }

  if (type === "matriks") {
    return { ...base, rows: ["Etika Profesi", ""] };
  }

  if (type === "grup") {
    return { ...base, rows: ["Menganalisis masalah", ""] };
  }

  return base;
};

export function useQuestionnaireBuilder(initialQuestions = []) {
  // Jumlah pertanyaan = turunan dari state, BUKAN field yang diketik manual
  const [questions, setQuestions] = useState(initialQuestions);
  const [questionType, setQuestionType] = useState("angka");
  const [dataType, setDataType] = useState("Ringkasan Karier Alumni");
  const [closureType, setClosureType] = useState("Buka (dapat diisi sampai batas waktu)");

  const questionCount = questions.length;

  const handleAddQuestion = useCallback(() => {
    setQuestions((prev) => [...prev, createQuestion(questionType)]);
  }, [questionType]);

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
