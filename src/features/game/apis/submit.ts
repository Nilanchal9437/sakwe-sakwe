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
        setTimeout(() => {
          // window.location.href = "/";
        }, 2000);
      } else {
        toast.warning(response.message, { position: "top-right" });
      }
    } catch (err: any) {
      console.log("error in submitting game:: ", err);
      toast.error(err?.response ? err?.response?.data?.message : err?.message, {
        position: "top-right",
      });
    }
  };

  return { create };
};

export default useCreate;
