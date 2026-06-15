import axiosInstance from "@/lib/axios";

export const questionnariesService = {
    getAllquestionnaries: async () =>  {
        try {
            const response  = await axiosInstance.get("/questionaries");
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    storeQuestionnaries: async () => {
        try {
            const response = await axiosInstance.get(`/questionnaires/submit`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAnswerQuestionnaries: async (id) => {
        try {
            const response = await axiosInstance.get(`/questionnaires${id}/my-answers`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },


};