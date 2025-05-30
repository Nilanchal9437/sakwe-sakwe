import React from "react";

const games = [
  {
    title: "Worldle",
    desc: "Guess the country based on the map image! +8 bonus rounds for the true nerds.",
    icon: "https://img.icons8.com/color/96/000000/globe--v2.png",
    bgColor: "#E0F2FE",
    imageShape: "circle",
  },
  {
    title: "Travle",
    desc: "Name the countries to travel from the Start to the End.",
    icon: "https://img.icons8.com/color/96/000000/route.png",
    bgColor: "#FEF6E7",
    imageShape: "square",
  },
  {
    title: "WhenTaken",
    desc: "Guess the location and the year of a photograph.",
    icon: "https://img.icons8.com/color/96/000000/calendar--v2.png",
    bgColor: "#F3E8FF",
    imageShape: "circle",
  },
  {
    title: "WhenTaken Movies",
    desc: "Guess the year and location in which a movie scene was set.",
    icon: "https://img.icons8.com/color/96/000000/movie-projector.png",
    bgColor: "#FEF6E7",
    imageShape: "square",
  },
  {
    title: "GeoConnections",
    desc: "Find the links between countries, cities, landmarks and more, and organise them into 4 categories.",
    icon: "https://img.icons8.com/color/96/000000/connection-status-on.png",
    bgColor: "#FEF6E7",
    imageShape: "square",
  },
  {
    title: "Statle",
    desc: "Guess the US state by its shape, and enjoy bonus rounds with trivia.",
    icon: "https://img.icons8.com/color/96/000000/usa.png",
    bgColor: "#FEE2E2",
    imageShape: "circle",
  },
  {
    title: "WhereTaken",
    desc: "Place a pin on the map to guess where in the world a photo was taken.",
    icon: "https://img.icons8.com/color/96/000000/marker.png",
    bgColor: "#E0F2FE",
    imageShape: "square",
  },
  {
    title: "Flagle",
    desc: "Guess the flag in 6 guesses or less, +5 bonus rounds with trivia about the country.",
    icon: "https://img.icons8.com/color/96/000000/flag--v2.png",
    bgColor: "#FEF6E7",
    imageShape: "circle",
  },
  {
    title: "GeoGrid",
    desc: "Guess the countries that fit into a grid of clues. Each row and column has its own category.",
    icon: "https://img.icons8.com/color/96/000000/grid-2.png",
    bgColor: "#E0F2FE",
    imageShape: "square",
  },
  {
    title: "WhereTaken Classic",
    desc: "Guess the country/region from a photograph.",
    icon: "https://img.icons8.com/color/96/000000/camera--v2.png",
    bgColor: "#FEF6E7",
    imageShape: "circle",
  },
  {
    title: "WhereTaken US",
    desc: "Guess the US state from a photograph.",
    icon: "https://img.icons8.com/color/96/000000/camera--v2.png",
    bgColor: "#F3E8FF",
    imageShape: "square",
  },
  {
    title: "Emovi",
    desc: "Guess the movie with emoji! 3 guesses, 2 hints.",
    icon: "https://img.icons8.com/color/96/000000/happy--v2.png",
    bgColor: "#FEF6E7",
    imageShape: "circle",
  },
];

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
          <div
            key={game.title}
            className="relative flex flex-col items-center px-4 min-h-[340px] h-full rounded-[2rem] shadow-[0_4px_24px_0_rgba(77,124,255,0.10)]"
            style={{ background: game.bgColor }}
          >
            {/* Icon Overlapping Top with White Border and shape */}
            <div className="absolute -top-15 left-1/2 -translate-x-1/2 z-10">
              <div
                className={`border-8 border-white w-25 h-25 flex items-center justify-center p-2 ${
                  game.imageShape === "circle" ? "rounded-full" : "rounded-2xl"
                }`}
                style={{ background: game.bgColor }}
              >
                <img
                  src={game.icon}
                  alt={game.title}
                  className={`w-25 h-25 object-contain ${
                    game.imageShape === "circle"
                      ? "rounded-full"
                      : "rounded-2xl"
                  }`}
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
        ))}
      </div>
    </section>
  );
};

export default Game;
