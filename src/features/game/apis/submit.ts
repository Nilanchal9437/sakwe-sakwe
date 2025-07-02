import Axios from "@/lib/axios";
import { toast } from "react-toastify";
import { useApi } from "@/hooks/useApi";

const useCreate = () => {
  const { callApi } = useApi();

  const create = async (payload: {
    game_id: string;
    totalSessionTime: string;
    answer: {
      question: string;
      answer: string;
      answerSeen: boolean;
      cardSeen: boolean;
      sessionTime: string;
    }[];
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.put("/api/submit-game", {
          ...payload,
        });
        return result.data;
      });

      if (response?.status) {
        toast.success(response.message, { position: "top-right" }); 
        return { status: true, data: response?.data };
      } else {
        toast.warning(response.message, { position: "top-right" });
        return { status: false, data: null };
      }
    } catch (err: any) {
      console.error("error in submitting game:: ", err);
      toast.error(err?.response ? err?.response?.data?.message : err?.message, {
        position: "top-right",
      });
      return { status: false, data: null };
    }
  };

  return { create };
};

export default useCreate;
