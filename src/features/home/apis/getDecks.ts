import Axios from "@/lib/axios";
import { IDeck } from "@/features/home/types";
import { toast } from "react-toastify";

const getDecks = async (): Promise<IDeck[]> => {
  try {
    const res = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/decks`
    ).then((res) => res.data);

    if (res.status) {
      return res.decks;
    } else {
      toast.warn(res.message, { position: "top-right" });
      return [];
    }
  } catch (error: any) {
    console.error(error);
    toast.error(
      error?.response ? error?.response?.data?.message : error?.message,
      { position: "top-right" }
    );
    return [];
  }
};

export default getDecks;
