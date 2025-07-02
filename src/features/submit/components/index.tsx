"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import Modal from "@/components/Modal";

import games from "@/constants/games";
import useSubmit from "@/features/submit/apis/getDetail";

function SubmitedDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = `${searchParams.get("id")}`;

  const { getSubmitDetails } = useSubmit();

  const [user, setUser] = React.useState<{
    totalSessionTime: string;
    name: string;
    email: string;
    phone: string;
    answer: {
      question: string;
      answer: string;
      answerSeen: boolean;
      cardSeen: boolean;
      sessionTime: string;
    }[];
    game_id: string;
  }>({
    answer: [],
    totalSessionTime: "",
    name: "",
    email: "",
    phone: "",
    game_id: "",
  });

  const getDetails = async () => {
    const response = await getSubmitDetails({ _id: id });

    if (response?.status) {
      setUser({ ...(response?.data as any) });
    }
  };

  React.useEffect(() => {
    if (id !== "null" && id !== "undefined") {
      getDetails();
    }
  }, [id]);

  return (
    <Modal
      title="SUBMIT RESULT"
      content={
        <div className="px-4">
          <div className="flex flex-col md:flex-row justify-between my-2">
            <h1 className="text-lg text-white">Name : {user.name}</h1>
            <h1 className="text-lg text-white">
             Email : {user.email}
            </h1>
            <h1 className="text-lg text-white">
             Phone No. : {user.phone}
            </h1>
          </div>
          <div className="flex flex-row justify-between my-2">
            <h1 className="text-lg text-white">
              Game Name :{" "}
              {games.find((item) => item.id === parseInt(user.game_id))?.title}
            </h1>
            <h1 className="text-lg text-white">
              Total Duration : {user.totalSessionTime}
            </h1>
          </div>
          <div className="overflow-x-auto shadow-md rounded-lg mt-4">
            <table className="min-w-full bg-gray-900">
              {/* Table Header */}
              <thead className="bg-gray-900 text-gray-300">
                <tr>
                  <th className="px-4 py-3 text-start">Question</th>
                  <th className="px-4 py-3 text-start">Answer</th>
                  <th className="px-4 py-3 text-center">Answer Seen</th>
                  <th className="px-4 py-3 text-center">Card Seen</th>
                  <th className="px-4 py-3 text-center">Card Duration</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-gray-600 text-gray-300">
                {user.answer.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-10 text-center">
                      <Image
                        src="/no-data-found.png"
                        alt="not found"
                        height={400}
                        width={400}
                        className="mx-auto object-cover"
                      />
                    </td>
                  </tr>
                ) : (
                  user.answer?.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3 text-start">{row.question}</td>
                      <td className="px-4 py-3 text-start">{row.answer}</td>
                      <td className="px-4 py-3 text-center">
                        {row.answerSeen ? "YES" : "NO"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.cardSeen ? "YES" : "NO"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.sessionTime}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      }
      secondaryText=""
      onClose={() => (window.location.href = "/")}
      hideBtn
      submitBtn={
        <button
          onClick={() => {
            setUser({
              answer: [],
              totalSessionTime: "",
              name: "",
              email: "",
              phone: "",
              game_id: "",
            });
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors w-[100px] mx-auto mt-5"
        >
          Close
        </button>
      }
      open={true}
      className="w-full h-full bg-gray-800 md:max-h-[90vh] xl:max-w-[1064px] 2xl:max-w-[1264px] md:w-fit md:h-fit md:max-w-[90vw] md:p-6"
    />
  );
}

export default SubmitedDetails;
