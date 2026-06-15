"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import { KuesionerPopup } from "../ui/kuesioner-popup";
import { questionnaireService } from "@/services/questionnaire_service";
import { QuestionnaireEngine } from "@/lib/QuestionnaireEngine";
import { Loader2 } from "lucide-react";

const locationOptions = [
  { value: "jawa_timur_nganjuk", label: "Jawa Timur / Nganjuk" },
  { value: "jawa_timur_surabaya", label: "Jawa Timur / Surabaya" },
  { value: "jawa_barat_bandung", label: "Jawa Barat / Bandung" },
];

const studySources = [
  { value: "instansi_pemerintahan", label: "Instansi Pemerintahan" },
  { value: "beasiswa", label: "Beasiswa" },
  { value: "pribadi", label: "Pribadi" },
  { value: "orang_tua", label: "Orang Tua" },
];

const campusOptions = [
  { value: "polije", label: "Politeknik Negeri Jember" },
  { value: "ub", label: "Universitas Brawijaya" },
  { value: "its", label: "Institut Teknologi Sepuluh Nopember" },
];

const programOptions = [
  { value: "teknik_informatika", label: "Teknik Informatika" },
  { value: "sistem_informasi", label: "Sistem Informasi" },
  { value: "manajemen", label: "Manajemen" },
];

