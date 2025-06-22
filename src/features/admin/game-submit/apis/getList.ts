import Axios from "@/lib/axios";
import type { GameSubmitType } from "@/features/admin/game-submit/types";
import { useApi } from "@/hooks/useApi";

const useList = () => {
  const { callApi } = useApi();

  const getList = async (
    payload: any
  ): Promise<{ status: boolean; data: GameSubmitType[]; total: number }> => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.get("/api/submit-game", {
          params: payload,
        });
        return result.data;
      });

      if (Array.isArray(response?.data)) {
        if (response) {
          return { status: true, data: response?.data, total: response?.total };
        } else {
          return { status: false, data: [], total: 0 };
        }
      } else {
        return { status: false, data: [], total: 0 };
      }
    } catch (err: any) {
      console.log("error in getting submited game list fetching :: ", err);
      return { status: false, data: [], total: 0 };
    }
  };

  return { getList };
};

export default useList;
