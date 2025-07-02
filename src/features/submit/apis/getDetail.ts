import Axios from "@/lib/axios";
import type { GameSubmitType } from "@/features/submit/types";
import { useApi } from "@/hooks/useApi";

const useSubmit = () => {
  const { callApi } = useApi();

  const getSubmitDetails = async (
    payload: any
  ): Promise<{ status: boolean; data: GameSubmitType | null }> => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.post("/api/game-details", {
          ...payload,
        });
        return result.data;
      });

      if (response?.data) {
        return { status: true, data: response?.data };
      } else {
        return { status: false, data: null };
      }
    } catch (err: any) {
      console.error("error in getting submited game list fetching :: ", err);
      return { status: false, data: null };
    }
  };

  return { getSubmitDetails };
};

export default useSubmit;
