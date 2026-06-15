/**
 * Class untuk mengelola logika kuesioner secara OOP
 */
export class QuestionnaireEngine {
  constructor(structure) {
    this.id = structure.id;
    // Ratakan pertanyaan nested menjadi satu array flat untuk mempermudah pencarian
    this.allQuestions = this._flattenQuestions(structure.questions || []);
  }

  _flattenQuestions(questions) {
    let flat = [];
    questions.forEach((q) => {
      flat.push(q);
      if (q.children && q.children.length > 0) {
        flat = [...flat, ...this._flattenQuestions(q.children)];
      }
    });
    return flat;
  }

  /**
   * Filter pertanyaan yang harus ditampilkan berdasarkan jawaban saat ini (Conditional Logic)
   * Contoh: Pertanyaan "Gaji" hanya muncul jika status == "Bekerja"
   */
  getVisibleQuestions(currentAnswers) {
    return this.allQuestions.filter((q) => {
      // Jika tidak punya parent, selalu tampil
      if (!q.parent_id) return true;

      // Cek apakah parent-nya sudah dijawab
      const parentAnswer = currentAnswers.find(
        (a) => a.question_id === q.parent_id,
      );

      if (!parentAnswer || !parentAnswer.value) return false;

      /**
       * Logika Bisnis Spesifik:
       * f502 muncul jika f8 == "Bekerja"
       * f502_wira muncul jika f8 == "Wiraswasta"
       */
      if (q.kode === "f502")
        return parentAnswer.value.toLowerCase().includes("bekerja");
      if (q.kode === "f502_wira")
        return parentAnswer.value.toLowerCase().includes("wiraswasta");

      // Default: Jika parent ada jawabannya, tampilkan anak (untuk text/number field bersyarat)
      if (q.parent_id && parentAnswer.value) return true;

      return false;
    });
  }

  /**
   * Memformat data untuk dikirim ke API /submit
   */
  preparePayload(currentAnswers) {
    return {
      questionnaire_id: this.id,
      answers: currentAnswers.map((ans) => ({
        question_id: ans.question_id,
        answer_value: ans.value,
      })),
    };
  }

  /**
   * Validasi apakah semua pertanyaan wajib sudah diisi
   */
  validate(currentAnswers) {
    const visibleQuestions = this.getVisibleQuestions(currentAnswers);
    const answeredIds = currentAnswers.map((a) => a.question_id);

    return visibleQuestions.every((q) =>
      q.is_required ? answeredIds.includes(q.id) : true,
    );
  }
}
