import axiosInstance from "@/lib/axios";

export const questionnaireService = {
  /**
   * Mengambil struktur kuesioner aktif (pertanyaan & opsi)
   */
  getActiveQuestionnaire: async () => {
    try {
      const response = await axiosInstance.get("/questionnaires");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Mengirimkan jawaban alumni
   * Payload: { questionnaire_id, answers: [{ question_id, answer_value }] }
   */
  submitAnswers: async (payload) => {
    try {
      const response = await axiosInstance.post(
        "/questionnaires/submit",
        payload,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMyHistory: async (id) => {
    const response = await axiosInstance.get(
      `/questionnaires/${id}/my-answers`,
    );
    return response.data;
  },
};
