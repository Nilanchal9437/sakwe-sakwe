import React from "react";
import games from "@/constants/games";
import Image from "next/image";
import Link from "next/link";

const Game = () => {
  return (
    <section className="mx-auto mt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-12 gap-y-6">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-left leading-tight mb-2 text-black">
            Here kids <span className="text-blue-500">choose</span> their <br />{" "}
            own path
          </h2>
        </div>
        <div className="text-gray-600 text-lg font-medium md:w-[400px] leading-snug mt-2 lg:mt-0">
          At Sakwe-Sakwe, kids learn digital skills and practice creating real
          projects in courses, unsleashing their inner artists and entreupeneurs
          in the process.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 md:gap-x-8 pt-10">
        {games.map((game) => (
          <Link key={game.id} href={`/game?id=${game.id}`} scroll={false}>
            <div
              className="relative flex flex-col items-center px-4 min-h-[280px] h-full rounded-[2rem] shadow-[0_4px_24px_0_rgba(77,124,255,0.10)]"
              style={{ background: game.bgColor }}
            >
              {/* Icon Overlapping Top with White Border and shape */}
              <div className="absolute -top-15 left-1/2 -translate-x-1/2 z-10">
                <div className={`w-25 h-25 flex items-center justify-center`}>
                  <Image
                    height={90}
                    width={90}
                    src={game.icon}
                    alt={game.title}
                  />
                </div>
              </div>
              <h3 className="mt-16 text-xl font-bold text-gray-900 mb-2 text-center">
                {game.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-center leading-snug">
                {game.desc}
              </p>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl py-3 text-lg transition-colors mt-auto mb-4">
                Play Now!
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Game;
