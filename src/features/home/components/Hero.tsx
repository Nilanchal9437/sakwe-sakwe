"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="bg-[url('/home/banner-background.jpg')] bg-center object-cover bg-no-repeat bg-cover">
      <Container className="relative overflow-hidden flex flex-col items-center justify-center md:min-h-[100vh] pb-6 lg:pb-0">
        <Image
          src="/home/Gemma.png"
          alt="gemaa"
          height={250}
          width={250}
          objectFit="contain"
          className="absolute left-0 top-20 hidden md:block"
        />

        <Image
          src="/home/zero.png"
          alt="zero"
          height={80}
          width={80}
          objectFit="contain"
          className="absolute right-20 top-40 hidden md:block"
        />
        <Image
          src="/home/close.png"
          alt="close"
          height={80}
          width={80}
          objectFit="contain"
          className="absolute left-8 bottom-60 hidden md:block"
        />
        <Image
          src="/home/grandpa.png"
          alt="grandpa"
          height={250}
          width={250}
          objectFit="contain"
          className="absolute right-8 bottom-24 hidden md:block"
        />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center z-20 mt-20">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-gray-900 bg-white p-4 rounded-xl text-center mb-2">
              yesterday's kids,
            </span>
            <div className="flex flex-col md:flex-row items-center justify-center mt-2">
              <span className="text-4xl md:text-6xl font-bold text-gray-900 bg-white px-4 py-2 rounded-xl mb-2 md:mb-0 md:mr-2">
                tomorrow's
              </span>
              <span className="text-4xl md:text-6xl font-bold text-white bg-blue-500 px-8 py-2 rounded-xl ml-0 md:ml-2">
                CREATORS
              </span>
            </div>
          </div>
          <p className="text-gray-800 text-base md:text-lg my-8 max-w-sm text-center">
            Online school for digital skills where kids aged 6-17 realize their
            dreams and turn them into real projects.
          </p>
          <button
            onClick={() => router.push("/games")}
            className="flex items-center bg-white hover:bg-lime-200 text-gray-900 font-semibold px-8 py-3 rounded-xl shadow-md transition text-lg mx-auto"
          >
            Play Now
            <svg
              className="ml-2 w-5 h-5 text-pink-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l8 6-8 6V4z" />
            </svg>
          </button>
        </div>
      </Container>
      {/* Decorative pencils (right side) */}
      <Image
        src="/home/Group.png"
        alt="close"
        height={80}
        width={80}
        objectFit="contain"
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default Hero;
