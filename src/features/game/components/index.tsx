"use client";

import { useRouter, useSearchParams } from "next/navigation";
import games from "@/constants/games";
import Modal from "@/components/Modal";
import React, { useState, useEffect } from "react";
import { useKeenSlider, TrackDetails } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useCreate from "@/features/game/apis/submit";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email!")
    .required("Please enter a email!"),
  phone: yup.string().trim().required("Please enter a phone number!"),
  name: yup.string().trim().required("Please enter a name!"),
});

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Copy to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
type Question = {
  question: string;
  answer: string;
  answerSeen: boolean;
  cardSeen: boolean;
  sessionTime: string;
};

function Game() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [game, setGame] = React.useState<Question[]>([]);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const param = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [details, setDetails] = React.useState<TrackDetails | null>(null);
  const [totalSessionTime, setTotalSessionTime] = useState<number>(0);
  const [cardDuration, setCardDuration] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const { create } = useCreate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSessionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      // Detect direction
      if (slider.track.details.rel > currentSlide) {
        setDirection("right");
      } else if (slider.track.details.rel < currentSlide) {
        setDirection("left");
      } else {
        setDirection(null);
      }
      setCurrentSlide(slider.track.details.rel);
      setFlippedIndex(null);
    },
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    mode: "snap",
    drag: true,
    rubberband: true,
    defaultAnimation: {
      duration: 500,
    },
  });

  useEffect(() => {
    if (game.length > 0) {
      if (direction === "right") {
        game[currentSlide - 1].sessionTime = formatTime(cardDuration);
        setCardDuration(0);
      } else if (direction === "left") {
        game[currentSlide].sessionTime = formatTime(cardDuration);
        setCardDuration(0);
      }
      if (currentSlide > 0) {
        if (game[currentSlide].cardSeen === false) {
          game[currentSlide].cardSeen = true;
        }
      }
      setGame([...game]);
    }
  }, [currentSlide]);

  console.log(game);

  useEffect(() => {
    const id = param.get("id");
    if (id) {
      const filtergame = games.find((item) => item.id === parseInt(id));
      if (
        filtergame &&
        Array.isArray(filtergame.questions) &&
        filtergame.questions?.length > 0
      ) {
        const randomizedArray = shuffleArray(filtergame.questions);
        const updatedArray: Question[] = [];
        randomizedArray.map((item, index) => {
          if (index === 0) {
            updatedArray.push({
              ...item,
              answerSeen: false,
              cardSeen: true,
              sessionTime: "",
            });
          } else {
            updatedArray.push({
              ...item,
              answerSeen: false,
              cardSeen: false,
              sessionTime: "",
            });
          }
        });
        setGame(updatedArray);
        setLoading(false);
      } else {
        router.push("/games");
      }
    }
  }, [param]);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
    if (game[index].answerSeen === false) {
      game[index].answerSeen = true;
      setGame([...game]);
    }
  };

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <>
      <Modal
        className="w-full h-full bg-[#89e894] md:max-h-[90vh] xl:max-w-[1064px] 2xl:max-w-[1264px] md:w-fit md:h-fit md:max-w-[90vw] md:p-6"
        hideBtn
        title=""
        secondaryText=""
        open={true}
        onClose={() => router.back()}
        cancelButtonText="Cancel"
        centerText={
          <div className="relative">
            <div className="absolute left-0 right-0 bg-white rounded-xl w-20 h-10 mx-auto">
              <h1 className="text-center text-xl font-semibold py-1">
                {formatTime(totalSessionTime)}
              </h1>
            </div>
          </div>
        }
        content={
          <section className="flex flex-col items-center justify-items-center justify-center md:p-4 h-full">
            <div className="w-full h-full md:w-[58vw] xl:w-[45vw] 2xl:w-[1000px] md:h-[450px] flex flex-col justify-center items-center">
              <div className="relative w-[80vw] mt-10 md:mt-0 h-full md:w-[40vw] 2xl:w-[800px] md:h-[360px]">
                {!loading ? (
                  <div ref={sliderRef} className="keen-slider h-full">
                    {game?.map((item, i: number) => (
                      <div key={i} className="keen-slider__slide">
                        <div
                          style={scaleStyle(i)}
                          className="flex items-center justify-center px-1 md:px-12 rounded-xl w-full h-full bg-white"
                        >
                          <div
                            className="relative w-full cursor-pointer"
                            onClick={() => handleFlip(i)}
                            style={{
                              transformStyle: "preserve-3d",
                              transition:
                                "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                              transform:
                                flippedIndex === i
                                  ? "rotateY(180deg)"
                                  : "rotateY(0deg)",
                            }}
                          >
                            <div
                              className="absolute inset-0 flex items-center justify-center px-6"
                              style={{ backfaceVisibility: "hidden" }}
                            >
                              <div className="w-full max-w-[95%] overflow-hidden">
                                <h2 className="md:text-2xl xl:text-3xl font-semibold text-center break-words leading-relaxed whitespace-pre-wrap">
                                  {item.question}
                                </h2>
                              </div>
                            </div>
                            <div
                              className="absolute inset-0 flex items-center justify-center px-6"
                              style={{
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                              }}
                            >
                              <div className="w-full max-w-[95%] overflow-hidden">
                                <h2 className="md:text-2xl xl:text-3xl font-semibold text-center break-words leading-relaxed whitespace-pre-wrap">
                                  {item.answer}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    !loading && instanceRef?.current?.prev();
                  }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-full bg-[#dadee6] text-white rounded flex items-center justify-center text-2xl hover:bg-[#c5ccd6] disabled:opacity-50 z-10 shadow-lg"
                  disabled={currentSlide === 0}
                >
                  {"<"}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    !loading && instanceRef?.current?.next();
                  }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-full bg-[#dadee6] text-white rounded flex items-center justify-center text-2xl hover:bg-[#c5ccd6] disabled:opacity-50 z-10 shadow-lg"
                  disabled={currentSlide === (game?.length || 0) - 1}
                >
                  {">"}
                </button>
              </div>
            </div>
          </section>
        }
        onNext={() => {}}
        nextButtonText="Add"
        submitBtn={
          currentSlide === (game?.length || 0) - 1 ? (
            <button
              onClick={() => {
                game[currentSlide].sessionTime = formatTime(cardDuration);
                setGame([...game]);
                setCardDuration(0);
                setOpen(true);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors w-[100px] mx-auto mt-5"
            >
              Submit
            </button>
          ) : null
        }
      />
      {currentSlide === (game?.length || 0) - 1 ? (
        <Modal
          hideBtn
          className="h-full md:h-fit bg-[#89e894] w-full md:w-fit p-6"
          title=""
          secondaryText=""
          open={open}
          onClose={() => setOpen(false)}
          cancelButtonText="Cancel"
          centerText={
            <div className="relative">
              <div className="absolute left-0 right-0 rounded-xl h-10 mx-auto">
                <h1 className="text-center text-xl font-semibold py-1">
                  USER DETAILS
                </h1>
              </div>
            </div>
          }
          content={
            <section className="flex flex-col items-center justify-items-center justify-center h-full">
              <div className="w-full md:w-[400px] h-full p-2">
                <Formik
                  initialValues={{ email: "", name: "", phone: "" }}
                  onSubmit={(values) => {
                    create({
                      answer: game,
                      totalSessionTime: formatTime(totalSessionTime),
                      game_id: param.get("id") ?? "",
                      ...values,
                    });
                  }}
                  validationSchema={schema}
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      {/* Name Field */}
                      <label className="block text-sm mt-4">Name</label>
                      <input
                        name="name"
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.name}
                        </p>
                      )}

                      {/* Email Field */}
                      <label className="block text-sm mt-4">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.email}
                        </p>
                      )}

                      {/* Phone Field */}
                      <label className="block text-sm mt-4">Phone Number</label>
                      <input
                        name="phone"
                        placeholder="Enter your phone number"
                        className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.phone}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-3 rounded-md mt-6 hover:bg-green-700 transition"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </section>
          }
          onNext={() => {}}
          nextButtonText="Add"
        />
      ) : null}
    </>
  );
}

export default Game;
