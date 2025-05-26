const testimonials = [
  {
    id: 1,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    duration: "00:33",
  },
  {
    id: 2,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    duration: "00:33",
  },
  {
    id: 3,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    duration: "00:33",
  },
  {
    id: 4,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    duration: "00:33",
  },
  {
    id: 5,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    duration: "00:33",
  },
  {
    id: 6,
    name: "Maria, 11, studies art and design",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    duration: "00:33",
  },
];

// Helper to generate a random size between 180 and 300px
function getRandomSize() {
  return Math.floor(Math.random() * (300 - 180 + 1)) + 180;
}

const firstTwo = testimonials.slice(0, 2);
const rest = testimonials.slice(2);

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-y-10 md:flex-row w-full items-start mb-8">
        <div className="flex-1 min-w-0 text-center w-full md:w-fit md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black md:text-left">
            What our <span className="text-blue-400">parents</span> say
            <br />
            about Sakwe-Sakwe
          </h2>
          <div className="flex space-x-2 mt-10 w-fit mx-auto md:m-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <svg
                key={i}
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="#F3A7F6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-10 w-full md:w-fit">
          {firstTwo.map((testimonial) => {
            return (
              <div key={testimonial.id} className="flex flex-col w-full">
              <div className="relative h-[250px]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span
                  className={`absolute left-3 bottom-3 flex items-center justify-center w-8 h-8 bg-white bg-opacity-90 rounded-full`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <polygon points="8,6 18,12 8,18" fill="#18181B" />
                  </svg>
                </span>
                <span className="absolute right-3 bottom-3 bg-white bg-opacity-90 text-black text-xs font-semibold px-2 py-0.5 rounded">
                  {testimonial.duration}
                </span>
              </div>
              <p
                className="text-gray-900 text-xs mt-2 ml-1 text-left truncate"
                title={testimonial.name}
              >
                {testimonial.name}
              </p>
            </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 w-full break-inside-avoid">
        {rest.map((testimonial) => {
          return (
            <div key={testimonial.id} className="flex flex-col w-full">
              <div className="relative h-[250px]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span
                  className={`absolute left-3 bottom-3 flex items-center justify-center w-8 h-8 bg-white bg-opacity-90 rounded-full`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <polygon points="8,6 18,12 8,18" fill="#18181B" />
                  </svg>
                </span>
                <span className="absolute right-3 bottom-3 bg-white bg-opacity-90 text-black text-xs font-semibold px-2 py-0.5 rounded">
                  {testimonial.duration}
                </span>
              </div>
              <p
                className="text-gray-900 text-xs mt-2 ml-1 text-left truncate"
                title={testimonial.name}
              >
                {testimonial.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
