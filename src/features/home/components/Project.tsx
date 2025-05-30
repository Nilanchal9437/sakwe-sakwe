import React from "react";

type VideoCardProps = {
  name: string;
  age: number;
  studies: string;
  video: string;
  duration: string;
};

const students: VideoCardProps[] = [
  {
    name: "Maria",
    age: 11,
    studies: "designing digital worlds",
    video: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    duration: "00:33",
  },
  {
    name: "Margarita",
    age: 16,
    studies: "unity game design",
    video: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    duration: "00:33",
  },
  {
    name: "Aleksey",
    age: 12,
    studies: "web design",
    video: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    duration: "00:33",
  },
  {
    name: "Anna",
    age: 15,
    studies: "web design: java script",
    video: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    duration: "00:33",
  },
  {
    name: "Viktor",
    age: 16,
    studies: "web design: java script",
    video: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    duration: "00:33",
  },
  {
    name: "Mike",
    age: 13,
    studies: "unity game design",
    video: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    duration: "00:32",
  },
  {
    name: "Gregory",
    age: 8,
    studies: "web design",
    video: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    duration: "00:47",
  },
  {
    name: "Anna",
    age: 14,
    studies: "kids lab primary",
    video: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    duration: "00:57",
  },
];

const Project = () => {
  return (
    <section className="w-full">
      <div
        className="hidden mx-auto max-w-7xl lg:grid grid-cols-2 lg:grid-cols-4 grid-rows-5 lg:grid-rows-3 gap-6 lg:gap-8"
        style={{
          gridTemplateAreas: `
          'a b c d'
          'e title title f'
          'g h i j'
        `,
        }}
      >
        {/* Top Row */}
        <div className="col-span-1 row-span-1" style={{ gridArea: "a" }}>
          <VideoCard {...students[0]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "b" }}>
          <VideoCard {...students[1]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "c" }}>
          <VideoCard {...students[2]} />
        </div>
        <div
          className="col-span-1 row-span-2 lg:row-span-1"
          style={{ gridArea: "d" }}
        >
          <VideoCard {...students[3]} />
        </div>
        {/* Center Title */}
        <div
          className="flex flex-col items-center justify-center col-span-2 row-span-1 lg:col-span-2 lg:row-span-1"
          style={{ gridArea: "title" }}
        >
          <h2 className="text-2xl lg:text-5xl font-bold text-center text-blue-500 leading-tight">
            Real projects by our students – in their own words
          </h2>
        </div>
        {/* Bottom Row */}
        <div className="col-span-1 row-span-1" style={{ gridArea: "e" }}>
          <VideoCard {...students[4]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "f" }}>
          <VideoCard {...students[5]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "g" }}>
          <VideoCard {...students[6]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "h" }}>
          <VideoCard {...students[0]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "i" }}>
          <VideoCard {...students[7]} />
        </div>
        <div className="col-span-1 row-span-1" style={{ gridArea: "j" }}>
          <VideoCard {...students[5]} />
        </div>
      </div>
      {/* Mobile stacked layout */}
      <div className="lg:hidden flex flex-col gap-6 mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-500 leading-tight mb-4">
          Real projects by our students – in their own words
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {students.map((student, i) => (
            <VideoCard key={i} {...student} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ name, age, studies, video, duration }: VideoCardProps) => (
  <div className="relative rounded-2xl overflow-hidden w-full max-w-xs mx-auto">
    <img
      src={video}
      alt={name}
      className="w-full h-48 object-cover rounded-2xl"
    />
    {/* Play Button Overlay */}
    <div className="absolute left-3 bottom-10 flex items-center">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.7" />
        <polygon points="13,10 24,16 13,22" fill="#222" />
      </svg>
    </div>
    {/* Duration */}
    <div className="absolute right-3 bottom-10 bg-white bg-opacity-80 text-gray-900 text-xs font-semibold px-2 py-1 rounded-lg">
      {duration}
    </div>
    {/* Student Info */}
    <div className="mt-2 px-1 pb-2">
      <div className="text-gray-500 text-xs font-medium">
        {name}, {age}
        <span className="font-normal text-gray-900">, studies {studies}</span>
      </div>
    </div>
  </div>
);

export default Project;
