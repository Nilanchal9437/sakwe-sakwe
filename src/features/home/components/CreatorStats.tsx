import Image from "next/image"; 
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

export default function CreatorStats() {
  // Carousel state
  const cards = [
    {
      text: "Acquired hard and soft digital skills at their own tempo.",
      deco: <Image src="/home/dot.png" alt="dot" height={60} width={120} />,
    },
    {
      text: "Brought their own ideas to life from imagination to fruition.",
      deco: <Image src="/home/line.png" alt="line" height={60} width={120} />,
    },
    {
      text: "Learned how to control gadgets — not the other way around.",
      deco: <Image src="/home/play.png" alt="play" height={60} width={120} />,
    },
  ];

  // Keen Slider setup
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 10 },
    renderMode: "performance",
    drag: true,
    breakpoints: {
      "(max-width: 749px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 750px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });

  // Auto-slide effect
  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3500);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="w-full px-2 lg:px-0">
      <div className="grid grid-cols-1 mb-4">
        {/* Left: Art and pattern */}
        {/* <div className="flex w-full">
          <div
            ref={sliderRef}
            className="keen-slider w-full grid grid-cols-1 md:grid-cols-2"
          >
            {[...Array(6)].map((card, idx) => (
              <div
                key={idx}
                className="keen-slider__slide w-full h-full text-center"
              >
                <div className="w-full h-[80%] lg:w-80 h-40 rounded-2xl">
                  <Image
                    src="/home/profile.jpg"
                    alt="Art by Nina"
                    className="h-full lg:w-[78%] xl:w-[90%] w-full"
                    style={{ borderRadius: "1rem" }}
                    height={100}
                    width={300}
                  />
                </div>
                <div className="text-xl md:text-xs text-gray-900 font-medium mt-2">
                  Art by Nina, 12, studies art and design
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* Center: Heading and description */}
        <div className="flex-1 justify-end mt-2">
          <h2 className="text-4xl md:text-5xl font-bold text-left text-[#232323] mb-2">
            <span className="text-[#232323]">Sakwe–Sakwe – where kids </span>
            <span className="text-blue-500">create</span>
            <span className="text-[#232323]"> and </span>
            <span className="text-blue-500">grow</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            We help channel the natural creativity of childhood into real games,
            websites and more – all in a safe and fun environment for kids of
            any age.
          </p>
        </div>
      </div>

      {/* Stats and carousel */}
      <div>
        <div className="flex flex-col md:flex-row gap-6 lg:items-end lg:justify-between  mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center lg:text-left text-black mb-8 mt-8 md:mt-0">
            <span className="text-blue-500">17.000</span> creators entered
            Sakwe-Sakwe
            <br />
            and…
          </h3>
          {/* Right: Character */}
          <div className="hidden lg:block w-[320px] flex-shrink-0">
            <Image
              src="/home/Gemma-surfs.png"
              alt="Character"
              className="object-contain"
              height={320}
              width={320}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-[#FCF8E7] rounded-xl p-8 flex-1 min-w-[260px] text-lg font-medium text-black relative transition-all duration-300`}
            >
              <div>{card.text}</div>
              <div className="absolute right-3 -bottom-7">
                {card.deco}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Character for mobile */}
      <div className="block lg:hidden w-full flex justify-center mt-10">
        <Image
          src="/home/Gemma-surfs.png"
          alt="Character"
          className="object-contain"
          height={320}
          width={320}
        />
      </div>
    </section>
  );
}
