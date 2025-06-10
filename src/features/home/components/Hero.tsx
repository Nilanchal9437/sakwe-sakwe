"use client";

// import Image from "next/image";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="bg-[#89e894] h-[100vh]">
      <Container className="relative overflow-hidden flex flex-col items-center justify-center py-16">
        {/* <Image
          src="/home/Gemma.png"
          alt="gemaa"
          height={250}
          width={250}
          objectFit="contain"
          className="absolute left-0 top-20 hidden md:block"
        /> */}

        {/* <Image
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
        /> */}

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center z-20 mt-20">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-gray-900 bg-white p-4 rounded-xl text-center mb-2">
              Sakwe Sakwe
            </span>
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
          </button>
        </div>
      </Container>
      {/* Decorative pencils (right side) */}
      {/* <Image
        src="/home/Group.png"
        alt="close"
        height={80}
        width={80}
        objectFit="contain"
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2"
      /> */}
    </section>
  );
};

export default Hero;
