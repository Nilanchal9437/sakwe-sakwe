"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Eye } from "lucide-react"; // Lucide-React Icons
import moment from "moment";

import CustomPagination from "@/components/Pagination";
import Title from "@/components/Title";
import Modal from "@/components/Modal";

import type { GameSubmitType } from "@/features/admin/game-submit/types";
import useList from "@/features/admin/game-submit/apis/getList";
import games from "@/constants/games";

function SubmitedGame() {
  const { getList } = useList();
  const [load, setLoad] = useState<boolean>(true);
  const [store, setStore] = useState<{
    store: GameSubmitType[];
    total: number;
  }>({
    store: [],
    total: 0,
  });
  const [pagination, setPagination] = useState<{
    limit: number;
    pageNo: number;
  }>({
    limit: 10,
    pageNo: 1,
  });

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
    open: boolean;
    game_id: string;
  }>({
    open: false,
    answer: [],
    totalSessionTime: "",
    name: "",
    email: "",
    phone: "",
    game_id: "",
  });

  const getChatList = async (): Promise<void> => {
    setLoad(true);

    const { status, data, total } = await getList({ ...pagination });

    if (status) {
      setStore({ store: data, total: total });
    } else {
      setStore({ store: [], total: 0 });
    }
    setLoad(false);
  };

  useEffect(() => {
    getChatList();
  }, [JSON.stringify(pagination)]);

  return (
    <div className="container mx-auto px-4">
      {/* Header Title */}
      <Title
        title="User Submited Game List"
        description=""
        btntitle=""
        hidebtn
        action={() => {}}
      />

      {/* Table Container */}
      <div className="overflow-x-auto shadow-md rounded-lg mt-4">
        <table className="min-w-full bg-gray-900">
          {/* Table Header */}
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              <th className="px-4 py-3 text-start">Date</th>
              <th className="px-4 py-3 text-start">Name</th>
              <th className="px-4 py-3 text-start">Email</th>
              <th className="px-4 py-3 text-start">Phone</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-gray-600 text-gray-300">
            {load ? (
              // Loading Skeleton Rows
              [...Array(10)].map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 animate-pulse bg-gray-200 h-10"></td>
                  <td className="px-4 py-3 animate-pulse bg-gray-200 h-10"></td>
                  <td className="px-4 py-3 animate-pulse bg-gray-200 h-10"></td>
                  <td className="px-4 py-3 animate-pulse bg-gray-200 h-10"></td>
                  <td className="px-4 py-3 animate-pulse bg-gray-200 h-10"></td>
                </tr>
              ))
            ) : store?.store.length === 0 ? (
              // No Data Found
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center">
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
              // Data Rows
              store?.store?.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-3 text-start">
                    {moment(row.created_at).format("MMMM Do YYYY, h:mm a")}
                  </td>
                  <td className="px-4 py-3 text-start">{row.name}</td>
                  <td className="px-4 py-3 text-start">{row.email}</td>
                  <td className="px-4 py-3 text-start">{row.phone}</td>
                  <td className="px-4 py-3 text-center flex justify-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() =>
                        setUser({
                          answer: [...row.answer],
                          open: true,
                          totalSessionTime: row.totalSessionTime,
                          name: row.name,
                          email: row.email,
                          phone: row.phone,
                          game_id: row.game_id,
                        })
                      }
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-5 flex justify-end">
        <CustomPagination
          limit={pagination.limit}
          startingAfter={pagination.pageNo}
          total={store.total}
          onChange={(page) => setPagination({ ...pagination, pageNo: page })}
        />
      </div>
      {user.open ? (
        <Modal
          title="USER RESPONSES"
          content={
            <>
              <div className="flex flex-row justify-between my-2">
                <h1 className="text-lg text-white">
                  Game Name : {
                    games.find((item) => item.id === parseInt(user.game_id))
                      ?.title
                  }
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
                          <td className="px-4 py-3 text-start">
                            {row.question}
                          </td>
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
            </>
          }
          secondaryText=""
          onClose={() =>
            setUser({
              open: false,
              answer: [],
              totalSessionTime: "",
              name: "",
              email: "",
              phone: "",
              game_id: "",
            })
          }
          hideBtn
          submitBtn={
            <button
              onClick={() => {
                setUser({
                  open: false,
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
          open={user.open}
          className="w-full h-full bg-gray-800 md:max-h-[90vh] xl:max-w-[1064px] 2xl:max-w-[1264px] md:w-fit md:h-fit md:max-w-[90vw] md:p-6"
        />
      ) : null}
    </div>
  );
}

export default SubmitedGame;