// Progress Indicator Component
function ProgressIndicator({ currentStep }) {
  const steps = ["Status & Detail", "Penilaian Kompetensi"];

  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-1 items-center">
          {/* Circle */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold text-white transition-all ${
              idx < currentStep
                ? "bg-green-500"
                : idx === currentStep
                  ? "bg-green-400"
                  : "bg-slate-300"
            }`}
          >
            {idx < currentStep ? "✓" : idx + 1}
          </div>

          {/* Label */}
          <div className="ml-3">
            <p
              className={`text-xs font-medium transition-all ${
                idx <= currentStep ? "text-slate-900" : "text-slate-500"
              }`}
            >
              {step}
            </p>
          </div>

          {/* Line */}
          {idx < steps.length - 1 && (
            <div
              className={`ml-4 h-1 flex-1 rounded-full transition-all ${
                idx < currentStep ? "bg-green-500" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  name,
  type = "text",
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, name, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <select
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function RatingField({ label, value, onChange, name, description }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {description && (
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        )}
      </div>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => onChange(name, num.toString())}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-medium transition-all ${
              value === num.toString()
                ? "bg-blue-600 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:border-blue-400"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export function KuesionerCard() {
  // State Management
  const [engine, setEngine] = useState(null);
  const [answers, setAnswers] = useState([]); // [{ question_id, value, key }]
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [popup, setPopup] = useState({
    open: false,
    variant: "success",
    message: "",
  });

  // Load Questionnaire Structure from API
  useEffect(() => {
    const initQuestionnaire = async () => {
      try {
        const response = await questionnaireService.getActiveQuestionnaire();
        // Inisialisasi Engine OOP dengan data dari API
        if (response.data) {
          setEngine(new QuestionnaireEngine(response.data));
        }
      } catch (error) {
        console.error("Failed to load questionnaire:", error);
        setPopup({
          open: true,
          variant: "error",
          message: "Gagal memuat kuesioner aktif.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    initQuestionnaire();
  }, []);

  // Filter pertanyaan yang aktif berdasarkan jawaban saat ini
  const visibleQuestions = useMemo(() => {
    if (!engine) return [];
    return engine.getVisibleQuestions(answers);
  }, [engine, answers]);

  // Pengelompokan pertanyaan berdasarkan step (Identitas, Status, Detail)
  const stepQuestions = useMemo(() => {
    // Karena category tidak ada di JSON, kita gunakan pembagian berdasarkan 'order'
    if (currentStep === 0) return visibleQuestions.filter((q) => q.order <= 8);
    return visibleQuestions.filter((q) => q.order > 8);
  }, [visibleQuestions, currentStep]);

  const handleInputChange = (questionId, value, kode = null) => {
    setAnswers((prev) => {
      // Hapus jawaban lama untuk ID yang sama
      const filtered = prev.filter((a) => a.question_id !== questionId);
      // Tambahkan jawaban baru, tandai 'status' jika itu adalah pertanyaan penentu flow
      return [
        ...filtered,
        {
          question_id: questionId,
          value,
          key: kode === "f8" ? "status" : null, // f8 adalah penentu flow di JSON baru
        },
      ];
    });
  };

  const handleNext = () => {
    if (currentStep < 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!engine.validate(answers)) {
      setPopup({
        open: true,
        variant: "error",
        message: "Mohon lengkapi semua pertanyaan wajib.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = engine.preparePayload(answers);
      await questionnaireService.submitAnswers(payload);
      setPopup({
        open: true,
        variant: "success",
        message: "Kuesioner berhasil dikirim!",
      });
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      setPopup({
        open: true,
        variant: "error",
        message: "Gagal mengirim jawaban. Coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="text-slate-500 animate-pulse">
          Memuat struktur kuesioner...
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <ProgressIndicator currentStep={currentStep} />

        <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
          <p className="text-sm font-semibold text-rose-800">Catatan:</p>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Pilih status kerja anda untuk melanjutkan pengisian informasi
            pekerjaan/studi lanjut atau boleh diisi belum bekerja. Jika anda
            memilih belum bekerja, pertanyaan di bawah status anda tidak wajib
            diisi.
          </p>
        </div>

        <div className="space-y-6 rounded-lg bg-white p-6 border border-slate-200">
          <p className="text-lg font-semibold text-slate-900 mb-4">
            {currentStep === 0
              ? "Status & Detail"
              : "Penilaian Kompetensi"}
          </p>

          <div className="grid gap-6">
            {stepQuestions.map((q) => (
              <div key={q.id}>
                {q.type === "text" && (
                  <InputField
                    label={q.text}
                    placeholder="Jawaban Anda..."
                    value={
                      answers.find((a) => a.question_id === q.id)?.value || ""
                    }
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                )}

                {q.type === "number" && (
                  <InputField
                    type="number"
                    label={q.text}
                    placeholder="0"
                    value={
                      answers.find((a) => a.question_id === q.id)?.value || ""
                    }
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                )}

                {(q.type === "radio" || q.type === "select" || q.type === "dropdown") && (
                  <SelectField
                    label={q.text}
                    options={[
                      { value: "", label: "Pilih jawaban" },
                      ...(q.options?.length > 0
                        ? q.options.map((opt) => ({
                            value: opt.value,
                            label: opt.label,
                          }))
                        : q.kode === "f8"
                          ? [
                              { value: "Bekerja", label: "Bekerja (full time / part time)" },
                              { value: "Wiraswasta", label: "Wiraswasta" },
                              { value: "Studi Lanjut", label: "Melanjutkan Pendidikan" },
                              { value: "Mencari Kerja", label: "Tidak bekerja tetapi sedang mencari pekerjaan" },
                              { value: "Belum Bekerja", label: "Belum Bekerja" },
                            ]
                          : []),
                    ]}
                    value={
                      answers.find((a) => a.question_id === q.id)?.value || ""
                    }
                    onChange={(e) =>
                      handleInputChange(q.id, e.target.value, q.kode)
                    }
                  />
                )}

                {q.type === "date" && (
                  <InputField
                    type="date"
                    label={q.text}
                    value={
                      answers.find((a) => a.question_id === q.id)?.value || ""
                    }
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                )}

                {q.type === "rating" && (
                  <RatingField
                    label={q.text}
                    value={
                      answers.find((a) => a.question_id === q.id)?.value || ""
                    }
                    onChange={(name, val) => handleInputChange(q.id, val)}
                    name={`q-${q.id}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            size="md"
            className="rounded-lg px-6 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Sebelumnya
          </Button>

          {currentStep === 1 ? (
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="md"
              className="rounded-lg px-6 py-2.5 bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Mengirim...
                </>
              ) : (
                "Simpan Kuesioner"
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              variant="primary"
              size="md"
              className="rounded-lg px-6 py-2.5 bg-blue-900 text-white hover:bg-blue-800"
            >
              Selanjutnya →
            </Button>
          )}
        </div>
      </form>

      <KuesionerPopup
        open={popup.open}
        variant={popup.variant}
        message={popup.message}
        onClose={closePopup}
      />
    </>
  );
}
